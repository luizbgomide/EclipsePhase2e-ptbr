# Hackeamento de Naves & Habitats

Espaçonaves e habitats são ambientes complexos com muitos sistemas tecnológicos que são vulneráveis ao hackeamento e sabotagem. As funções de sistemas de sensores, segurança, armas, motores e controles de atitude podem ser hackeadas e manipuladas como qualquer outro eletrônico ([A Mesh](../13/00-the-mesh.md)). Esses subsistemas geralmente estão separados em [VPNs](../13/02-mesh-topology.md#vpns-virtual-private-networks) distintas, às vezes separados e descentralizados, outras vezes como um [sistema em camadas](../13/02-mesh-topology.md#tiered-systems) com uma rede de controle mestre de alta segurança. Em grandes habitats, cada área regional terá sua própria rede de topo, com várias funções — administração, defesa, infraestrutura, serviços públicos, recursos, segurança, espaçoporto, etc. — tendo seus próprios subsistemas. Em habitats/naves menores, sistemas relacionados provavelmente estão consolidados.

Outras características específicas a naves e habitats são cobertas aqui.

## Câmaras de Ar

A maioria das câmaras de ar são de um dos três tamanhos:

- **Câmaras de ar pequenas** são raras, em parte para desencorajar você de se aventurar sozinho. Elas comportam um pessoa de tamanho médio. Elas são usadas principalmente para drones reparadores.
- **Câmaras de ar padrão** são as mais comuns, grandes o suficiente para duas pessoas de tamanho médio.
- **Câmaras de ar grandes** são portais industriais encontrados primariamente em docas de acoplamento ou serviço. Elas podem comportar quatro a oito pessoas de tamanho médio.

As portas de câmaras de ar levam um turno de ação para abrir e fechar e 3 turnos de ação ou mais para preencherem ou evacuarem o ar.

A Armadura e o GD de câmaras de ar podem ser encontrados em [Materiais Futuros](../12/27-future-materials.md).

### Recursos de Segurança de Câmaras de Ar

Como câmaras de ar são tão críticas para a segurança dos transumanos no espaço, elas são equipadas com vários recursos de segurança. Apenas uma porta pode ser aberta por vez, para prevenir uma despressurização acidental. As câmaras de ar que levam para dentro e fora de áreas pressurizadas funcionam como portas normais, a menos que um módulo esteja despressurizado, caso em que elas funcionam como câmaras de ar.

Todas as câmaras de ar possuem sensores cabeados que impedem que elas sejam fechadas em pessoas ou objetos passando por elas. Se isso for anulado ou avariado, ter parte do corpo apanhada por uma câmara de ar quando ela se fecha causa VD 3d10 + 10 e quase sempre resulta em desmembramento. Ter a cabeça, pescoço ou órgãos vitais pegos em uma câmara de ar é morte certa.

As câmaras de ar são geralmente programadas para alertar o centro de operações sempre que elas são abertas.

As câmaras de ar podem ser ligadas ao sensores próximos de calor e monóxido de carbono. Em caso de incêndio, elas automaticamente criam um vazio de ar entre o fogo detectado e o resto da nave/habitat e permitem que o centro de operações estourem a câmara remotamente sem ciclar para poder apagar o fogo.

### Hackeando uma Câmara de Ar

Para evitar manipulações, as únicas funções acessíveis por uma interface sem fio na maioria das câmaras de ar são de identificação e diagnóstico. As características operacionais são cabeadas a um painel de controle ou acessíveis apenas abrindo fisicamente um painel selado na porta.

Se você não tiver autorização, o painel de controle pode ser hackeado fisicamente com um Teste de Aparelhagem: Eletrônica e ferramentas apropriadas. Essa é uma ação de tarefa com prazo de 2 minutos.

Se o painel de controle for danificado ou desativado de alguma forma, você pode hackear fisicamente a própria câmara de ar com um Teste de Aparelhagem: Industrial; isso é uma ação de tarefa com prazo de 2 minutos.

Ambas as opções acima permitem que você anule os recursos de seguraça, incluindo desativar a segurança da câmara para que ela possa ser fechada em pessoas ou objetos, desativar os sensores de pressão do ar, cancelar notificações de alerta, e estourar uma câmara de ar sem ciclá-la. Ambas as opções também permitem que você instale uma [caixa cinza](../16/17-espionage-and-security-tech.md) em uma câmara de ar para poder acessá-la remotamente.

### Estourando uma Câmara de Ar

As câmaras de ar podem ser hackeadas para pularem o tempo de ciclagem. Geralmente isso é feito na porta exterior para que o conteúdo da câmara de ar (incluindo seus ocupantes) sejam ejetados rapidamente. Estourar uma câmara de ar para dentro (ou seja, abrir uma câmara de ar cheia de vácuo para um corredor com atmosfera sem ciclar) produz apenas um estampido alto, alguns estalos no ouvido e possivelmente rajadas de vento que podem arremessar pequenos objetos.

Quando uma câmara de ar é estourada para fora, toda a atmosfera interna é ventilada para o espaço em metade do tempo que levaria para a câmara ciclar. Em uma câmara de ar pequena, isso tem pouco efeito além de possivelmente fazer pequenos objetos soltos sairem voando. Em câmaras de ar padrão ou grandes, isso cria uma forte rajada de vento. Se estiver até 25 metros (50 para câmaras de ar grandes), você deve fazer uma Prova de REF para agarrar-se em alguma coisa ou ser jogado na direção da porta externa. Você precisa continuar a fazer esse teste a cada turno até que a atmosfera seja drenada. Se você falhar, você é jogado na direção da câmara de ar e para fora a uma taxa de 20 metros por turno (40 para câmaras de ar grandes). Outros que estiverem perto do seu caminho podem tentar agarrar e segurar você com uma Prova de SOM. Se o habitat estiver cheio de água ou outro líquido em vez de uma atmosfera gasosa, esses testes sofrem um modificador −30. Se você tiver um aviso prévio para se segurar, adicione +10. Se ambas as portas forem abertas, a atmosfera continuará a ser ventilada com força até que a pressão do ar dentro da nave ou habitat (ou a seção local, se estiver selada) caia para níveis mínimos.

A descompressão lança objetos que não estão presos para fora de uma câmara de ar. Esses objetos e detritos podem atigir você pelo caminho, infligindo entre VD 1d10 até 4d10 (a critério do MJ). Objetos grandes resistem serem arremessados baseados em seu peso e inércia (a critério do MJ). As câmaras de ar abertas podem ficar totalmente ou parcialmente bloqueadas se um grande objeto (como uma mesa ou veículo) for sugado contra elas.

### Câmaras de Ar em Ambientes de Alta Pressão

Em ambientes de alta pressão (superfície de Vênus, oceano subsuperficial de Europa, etc.) os efeitos da descompressão são mais dramáticos. Os equipamentos e morfos usados pelos transumanos para sobrevivência nesses ambientes são projetados para suportar o ambiente, mas eles não podem suportar uma variação abrupta de pressão. Qualquer coisa dentro de uma câmara de ar nessas situações será instantaneamento morto ou esmagado pela mudança imediata da pressão interna para externa, e a estrutura ao redor da câmara de ar provavelmente sofrerá danos catastróficos.

## Portas de Passagem

Uma porta de passagem é simplesmente metade de uma câmara de ar. As passagens são instaladas em locais estratégicos, para que segmentos do habitat/nave possam ser fechados e isolados no caso de uma despressurização, surto biológico, invasão física, ou outros cenários de emergência. As passagens seguem todas as regras de câmaras de ar, menos o tempo necessário para ciclar o ar.

## Cascos e Superestrutura

Os cascos variam em composição e propriedades, desde cascos de ligas compostas dos cilindros até as espessas paredes de rochas silicatadas dos formigueiros. As superestruturas também variam; cilindros, esferas e toroides possuem treliças metálicas resistentes nas fundações e sustentando o material do casco, embora projetos antigos também tenham enormes vigamentos transversais ao longo do eixo inteiror. Formigueiros e bolhas de asteroide, por outro lado, dependem inteiramente em suas grossas paredes de rocha como superestrutura. Os habs enlatados são geralmente pequenos o bastante para o casco ser autoportante, exigindo pouco ou nenhum suporte interno, embora eles possam ser reforçados com isolamento ou blindagem de radiação.

Armadura e GD para cascos estão detalhados em [Objetos & Estruturas](../12/26-objects-and-structures.md). Muitos cascos são "autorreparáveis", o que significa que eles são equipados com bolsas de selante líquido que automaticamente preenche e endurecem perfurações, ou com enxames reparadores para reparar danos ao longo do tempo. Rompimentos graves e "cascos burros" devem ser reparados com chapas de metal e soldagem.

Rompimentos no cascos em ambientes de baixa pressão têm o mesmo efeito que estourar uma câmara de ar.

## Suporte Vital

O suporte vital em uma estação ou nave reabastece a atmosfera respirável e filtra as impurezas. Em sistemas muito primitivos, o suporte vital é finito, constituído de tanques de gases atmosféricos novos. Em Eclipse Phase, sistemas modernos podem funcionar indefinidamente, se tiverem manutenção regular e não forem prejudicados pela recuperação e alteração química de gases "velhos".

### Sabotando o Suporte Vital

Os sistemas de suporte vital biológico usam organismos, como algas, para metabolizar o resíduo de CO<sub>2</sub> e liberar oxigênio respirável. Tais sistemas estão frequentemente localizados em seus próprios módulos ou ao longo do exterior de uma nave ou estação, próximo ao casco. Dada sua natureza crítica, os controles para estes sistemas são desconectados e bem protegidos; se forem hackeados, os níveis de oxigênio e outros aspectos do sistema podem ser manipulados ([Atmosfera Perigosa](../12/29-hostile-environments.md#dangerous-atmosphere)), possivelmente levando à [asfixia](../12/28-environmental-factors.md#asphyxiation) ou outros problemas.

Se os tanques de algas forem perfurados, o líquido do inteiror é jogado no espaço, congelado e desidratado — ou pior, vaza dentro da nave/habitat, inundando módulos próximos. Depois de um rompimento, a atmosfera se torna irrespirável em uma taxa dependente do volume total do sistema e dos biomorfos a bordo — geralmente entre 48–72 horas com capacidade total, ou mais com alguns respiradores.

Outras funções de suporte vital, tais como o suprimento de água, também podem ser contaminadas ou adulteradas, embora essas sejam igualmente bem protegidas e tenham a qualidade monitorada. Muitas naves/habs armazenam reservas de água em massas de gelo, derretendo-as com excesso de calor quando necessário. Assim como o suprimento de alimentos, a água também pode ser nanofabricada, tornando isso um método ineficaz de sabotagem.

O gerenciamento de calor também é um aspecto frequentemente negligenciado do suporte vital, especialmente no espaço, onde não há atmosfera para irradiá-lo para longe. Danos nos trocadores de calor, radiadores, sistemas de regulação térmica, ou isolamento contra raios solares podem causar um superaquecimento perigoso, criando problemas para equipamentos e tornando a vida de biomorfos desagradável ou impossível.

### Sistemas de Ventilação

Todos os habitats dependem de sistemas de ventilação para carregar e reciclar o ar respirável. Esses dutos proporcionam um ótimo caminho de infiltração para enxamenoides e morfos similares pequenos. Para transumanos maiores, rastejar pelos dutos pode ser um desafio (usando uma ação complexa para se mover seu movimento base), ou você simplesmente pode não caber. Esses dutos contêm ventiladores regularmente espaçados para circulação. Para passar por eles, os ventiladores devem ser desativados e removidos com a perícia Aparelhagem: Industrial. Ventiladores maiores não são facilmente removidos, mas eles podem ser parados para que você possa passar entre as lâminas. No entanto, muitos desses ventiladores são monitorados e têm alarmes, especialmente nos pontos principais ou no caminho para áreas protegidas. Ser empurrado ou cair em um ventilador pode infligir de VD 1d10 até 4d10, dependendo do tamanho. Enxames que tentem se mover por um ventilador também sofrem VD 1d10, ou possivelmente mais em ventiladores maiores.

Muitos sistemas de ventilação possuem contramedidas para deter a propagação de toxinas ou agentes nocivos. A mais comum são sistemas de queima ultravioleta que cozinham o ar, matando patógenos biológicos. Outros incluem sistemas de nanofiltros, nos quais nanobots removem químicos ou particulados nocivos do ar. Nenhum desses são perigosos para transumanos, e ambos podem ser desativados e removidos com um Teste de Aparelhagem: Industrial (embora eles possam ter alarmes contra sabotagem).

## Reatores

Os grandes habitats e naves são alimentados por reatores de fusão. Se esse reator for desligado, as reservas de energia durarão entre 12 e 24 horas na maioria das situações. Algumas naves/habs possuem fontes alternativas, como painéis solares, para continuar alimentando a infraestrutura crítica.

Devido à ameaça representada por um colapso, os sistemas de reatores são sempre desconectados, cabeados e bem defendidos. Se um hacker de alguma forma conseguir acessar os controles cabeados, burlar a segurança, e desativar vários protocolos de segurança, então iniciar um colapso é uma ação de tarefa de Teste de Hackeamento com um prazo de 10 minutos. Em naves e alguns habitats menores, os reatores são mais facilmente acessíveis fisicamente.

Iniciar um desligamento de emergência seguro de um reator usa um Teste de Interface e uma ação complexa. O processo de desligamento real leva 2 turnos de ação. Um desligamento seguro mais gradual (para manutenções e similares) leva 6–12 horas.

Danificar as paredes de um reator é perigoso. Se uma arma disparar próximo de um reator e falhar com uma falha maior, o ataque atingiu e provavelmente danificou a parede do reator. A contenção do reator possui Armadura 50/50, GD 200 e um Limiar de Ferimento de 20, e são [autorreparáveis](../15/11-ship-and-habitat-hacking.md#hulls-and-superstructure). Se a parede receber dano suficiente para exceder seu GD ou sofrer um ferimento, um jato superaquecido de plasma escapa da contenção magnética e queima todos em até 10 metros que falhem em um Teste de Evasão (VD 6d10 + 10 \[43\], perfura-armadura, resistido com armadura energética). Toda a área também é inundada com intensa radiação, o que geralmente é letal para biomorfos.

Os rompimentos de plasma são catastroficamente ruins. Como os reatores usam fusão controlada, eles nunca vão explodir como uma arma nuclear, mas o plasma superaquecido vai derreter quase tudo ao seu redor. Os reatores de habitat geralmente incorporam sistemas de vapor pressurizados e turbinas; danos a esses sistemas, por um rompimento de plasma ou outro método, podem criar uma explosão devastadora.
