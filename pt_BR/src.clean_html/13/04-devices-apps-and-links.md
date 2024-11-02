# Dispositivos, Apps, & Ligações

Por trás da realidade aumentada, são aparelhos e programas que fazem a mesh funcionar.

## Aparelhos

Quando está online, você estará acessando e interagindo com vários dispositivos. Esses aparelhos caem em três categorias: ciscos, terminais e servidores.

### Ciscos

A grande maioria dos dispositivos em mesh são ciscos: os transceptores, microcomputadores e sensores sem fio, incorporados em quase tudo. Isso inclui utensílios, ferramentas, implantes, sensores, vestíveis, periféricos, e outros aparelhos especializados similares. Os ciscos possuem capacidades de processamento, armazenamento e rede suficientes para fazer suas funções especializadas, formar mesh com dispositivos próximos e executar alguns apps.

Os ciscos possuem apenas [contas](05-authentication-and-encryption.md#accounts--access-privileges) públicas e de administrador. Eles são capazes apenas de executar ILAs; alguns ciscos (decisão do MJ) podem executar infomorfos se a ILA for excluída, mas eles ficam sobrecarregados.

### Terminais

Um terminal é um computador pessoal generalizado e multifuncional, com capacidades de processamento e rede significativas, projetado para ser operado por um usuário final. Os terminais incluem insertos da mesh, ectos, cibercérebros, tablets, módulos de carona virtual, e os sistemas da maiorias dos bots e veículos.

Os terminais podem ter vários usuários e contas, mas só conseguem executar um infomorfo ativo por vez.

### Servidores

Os servidores têm poder de processamento e capacidades de gerenciamento de dados muito maiores do que os terminais. Eles podem ter centenas ou milhares de usuários, executar programas de simulespaço, e transmitir serviços para clientes por toda mesh. Os servidores são mantidos por todos os tipos de provedores de serviços, terminais de egoprojeção, redes sociais e portais de notícias, centros corporativos, instalações de backup, clínicas psicocirurgia e plataformas de RV e de jogos.

Servidores podem executar vários infomorfos. A maioria dos servidores é grande e estacionária, apesar de existirem alguns modelos de bot e portáteis. Servidores aprimorados e especializados de alto nível podem fornecer modificadores.

### Dispositivos Sobrecarregados

Certas circunstâncias podem prejudicar a funcionalidade de um aparelho. Sua capacidade de processamento pode ser afetada por processos de uso intensivo (como RV ou psicocirurgia), ataques distribuídos de negação de serviço, interrupções de rede, excesso de tráfego durante uma crise no habitat, erupções solares ou situações semelhantes. Os dispositivos sobrecarregados infligem um modificador −10 a −30 para ações da mesh envolvendo esse dispositivo. Além disso, a parada de Inspiração não pode ser usada em testes envolvendo este dispositivo, e a chance de adquirir uma falha em combate na mesh ([Ferimentos na Mesh](14-mesh-combat.md#mesh-wounds)) é dobrada.

## Programas

Todo mundo usa programas para fazer coisas online. A maioria das suas interações online são facilitadas pelas interfaces dos programas. Os programas podem ser agrupados em quatro categorias: apps, infomorfos, sistemas operacionais e serviços. Programas podem ser atacado em [combate na mesh](14-mesh-combat.md).

### Apps

Os apps incluem programas que rodam em seus próprios aparelhos. Muitas deles fornecem funções especializadas para usar o dispositivo, como o app de ligação inteligente que o ajuda a mirar sua arma, o app de análise química que roda em seu farejador químico ou os sistemas programáticos que lhe permitem pilotar remotamente um bot.

Enquanto a maioria dos apps também estão disponíveis como serviços online, há vantagens em executá-los em seu dispositivo local. Você pode, por exemplo, estar isolado ou afastado da mesh em um exoplaneta, asteroide remoto ou dentro de uma instalação corporativa blindada.

Talvez o app mais importante de cada dispositivo seja o seu firewall. Os firewalls fornecem a segurança inteligente que protege cada sistema ([Firewall](12-countermeasures.md#firewall)).

### Infomorfos

Os infomorfos são pacotes ativados de emulação mental — inteligências programáticas digitais. Eles são detalhados em [Infomorfos](08-infomorphs.md).

### Sistema Operacional

O sistema operacional (SO) é a interface programática do seu aparelho. Ele permite controlar as funções do aparelho e gerenciar outros recursos programáticos, como apps e serviços.

### Serviços

Os serviços programáticos estão disponíveis para clientes autorizados a partir da “nuvem” — vários servidores na mesh. Pense nisso como programas que você pode usar localmente, mas que são realmente executados no computador de outra pessoa. Muitos serviços são fornecidos de graça: mecanismos de busca, tradução em tempo real, interfaces de rede de rep, agentes de anonimização, entre outros. Outros exigem uma conta e uma assinatura: egoprojeção, simulespaços, descriptografia, jogos, fluxos XP, etc. A disponibilidade de serviços muda dependendo do habitat local e das jurisdições legais. No entanto, devido à natureza da mesh até mesmo serviços ilegais como ferramentas de violação, programas proprietários crackeados e narcoalgoritmos se proliferam. No entanto, a desvantagem de usar um serviço em vez de um app é que o serviço pode manter logs da sua atividade.

Os serviços só estão disponíveis quando você tem uma conexão de mesh direta com o provedor de serviços. Isto significa que você pode perder o acesso aos serviços se tiver seus [sinais bloqueados](13-system-subversion.md#jam-signals), sofrer atraso da distância, ou for cortado da mesh de alguma forma. Os serviços também logam seu mesh ID e podem ser usados para rastreá-lo ([Rastreamento](10-tracking.md)).

## Ligações Sem Fio

A maneira mais comum para os dispositivos se conectarem é via rádio sem fio de curto alcance (~50 metros). A maioria dos dispositivos forma mesh automaticamente com outros dispositivos ao alcance (e logam as interações). É fácil puxar uma lista de todos os dispositivos dentro do alcance juntamente com seus mesh IDs, ou fazer sua musa alertar você automaticamente se um dispositivo novo ou específico estivar ao alcance.

### Sinais Camuflados

Para o aumento da privacidade, você pode camuflar seus sinais de rádio sem fio, tornando-os mais difíceis de detectar. Este método usa uma combinação de espalhamento espectral, saltos de frequência e modulação. Para detectar um sinal camuflado, você precisa fazer uma ação complexa e vencer um Teste Oposto de Interface com a entidade camuflada. A entidade buscadora sofre um modificador −30 nesse teste. Os MJs podem querer fazer essa rolagem em segredo. Algumas instalações seguras dedicarão ILAs para monitorar ativamente por sinais camuflados; isso inclui correlacionar fluxos de vigilância com sinais da mesh, para identificar qualquer um que esteja misteriosamente “em silêncio”. Por esta razão agentes infiltrados às vezes carregam ectos em uma PAN separada para transmitir inocentemente e distrair da sua PAN camuflada.

Para dispositivos ocultos que estão transmitindo apenas em pequenos pulsos, a detecção só é possível durante o curto período que a transmissão está sendo feita.

### Farejamento

O tráfego de rádio sem fio é transmitido pelo ar (ou espaço), o que significa que ele pode ser interceptado por outros dispositivos sem fio. Como todo o tráfego da mesh é retransmitido por vários dispositivos, cada conexão é criptografada para ter privacidade. “Farejamento” envolve burlar a descriptografia para poder capturar e analisar o tráfego real de dados.

Para interceptar as comunicações sem fio, você precisa de um app de farejamento e deve estar dentro do alcance de rádio do alvo (alternativamente, você pode acessar um dispositivo que esteja dentro do alcance de rádio do alvo e farejar dessa localização). O app de farejamento automaticamente convence o alvo a retransmitir seu tráfego da mesh por você (assim como qualquer outro nodo da mesh). Isto fornece uma lista de mesh IDs para os sistemas que o alvo está ativamente conectado ([Mesh ID](05-authentication-and-encryption.md#mesh-id)). Isso também identificará quaisquer conexões que sejam protegidas por uma VPN ou criptografia quântica.

Você pode visar qualquer uma dessas conexões para espionar ativamente com uma ação complexa e um [Teste de Hackeamento](11-hacking.md#hacking-tests). Se tiver sucesso, você capturará o tráfego de dados entre o dispositivo alvo e o sistema conectado, contanto que você permaneça ao alcance. Cada conexão requer um teste separado, embora os MJs possam permitir um teste único para todas as conexões de PNJs menos importantes.

Quando você captura o tráfego farejado, você obtém todos os dados passando entre os dois sistemas. Isso inclui e-mails, chats, arquivos transferidos, fluxos de mídia e muito mais. Encontrar dados úteis em grandes quantidades de tráfego capturado pode exigir um Teste de Pesquisa. Se você capturar o tráfego durante um [processo de autenticação](05-authentication-and-encryption.md#authentication-methods), enquanto um alvo está efetuando o login, você pode até mesmo capturar suas credenciais de acesso, como a senha ou a leitura biométrica. Você pode quebrar uma conexão e forçar uma reautenticação para capturar as credenciais, mas isso requer vencer um [Teste de Hackeamento](11-hacking.md#hacking-tests) com o firewall autenticador.

**Farejando VPNs:** As VPNs são mais difíceis de interceptar: aplique um modificador −30. Se tiver sucesso, você adquire as chaves de criptografia usadas pelos dois sistemas e pode capturar o tráfego da VPN entre eles. No entanto, as VPNs frequentemente mudam suas chaves de criptografia para evitar ataques de farejamento; você só pode farejar uma ligação VPN por 1d6 minutos antes de precisar fazer outro Teste de Hackeamento com −30. Você pode usar sucessos maiores para aumentar a duração por 1d6 minutos ou para tornar a detecção mais difícil.

**Detectando Ataques de Farejamento:** As VPNs automaticamente monitoram a latência do sinal e outras pistas para detectar ataques de farejamento. Uma vez por minuto, o firewall (ou o defensor do sistema se for ativamente defendido) pode fazer um Teste de Firewall ou Infoseg. Você pode usar sucessos maiores obtidos no ataque de farejamento para modificar esse teste por −10. Se tiver sucesso, o defensor detecta que seus sinais estão sendo interceptados e pode tomar providências ([Contramedidas](12-countermeasures.md)).

**Farejando Comunicações EQ:** Comunicações com criptografia quântica não podem ser farejadas.

### Ligações Laser

As ligações laser são comuns onde a linha de visão não é um problema. As ligações laser usam comprimentos de onda invisíveis à visão padrão, mas eles podem ser vistos com visão aprimorada. Por isso, elas são evitadas em áreas de alto tráfego, onde podem criar distrações. As ligações laser podem ser interrompidas por nevoeiros, fumaças, tempestades de poeira e outros contaminantes atmosféricos. Elas são bastante usadas como as ligações de comunicação primárias entre habitats próximos. As ligações laser são às vezes são usadas para tacnets de operações secretas, pois até mesmo os sinais de rádio camuflados podem ser detectados. As ligações laser não podem ser farejadas.

### Outras Ligações

As ligações via micro-ondas funcionam como as ligações laser, exceto que elas não precisam de linha de visão, mas são impedidas por obstruções metálicas. Elas são mais comuns em áreas não totalmente assentadas. Sistemas de ligação dérmica, populares em vestíveis, exigem que o dispositivo e o usuário estejam se tocando fisicamente, e portanto não produzem emissões que podem ser interceptadas. Da mesma forma, sistemas cabeados dependem de conexões de cabos de fibra óptica. Eles fornecem uma excelente segurança contra interceptação sem fio e bloqueio de sinais, e são comuns em alguns ambientes “ruidosos”.

## Acessando Vários Sistemas

Online, você pode se conectar e interagir com inúmeros dispositivos, redes e serviços simultaneamente. Você só pode se concentrar e interagir com um sistema por vez, embora você possa alternar entre eles livremente, mesmo dentro do mesmo turno de ação. Você poderia, por exemplo, usar 3 ações rápidas para enviar uma mensagem direta para seu amigo, instruir o forno de casa para começar a preparar o jantar, e dar um baque no perfil da rede social de um estranho, todos dentro do mesmo turno de ação. Você também pode enviar o mesmo comando para vários sistemas em mesh, dispositivos subordinados ou drones teleoperados com a mesma ação rápida. No entanto, qualquer ação complexa só pode ser direcionada para apenas para um sistema por vez.
