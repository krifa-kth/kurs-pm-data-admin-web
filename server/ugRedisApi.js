const serverConfig = require('./configuration').server
const redis = require('kth-node-redis')
// const i18n = require('../i18n')
const log = require('kth-node-log')

const redisKeys = (courseCode, semester, ladokRoundIds) => {
  // Used to get examiners and responsibles from UG Rdedis
  return {
    teachers: ladokRoundIds.map(round => `${courseCode}.${semester}.${round}.teachers`),
    examiner: [`${courseCode}.examiner`],
    responsibles: ladokRoundIds.map(
      round => `${courseCode}.${semester}.${round}.courseresponsible`
    ),
    assistants: ladokRoundIds.map(round => `${courseCode}.${semester}.${round}.assistants`) // edu.courses.SF.SF1624.20191.1.assistants
  }
}

const createPersonHtml = personList => {
  let personString = ''
  personList &&
    personList.forEach(person => {
      personString += `<p class = "person">
      <img src="https://www.kth.se/files/thumbnail/${person.username}" alt="Profile picture" width="31" height="31">
      <a href="/profile/${person.username}/" target="_blank" property="teach:teacher">
          ${person.givenName} ${person.lastName} 
      </a> 
    </p>  `
    })
  return personString
}

// ------- EXAMINATOR AND RESPONSIBLES FROM UG-REDIS: ------- /
async function _getCourseEmployees(apiMemoData) {
  const { courseCode, semester, ladokRoundIds } = apiMemoData
  try {
    const { assistants, teachers, examiner, responsibles } = redisKeys(
      courseCode,
      semester,
      ladokRoundIds
    )
    log.info(
      '-------------------=> _getCourseEmployees for all memos course rounds with keys: ',
      assistants,
      teachers,
      examiner,
      responsibles
    )
    const ugClient = await redis('ugRedis', serverConfig.cache.ugRedis.redis)
    const arrWithStringifiedArray = await ugClient
      .multi()
      .mget(teachers) // [0]
      .mget(examiner) // [1]
      .mget(responsibles) // [2]
      .mget(assistants) // [3]
      .execAsync()
    log.info('Ug Redis fetched correctly, example >>> Teachers: ', arrWithStringifiedArray[1])
    const flatArrWithHtmlStr = arrWithStringifiedArray.map(arr =>
      createPersonHtml(JSON.parse(arr[0]))
    )
    return {
      teacher: flatArrWithHtmlStr[0],
      examiner: flatArrWithHtmlStr[1],
      courseCoordinator: flatArrWithHtmlStr[2],
      teacherAssistants: flatArrWithHtmlStr[3]
    }
  } catch (err) {
    log.error('Exception from ugRedis - multi', { error: err })
    return err
  }
}

module.exports = {
  getCourseEmployees: _getCourseEmployees
}
