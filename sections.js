// Contenido de las secciones
const sectionContent = {
    idiomes: `
        <div class="section-header">
            <div class="section-icon" style="background: linear-gradient(135deg, #10b981, #059669);">🌍</div>
            <div class="section-title">
                <h2>Idiomes</h2>
                <p class="subtitle">Aprèn idiomes amb professors natius</p>
            </div>
        </div>

        <div class="schedule">
            <h3>⏰ Horaris</h3>
            <div class="schedule-grid">
                <div class="schedule-item">
                    <strong>De dilluns a divendres:</strong><br>
                    Matins de 9:30 h. a 13:30 h.<br>
                    Tardes de 16:45 h a 20:45 h.
                </div>
                <div class="schedule-item">
                    <strong>Dissabtes:</strong><br>
                    Matins de 10:00 h. a 13:00 h.
                </div>
            </div>
        </div>

        <div class="courses-grid">
            <div class="course-card">
                <h4><span class="flag france"></span>Francès</h4>
                <p>Tot i que és veritat que la llengua més demanada per les empreses a tot el món és l'anglès, el francès és un diferencial. Avui dia trobar professionals que parlin anglès d'una forma fluida no és tasca difícil; en canvi, professionals que parlin un francès d'alt nivell són més escassos. Existeixen gran quantitat de companyies d'origen francès que operen a nivell mundial i requereixen empleats que puguin comunicar-se directament, sense traductor, amb la casa central.</p>
                
                <p>El francès és idioma oficial a 33 països del món. A més, junt amb l'anglès, és l'únic idioma que es parla als cinc continents, ja sigui com a llengua materna, o com segon o tercer idioma. Saber parlar francès implica la possibilitat de comunicar-se amb més de 200 milions de francòfones, i els més de 72 milions d'estudiants existents a nivell mundial, segons l'Organització Internacional de Francofonia.</p>

                <h4>Diplomes DELF i DALF</h4>
                <p>Els diplomes DELF (Diplôme d'Études en Langue Française) i DALF (Diplôme Approfondi de Langue Française) són diplomes oficials de la llengua francesa. Aquests diplomes estan dirigits a persones de nacionalitat no francesa. A través dels exàmens DELF i DALF s'avaluen les aptituds, el domini global de la llengua i les capacitats de comunicació de l'alumne/a en circumstàncies habituals de la vida quotidiana.</p>

                <p><strong>- DELF 1er grau: 4 mòduls (A1 a A4)</strong><br>
                Aquest diploma equival a competències bàsiques en Francès. Certifica que el seu titular és capaç de comunicar-se en situacions quotidianes.</p>

                <p><strong>- DELF 2º grau: 2 mòduls (A5 a A6)</strong><br>
                L'alumne/a que aprovi aquests dos mòduls té un coneixement general de la societat francesa. És capaç d'analitzar un text i resumir-lo, ja sigui oralment com per escrit.</p>

                <p><strong>- DALF: 4 mòduls (B1 a B4)</strong><br>
                Aquest diploma certifica un coneixement ampli de l'idioma. L'alumne/a està capacitat per a dominar els diferents nivells d'expressió (resum, síntesi, anàlisi...) en un camp d'especialització que ell mateix escull.</p>

                <p>Hi ha tres convocatòries a l'any: febrer, juny i setembre, segons els Centres.</p>
            </div>

            <div class="course-card">
                <h4><span class="flag uk"></span>Anglès</h4>
                <p>Parlar la llengua anglesa obre portes. Qui la domina, no només pot accedir a bones oportunitats laborals, sinó que a més té la possibilitat d'estar actualitzat i llegir de primera mà llibres especialitzats, visitar i entendre els llocs més importants d'Internet, veure i gaudir les pel·lícules que tot just surten al mercat i, per descomptat, l'avantatge de moure's per qualsevol part del món amb el domini de l'idioma més internacional.</p>

                <p>Els nostres cursos són aptes per tothom a partir dels 4 anys d'edat, i s'adapten als estàndards dels exàmens oficials expedits per Cambridge ESOL:</p>

                <p><strong>- Key English Test (KET)</strong><br>
                S'espera que els alumnes hagin desenvolupat moltes de les "habilitats lingüístiques" bàsiques per tal de poder interactuar socialment o a la feina en un entorn angloparlant, i per això s'espera que puguin donar i entendre informació personal, preguntar adreces, etc.</p>

                <p><strong>- Preliminary English Test (PET)</strong><br>
                Aprovar aquest nivell indica que l'alumne ha desenvolupat les habilitats necessàries per afrontar situacions socials i laborals predictibles en un entorn angloparlant.</p>

                <p><strong>- First Certificate in English (FCE)</strong><br>
                En aquest nivell s'espera que l'alumne sigui capaç de treballar o estudiar en un entorn angloparlant i de desenvolupar-se amb facilitat com a turista en un país de parla anglesa.</p>

                <p><strong>- Certificate in Advanced English (CAE)</strong><br>
                En aquest nivell s'espera que l'alumne pugui afrontar la major part de les situacions que puguin sorgir en un país de parla anglesa tant a nivell social com professional així com en estudis superiors.</p>

                <p><strong>- Certificate of Proficiency in English (CPE)</strong><br>
                En aquest nivell l'alumne s'acosta a l'estàndard d'anglès d'un parlant nadiu culte i s'espera que pugui afrontar quasi bé totes les situacions d'un entorn angloparlant.</p>
            </div>

            <div class="course-card">
                <h4><span class="flag catalonia"></span>Català</h4>
                <p>Al CES oferim cursos de català per estrangers, per persones que vulguin millorar els seus coneixements i per tots els que hagin de superar un examen oficial de coneixements de la llengua, ja sigui per presentar-se a oposicions o per promocionar-se al seu treball.</p>

                <p>El català és una de les tres llengües oficials dins l'Estat Espanyol, i l'estàndard als òrgans administratius de Catalunya. Per aquest motiu, tot aquell que vulgui opositar a un treball sota les competències d'un ajuntament, diputació o la Generalitat de Catalunya, ha de demostrar el coneixement d'aquest, ja sigui a través d'una prova de nivell específica o presentant una titulació oficial.</p>

                <p>Aquests certificats, i els seus equivalents, estan homologats segons els criteris de la Secretaria de Política Lingüística, i es classifiquen en aquests nivells:</p>

                <p><strong>- CERTIFICAT A: coneixements orals bàsics</strong><br>
                La finalitat de la prova corresponent a aquest certificat és avaluar si l'examinand/a ha assolit un domini bàsic i eficaç de l'ús de la llengua que li permet afrontar satisfactòriament les tasques i les situacions de comunicació pròpies de la vida quotidiana.</p>

                <p><strong>- CERTIFICAT B: coneixements elementals</strong><br>
                La finalitat de la prova corresponent a aquest certificat és avaluar si l'examinand/a té el nivell elemental de domini del català per comunicar-se oralment i per escrit en situacions quotidianes.</p>

                <p><strong>- CERTIFICAT C: coneixements mitjans</strong><br>
                La finalitat de la prova corresponent a aquest certificat és avaluar si l'examinand/a té un domini suficient de l'ús de la llengua general, en la varietat estàndard, per comunicar-se satisfactòriament en les situacions comunicatives que requereixen l'ús d'un llenguatge mitjannament formal o formal.</p>
            </div>

            <div class="course-card">
                <h4><span class="flag germany"></span>Alemany</h4>
                <p>Alemanya és el líder econòmic de la Unió Europea, i una de les economies més sòlides i importants a nivell mundial. Per això, l'alemany és avui dia un llenguatge clau als negocis d'alt nivell i al mercat laboral. I no només això: més de 100 milions de persones parlen l'alemany, i a part del seu país d'origen, també es parla amb normalitat a Àustria i Suïssa.</p>

                <p>Els exàmens oficials es realitzen a través de Goethe-Institute a Alemanya. En funció de les aspiracions dels alumnes que es presenten en l'examen, s'ofereixen les següents alternatives d'exàmen:</p>

                <p><strong>- El Zentrale Mittelstufenprüfung (ZMP)</strong><br>
                També anomenat Examen Central de Nivell Mig. És un examen accessible a estudiants d'alemany que hagin cursat com a mínim 800 hores de classe.</p>

                <p><strong>- El Zertifikat Deutsch für den Beruf (ZDB)</strong><br>
                Acredita que els aspirants es desenvolupin en situacions pròpies del dia a dia i siguin capaços d'entendre textos senzills sobre economia, redactar cartes de rutina i reaccionar adequadament en conversacions d'àmbit professional.</p>

                <p><strong>- El Prüfung Wirtschaftsdeutsch international (PWD)</strong><br>
                També anomenat Examen Internacional d'Alemany Econòmic. Aquest certificat es acceptat mundialment en el món del comerç i l'indústria.</p>

                <p><strong>- Los Kleines und Großes Deutsches Sprachdiplom (KDS Y GDS)</strong><br>
                Els dos diplomes són reconeguts per totes les universitats alemanyes com titulació indispensable per cursar estudis universitaris.</p>
            </div>
        </div>
    `,

    informatica: `
        <div class="section-header">
            <div class="section-icon" style="background: linear-gradient(135deg, #06b6d4, #0891b2);">💻</div>
            <div class="section-title">
                <h2>Informàtica</h2>
                <p class="subtitle">Tecnologies modernes i programació</p>
            </div>
        </div>

        <div class="schedule">
            <h3>⏰ Horaris</h3>
            <div class="schedule-grid">
                <div class="schedule-item">
                    <strong>De dilluns a divendres:</strong><br>
                    Matins de 9:30 h. a 13:30 h.<br>
                    Tardes de 16:45 h a 20:45 h.
                </div>
                <div class="schedule-item">
                    <strong>Dissabtes:</strong><br>
                    Matins de 10:00 h. a 13:00 h.
                </div>
            </div>
        </div>

        <div class="courses-grid">
            <div class="course-card" style="background: linear-gradient(135deg, #6366f1, #8b5cf6);">
                <h4>💾 Informàtica Bàsica</h4>
                <p>Durant la darrera dècada, degut a l'economització de les noves tecnologies i al proliferament d'Internet, la informàtica ha passat de ser una disciplina requerida a alguns sectors de la indústria, a un coneixement necessari per poder desenvolupar-nos tant professional com socialment.</p>

                <p>Des d'aprendre què és una arxiu, fins a descarregar les fotos que hem fet amb la nostra càmara, amb els cursos d'informàtica inicial l'alumne podrà assolir els coneixements més bàsics i necessaris per endiasar-se al món digital. Es tracta del primer pas per entendre i perdre la por a les noves tecnologies.</p>

                <h4>- Microsoft Windows</h4>
                <p>Windows és el sistema operatiu que porten instal·lat la majoria d'ordinadors personals. Entendre el seu funcionament significa ser capaç de treballar gairebé amb qualsevol ordinador.</p>

                <h4>- Internet i Ciutadania Digital</h4>
                <p>Tot aquell que avui dia no sàpiga què és una web, un correu electrònic o una xarxa social, i com fer-les servir, ja sigui des d'un ordinador o des d'un telèfon, es troba fora d'una nova realitat: la ciutadania digital.</p>
            </div>

            <div class="course-card" style="background: linear-gradient(135deg, #f59e0b, #d97706);">
                <h4>📊 Ofimàtica</h4>
                <p>No ha volgut mai escriure una carta amb l'ordinador? O bé, fer un cartell pel seu negoci? O potser, presentar un pressupost a un client, o portar les contes de casa al dia d'una manera senzilla i automatitzada... Si sempre ha volgut saber fer aquest tipus de tasques, la resposta és l'ofimàtica.</p>

                <p>La sigla ÀCTIC correspon a la denominació "acreditació de competències en tecnologies de la informació i la comunicació". L'ÀCTIC és la certificació acreditativa de la competència digital, entesa com la combinació de coneixements, habilitats i actituds en l'àmbit de les tecnologies de la informació i la comunicació (TIC).</p>

                <h4>Microsoft Office</h4>
                <p>El paquet d'ofimàtica més conegut s'anomena Microsoft Office, i està composat per diferents aplicacions:</p>

                <p><strong>- Microsoft Word</strong><br>
                És tracta del processador de textos més usat arreu del món. Aquest ens permetrà crear documents, escriure-hi, inserir fotografies....</p>

                <p><strong>- Microsoft Excel</strong><br>
                Excel és com una gran calculadora, en la qual podem emmagatzemar infinitud de dades, classificar-les, fer càlculs i gràfics automatitzats amb elles. Un programa indicat per pressupostos, factures, albarans, etc.</p>

                <p><strong>- Microsoft PowerPoint</strong><br>
                Aquesta aplicació ens permetrà crear d'una forma senzilla presentacions audiovisuals, que podem fer servir per que complementar exposicions, fer passis de diapositives, etc.</p>

                <p><strong>- Microsoft Access</strong><br>
                Aquest és tracta d'un programa per crear, gestionar i manipular bases de dades, i és ideal per mantenir organitzada informació important, com ara clients, proveïdors....</p>
            </div>

            <div class="course-card" style="background: linear-gradient(135deg, #8b5cf6, #7c3aed);">
                <h4>💻 Programació</h4>
                <p>Per les ments més inquietes, aquest cursos els dotaran dels coneixements necessaris per crear les seves pròpies aplicacions. Es tracta del nivell més avançat que un usuari pot assolir dins el món de les noves tecnologies.</p>

                <h4>- C / C++</h4>
                <p>Un llenguatge de programació amb gairebé 40 anys d'història, i la referència bàsica de la majoria dels llenguatges que han anat apareixent fins ara. És el punt de sortida ideal per qualsevol que es vulgui endirsar dins el món de la programació orientada a objectes.</p>

                <h4>- Java</h4>
                <p>Un llenguatge fill de C++, però simplificat i orientat al treball en xarxa. És ideal per fer aplicacions complexes orientades al web i als dispositius mòbils.</p>

                <h4>- Visual Basic per Aplicacions</h4>
                <p>Un llenguatge compacte i simple, orientat a programar tasques de la suite ofimàtica Microsoft Office. Va ser dissenyat per que usuaris sense experiència i coneixement en l'àmbit de la programació puguessin desenvolupar aplicacions bàsiques.</p>
            </div>

            <div class="course-card" style="background: linear-gradient(135deg, #10b981, #059669);">
                <h4>🎨 Disseny Web</h4>
                <p>Les noves tecnologies han generat nous espais dins del món laboral, y una de les figures més rellevants i amb més projecció de futur es la de dissenyador web. Un ofici que li permetrà treballar en tot tipo d'empreses, i en algunes ocasions des de casa.</p>

                <h4>- Adobe Dreamweaver</h4>
                <p>Considerat un dels programes estàndard per a la generació de llocs web, aquest programa ens permetrà endinsarnos dins del llenguatge HTML amb facilitat. Amb aquest curs s'adquireixen els coneixements per crear pàgines web bàsiques.</p>

                <h4>- PHP / MySQL</h4>
                <p>El següent nivell: pàgines web dinàmiques que actualitzen automàticament el seu contingut segons uns paràmetres determinats. Amb aquest curs anirem més enllà i aprendrem a fer llocs web d'estructura més complexa, com per exemple fòrums, portals o blogs.</p>

                <h4>- Adobe Flash</h4>
                <p>Si volem incloure animacions, àudio, vídeo i interactivitat avançada dins de la nostra web, la solució és Adobe Flash. A través del seu llenguatge de programació Actionscript dotarem a la nostra pàgina de tot el dinamisme que ofereixen els navegadors avui dia.</p>
            </div>

            <div class="course-card" style="background: linear-gradient(135deg, #ef4444, #dc2626);">
                <h4>🎨 Disseny Gràfic</h4>
                <p>La informàtica ha canviat per complet el món del disseny gràfic. Avui dia des de casa, amb un ordinador personal tenim a l'abast gairebé totes les eines necessàries per editar un llibre, realitzar un pòster, crear un calendari... En aquest apartat trobarem una sèrie de cursos d'un nivell intermig, però no per això menys indicats per tothom.</p>

                <h4>- Adobe Photoshop</h4>
                <p>Li agrada la fotografia? Vol aprendre una eina que li permetrà treure tot el partit a la seva càmara? Tant si vol dedicar-s'hi professionalment com a aficionat, aquest és un curs per gaudir i deixar anar tota la seva creativitat.</p>

                <h4>- Adobe Illustrator</h4>
                <p>El complement perfecte d'Adobe Photoshop. Tal com indica el seu nom, aquest programa és una eina de dibuix amb el que podrà crear il·lustracions tant per un suport físic com digital: targetes de presentació, cartells, imatges web... El límit el posa vostè mateix!</p>

                <h4>- Adobe InDesign</h4>
                <p>Aplicació d'autoedició estàndard a la indústria editorial. Les seves funcions són semblants a les d'un processador de textos avançat. Controli tipografies i espais amb tot detall per generar publicacions d'aspecte professional.</p>
            </div>

            <div class="course-card" style="background: linear-gradient(135deg, #f97316, #ea580c);">
                <h4>🎮 Disseny de Videojocs</h4>
                <p>Has pensat mai en fer el teu propi videojoc? Saps que avui dia, més que mai, està al teu abast? El nostre curs et proporcionarà tot el que necessites:</p>

                <div class="programming-track">
                    <div class="track-diagram">
                        <div class="track-node programming">Programació C<br><small>Code→Blocks</small></div>
                        <div style="color: white;">→</div>
                        <div class="track-node android">Apps Android<br><small>Java S.E<br>App Inventor<br>Unity Android</small></div>
                    </div>
                    <div class="track-diagram">
                        <div style="color: transparent;">→</div>
                        <div class="track-node design2d">Disseny 2D<br><small>Adobe Flash<br>Unity 2d<br>Rpg Maker</small></div>
                    </div>
                    <div class="track-diagram">
                        <div style="color: transparent;">→</div>
                        <div class="track-node design3d">Disseny 3D<br><small>Blender<br>Unity<br>3d Studio Max</small></div>
                    </div>
                </div>

                <p><strong>Programació:</strong> És imprescindible que l'alumne aprengui i domini les principals característiques i funcions del llenguatge C per tal d'aplicar-lo en la creació de videojocs.</p>

                <p><strong>Apps:</strong> Mitjançant l'eina dinàmica "App Inventor" l'alumne podrà desenvolupar les primeres aplicacions Android i descobrir els mètodes actuals de programació per plataformes mòbils.</p>

                <p><strong>Disseny2D:</strong> Ens endinsarem al creatiu món del disseny de 2D on l'alumne podrà veure perquè la programació 2D és actualment una alternativa a tenir en compte per als programadors i dissenyadors més polivalents.</p>

                <p><strong>Disseny3D:</strong> Experimentarem el gran potencial que té el programa de codi obert "blender" i crearem senzills jocs i animacions 3D. Donarem especial importància als processos de texturització, renderització i ombrejat dels diferents entorns dissenyats.</p>
            </div>
        </div>
    `,

    reforcament: `
        <div id="reforcament-section" class="content-section hidden">
                <div class="section-header">
                    <div class="section-icon" style="background: linear-gradient(135deg, #f59e0b, #d97706);">📚</div>
                    <div class="section-title">
                        <h2>Reforç Escolar</h2>
                        <p class="subtitle">Suport acadèmic personalitzat per a tots els nivells</p>
                    </div>
                </div>

                <div class="schedule">
                    <h3>⏰ Horaris</h3>
                    <div class="schedule-grid">
                        <div class="schedule-item">
                            <strong>De dilluns a divendres:</strong><br>
                            Matins de 9:30 h. a 13:30 h.<br>
                            Tardes de 16:45 h a 20:45 h.
                        </div>
                        <div class="schedule-item">
                            <strong>Dissabtes:</strong><br>
                            Matins de 10:00 h. a 13:00 h.
                        </div>
                    </div>
                </div>

                <div class="courses-grid">
                    <div class="course-card" style="background: linear-gradient(135deg, #3b82f6, #1d4ed8);">
                        <h4>👶 Educació Primària</h4>
                        <p>El reforç escolar en educació primària és fonamental per establir unes bases sòlides d'aprenentatge. Els nostres professors especialitzats ofereixen suport individualitzat per ajudar els alumnes a superar les seves dificultats i desenvolupar hàbits d'estudi adequats.</p>
                        
                        <p><strong>Àrees que treballem:</strong></p>
                        <p>• Matemàtiques bàsiques i resolució de problemes<br>
                        • Llengua catalana i castellana<br>
                        • Comprensió lectora i expressió escrita<br>
                        • Ciències naturals i socials<br>
                        • Tècniques d'estudi i organització</p>
                        
                        <p>Les classes es desenvolupen en grups reduïts o de manera individual, adaptant-se al ritme i necessitats específiques de cada alumne. Utilitzem metodologies dinàmiques i materials didàctics atractius per mantenir la motivació dels més petits.</p>
                    </div>

                    <div class="course-card" style="background: linear-gradient(135deg, #8b5cf6, #7c3aed);">
                        <h4>🎒 Educació Secundària Obligatòria (ESO)</h4>
                        <p>Durant l'ESO, els estudiants s'enfronten a nous reptes acadèmics que requereixen un major nivell d'autonomia i organització. El nostre programa de reforç està dissenyat per donar suport als alumnes en aquesta etapa crucial del seu desenvolupament acadèmic.</p>
                        
                        <p><strong>Matèries que oferim:</strong></p>
                        <p>• Matemàtiques (àlgebra, geometria, estadística)<br>
                        • Llengua i literatura (catalana i castellana)<br>
                        • Ciències (física, química, biologia)<br>
                        • Ciències socials i història<br>
                        • Anglès i altres idiomes<br>
                        • Tecnologia i informàtica</p>
                        
                        <p>Els nostres professors treballen de manera coordinada amb els centres educatius per assegurar la continuïtat pedagògica i el seguiment individualitzat de cada alumne.</p>
                    </div>

                    <div class="course-card" style="background: linear-gradient(135deg, #ef4444, #dc2626);">
                        <h4>🎓 Batxillerat</h4>
                        <p>El batxillerat representa l'etapa final abans de l'accés a la universitat o als cicles formatius superiors. Oferim un suport especialitzat per ajudar els estudiants a superar amb èxit aquesta fase tan important.</p>
                        
                        <p><strong>Modalitats que cobrim:</strong></p>
                        <p>• <strong>Batxillerat Científic:</strong> Matemàtiques, Física, Química, Biologia<br>
                        • <strong>Batxillerat d'Humanitats:</strong> Història, Literatura, Filosofia, Llatí<br>
                        • <strong>Batxillerat Social:</strong> Economia, Geografia, Sociologia</p>
                        
                        <p>Les nostres classes estan orientades no només a superar les assignatures, sinó també a la preparació específica per a les Proves d'Accés a la Universitat (PAU), amb simulacres d'examen i tècniques específiques per a cada matèria.</p>
                    </div>

                    <div class="course-card" style="background: linear-gradient(135deg, #10b981, #059669);">
                        <h4>🧠 Tècniques d'Estudi</h4>
                        <p>Ensenyem als estudiants estratègies efectives per optimitzar el seu temps d'estudi i millorar el rendiment acadèmic. Aquestes habilitats són transversals i beneficiaran l'alumne durant tota la seva vida acadèmica i professional.</p>
                        
                        <p><strong>Continguts del programa:</strong></p>
                        <p>• Planificació i organització del temps<br>
                        • Tècniques de lectura ràpida i comprensiva<br>
                        • Elaboració de resums i esquemes<br>
                        • Mètodes de memorització<br>
                        • Preparació d'exàmens<br>
                        • Gestió dels nervis i l'ansietat</p>
                        
                        <p>Adaptem les tècniques a l'edat i les necessitats específiques de cada alumne, des de primària fins a batxillerat i estudis superiors.</p>
                    </div>

                    <div class="course-card" style="background: linear-gradient(135deg, #f97316, #ea580c);">
                        <h4>💬 Logopèdia</h4>
                        <p>Disposem de serveis de logopèdia per tractar dificultats en la comunicació, el llenguatge, la parla, la veu i la deglució. Els nostres especialistes treballen tant amb nens com amb adults.</p>
                        
                        <p><strong>Àmbits d'intervenció:</strong></p>
                        <p>• Retards en el desenvolupament del llenguatge<br>
                        • Dificultats d'articulació i pronunciació<br>
                        • Problemes de fluïdesa (tartamudeig)<br>
                        • Dislèxia i altres dificultats d'aprenentatge<br>
                        • Trastorns de la veu<br>
                        • Rehabilitació després de lesions cerebrals</p>
                        
                        <p>El tractament és sempre individualitzat i basat en una avaluació exhaustiva de cada cas. Treballem en estreta col·laboració amb les famílies i els centres educatius per assegurar la generalització dels aprenentatges.</p>
                    </div>

                    <div class="course-card" style="background: linear-gradient(135deg, #06b6d4, #0891b2);">
                        <h4>👥 Atenció a la Diversitat</h4>
                        <p>Oferim suport especialitzat per a alumnes amb necessitats educatives especials, adaptant les metodologies i materials a les seves característiques individuals per garantir el seu èxit acadèmic.</p>
                        
                        <p><strong>Alumnes que atenem:</strong></p>
                        <p>• Trastorn per dèficit d'atenció (TDAH)<br>
                        • Trastorns de l'espectre autista (TEA)<br>
                        • Dificultats específiques d'aprenentatge<br>
                        • Altes capacitats intel·lectuals<br>
                        • Trastorns del desenvolupament<br>
                        • Diversitat funcional</p>
                        
                        <p>El nostre equip multidisciplinar inclou psicòlegs, pedagogs i especialistes en educació especial que treballen de manera coordinada per oferir una atenció integral.</p>
                    </div>
                </div>
            </div>
        `,

        proves: `
            <div id="proves-section" class="content-section hidden">
                <div class="section-header">
                    <div class="section-icon" style="background: linear-gradient(135deg, #dc2626, #991b1b);">🎯</div>
                    <div class="section-title">
                        <h2>Proves d'Accés</h2>
                        <p class="subtitle">Preparació especialitzada per superar amb èxit</p>
                    </div>
                </div>

                <div class="schedule">
                    <h3>⏰ Horaris</h3>
                    <div class="schedule-grid">
                        <div class="schedule-item">
                            <strong>De dilluns a divendres:</strong><br>
                            Matins de 9:30 h. a 13:30 h.<br>
                            Tardes de 16:45 h a 20:45 h.
                        </div>
                        <div class="schedule-item">
                            <strong>Dissabtes:</strong><br>
                            Matins de 10:00 h. a 13:00 h.
                        </div>
                    </div>
                </div>

                <div class="courses-grid">
                    <div class="course-card" style="background: linear-gradient(135deg, #dc2626, #991b1b);">
                        <h4>🎓 PAU +25</h4>
                        <p>Si es tracta d'estudiar sempre és un bon moment. Al CES t'ho posem ben fàcil. Aquí trobaris tot el que necessites per arribar a la prova d'accés amb totes les d'aprovar! Programa d'estudis personalitzat segons les necessitats, avaluació contínua, classes de 2 a 4 persones, i un tutor personal especialitzat en cada matèria.</p>
                        
                        <p>A més, tu poses el teu ritme: quant de temps hi vols dedicar, quins dies, quines hores... Ara ja no tens excusa!</p>
                        
                        <p><strong>Requisits:</strong> Abans de matricular-se per primera vegada a qualsevol dels estudis universitaris, totes les persones que hagin obtingut el títol de batxillerat han de superar una prova d'accés a la universitat (PAU). L'objectiu d'aquestes és valorar la maduresa acadèmica, els coneixements i les competències adquirides en el batxillerat. Actualment hi ha dues convocatòries anuals, la ordinària (juny) i la extraordinària (setembre), i no hi ha límit de convocatòries per superar-les.</p>
                        
                        <p>Al CES oferim classes de preparació per les proves d'accés a aquest itinerari, en grups d'un màxim de quatre alumnes separats per àrees: lletres i ciències.</p>
                    </div>

                    <div class="course-card" style="background: linear-gradient(135deg, #7c3aed, #5b21b6);">
                        <h4>📋 Cicles Formatius</h4>
                        <p>La Formació Professional és una opció educativa ràpida i efectiva per tots els que busquen una sortida al món laboral amb pràctica i titulació oficial. Els cicles de formació professional es divideixen en dos graus: el grau mitjà i el grau superior. El primer proporciona el títol de tècnic/a i el segon el títol de tècnic/a superior.</p>
                        
                        <p>Al CES oferim classes de preparació per les proves d'accés a aquest itinerari, segons els temaris a nivell d'ESO o batxillerat, segons el grau. Els grups són d'un màxim de quatre alumnes separats per àrees: lletres i ciències.</p>
                        
                        <p><strong>Proves d'accés a Cicles Formatius de Grau Mitjà:</strong><br>
                        • Requisit: Tenir 17 anys complerts<br>
                        • Nivell: Equivalent a 3r d'ESO<br>
                        • Àmbits: Comunicació, Social, Científic-tecnològic</p>
                        
                        <p><strong>Proves d'accés a Cicles Formatius de Grau Superior:</strong><br>
                        • Requisit: Tenir 19 anys complerts (18 amb títol de tècnic)<br>
                        • Nivell: Equivalent a Batxillerat<br>
                        • Parts: Part comuna i part específica segons la família professional</p>
                        
                        <p>Podeu consultar els cicles formatius distribuïts en famílies professionals a la web del Departament d'Educació de la Generalitat de Catalunya.</p>
                    </div>
                </div>
            </div>
        `
}