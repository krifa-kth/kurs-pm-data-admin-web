module.exports = {
  shortNames: ['sv', 'se'],
  longNameSe: 'Svenska',
  longNameEn: 'Swedish',
  messages: {
    /**
     * General stuff
     */
    date_format_short: '%Y-%m-%d',

    /**
     * Error messages
     */

    error_not_found: 'Tyvärr kunde vi inte hitta sidan du söker',
    error_generic: 'Något gick fel på servern, var god försök igen senare',

    /**
     * Message keys
     */
    service_name: 'kurs-pm-data-admin-web',

    example_message_key: 'Här är en svensk översättning på en label',

    button_label_example: 'Klicka här för att skicka data till servern!',

    field_text_example: 'Data att skicka till API',

    field_label_get_example: 'Min datamodell(Svar från api anrop GET): ',
    field_label_post_example: 'Min datamodell(Svar från api anrop POST): ',

    lang_block_id: '1.272446',
    locale_text: 'Denna sida på svenska',
    main_site_name: 'Administrera Om kursen ',
    site_name: 'Administration av kurs-PM',
    host_name: 'KTH',

    memoLabel: 'Kurs-PM',

    /**
     * Headings
     */
    page_header_heading_semester: 'Termin',
    page_header_heading_course_round: 'Kursomgång'
  },
  /** Labels */
  sourceInfo: {
    addNewTitle: 'Ange rubrik',
    fetched: 'Hämtats',
    '(c)': 'från kursgemensam information',
    '(r)': 'från kurstillfällesinformation',
    '(s)': 'från kursplan (s)',
    errorEmptyTitle: 'Du måste ange en rubrik',
    mandatory: 'Inkluderas alltid',
    mandatoryAndEditable: 'Inkluderas alltid',
    mandatoryForSome: 'Inkluderas för vissa kurser',
    includeInMemo: {
      section: 'Inkludera rubrik',
      subSection: 'Inkludera ytterligare avsnitt'
    },
    noInfoYet: {
      section:
        'Inget innehåll är inlagt. Välj Redigera för att lägga in innehåll eller välj att inte inkludera rubriken.',
      subSection:
        'Inget innehåll är inlagt. Välj Redigera för att lägga in innehåll eller välj att inte inkludera avsnittet.'
    },
    // includera rubrik
    notIncludedInMemoYet: {
      section:
        'Innehåll finns inlagt. Välj: Inkludera rubrik för att visa rubrik med innehåll i kurs-PM',
      subSection: 'Innehåll finns inlagt. Välj: Inkludera avsnitt för att visa innehållet i kurs-PM'
    },
    nothingFetched: {
      mandatoryAndEditable: `Inget innehåll är inlagt. Rubriken är obligatorisk och kommer att inkluderas i kurs-PM. 
      Välj Redigera för att lägga in innehåll.`,
      mandatory: `Inget innehåll fanns att hämta. Rubriken är obligatorisk och kommer att inkluderas i kurs-
      pm. Instruktioner om hur man ändrar hämtad information ges i informationsikonen ovan.`,
      mandatoryForSome: `Inget innehåll fanns att hämta. 
      Rubriken gäller således inte för den här kursen och kommer därför inte att inkluderas i kurs-PM.`,
      optional: `Inget innehåll fanns att hämta. Instruktioner om hur man ändrar hämtadinformation ges i informationsikonen ovan. 
      Du kan också välja att inte inkludera rubriken.`
    },
    dummyHelpText: 'Hjälptext som vägleder och hjälper'
  },
  memoTitlesByMemoLang: {
    additionalRegulations: 'Övriga föreskrifter',
    commentAboutMadeChanges: 'Gjorda ändringar',
    communicationDuringCourse: 'Kommunikation i kursen',
    courseContent: 'Kursinnehåll',
    courseCoordinator: 'Kursansvarig',
    ethicalApproach: 'Etiskt förhållningssätt',
    equipment: 'Utrustning',
    examination: 'Examination',
    examiner: 'Examinator',
    extraHeaders1: 'Egen rubrik 1',
    extraHeaders2: 'Egen rubrik 2',
    extraHeaders3: 'Egen rubrik 3',
    extraHeaders4: 'Egen rubrik 4',
    extraHeaders5: 'Egen rubrik 5',
    gradingCriteria: 'Målrelaterade betygskriterier',
    gradingScale: 'Betygsskala',
    infoForReregisteredStudents: 'Ändringar inför denna kursomgång',
    learningActivities: 'Läraktiviteter',
    learningOutcomes: 'Lärandemål',
    literature: 'Kurslitteratur',
    otherContacts: 'Övriga kontakter',
    otherRequirementsForFinalGrade: 'Övriga krav för slutbetyg',
    permanentDisability: 'Stöd för studenter med funktionsnedsättning',
    possibilityToAddition: 'Möjlighet till plussning',
    possibilityToCompletion: 'Möjlighet till komplettering',
    possibilityToCompensate: 'Möjlighet till ersättningsuppgifter',
    preparations: 'Särskilda förberedelser',
    prerequisites: 'Rekommenderade förkunskaper',
    reportingResults: 'Resultatrapportering',
    scheduleDetails: 'Detaljplanering',
    software: 'Programvara',
    teacher: 'Lärare',
    teacherAssistants: 'Lärarassistenter'
  },
  memoInfoByUserLang: {
    additionalRegulations: {
      body: `<p><b>Övriga föreskrifter</b> beskriver andra föreskrifter i kursplanen som inte ryms under övriga rubriker i kursplanen. 
      Det kan t.ex. vara om kursen inte är examensgrundande, om deltagande innebär krav studier på annat campus eller ort eller om kursen innehåller inslag som kan innebära kostnad utöver kostnad för litteratur och annat undervisningsmaterial.</p>
      <p><b>Informationen hjälper studenten</b> att planera och förbereda kursens genomförande beroende på innehållet under "Övriga föreskrifter".</p>
      <p><b>Innehållet redigeras</b> i utbildningsdatabasen Kopps. Det finns tydliga riktlinjer för hur Övriga föreskrifter kan ändras eftersom informationen är en del av kursplanen. 
      Läs mer om riktlinjer för att ändra innehåll i kursplan på sidan <a href="https://intra.kth.se/utbildning/utbi/planera-utbildning" target="_blank">Planera utbildningsutbud</a> (öppnas i ny flik).</p>
      <p>Om det inte finns något innehåll kommer rubriken inte visas i det publicerade kurs-PM:et.</p>`
    },
    commentAboutMadeChanges: {
      body: `<p><b>Informationen syftar till: …</b></p>
      <p><b>Rubriken hjälper studenter:</b> </p>`,
      help: `<p></p>
      <p></p>`
    },
    communicationDuringCourse: {
      body: `<p>Används till: att beskriva vem studenten kontakter för vad och hur det görs samt och när studenten kan förvanta sig svar.</p>
      <p>Varför: Om det finns beskrivet hur kommunikationen mellan studenter och lärare ska se ut så besparar det tid och arbete ...</p>
      <p>För att editera innehållet så väljer du: "Visa i kurs-PM”. </p>
      <p>Du kan sedan välja “Visa vägledning”  för att få hjälp med vad som kan finnas med och hur innehållet kan presenteras</p>`,
      help: `<p></p>
      <p></p>`
    },
    courseContent: {
      body: `<p><b>Kursinnehåll</b> beskriver ämnesinnehållet och de generella färdigheter som behandlas eller tränas i kursen.</p>
      <p><b>Informationen hjälper studenten</b> att förstå vilka begrepp, ämnen, färdigheter m.m. som den behöver läsa in sig på inför och under kursen. 
      Kursinnehållet hjälper på så sätt studenten att förbereda sig inför och under kursen.</p>
      <p><b>Innehållet redigeras</b>  i utbildningsdatabasen Kopps. 
      Det finns tydliga riktlinjer för hur Kursinnehåll kan ändras eftersom informationen är en del av kursplanen. 
      Läs mer om riktlinjer för att ändra innehåll i kursplan på sidan 
      <a href="https://intra.kth.se/utbildning/utbi/planera-utbildning" target="_blank">Planera utbildningsutbud</a> (öppnas i ny flik).</p>`
    },
    courseCoordinator: {
      body: `<p>Innehållet hämtas från den kursgemensamma informationen</p>
      <p>Redigering av innehåll kan göras av Behöriga <a href="#">(länk)</a> i KOPPS.</p>
      <p>Vad är examiner ....</p>`,
      help: `<p></p>
      <p></p>`
    },
    ethicalApproach: {
      body: `<p><b>Informationen syftar till: …</b></p>
      <p><b>Rubriken hjälper studenter:</b> </p>`,
      help: `<p></p>
      <p></p>`
    },
    ethicalApproachSubSection: {
      body: `<p><b>Informationen syftar till: …</b></p>
      <p><b>Rubriken hjälper studenter:</b> </p>`,
      help: `<p></p>
      <p></p>`
    },
    equipment: {
      body: `<p><b>Informationen syftar till: …</b></p>
      <p><b>Rubriken hjälper studenter:</b> </p>`,
      help: `<p></p>
      <p></p>`
    },
    examination: {
      body: `<p><b>Informationen syftar till: …</b></p>
      <p><b>Rubriken hjälper studenter:</b> </p>`,
      help: `<p></p>
      <p></p>`
    },
    examinationSubSection: {
      body: `<p><b>Informationen syftar till: …</b></p>
      <p><b>Rubriken hjälper studenter:</b> </p>`,
      help: `<p></p>
      <p></p>`
    },
    examiner: {
      body: `<p>Innehållet hämtas från den kursgemensamma informationen</p>
      <p>Redigering av innehåll kan göras av Behöriga <a href="#">(länk)</a> i KOPPS.</p>
      <p>Vad är examiner ....</p>`,
      help: `<p></p>
      <p></p>`
    },
    extraHeaders1: {
      body: '<p>Here you can add owh headers to H3</p>'
    },
    extraHeaders2: {
      body: 'Lägg till egna rubriker H3'
    },
    extraHeaders3: {
      body: 'Lägg till egna rubriker H3'
    },
    extraHeaders4: {
      body: 'Lägg till egna rubriker H3'
    },
    extraHeaders5: {
      body: 'Lägg till egna rubriker H3'
    },
    gradingCriteria: {
      body: `<p><b>Målrelaterade betygskriterier</b> ska koppla betygsstegen till nivåer av uppfyllelse av kursens lärandemål.</p>
      <p><b>Informationen hjälper studenten</b> att förstå hur betygskriterierna relaterar till lärandemålen och med det vad den behöver göra och kunna för att uppnå respektive betyg på kursen. Att tydligt beskriva betygskriterierna bidrar även till att motivera studenten.</p>
      <p><b>Redigera innehåll</b> genom att klicka på knappen "Visa i kurs-PM”. Ange information om målrelaterade betygskriterier i inmatningsfältet. Du kan välja ”Hjälptext” för att få vägledning om innehållet och exempel om hur det kan presenteras.</p>`,
      help: `<p>Betygskriterierna ska koppla betygsstegen till nivåer av uppfyllelse av kursens lärandemål, där godkänt betyg ska innebära en grundläggande uppfyllelse av målen. Betygskriterier för högre nivåer kan exempelvis gälla kvaliteten på utförandet, svårighetsgraden, hur olika delar av kursinnehållet kombineras och nivå i Blooms taxonomi.</p>
      <p>Examinationen ska vara tydligt kopplad till betygskriterierna. Om det finns flera examinationsmoment i kursen ska det i anslutning till betygskriterierna framgå vilka lärandemål som examineras i vilket examinationsmoment, hur slutbetyget vägs ihop av delbetyg och hur delbetyg vägs ihop av delbedömningar efter betygskriterierna.</p>
      <p>Läs mer om betygskriterier och hitta konkreta exempel på 
      <a href="https://intra.kth.se/utbildning/utveckling-och-hogskolepedagogik/stodmaterial/malrelaterade-betygskriterier" target="_blank">Målrelaterade betygskriterier</a> (öppnas i ny flik).</p>`
    },
    gradingScale: {
      body: `<p><b>Informationen syftar till: …</b></p>
      <p><b>Rubriken hjälper studenter:</b> </p>`,
      help: `<p></p>
      <p></p>`
    },
    infoForReregisteredStudents: {
      body: `<p><b>Ändringar inför denna kursomgång</b> beskriver relevanta slutsatser från föregående kursvärderingar och kursanalyser samt vilka ändringar som faktiskt har införts till denna kursomgång.</p>
      <p><b>Informationen hjälper studenten</b> att exempelvis förstå vilka förbättringar som gjorts inför kursomgången och på ett högre plan vilket förbättringsarbete i allmänhet som görs på kursen. 
      Informationen kan också uppmärksamma omregistrerade studenter på förändringar från föregående kursomgångar den behöver ta hänsyn till.
      <p><b>Redigera innehåll</b> genom att klicka på knappen "Redigera”. 
      Ange information om ändringar inför denna kursomgång i inmatningsfältet och klicka på "Inkludera rubrik" för att innehållet ska visas när detta kurs-PM publicerats. 
      Du kan välja ”Visa vägledning” för att få vägledning om innehållet och exempel om hur det kan presenteras.</p>`,
      help: `<p>Under rubriken "Ändringar inför denna kursomgång" beskriver du vilka ändringar som gjorts på kursen inför denna kursomgång. 
      Det kan också vara viktigt att beskriva relevanta slutsatser från föregående kursvärderingar och kursanalyser som hjälper studenten att prioritera i sin planering och sina förberedelser inför kursomgången. 
      Kurs-PM är ett av flera sätt att informera studenter om resultaten från kursvärderingar och kursanalyser samt eventuella beslut om åtgärder som följer av det.</p>
      <p>Om det inte finns anledning att informera om ändringar inför denna kursomgång låter du rubriken vara dold i detta kurs-PM.</p>`
    },
    learningActivities: {
      body: `<p><b>Läraktiviteter</b> beskriver vilka typer av planerade aktiviteter som planerats för kursomgången och vad som är bra för studenten att veta om respektive aktivitetstyp. 
      Läraktivitet definierar vad t.ex. ett seminarium eller en lektion eller en laboration är på just denna kursomgång.</p>
      <p><b>Informationen hjälper studenten</b> att förstå och planera inför kursomgångens aktiviteter och med det göra rätt förberedelser i rätt tid. 
      Innebörden av en viss typ av läraktivitet kan ha olika innebörd på olika kurser. Med väl beskrivna läraktiviteter kan studenten därför få rätt förväntningar på varje typ av läraktivitet.</p>
      <p><b>Redigera innehåll</b> genom att klicka på knappen "Redigera”. Ange information om läraktiviteter i inmatningsfältet och klicka i "Inkludera rubrik" för att innehållet ska visas när detta kurs-PM publicerats. 
      Du kan välja ”Visa vägledning” för att få vägledning om innehållet och exempel om hur det kan presenteras.</p>`,
      help: `<p>Under rubriken "Läraktiviteter" beskriver du vilka typer av läraktiviteter som är planerade under kursomgången. Ge de olika typerna ett intuitivt och gärna vedertaget begrepp som du sedan använder konsekvent senare i detta kurs-PM. Beskriv vad de olika typerna av läraktiviteter innebär på just denna kursomgång, kortfattat hur de går till och vad som är bra för studenten att känna till om läraktiviteten. 
      Du kan också beskriva hur omfattande läraktiviteterna är i fråga om antal och tid, men också hur de är fördelade över kursomgångens studietid.</p>
      <p>Kursens pedagogiska upplägg kan också beskrivas under "Läraktiviteter" om det har betydelse för studentens planering och förberedelse av kursomgången.
      Om läraktiviteter inte är relevant för denna kursomgång låter du rubriken vara dold i detta kurs-PM.</p>`
    },
    learningOutcomes: {
      body: `<p><b>Lärandemål</b> ska tydliggöra vilka kunskaper, färdigheter, värderingsförmågor och förhållningssätt som studenten ska visa efter genomgången kurs.</p>
      <p><b>Informationen hjälper studenten</b> att förstå vad den behöver uppnå för att få ett godkänt betyg. Lärandemålen hjälper med det studenten att lägga en plan för kursens genomförande. 
      Efterföljande information i detta kurs-PM relaterar till kursens lärandemål varför det är viktigt att informationen är väl formulerad.</p>
      <p><b>Innehållet redigeras</b> i utbildningsdatabasen Kopps. Det finns tydliga riktlinjer för hur Lärandemål kan ändras eftersom informationen är en del av kursplanen. 
      Läs mer om riktlinjer för att ändra innehåll i kursplan på sidan <a href="https://intra.kth.se/utbildning/utbi/planera-utbildning" target="_blank">Planera utbildningsutbud</a> (öppnas i ny flik).</p></p>`
    },
    literature: {
      body: `<p><b>Kurslitteratur</b> beskriver vilken litteratur som används i kursomgången.</p>
      <p><b>Informationen hjälper studenten</b> att införskaffa rätt kurslitteratur inför kursomgångens start. 
      För studenter med funktionsnedsättning är det viktigt att i god tid veta vilken kurslitteratur som ska gälla för att kunna få den inläst. 
      Därför bör uppgifterna finnas tillgängliga minst 8 veckor före kursstart.</p>
      <p><b>Redigera innehåll</b> genom att klicka på knappen "Redigera”. Ange information om kurslitteratur i inmatningsfältet. 
      Om det finns kursgemensamma uppgifter om kurslitteratur i Kopps kommer den informationen hämtas automatiskt till nya kurs-PM. 
      Du kan välja att behålla den informationen i detta kurs-PM eller skriva ny information som endast gäller den kursomgång som detta kurs-PM skrivs för. 
      Du kan välja ”Hjälptext” för att få vägledning om innehållet och exempel om hur det kan presenteras.</p>`,
      help: `<p>Under rubriken "Kurslitteratur" beskriver du vilken kurslitteratur som används i denna kursomgång. 
      Om du valt att skapa ett nytt kurs-PM kommer information att hämtas automatiskt från den kursgemensamma informationen om kurslitteratur i Kopps. 
      Du kan välja att behålla den hämtade informationen eller skriva kurslitteratur specifikt för kursomgången som detta kurs-PM gäller för. 
      Du kan då ersätta den hämtade texten med text som anges i inmatningsfältet.</p>
      <p>Lista kurslitteraturen tydligt. Ange författare, utgivningsår, titel och förlag. 
      Hänvisa även till platser där litteraturen finns tillgänglig i digital form, exempelvis om den finns tillgänglig i Canvas.</p>
      <p>Många studenter vill förbereda sig inför kursstart med att skaffa kurslitteraturen. 
      För studenter med funktionsnedsättning är det viktigt att i god tid veta vilken kurslitteratur som ska gälla för att kunna få den inläst eller liknande. 
      Ny kurslitteratur bör därför finnas tillgänglig minst 8 veckor före kursstart.</p>
      <p>Om kurslitteratur inte är relevant för denna kursomgång är det bra att skriva det explicit för att studenterna inte ska behöva ställa frågan. 
      Rubriken kurslitteratur är obligatorisk i kurs-PM och kommer alltid visas i kurs-PM oavsett om det finns relevant kurslitteratur eller inte på kursomgången.</p>`
    },
    otherContacts: {
      body: `<p>Används till: att lägga in andra kontakter än de som är obligatoriska. </p>
      <p>Varför: Det är viktigt för studenter att ha alla kontakter som de behöver för kursen samlade här.</p> 
      <p>För att editera innehållet så väljer du: "Visa i kurs-PM”.</p> 
      <p>Du kan sedan välja “Visa vägledning”  för att få hjälp med vad som kan finnas med och hur innehållet kan presenteras.</p> `,
      help: `<p></p>
      <p></p>`
    },
    otherRequirementsForFinalGrade: {
      body: `<p><b>Informationen syftar till: …</b></p>
      <p><b>Rubriken hjälper studenter:</b> </p>`,
      help: `<p></p>
      <p></p>`
    },
    permanentDisability: {
      body: `<p><b>Informationen syftar till: …</b></p>
      <p><b>Rubriken hjälper studenter:</b> </p>`,
      help: `<p></p>
      <p></p>`
    },
    permanentDisabilitySubSection: {
      body: `<p><b>Informationen syftar till: …</b></p>
      <p><b>Rubriken hjälper studenter:</b> </p>`,
      help: `<p></p>
      <p></p>`
    },
    possibilityToAddition: {
      body: `<p><b>Informationen syftar till: …</b></p>
      <p><b>Rubriken hjälper studenter:</b> </p>`,
      help: `<p></p>
      <p></p>`
    },
    possibilityToCompletion: {
      body: `<p><b>Informationen syftar till: …</b></p>
      <p><b>Rubriken hjälper studenter:</b> </p>`,
      help: `<p></p>
      <p></p>`
    },
    possibilityToCompensate: {
      body: `<p><b>Informationen syftar till: …</b></p>
      <p><b>Rubriken hjälper studenter:</b> </p>`,
      help: `<p></p>
      <p></p>`
    },
    preparations: {
      body: 'Det är viktigt för studenter att veta om det för att planera sina studier för att....',
      help: `<p></p>
      <p></p>`
    },
    prerequisites: {
      body: `<p><b>Informationen syftar till: …</b></p>
      <p><b>Rubriken hjälper studenter:</b> </p>`,
      help: `<p></p>
      <p></p>`
    },
    reportingResults: {
      body: `<p><b>Informationen syftar till: …</b></p>
      <p><b>Rubriken hjälper studenter:</b> </p>`,
      help: `<p></p>
      <p></p>`
    },
    scheduleDetails: {
      body: `<p><b>Detaljplanering</b> är en översikt av kursomgångens planerade läraktiviteter och examinationstillfällen. 
      Detaljplanering är företrädesvis listad i kronologisk ordning. 
      "Detaljplanering" innehåller information om aktiviteterna och vad studenten behöver förbereda inför varje aktivitet.</p>
      <p><b>Information hjälper studenten</b> att planera sina studier och genomföra kursomgången på ett effektivt sätt. 
      Med en tydlig detaljplanering kan studenten se när i ordningen varje läraktivitet eller examinationstillfälle infaller och med det göra rätt förberedelser vid rätt tidpunkt under kursens genomförande.</p>
      <p><b>Redigera innehåll</b> genom att klicka på knappen "Redigera”. 
      Ange information om "Detaljplanering" i inmatningsfältet och klicka i "Inkludera rubrik" för att innehållet ska visas när detta kurs-PM publicerats. 
      Du kan välja ”Visa vägledning” för att få vägledning om innehållet och exempel om hur det kan presenteras.</p>`,
      help: `<p>Under rubriken "Detaljplanering" beskriver du vilka läraktiviteter eller examinationstillfällen som har planerats under kursen. 
      Använd med fördel en tabell för att på ett överblickbart sätt beskriva aktiviteternas ordning, dess innehåll och vilka förberedelser som rekommenderas inför varje aktivitet. 
      Systemet skapar en tabell med tre kolumner åt dig där du kan skriva i kursomgångens läraktiviteter. 
      Du kan anpassa denna tabell genom att t.ex. lägga till rader, lägga till kolumner, eller ersätta den med en tabell från Word.</p>
      <p>Ett enkelt och tydligt sätt är att beskriva detaljplanering genom att för varje läraktivitet eller examination ange typ av aktivitet, aktivitetens innehåll och vilka förberedelser som studenten behöver göra. 
      Förberedelser kan vara kapitel och andra referenser till kurslitteratur eller webbsidor, men det kan också vara att installera programvara eller annan praktisk förberedelse. 
      Länka gärna till instruktioner och material för kursomgången i Canvas, men var uppmärksam på att länkar från tidigare kurs-PM som kopierats till detta kurs-PM kan vara ogiltiga. 
      Testa därför länkar till andra webbsidor innan publicering.</p>
      <br/>
      <p>Följande Detaljplanering är ett exempel från kurs HI1027:
      [Infoga exempel på tabell]</p>
      <br/>
      <p>Om du beskrivit kursens olika läraktiviteter under rubriken "Läraktiviteter" rekommenderas att använda samma terminologi för att studenterna ska se den röda träden genom detta kurs-PM.</p>
      <p>Om det är någon aktivitet som är särskilt viktigt för studenten att förbereda kan det understrykas genom att beskriva det i rubriken "Särskilda förberedelser".</p>`
    },
    software: {
      body: `<p><b>Informationen syftar till: …</b></p>
      <p><b>Rubriken hjälper studenter:</b> </p>`,
      help: `<p></p>
      <p></p>`
    },
    teacher: {
      body:
        '<p>Innehållet hämtas från den kursgemensamma informationen</p><p>Redigering av innehåll kan göras av Behöriga <a href="#">(länk)</a> i KOPPS.</p><p>Vad är Lärare ....</p>'
    },
    teacherAssistants: {
      body:
        '<p>Innehållet hämtas från den kursgemensamma informationen</p><p>Redigering av innehåll kan göras av Behöriga <a href="#">(länk)</a> i KOPPS.</p><p>Vad är Lärassistenter ....</p>'
    }
  },
  pagesCreateNewPm: [
    {
      title: 'Välj kursomgång',
      intro: `Börja med att välja termin och kursomgång för det kurs-PM som ska publiceras (steg 1 av 3). 
      Du kan i detta steg välja om du vill skapa ett helt nytt kurs-PM för kursomgången eller skapa ett utkast genom att kopiera innehållet från ett tidigare kurs-PM på denna kurs. 
      I nästa steg (2 av 3) kommer du att kunna redigera kurs-PM. I sista steget (3 av 3) har du möjlighet att först granska kurs-PM och sedan publicera kurs-PM på kursplatsen “Om kursen“ för vald termin och kursomgång.`
    },
    {
      title: 'Redigera kurs-PM',
      intro: ''
    },
    {
      title: 'Granska och publicera',
      intro: `I detta steg (3 av 3) visas hur kurs-PM data kommer att se ut på sidan .... 
      Här finns möjlighet att gå tillbaka för att redigera ytterligare, spara som utkast eller publicera direkt.`
    }
  ],
  pagesChangePublishedPm: [
    {
      title: 'Välj kurs-PM',
      intro: `Börja med att välja det kurs-PM som ska ändras (steg 1 av 3). 
      I nästa steg (2 av 3) kommer du att kunna redigera kurs-PM. I sista steget (3 av 3) ges möjlighet att först granska kurs-PM 
      och sedan publicera en ny version av kurs-PM på sidan: Om kursen / Förbereda och gå (kurs-PM)`
    },
    {
      title: 'Redigera kurs-PM',
      intro: ''
    },
    {
      title: 'Granska och publicera',
      intro: `I detta steg (3 av 3) visas hur kurs-PM data kommer att se ut på sidan .... 
      Här finns möjlighet att gå tillbaka för att redigera ytterligare, spara som utkast eller publicera direkt.`
    }
  ],
  progressBarHeaders: [
    {
      title: 'Välj kursomgång',
      intro: `Börja med att välja termin och kursomgång för det kurs-PM som ska publiceras (steg 1 av 3). 
      Du kan i detta steg välja om du vill skapa ett helt nytt kurs-PM för kursomgången eller skapa ett utkast genom att kopiera innehållet från ett tidigare kurs-PM på denna kurs. 
      I nästa steg (2 av 3) kommer du att kunna redigera kurs-PM. I sista steget (3 av 3) har du möjlighet att först granska kurs-PM och sedan publicera kurs-PM på kursplatsen “Om kursen“ för vald termin och kursomgång.`
    },
    {
      title: 'Redigera kurs-PM',
      intro: `I detta steg (2 av 3) ska kurs-PM data redigeras, förändringar för vald kursomgång summeras samt kurs-PM data kontrolleras och vid behov justeras. 
      I nästa steg granskas all kurs-PM data innan publicering.`
    },
    {
      title: 'Granska och publicera',
      intro: ''
    }
  ],
  progressTitleHeaders: [
    {
      title: '1. Välj kursomgång',
      intro: `Börja med att välja termin och kursomgång för det kurs-PM som ska publiceras (steg 1 av 3). 
      Du kan i detta steg välja om du vill skapa ett helt nytt kurs-PM för kursomgången eller skapa ett utkast genom att kopiera innehållet från ett tidigare kurs-PM på denna kurs. 
      I nästa steg (2 av 3) kommer du att kunna redigera kurs-PM. I sista steget (3 av 3) har du möjlighet att först granska kurs-PM och sedan publicera kurs-PM på kursplatsen “Om kursen“ för vald termin och kursomgång.`
    },
    {
      title: '2. Redigera kurs-PM',
      intro: `I detta steg (2 av 3) ska kurs-PM data redigeras, förändringar för vald kursomgång summeras samt kurs-PM data kontrolleras och vid behov justeras. 
      I nästa steg granskas all kurs-PM data innan publicering.`
    },
    {
      title: 'Granska kurs-PM som sida',
      intro:
        'I detta steg (3 av 3) visas hur kurs-PM kommer att se ut som webbsida. Kurs-PM kan också granskas som PDF. Här finns finns möjlighet att gå tillbaka för att redigera kurs-PM, avsluta med ett sparat utkast (för att fortsätta redigering senare) eller att publicera kurs-PM som en undersida till: Om kursen / Förbereda och gå kurs.'
    }
  ],
  sectionsLabels: {
    contentAndOutcomes: 'Innehåll och lärandemål',
    prep: 'Förbereda inför kursstart',
    reqToFinal: 'Examination och slutförande',
    extra: 'Ytterligare information',
    contacts: 'Kontakter'
  },
  pageTitles: {
    new: 'Skapa och publicera kurs-PM',
    // draft: 'Publicera kurs-PM utkast',
    published: 'Ändra publicerat kurs-PM',
    preview: 'Skapa och publicera kurs-PM'
  },
  actionModals: {
    infoCancel: {
      header: 'Att tänka på innan du avbryter!',
      body: ` .....
        <br/>
        <br/>
        Vill du fortsätta att avbryta?`,
      btnClose: 'Nej, gå tillbaka',
      btnConfirm: 'Ja, fortsätt avbryta'
    },
    infoFinish: {
      header: 'Avsluta',
      body: `Utkast sparas först i steg 2: Redigera kurs-PM.
        <br/>
        <br/>
        I detta steg, steg 1, visas sparade utkast under rubriken: Sparade utkast. Här kan du sedan välja att radera utkastet eller att fortsätta redigera.
        <br/>
        <br/>
        Vill du fortsätta att avsluta?`,
      btnClose: 'Nej, gå tillbaka',
      btnConfirm: 'Ja, fortsätt avsluta'
    },
    infoSaveAndFinish: {
      header: 'Avsluta med utkast',
      body: `Utkast är sparat.
        <br/>
        <br/>
        I steg 1: Välj kursomgång, visas sparade utkast under rubriken: Sparade utkast. I detta steg kan du sedan välja att radera utkastet eller att fortsätta redigera.
        <br/>
        <br/>
        Vill du fortsätta att avsluta?`,
      btnClose: 'Nej, gå tillbaka',
      btnConfirm: 'Ja, fortsätt avsluta'
    },
    infoPublish: {
      header: 'Att tänka på innan du publicerar!',
      body: `Publicering kommer att ske på sidan Kursens utveckling och historik.
        <br/>
        <br/>
        Vill du fortsätta att publicera?`,
      btnClose: 'Nej, gå tillbaka',
      btnConfirm: 'Ja, fortsätt publicera'
    },
    infoRemove: {
      header: 'Att tänka på innan du raderar utkastet!',
      body: `Radera utkast kan inte ångras. Utkastet kommer att försvinna.
      <br/><br/>
      Vill du fortsätta radera utkastet?`,
      btnClose: 'Nej, gå tillbaka',
      btnConfirm: 'Ja, fortsätt radera'
    },
    newSectionRemove: {
      header: 'Att tänka på innan du ta bort en tillagd rubrik!',
      body: `Rubriken med innehåll kommer att raderas och kan inte återskapas.
      <br/><br/>
      Vill du fortsätta radera den tillagd rubriken?`,
      btnClose: 'Nej, gå tillbaka',
      btnConfirm: 'Ja, fortsätt radera'
    },
    rebuildDraftOfPublished: {
      header: 'Att tänka på innan du återgår till senast publicerad version!',
      body: `Om du återgår till den senaste publicerade versionen kommmer dina  ändringar att försvinna.
      <br/><br/>
      Vill du återgå till den senaste publicerade versionen?`,
      btnClose: 'Nej, gå tillbaka',
      btnConfirm: 'Ja, återgå till senast publicerad version'
    }
  },
  info: {
    chooseSavedDraft: 'Sparade utkast',
    createNew: 'Ny kursomgång',
    choosePublishedMemo: 'Välj kurs-PM',
    chooseSemester: {
      label: 'Välj termin'
      // body:
      //   '<p>Välj vilken termin kursomgången startar. Om kursomgången sträcker sig över flera terminer; välj kursomgångens starttermin.</p>'
    },
    chooseRound: {
      header: 'Välj kursomgång',
      body: `<p>Välj alla kurstillfällen som ingår i kursomgången. 
      Studenter är antagna till ett kurstillfälle. 
      Programstudenter, betalande studenter och fristående studenter antas till olika kurstillfällen men kan utbildas i samma kursomgång. 
      Kurstillfällen ska alltså grupperas ihop till en kursomgång. Kursomgången är ett praktiskt genomförande av en kurs. 
      Kursomgången har engemensam starttidpunkt, gemensam kurstakt och normalt gemensam undervisning för en studentgrupp. 
      Schemat läggs per kursomgång, kurs-PM utformas per kursomgång och kursanalys genomförs per kursomgång.</p>`,
      availableRounds: {
        label: 'Markera ett eller flera kurstillfällen som ingår i kursomgången',
        infoText: 'Kurstillfällena listade saknar ett publicerat kurs-pm eller utkast'
      },
      existedDrafts: {
        label: 'Välj det utkast du vill fortsätta att redigera',
        infoText: 'Utkasten listade är sparade men ej publicerade'
      },
      publishedMemos: {
        label: 'Välj det kurs-PM du vill redigera: ',
        infoText: 'Kurs-PM listade är publicerade'
      }
    },
    publishedHasDraft: ' (finns opublicerade ändringar)',
    errKoppsRounds: 'Kunde inte få kursomgångar på grund av fel i Kopps. Försöka refresha sidan.',
    noCourseRoundsAvailable:
      'Samtliga kurstillfällen för denna termin ingår redan i en kursomgång som har ett publicerat kurs-PM eller utkast.',
    noSavedDrafts: 'Det finns inga sparade utkast.',
    noSemesterAvailable:
      'Det finns inga terminer att välja eftersom det saknas aktuella eller kommande kursomgångar för denna kurs. Kontrollera i systemet Kopps om du förväntar dig kursomgångar att skriva kurs-PM för.',
    noPublishedMemos:
      'Det finns inga publicerade kursomgångar för denna termin, föregående eller kommande.'
  },
  buttons: {
    /** ************ BUTTONS ****************** */
    btnAddExtra: 'Lägg till rubrik till ',
    btnClose: 'Stäng',
    btnRemove: 'Radera utkast',
    btnRemoveHeader: 'Ta bort tillagd rubrik',
    btnFinish: 'Avsluta',
    btnSaveAndFinish: 'Avsluta med utkast',
    closeEditor: 'Stäng redigeringsläge',
    preview: 'Granska',
    edit: 'Redigera',
    cancel: 'Avbryt',
    save: 'Spara',
    saveDraft: 'Spara utkast',
    publish: 'Publicera',
    goToRounds: 'Välj kursomgång',
    save_and_cancel: 'Spara utkast och avsluta',
    btn_copy: 'Kopiera länk till utkast',
    btn_switch_view_single: 'Ändra till ”Fokus-vy”',
    btn_switch_view_scroll: 'Ändra till ”Översikts-vy”',
    showGuidance: 'Visa vägledning'
  },
  extraInfo: {
    season: {
      1: 'VT ',
      2: 'HT '
    },
    labelStartDate: 'Startdatum',
    // hasSavedDraft: 'Finns utkast kurs-PM',
    contentHeaders: {
      title: 'Rubriker',
      intro: 'Rubriker....'
    },
    commentChanges: 'Ange alla ändringar i denna version:',
    mandatory: 'Obligatorisk'
  },
  alerts: {
    autoSaved: 'Sparat utkast',
    autoSavedTemporary: 'Ändringar sparade temporärt inför publicering.',
    errKoppsRounds: 'Kunde inte få kursomgångar på grund av fel i Kopps. Försöka refresha sidan.',
    errNoChosen:
      'Du måste välja ett utkast eller minst ett kurstillfälle för att kunna gå vidare till nästa steg Redigera kurs-PM.',
    errNoInPublishedChosen: 'Du måste välja ett kurs-PM för att kunna gå vidare till Redigera',
    errWhileDeleting: 'Det gick inte att ta bort utkasten på grund av bakgrund system fel......',
    errWhileSaving: 'Det gick inte att skapa utkasten på grund av bakgrund system fel......',
    infoAboutFreshData: 'Information som hämtas har automatiskt uppdateras.',
    // Viss information som hämtas har ändrats i källsystemen sedan förra versionen av kurs-pm publicerades. Den uppdaterad informationen visas nedan.
    infoRebuildDraft: 'Kurs-PM nedan har återställts till den senaste publicerade versionen.',
    infoStartAgain: 'Det finns ändringar som ej publicerats. Du kan',
    linkToRefreshData: 'återgå till senaste publicerade versionen av kurs-PM ',
    warnFillInCommentAboutChanges:
      'Du behöver fylla i obligatoriska fält (markerade i rött nedan) för att gå vidare till “Granska och publicera”',
    warnNameNewSection:
      'Du behöver ange ett namn på den tillagda rubriken (se markering i rött övan)',
    warnReplacePm:
      'Observera: publicering av nytt uppladdat kurs-PM kommer att ersättas befintligt kurs-PM (se "Välj kursomgång" nedan)'
  },
  breadCrumbLabels: {
    university: 'KTH',
    student: 'Student på KTH',
    directory: 'Kurs- och programkatalogen',
    aboutCourse: 'Om kursen',
    noLinksInPreview: 'Länkar i menyn fungerar inte i granska-läge'
  },
  coursePresentationLabels: {
    imageAltText: 'Inspirerande bild för kursen',
    imageTitleText: ''
  },
  sideMenuLabels: {
    directory: 'Kurs- och programkatalogen',
    aboutCourse: 'Om kursen',
    beforeChoosingCourse: 'Inför kursval',
    courseMemo: 'Förbereda och gå kurs',
    finishCourse: 'Slutföra ej avklarad kurs',
    courseDevelopmentAndHistory: 'Kursens utveckling och historik',
    noLinksInPreview: 'Länkar i menyn fungerar inte i granska-läge'
  },
  courseFactsLabels: {
    versionTitle: 'Version',
    languageOfInstructionTitle: 'Undervisningsspråk',
    offeredByTitle: 'Kursen ges av',
    roundsTitle: 'Kursomgång',
    mandatoryFieldMissing: 'Obligatoriskt innehåll saknas',
    linkOpensInNewTab: 'Länken kommer att öppnas i ny flik'
  },
  courseMemoLinksLabels: {
    versionTitle: 'Version kurs-PM',
    latest: 'Senaste:',
    courseMemoArchiveLabel: 'Arkiv för kurs-PM',
    courseMemoPdf: 'Kurs-PM som pdf',
    syllabus: 'Kursplan',
    syllabusInformation: 'information hämtas från',
    syllabusLinkStart: 'Kursplan (',
    syllabusLinkEnd: '– )',
    mandatoryFieldMissing: 'Obligatoriskt innehåll saknas',
    linkOpensInNewTab: 'Länken kommer att öppnas i ny flik'
  },
  courseLinksLabels: {
    linkHeaderTitle: 'Student på KTH',
    beforeAndDuringACourse: 'Inför och under en kurs',
    contactPersonsAndStudentCounselling: 'Studievägledare och kanslier',
    rightsAndResponsibilities: 'Rättigheter och skyldigheter',
    linkOpensInNewTab: 'Länken kommer att öppnas i ny flik'
  },
  courseContactsLabels: {
    courseContactsTitle: 'Kontakter',
    communicationWithTeachersTitle: 'Kommunikation i kursen',
    courseCoordinatorTitle: 'Kursansvarig',
    teacherTitle: 'Lärare',
    teacherAssistantsTitle: 'Lärarassistenter',
    examinerTitle: 'Examinator',
    otherContactsTitle: 'Övriga kontakter',
    linkOpensInNewTab: 'Länken kommer att öppnas i ny flik'
  },
  courseHeaderLabels: {
    adminLinkLabel: 'Administrera Om kursen',
    linkOpensInNewTab: 'Länken kommer att öppnas i ny flik'
  },
  courseImage: {
    Arkitektur: 'Picture_by_MainFieldOfStudy_01_Architecture.jpg',
    Bioteknik: 'Picture_by_MainFieldOfStudy_02_Biotechnology.jpg',
    'Datalogi och datateknik': 'Picture_by_MainFieldOfStudy_03_Computer_Science.jpg',
    Elektroteknik: 'Picture_by_MainFieldOfStudy_04_Electrical_Engineering.jpg',
    Fysik: 'Picture_by_MainFieldOfStudy_05_Physics.jpg',
    'Industriell ekonomi': 'Picture_by_MainFieldOfStudy_06_Industrial_Management.jpg',
    Informationsteknik: 'Picture_by_MainFieldOfStudy_07_Information_Technology.jpg',
    'Informations- och kommunikationsteknik':
      'Picture_by_MainFieldOfStudy_08_Information_Communication.jpg',
    Kemiteknik: 'Picture_by_MainFieldOfStudy_09_Chemical_Science.jpg',
    'Kemi och kemiteknik': 'Picture_by_MainFieldOfStudy_10_Chemistry_Chemical.jpg',
    Matematik: 'Picture_by_MainFieldOfStudy_11_Mathematics.jpg',
    Miljöteknik: 'Picture_by_MainFieldOfStudy_12_Environmental_Engineering.jpg',
    'Molekylära livsvetenskaper': 'Picture_by_MainFieldOfStudy_13_Molecular_Life_Science.jpg',
    Maskinteknik: 'Picture_by_MainFieldOfStudy_14_Mechanical_Engineering.jpg',
    Materialvetenskap: 'Picture_by_MainFieldOfStudy_15_Materials_Science.jpg',
    'Medicinsk teknik': 'Picture_by_MainFieldOfStudy_16_Medical_Engineering.jpg',
    Materialteknik: 'Picture_by_MainFieldOfStudy_17_Materials_Engineering.jpg',
    Samhällsbyggnad: 'Picture_by_MainFieldOfStudy_18_Built_Environment.jpg',
    'Teknisk fysik': 'Picture_by_MainFieldOfStudy_19_Engineering_Physics.jpg',
    'Teknik och ekonomi': 'Picture_by_MainFieldOfStudy_20_Technology_Economics.jpg',
    'Teknik och hälsa': 'Picture_by_MainFieldOfStudy_21_Technology_Health.jpg',
    'Teknik och management': 'Picture_by_MainFieldOfStudy_22_Technology_Management.jpg',
    Teknik: 'Picture_by_MainFieldOfStudy_23_Technology.jpg',
    'Teknik och lärande': 'Picture_by_MainFieldOfStudy_25_Technology_Learning.jpg',
    default: 'Picture_by_MainFieldOfStudy_26_Default_picture.jpg'
  }
}
