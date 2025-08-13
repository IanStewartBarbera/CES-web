// Contenido de las secciones
const sectionContent = {
    idiomes: `
        <div class="section-header">
            <div class="section-icon" style="background: linear-gradient(135deg, #10b981, #059669);">🌍</div>
            <div class="section-title">
                <h2 data-i18n="idiomes.title">Idiomes</h2>
                <p class="subtitle" data-i18n="idiomes.subtitle">Aprèn idiomes amb professors natius</p>
            </div>
        </div>

        <div class="courses-grid">
            <!-- Català -->
            <div class="course-card" style="background: linear-gradient(135deg, #6366f1, #8b5cf6);">
                <h4><span class="flag catalonia"></span><span data-i18n="idiomes.catalan.title">Català</span></h4>
                <p data-i18n="idiomes.catalan.intro">Al CES oferim cursos de català per estrangers, per persones que vulguin millorar els seus coneixements i per tots els que hagin de superar un examen oficial de coneixements de la llengua, ja sigui per presentar-se a oposicions o per promocionar-se al seu treball.</p>

                <p data-i18n="idiomes.catalan.official_language">El català és una de les tres llengües oficials dins l'Estat Espanyol, i l'estàndard als òrgans administratius de Catalunya. Per aquest motiu, tot aquell que vulgui opositar a un treball sota les competències d'un ajuntament, diputació o la Generalitat de Catalunya, ha de demostrar el coneixement d'aquest, ja sigui a través d'una prova de nivell específica o presentant una titulació oficial.</p>

                <p data-i18n="idiomes.catalan.certificates_intro">Aquests certificats, i els seus equivalents, estan homologats segons els criteris de la Secretaria de Política Lingüística, i es classifiquen en aquests nivells:</p>

                <p><strong data-i18n="idiomes.catalan.certificate_a_title">- CERTIFICAT A: coneixements orals bàsics</strong><br>
                <span data-i18n="idiomes.catalan.certificate_a_desc">La finalitat de la prova corresponent a aquest certificat és avaluar si l'examinand/a ha assolit un domini bàsic i eficaç de l'ús de la llengua que li permet afrontar satisfactòriament les tasques i les situacions de comunicació pròpies de la vida quotidiana.</span></p>

                <p><strong data-i18n="idiomes.catalan.certificate_b_title">- CERTIFICAT B: coneixements elementals</strong><br>
                <span data-i18n="idiomes.catalan.certificate_b_desc">La finalitat de la prova corresponent a aquest certificat és avaluar si l'examinand/a té el nivell elemental de domini del català per comunicar-se oralment i per escrit en situacions quotidianes.</span></p>

                <p><strong data-i18n="idiomes.catalan.certificate_c_title">- CERTIFICAT C: coneixements mitjans</strong><br>
                <span data-i18n="idiomes.catalan.certificate_c_desc">La finalitat de la prova corresponent a aquest certificat és avaluar si l'examinand/a té un domini suficient de l'ús de la llengua general, en la varietat estàndard, per comunicar-se satisfactòriament en les situacions comunicatives que requereixen l'ús d'un llenguatge mitjannament formal o formal.</span></p>
            </div>

            <!-- Castellà -->
            <div class="course-card" style="background: linear-gradient(135deg, #10b981, #059669);">
                <h4><span class="flag spain"></span><span data-i18n="idiomes.spanish.title">Castellà</span></h4>
                <p data-i18n="idiomes.spanish.intro">Oferim cursos de castellà adaptats a tots els nivells, des de principiants fins a avançats, per a persones estrangeres que vulguin aprendre o millorar el seu domini de la llengua. Les classes estan dissenyades per desenvolupar totes les competències lingüístiques: expressió oral, comprensió auditiva, lectura i escriptura.</p>

                <p data-i18n="idiomes.spanish.global_language">El castellà és una de les llengües més parlades del món, amb més de 500 milions de parlants nadius i oficial a més de 20 països. Dominar-lo obre oportunitats laborals, acadèmiques i culturals arreu del món, així com facilita la comunicació en viatges i negocis internacionals.</p>

                <p data-i18n="idiomes.spanish.cervantes_info">Segons l'Instituto Cervantes, el castellà és també la segona llengua materna més parlada del món per nombre de parlants i la tercera en comunicació internacional a Internet.</p>

                <p data-i18n="idiomes.spanish.official_exams">Els nostres cursos preparen per a exàmens oficials reconeguts internacionalment, com el <strong>DELE</strong> (Diplomas de Español como Lengua Extranjera) i el <strong>SIELE</strong> (Servicio Internacional de Evaluación de la Lengua Española), que certifiquen el nivell de competència lingüística segons el Marc Europeu Comú de Referència (A1-C2).</p>
            </div>

            <!-- Anglès -->
            <div class="course-card" style="background: linear-gradient(135deg, #f59e0b, #d97706);">
                <h4><span class="flag uk"></span><span data-i18n="idiomes.english.title">Anglès</span></h4>
                <p data-i18n="idiomes.english.intro">Parlar la llengua anglesa obre portes. Qui la domina, no només pot accedir a bones oportunitats laborals, sinó que a més té la possibilitat d'estar actualitzat i llegir de primera mà llibres especialitzats, visitar i entendre els llocs més importants d'Internet, veure i gaudir les pel·lícules que tot just surten al mercat i, per descomptat, l'avantatge de moure's per qualsevol part del món amb el domini de l'idioma més internacional.</p>

                <p data-i18n="idiomes.english.age_levels">Els nostres cursos són aptes per tothom a partir dels 4 anys d'edat, i s'adapten als estàndards dels exàmens oficials expedits per Cambridge ESOL:</p>

                <p><strong data-i18n="idiomes.english.ket_title">- Key English Test (KET)</strong><br>
                <span data-i18n="idiomes.english.ket_desc">S'espera que els alumnes hagin desenvolupat moltes de les "habilitats lingüístiques" bàsiques per tal de poder interactuar socialment o a la feina en un entorn angloparlant, i per això s'espera que puguin donar i entendre informació personal, preguntar adreces, etc.</span></p>

                <p><strong data-i18n="idiomes.english.pet_title">- Preliminary English Test (PET)</strong><br>
                <span data-i18n="idiomes.english.pet_desc">Aprovar aquest nivell indica que l'alumne ha desenvolupat les habilitats necessàries per afrontar situacions socials i laborals predictibles en un entorn angloparlant.</span></p>

                <p><strong data-i18n="idiomes.english.fce_title">- First Certificate in English (FCE)</strong><br>
                <span data-i18n="idiomes.english.fce_desc">En aquest nivell s'espera que l'alumne sigui capaç de treballar o estudiar en un entorn angloparlant i de desenvolupar-se amb facilitat com a turista en un país de parla anglesa.</span></p>

                <p><strong data-i18n="idiomes.english.cae_title">- Certificate in Advanced English (CAE)</strong><br>
                <span data-i18n="idiomes.english.cae_desc">En aquest nivell s'espera que l'alumne pugui afrontar la major part de les situacions que puguin sorgir en un país de parla anglesa tant a nivell social com professional així com en estudis superiors.</span></p>

                <p><strong data-i18n="idiomes.english.cpe_title">- Certificate of Proficiency in English (CPE)</strong><br>
                <span data-i18n="idiomes.english.cpe_desc">En aquest nivell l'alumne s'acosta a l'estàndard d'anglès d'un parlant nadiu culte i s'espera que pugui afrontar quasi bé totes les situacions d'un entorn angloparlant.</span></p>
            </div>

            <!-- Francès -->
            <div class="course-card" style="background: linear-gradient(135deg, #06b6d4, #0891b2);">
                <h4><span class="flag france"></span><span data-i18n="idiomes.french.title">Francès</span></h4>
                <p data-i18n="idiomes.french.intro">Tot i que és veritat que la llengua més demanada per les empreses a tot el món és l'anglès, el francès és un diferencial. Avui dia trobar professionals que parlin anglès d'una forma fluida no és tasca difícil; en canvi, professionals que parlin un francès d'alt nivell són més escassos. Existeixen gran quantitat de companyies d'origen francès que operen a nivell mundial i requereixen empleats que puguin comunicar-se directament, sense traductor, amb la casa central.</p>
                
                <p data-i18n="idiomes.french.global_info">El francès és idioma oficial a 33 països del món. A més, junt amb l'anglès, és l'únic idioma que es parla als cinc continents, ja sigui com a llengua materna, o com segon o tercer idioma. Saber parlar francès implica la possibilitat de comunicar-se amb més de 200 milions de francòfones, i els més de 72 milions d'estudiants existents a nivell mundial, segons l'Organització Internacional de Francofonia.</p>

                <h4 data-i18n="idiomes.french.diplomas_title">Diplomes DELF i DALF</h4>
                <p data-i18n="idiomes.french.diplomas_intro">Els diplomes DELF (Diplôme d'Études en Langue Française) i DALF (Diplôme Approfondi de Langue Française) són diplomes oficials de la llengua francesa. Aquests diplomes estan dirigits a persones de nacionalitat no francesa. A través dels exàmens DELF i DALF s'avaluen les aptituds, el domini global de la llengua i les capacitats de comunicació de l'alumne/a en circumstàncies habituals de la vida quotidiana.</p>

                <p><strong data-i18n="idiomes.french.delf_1_title">- DELF 1er grau: 4 mòduls (A1 a A4)</strong><br>
                <span data-i18n="idiomes.french.delf_1_desc">Aquest diploma equival a competències bàsiques en Francès. Certifica que el seu titular és capaç de comunicar-se en situacions quotidianes.</span></p>

                <p><strong data-i18n="idiomes.french.delf_2_title">- DELF 2º grau: 2 mòduls (A5 a A6)</strong><br>
                <span data-i18n="idiomes.french.delf_2_desc">L'alumne/a que aprovi aquests dos mòduls té un coneixement general de la societat francesa. És capaç d'analitzar un text i resumir-lo, ja sigui oralment com per escrit.</span></p>

                <p><strong data-i18n="idiomes.french.dalf_title">- DALF: 4 mòduls (B1 a B4)</strong><br>
                <span data-i18n="idiomes.french.dalf_desc">Aquest diploma certifica un coneixement ampli de l'idioma. L'alumne/a està capacitat per a dominar els diferents nivells d'expressió (resum, síntesi, anàlisi...) en un camp d'especialització que ell mateix escull.</span></p>

                <p data-i18n="idiomes.french.exam_dates">Hi ha tres convocatòries a l'any: febrer, juny i setembre, segons els Centres.</p>
            </div>

            <!-- Alemany -->
            <div class="course-card" style="background: linear-gradient(135deg, #ef4444, #dc2626);">
                <h4><span class="flag germany"></span><span data-i18n="idiomes.german.title">Alemany</span></h4>
                <p data-i18n="idiomes.german.intro">Alemanya és el líder econòmic de la Unió Europea, i una de les economies més sòlides i importants a nivell mundial. Per això, l'alemany és avui dia un llenguatge clau als negocis d'alt nivell i al mercat laboral. I no només això: més de 100 milions de persones parlen l'alemany, i a part del seu país d'origen, també es parla amb normalitat a Àustria i Suïssa.</p>

                <p data-i18n="idiomes.german.goethe_intro">Els exàmens oficials es realitzen a través de Goethe-Institute a Alemanya. En funció de les aspiracions dels alumnes que es presenten en l'examen, s'ofereixen les següents alternatives d'exàmen:</p>

                <p><strong data-i18n="idiomes.german.zmp_title">- El Zentrale Mittelstufenprüfung (ZMP)</strong><br>
                <span data-i18n="idiomes.german.zmp_desc">També anomenat Examen Central de Nivell Mig. És un examen accessible a estudiants d'alemany que hagin cursat com a mínim 800 hores de classe.</span></p>

                <p><strong data-i18n="idiomes.german.zdb_title">- El Zertifikat Deutsch für den Beruf (ZDB)</strong><br>
                <span data-i18n="idiomes.german.zdb_desc">Acredita que els aspirants es desenvolupin en situacions pròpies del dia a dia i siguin capaços d'entendre textos senzills sobre economia, redactar cartes de rutina i reaccionar adequadament en conversacions d'àmbit professional.</span></p>

                <p><strong data-i18n="idiomes.german.pwd_title">- El Prüfung Wirtschaftsdeutsch international (PWD)</strong><br>
                <span data-i18n="idiomes.german.pwd_desc">També anomenat Examen Internacional d'Alemany Econòmic. Aquest certificat es acceptat mundialment en el món del comerç i l'indústria.</span></p>

                <p><strong data-i18n="idiomes.german.diplomas_title">- Los Kleines und Großes Deutsches Sprachdiplom (KDS Y GDS)</strong><br>
                <span data-i18n="idiomes.german.diplomas_desc">Els dos diplomes són reconeguts per totes les universitats alemanyes com titulació indispensable per cursar estudis universitaris.</span></p>
            </div>
        </div>

    `,

    informatica: `
        <div class="section-header">
            <div class="section-icon" style="background: linear-gradient(135deg, #06b6d4, #0891b2);">💻</div>
            <div class="section-title">
                <h2 data-i18n="informatica.title">Informàtica</h2>
                <p class="subtitle" data-i18n="informatica.subtitle">Tecnologies modernes i programació</p>
            </div>
        </div>

        <div class="courses-grid">
            <div class="course-card" style="background: linear-gradient(135deg, #6366f1, #8b5cf6);">
                <h4 data-i18n="informatica.basic.title">💾 Informàtica Bàsica</h4>
                <p data-i18n="informatica.basic.intro">Durant la darrera dècada, degut a l'economització de les noves tecnologies i al proliferament d'Internet, la informàtica ha passat de ser una disciplina requerida a alguns sectors de la indústria, a un coneixement necessari per poder desenvolupar-nos tant professional com socialment.</p>

                <p data-i18n="informatica.basic.description">Des d'aprendre què és una arxiu, fins a descarregar les fotos que hem fet amb la nostra càmara, amb els cursos d'informàtica inicial l'alumne podrà assolir els coneixements més bàsics i necessaris per endiasar-se al món digital. Es tracta del primer pas per entendre i perdre la por a les noves tecnologies.</p>

                <h4 data-i18n="informatica.basic.windows_title">- Microsoft Windows</h4>
                <p data-i18n="informatica.basic.windows_desc">Windows és el sistema operatiu que porten instal·lat la majoria d'ordinadors personals. Entendre el seu funcionament significa ser capaç de treballar gairebé amb qualsevol ordinador.</p>

                <h4 data-i18n="informatica.basic.internet_title">- Internet i Ciutadania Digital</h4>
                <p data-i18n="informatica.basic.internet_desc">Tot aquell que avui dia no sàpiga què és una web, un correu electrònic o una xarxa social, i com fer-les servir, ja sigui des d'un ordinador o des d'un telèfon, es troba fora d'una nova realitat: la ciutadania digital.</p>
            </div>

            <div class="course-card" style="background: linear-gradient(135deg, #f59e0b, #d97706);">
                <h4 data-i18n="informatica.office.title">📊 Ofimàtica</h4>
                <p data-i18n="informatica.office.intro">No ha volgut mai escriure una carta amb l'ordinador? O bé, fer un cartell pel seu negoci? O potser, presentar un pressupost a un client, o portar les contes de casa al dia d'una manera senzilla i automatitzada... Si sempre ha volgut saber fer aquest tipus de tasques, la resposta és l'ofimàtica.</p>

                <p data-i18n="informatica.office.attic_info">La sigla ÀCTIC correspon a la denominació "acreditació de competències en tecnologies de la informació i la comunicació". L'ÀCTIC és la certificació acreditativa de la competència digital, entesa com la combinació de coneixements, habilitats i actituds en l'àmbit de les tecnologies de la informació i la comunicació (TIC).</p>

                <h4>Microsoft Office</h4>
                <p data-i18n="informatica.office.suite_intro">El paquet d'ofimàtica més conegut s'anomena Microsoft Office, i està composat per diferents aplicacions:</p>

                <p><strong>- Microsoft Word</strong><br>
                <span data-i18n="informatica.office.word_desc">És tracta del processador de textos més usat arreu del món. Aquest ens permetrà crear documents, escriure-hi, inserir fotografies....</span></p>

                <p><strong>- Microsoft Excel</strong><br>
                <span data-i18n="informatica.office.excel_desc">Excel és com una gran calculadora, en la qual podem emmagatzemar infinitud de dades, classificar-les, fer càlculs i gràfics automatitzats amb elles. Un programa indicat per pressupostos, factures, albarans, etc.</span></p>

                <p><strong>- Microsoft PowerPoint</strong><br>
                <span data-i18n="informatica.office.powerpoint_desc">Aquesta aplicació ens permetrà crear d'una forma senzilla presentacions audiovisuals, que podem fer servir per que complementar exposicions, fer passis de diapositives, etc.</span></p>

                <p><strong>- Microsoft Access</strong><br>
                <span data-i18n="informatica.office.access_desc">Aquest és tracta d'un programa per crear, gestionar i manipular bases de dades, i és ideal per mantenir organitzada informació important, com ara clients, proveïdors....</span></p>
            </div>

            <div class="course-card" style="background: linear-gradient(135deg, #8b5cf6, #7c3aed);">
                <h4 data-i18n="informatica.programming.title">💻 Programació</h4>
                <p data-i18n="informatica.programming.intro">Per les ments més inquietes, aquest cursos els dotaran dels coneixements necessaris per crear les seves pròpies aplicacions. Es tracta del nivell més avançat que un usuari pot assolir dins el món de les noves tecnologies.</p>

                <h4>- C / C++</h4>
                <p data-i18n="informatica.programming.c_desc">Un llenguatge de programació amb gairebé 40 anys d'història, i la referència bàsica de la majoria dels llenguatges que han anat apareixent fins ara. És el punt de sortida ideal per qualsevol que es vulgui endirsar dins el món de la programació orientada a objectes.</p>

                <h4>- Java</h4>
                <p data-i18n="informatica.programming.java_desc">Un llenguatge fill de C++, però simplificat i orientat al treball en xarxa. És ideal per fer aplicacions complexes orientades al web i als dispositius mòbils.</p>

                <h4>- Visual Basic <span data-i18n="informatica.programming.vba_for">per Aplicacions</span></h4>
                <p data-i18n="informatica.programming.vba_desc">Un llenguatge compacte i simple, orientat a programar tasques de la suite ofimàtica Microsoft Office. Va ser dissenyat per que usuaris sense experiència i coneixement en l'àmbit de la programació puguessin desenvolupar aplicacions bàsiques.</p>
            </div>

            <div class="course-card" style="background: linear-gradient(135deg, #10b981, #059669);">
                <h4 data-i18n="informatica.web.title">🎨 Disseny Web</h4>
                <p data-i18n="informatica.web.intro">Les noves tecnologies han generat nous espais dins del món laboral, y una de les figures més rellevants i amb més projecció de futur es la de dissenyador web. Un ofici que li permetrà treballar en tot tipo d'empreses, i en algunes ocasions des de casa.</p>

                <h4>- Adobe Dreamweaver</h4>
                <p data-i18n="informatica.web.dreamweaver_desc">Considerat un dels programes estàndard per a la generació de llocs web, aquest programa ens permetrà endinsarnos dins del llenguatge HTML amb facilitat. Amb aquest curs s'adquireixen els coneixements per crear pàgines web bàsiques.</p>

                <h4>- PHP / MySQL</h4>
                <p data-i18n="informatica.web.php_desc">El següent nivell: pàgines web dinàmiques que actualitzen automàticament el seu contingut segons uns paràmetres determinats. Amb aquest curs anirem més enllà i aprendrem a fer llocs web d'estructura més complexa, com per exemple fòrums, portals o blogs.</p>

                <h4>- Adobe Flash</h4>
                <p data-i18n="informatica.web.flash_desc">Si volem incloure animacions, àudio, vídeo i interactivitat avançada dins de la nostra web, la solució és Adobe Flash. A través del seu llenguatge de programació Actionscript dotarem a la nostra pàgina de tot el dinamisme que ofereixen els navegadors avui dia.</p>
            </div>

            <div class="course-card" style="background: linear-gradient(135deg, #ef4444, #dc2626);">
                <h4 data-i18n="informatica.design.title">🎨 Disseny Gràfic</h4>
                <p data-i18n="informatica.design.intro">La informàtica ha canviat per complet el món del disseny gràfic. Avui dia des de casa, amb un ordinador personal tenim a l'abast gairebé totes les eines necessàries per editar un llibre, realitzar un pòster, crear un calendari... En aquest apartat trobarem una sèrie de cursos d'un nivell intermig, però no per això menys indicats per tothom.</p>

                <h4>- Adobe Photoshop</h4>
                <p data-i18n="informatica.design.photoshop_desc">Li agrada la fotografia? Vol aprendre una eina que li permetrà treure tot el partit a la seva càmara? Tant si vol dedicar-s'hi professionalment com a aficionat, aquest és un curs per gaudir i deixar anar tota la seva creativitat.</p>

                <h4>- Adobe Illustrator</h4>
                <p data-i18n="informatica.design.illustrator_desc">El complement perfecte d'Adobe Photoshop. Tal com indica el seu nom, aquest programa és una eina de dibuix amb el que podrà crear il·lustracions tant per un suport físic com digital: targetes de presentació, cartells, imatges web... El límit el posa vostè mateix!</p>

                <h4>- Adobe InDesign</h4>
                <p data-i18n="informatica.design.indesign_desc">Aplicació d'autoedició estàndard a la indústria editorial. Les seves funcions són semblants a les d'un processador de textos avançat. Controli tipografies i espais amb tot detall per generar publicacions d'aspecte professional.</p>
            </div>

            <div class="course-card" style="background: linear-gradient(135deg, #f97316, #ea580c);">
                <h4 data-i18n="informatica.games.title">🎮 Disseny de Videojocs</h4>
                <p data-i18n="informatica.games.intro">Has pensat mai en fer el teu propi videojoc? Saps que avui dia, més que mai, està al teu abast? El nostre curs et proporcionarà tot el que necessites:</p>

                <p><strong data-i18n="informatica.games.programming_title">Programació:</strong> <span data-i18n="informatica.games.programming_desc">És imprescindible que l'alumne aprengui i domini les principals característiques i funcions del llenguatge C per tal d'aplicar-lo en la creació de videojocs.</span></p>

                <p><strong data-i18n="informatica.games.apps_title">Apps:</strong> <span data-i18n="informatica.games.apps_desc">Mitjançant l'eina dinàmica "App Inventor" l'alumne podrà desenvolupar les primeres aplicacions Android i descobrir els mètodes actuals de programació per plataformes mòbils.</span></p>

                <p><strong data-i18n="informatica.games.design2d_title">Disseny2D:</strong> <span data-i18n="informatica.games.design2d_desc">Ens endinsarem al creatiu món del disseny de 2D on l'alumne podrà veure perquè la programació 2D és actualment una alternativa a tenir en compte per als programadors i dissenyadors més polivalents.</span></p>

                <p><strong data-i18n="informatica.games.design3d_title">Disseny3D:</strong> <span data-i18n="informatica.games.design3d_desc">Experimentarem el gran potencial que té el programa de codi obert "blender" i crearem senzills jocs i animacions 3D. Donarem especial importància als processos de texturització, renderització i ombrejat dels diferents entorns dissenyats.</span></p>
            </div>
        </div>
    `,

    reforcament: `
        <div class="section-header">
            <div class="section-icon" style="background: linear-gradient(135deg, #f59e0b, #d97706);">📚</div>
            <div class="section-title">
                <h2 data-i18n="reforcament.title">Reforç Escolar</h2>
                <p class="subtitle" data-i18n="reforcament.subtitle">Suport acadèmic personalitzat per a tots els nivells</p>
            </div>
        </div>

        <div class="courses-grid">
            <div class="course-card" style="background: linear-gradient(135deg, #3b82f6, #1d4ed8);">
                <h4 data-i18n="reforcament.primary.title">👶 Educació Primària</h4>
                <p data-i18n="reforcament.primary.intro">El reforç escolar en educació primària és fonamental per establir unes bases sòlides d'aprenentatge. Els nostres professors especialitzats ofereixen suport individualitzat per ajudar els alumnes a superar les seves dificultats i desenvolupar hàbits d'estudi adequats.</p>
                
                <p><strong data-i18n="reforcament.primary.areas_title">Àrees que treballem:</strong></p>
                <p data-i18n="reforcament.primary.area1">• Matemàtiques bàsiques i resolució de problemes<br></p>
                <p data-i18n="reforcament.primary.area2">• Llengua catalana i castellana<br></p>
                <p data-i18n="reforcament.primary.area3">• Comprensió lectora i expressió escrita<br></p>
                <p data-i18n="reforcament.primary.area4">• Ciències naturals i socials<br></p>
                <p data-i18n="reforcament.primary.area5">• Tècniques d'estudi i organització</p>
                
                <p data-i18n="reforcament.primary.methodology">Les classes es desenvolupen en grups reduïts o de manera individual, adaptant-se al ritme i necessitats específiques de cada alumne. Utilitzem metodologies dinàmiques i materials didàctics atractius per mantenir la motivació dels més petits.</p>
            </div>

            <div class="course-card" style="background: linear-gradient(135deg, #8b5cf6, #7c3aed);">
                <h4 data-i18n="reforcament.secondary.title">🎒 Educació Secundària Obligatòria (ESO)</h4>
                <p data-i18n="reforcament.secondary.intro">Durant l'ESO, els estudiants s'enfronten a nous reptes acadèmics que requereixen un major nivell d'autonomia i organització. El nostre programa de reforç està dissenyat per donar suport als alumnes en aquesta etapa crucial del seu desenvolupament acadèmic.</p>
                
                <p><strong data-i18n="reforcament.secondary.subjects_title">Matèries que oferim:</strong></p>
                <p data-i18n="reforcament.secondary.area1">• Matemàtiques (àlgebra, geometria, estadística)<br></p>
                <p data-i18n="reforcament.secondary.area2">• Llengua i literatura (catalana i castellana)<br></p>
                <p data-i18n="reforcament.secondary.area3">• Ciències (física, química, biologia)<br></p>
                <p data-i18n="reforcament.secondary.area4">• Ciències socials i història<br></p>
                <p data-i18n="reforcament.secondary.area5">• Anglès i altres idiomes<br></p>
                <p data-i18n="reforcament.secondary.area6">• Tecnologia i informàtica</p>
                
                <p data-i18n="reforcament.secondary.methodology">Els nostres professors treballen de manera coordinada amb els centres educatius per assegurar la continuïtat pedagògica i el seguiment individualitzat de cada alumne.</p>
            </div>

            <div class="course-card" style="background: linear-gradient(135deg, #ef4444, #dc2626);">
                <h4 data-i18n="reforcament.batxillerat.title">🎓 Batxillerat</h4>
                <p data-i18n="reforcament.batxillerat.intro">El batxillerat representa l'etapa final abans de l'accés a la universitat o als cicles formatius superiors. Oferim un suport especialitzat per ajudar els estudiants a superar amb èxit aquesta fase tan important.</p>
                
                <p><strong data-i18n="reforcament.batxillerat.modalities_title">Modalitats que cobrim:</strong></p>
                <p data-i18n="reforcament.batxillerat.area1">• <strong>Batxillerat Científic:</strong> Matemàtiques, Física, Química, Biologia<br></p>
                <p data-i18n="reforcament.batxillerat.area2">• <strong>Batxillerat d'Humanitats:</strong> Història, Literatura, Filosofia, Llatí<br></p>
                <p data-i18n="reforcament.batxillerat.area3">• <strong>Batxillerat Social:</strong> Economia, Geografia, Sociologia</p>
                
                <p data-i18n="reforcament.batxillerat.methodology">Les nostres classes estan orientades no només a superar les assignatures, sinó també a la preparació específica per a les Proves d'Accés a la Universitat (PAU), amb simulacres d'examen i tècniques específiques per a cada matèria.</p>
            </div>

            <div class="course-card" style="background: linear-gradient(135deg, #10b981, #059669);">
                <h4 data-i18n="reforcament.techniques.title">🧠 Tècniques d'Estudi</h4>
                <p data-i18n="reforcament.techniques.intro">Ensenyem als estudiants estratègies efectives per optimitzar el seu temps d'estudi i millorar el rendiment acadèmic. Aquestes habilitats són transversals i beneficiaran l'alumne durant tota la seva vida acadèmica i professional.</p>
                
                <p><strong data-i18n="reforcament.techniques.content_title">Continguts del programa:</strong></p>
                <p data-i18n="reforcament.techniques.area1">• Planificació i organització del temps<br></p>
                <p data-i18n="reforcament.techniques.area2">• Tècniques de lectura ràpida i comprensiva<br></p>
                <p data-i18n="reforcament.techniques.area3">• Elaboració de resums i esquemes<br></p>
                <p data-i18n="reforcament.techniques.area4">• Mètodes de memorització<br></p>
                <p data-i18n="reforcament.techniques.area5">• Preparació d'exàmens<br></p>
                <p data-i18n="reforcament.techniques.area6">• Gestió dels nervis i l'ansietat<br></p>
                
                <p data-i18n="reforcament.techniques.adaptation">Adaptem les tècniques a l'edat i les necessitats específiques de cada alumne, des de primària fins a batxillerat i estudis superiors.</p>
            </div>

            <div class="course-card" style="background: linear-gradient(135deg, #f97316, #ea580c);">
                <h4 data-i18n="reforcament.logopedia.title">💬 Logopèdia</h4>
                <p data-i18n="reforcament.logopedia.intro">Disposem de serveis de logopèdia per tractar dificultats en la comunicació, el llenguatge, la parla, la veu i la deglució. Els nostres especialistes treballen tant amb nens com amb adults.</p>
                
                <p><strong data-i18n="reforcament.logopedia.areas_title">Àmbits d'intervenció:</strong></p>
                <p data-i18n="reforcament.logopedia.area1">• Retards en el desenvolupament del llenguatge<br></p>
                <p data-i18n="reforcament.logopedia.area2">• Dificultats d'articulació i pronunciació<br></p>
                <p data-i18n="reforcament.logopedia.area3">• Problemes de fluïdesa (tartamudeig)<br></p>
                <p data-i18n="reforcament.logopedia.area4">• Dislèxia i altres dificultats d'aprenentatge<br></p>
                <p data-i18n="reforcament.logopedia.area5">• Trastorns de la veu<br></p>
                <p data-i18n="reforcament.logopedia.area6">• Rehabilitació després de lesions cerebrals<br></p>
                
                <p data-i18n="reforcament.logopedia.methodology">El tractament és sempre individualitzat i basat en una avaluació exhaustiva de cada cas. Treballem en estreta col·laboració amb les famílies i els centres educatius per assegurar la generalització dels aprenentatges.</p>
            </div>

            <div class="course-card" style="background: linear-gradient(135deg, #06b6d4, #0891b2);">
                <h4 data-i18n="reforcament.diversity.title">👥 Atenció a la Diversitat</h4>
                <p data-i18n="reforcament.diversity.intro">Oferim suport especialitzat per a alumnes amb necessitats educatives especials, adaptant les metodologies i materials a les seves característiques individuals per garantir el seu èxit acadèmic.</p>
                
                <p><strong data-i18n="reforcament.diversity.students_title">Alumnes que atenem:</strong></p>
                <p data-i18n="reforcament.diversity.area1">• Trastorn per dèficit d'atenció (TDAH)<br></p>
                <p data-i18n="reforcament.diversity.area2">• Trastorns de l'espectre autista (TEA)<br></p>
                <p data-i18n="reforcament.diversity.area3">• Dificultats específiques d'aprenentatge<br></p>
                <p data-i18n="reforcament.diversity.area4">• Altes capacitats intel·lectuals<br></p>
                <p data-i18n="reforcament.diversity.area5">• Trastorns del desenvolupament<br></p>
                <p data-i18n="reforcament.diversity.area6">• Diversitat funcional<br></p>
                
                <p data-i18n="reforcament.diversity.methodology">El nostre equip multidisciplinar inclou psicòlegs, pedagogs i especialistes en educació especial que treballen de manera coordinada per oferir una atenció integral.</p>
            </div>
        </div>
    `,

    proves: `
        <div class="section-header">
            <div class="section-icon" style="background: linear-gradient(135deg, #dc2626, #991b1b);">🎯</div>
            <div class="section-title">
                <h2 data-i18n="proves.title">Proves d'Accés</h2>
                <p class="subtitle" data-i18n="proves.subtitle">Preparació especialitzada per superar amb èxit</p>
            </div>
        </div>

        <div class="courses-grid two-columns">
            <div class="course-card" style="background: linear-gradient(135deg, #dc2626, #991b1b);">
                <h4 data-i18n="proves.pau25.title">🥇 PAU +25</h4>
                <p data-i18n="proves.pau25.intro">Si es tracta d'estudiar sempre és un bon moment. Al CES t'ho posem ben fàcil. Aquí trobaràs tot el que necessites per arribar a la prova d'accés amb totes les d'aprovar! Programa d'estudis personalitzat segons les necessitats, avaluació contínua, classes de 2 a 4 persones, i un tutor personal especialitzat en cada matèria.</p>
                
                <p data-i18n="proves.pau25.flexibility">A més, tu poses el teu ritme: quant de temps hi vols dedicar, quins dies, quines hores... Ara ja no tens excusa!</p>
                
                <p data-i18n="proves.pau25.requirements"><strong>Requisits:</strong> Abans de matricular-se per primera vegada a qualsevol dels estudis universitaris, totes les persones que hagin obtingut el títol de batxillerat han de superar una prova d'accés a la universitat (PAU). L'objectiu d'aquestes és valorar la maduresa acadèmica, els coneixements i les competències adquirides en el batxillerat. Actualment hi ha dues convocatòries anuals, la ordinària (juny) i la extraordinària (setembre), i no hi ha límit de convocatòries per superar-les.</p>
                
                <p data-i18n="proves.pau25.methodology">Al CES oferim classes de preparació per les proves d'accés a aquest itinerari, en grups d'un màxim de quatre alumnes separats per àrees: lletres i ciències.</p>
            </div>

            <div class="course-card" style="background: linear-gradient(135deg, #7c3aed, #5b21b6);">
                <h4 data-i18n="proves.cicles.title">📋 Cicles Formatius</h4>
                <p data-i18n="proves.cicles.intro">La Formació Professional és una opció educativa ràpida i efectiva per tots els que busquen una sortida al món laboral amb pràctica i titulació oficial. Els cicles de formació professional es divideixen en dos graus: el grau mitjà i el grau superior. El primer proporciona el títol de tècnic/a i el segon el títol de tècnic/a superior.</p>
                
                <p data-i18n="proves.cicles.methodology">Al CES oferim classes de preparació per les proves d'accés a aquest itinerari, segons els temaris a nivell d'ESO o batxillerat, segons el grau. Els grups són d'un màxim de quatre alumnes separats per àrees: lletres i ciències.</p>
                
                <strong data-i18n="proves.cicles.gm.title">Proves d'accés a Cicles Formatius de Grau Mitjà:</strong><br>
                <p data-i18n="proves.cicles.gm.area1">• Requisit: Tenir 17 anys complerts<br></p>
                <p data-i18n="proves.cicles.gm.area2">• Nivell: Equivalent a 3r d'ESO<br></p>
                <p data-i18n="proves.cicles.gm.area3">• Àmbits: Comunicació, Social, Científic-tecnològic<br></p>
                
                <strong data-i18n="proves.cicles.gs.title">Proves d'accés a Cicles Formatius de Grau Superior:</strong><br>
                <p data-i18n="proves.cicles.gs.area1">• Requisit: Tenir 19 anys complerts (18 amb títol de tècnic)<br></p>
                <p data-i18n="proves.cicles.gs.area2">• Nivell: Equivalent a Batxillerat<br></p>
                <p data-i18n="proves.cicles.gs.area3">• Parts: Part comuna i part específica segons la família professional<br></p>
                
                <p data-i18n="proves.cicles.info">Podeu consultar els cicles formatius distribuïts en famílies professionals a la web del Departament d'Educació de la Generalitat de Catalunya.</p>
            </div>
        </div>

    `
};