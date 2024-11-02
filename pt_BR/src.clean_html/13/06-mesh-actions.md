# Ações da Mesh

Sua ações online são bastante influenciadas pelo sistema específico que você está acessando. A lista a seguir não é completa, mas deve dar a você e ao seu MJ uma base para lidar com tarefas online.

Tenha em mente que suas ações são limitadas por seus [privilégios de acesso](05-authentication-and-encryption.md#accounts--access-privileges) atuais. Se você deseja fazer algo que seus privilégios não permitem — acessar um arquivo em um diretório restrito, editar um log, manipular um dispositivo de segurança — então você precisa hackear o sistema. Ações que exigem especificamente hackeamento são detalhadas em [Hackeamento](11-hacking.md) e [Subversão](13-system-subversion.md).

A menos que indicado de outra forma, essas ações usam uma ação complexa, mas não requerem um teste de perícia, assumindo que você tenha os privilégios de acesso.

## Ações Universais

Essas ações se aplicam a ciscos, terminais, servidores e a maioria dos outros eletrônicos.

Qualquer usuário pode fazer essas ações, embora os sistemas de alta segurança possam restringir algumas delas para os usuários com privilégios de segurança ou de administrador.

- **Acesso Outro Sistema:** Você pode [autenticar](05-authentication-and-encryption.md#authentication-methods) e acessar uma conta em outro sistema. Isso cria um [console de conta](05-authentication-and-encryption.md#accounts--access-privileges), representando sua presença nesse sistema.
- **Aplicar Tag:** Você pode marcar uma pessoa, local ou coisa física com uma e-tag visível em RA ([Tags](03-common-mesh-uses.md#tagging)).
- **Comunicar:** Você pode conversar por e-mail, texto, voz ou vídeo com outros online, contanto que tenha a mesh ID deles.
- **Criptografar/Descriptografar:** Você pode proteger um arquivo contra bisbilhoteiros ou acessá-lo com a autorização adequada ([Criptografia](05-authentication-and-encryption.md#encryption)).
- **Filtrar Névoa de RA:** Você pode tentar remover o spam e outros da “névoa” importuna de RA ([Névoa de RA e Filtros](03-common-mesh-uses.md#ar-mist-and-filters)).
- **Identificar Atacante:** Você pode tentar identificar alguém tentando travar você em combate na mesh ([Consciência de Ataques](14-mesh-combat.md#mesh-attacks-and-defense)).
- **Emitir Comando:** Você pode comandar qualquer dispositivo subordinado, ILA ou bot teleoperado com apenas uma ação rápida. Cada comando conta separadamente, embora você possa emitir o mesmo comando para vários dispositivos/bots de uma vez.
- **Deslogar:** Sair de um sistema.
- **Modificar Arquivos:** Você pode visualizar, alterar, fazer upload, download e excluir os arquivos que você tem privilégio de acesso. Os arquivos excluídos ainda podem ser recuperados com um Teste de Interface por 1 semana, embora você também possa optar por eliminar (excluir permanentemente) um arquivo para que nenhuma recuperação seja possível; no entanto, backups arquivados também podem existir.
- **Operar Dispositivo:** A maioria dos dispositivos possui aparelhos embutidos e funções eletrônicas que você pode controlar diretamente. Ligar o seu veículo, carregar um diagrama de autocozedor, aumentar o aquecimento, desligar os sprinklers, abrir a porta, definir um temporizador, disparar um sistema de armas, ajustar configurações, etc. Ao critério do MJ, algumas funções pode exigir testes de perícia.
- **Executar Script:** Iniciar um script pré-programado ([Scripts](#scripting)).
- **Escanear Sinais Sem Fio:** É uma ação rápida procurar dispositivos sem fio e seus mesh IDs dentro do alcance. É preciso uma ação complexa para localizar um [dispositivo camuflado](04-devices-apps-and-links.md#stealthed-signals).
- **Pesquisar:** Você pode pesquisar em um sistema que está acessando ou em toda a mesh ([Pesquisa Online](09-online-research.md)).
- **Proteger Programa:** Você pode proteger ativamente um programa que é alvejado em um [combate na mesh](14-mesh-combat.md).
- **Camuflar Sinais Sem Fio:** Você pode tentar esconder sua atividade sem fio ([Sinais Camuflados](04-devices-apps-and-links.md#stealthed-signals)).
- **Trocar Dispositivo Habitado:** Se você for um infomorfo, você pode transferir seu estado mental virtual para outro sistema ([Infomorfos](08-infomorphs.md)) ou distribui-lo entre vários sistemas ([Infomorfos Distribuídos](08-infomorphs.md#distributed-infomorphs)).
- **Encerrar Programa:** Você pode matar o processo de um programa menor que você tenha privilégio e interrompê-lo. Se o programa pertence a outro usuário ou tem importância para história, trate isso como um ataque em [combate na mesh](14-mesh-combat.md).
- **Alternar Tema de RA:** Você pode mudar a realidade aumentada que tematiza o mundo ao seu redor ([Tematização](03-common-mesh-uses.md#skinning)).
- **Ativar Modo Privativo:** Você pode definir o seu perfil público como privado ou público ([Modo Privativo](01-everyware.md#privacy-mode)) com uma ação rápida. Você também pode ativar a opção de permitir que a polícia/segurança anule suas configurações de privacidade.
- **Ativar Simulespaço:** Você pode entrar ou sair de um ambiente de simulespaço ([Realidade Virtual](18-virtual-reality.md)).
- **Usar Apps:** A maioria dos dispositivos possui apps apropriados para sua finalidade. Geralmente estão incluídos processadores de texto, estúdios de design gráfico, estações de trabalho de áudio e vídeo, e jogos. Os sistemas dedicados podem ter apps para controles do sistema de habitat e estações de armas. O uso desses apps pode exigir um Teste de Interface ou de outra perícia.
- **Usar Serviço:** Você pode usar programas disponíveis como serviços na nuvem. Isso geralmente requer ter uma assinatura do serviço, embora alguns sejam gratuitos.
- **Ver Apps:** Você pode ver quais apps estão disponíveis no dispositivo e quais estão sendo executados com apenas uma ação rápida. Alguns apps podem só estar disponíveis para contas específicas, de acordo com os privilégios desse sistema.
- **Ver Perfil:** Você pode ver o perfil público da rede social e níveis de rep de qualquer pessoa dentro do alcance físico (ou dentro do alcance dos sensores que você está acessando), a não ser que estejam em [modo privativo](01-everyware.md#privacy-mode).
- **Ver Fluxos de Sensores:** Muitos dispositivos incluem sensores miniaturizados. Esses podem ser vistos ou transmitidos diretamente para sua realidade aumentada. Use Testes de Percepção para a maioria dos sensores; outros podem exigir Testes de Saber (por exemplo: os resultados de um farejador químico são analisados com Saber: Química). Os sensores utilizados para fins de segurança geralmente são limitados às contas com privilégios de segurança ou de administrador.
- **Ver Status do Sistema:** Obter um relatório da “saúde” e integridade do sistema, o status de suas funções incorporadas, o progresso dos processos em andamento, alertas de segurança/status de invasão e assim por diante.

## Ações de Segurança

Ações reservadas para contas com privilégios de segurança ou de administrador.

- **Adquirir Mesh ID:** Você pode adquirir a mesh ID de qualquer um acessando o sistema.
- **Ativar Contramedidas:** Você pode iniciar [contramedidas](12-countermeasures.md) ativas contra um invasor, tais como barrá-lo, rastreá-lo ou fazer uma reinicialização.
- **Atacar:** Você pode tentar travar um programa, incluindo consoles de conta, apps, firewalls, infomorfos, sistemas operacionais e serviços ([Combate na Mesh](14-mesh-combat.md)).
- **Evitar Bloqueio de Sinal:** Você pode tentar superar temporariamente um bloqueio de sinal vencendo um Teste Oposto de Interface contra quem está bloqueando ([Bloquear Sinais](13-system-subversion.md#jam-signals)). Se tiver sucesso, você consegue fazer uma transmissão curta (3 segundos, +3 por sucesso maior).
- **Localizar Invasor:** Se você suspeitar que um hacker invadiu seu sistema, você pode tentar identificá-lo ([Localizar Invasor](12-countermeasures.md#locate-intruder)).
- **Barrar:** Você pode bloquear uma mesh ID específica de acessar o sistema. Se essa mesh ID está atualmente acessando o sistema, seu console de conta deve ser travado em combate na mesh primeiro.
- **Monitorar Atividade:** Você pode espiar as atividades de um app ou as ações de outro usuário específico em tempo real. Se o usuário estiver hackeando o sistema, isso pode exigir vencer um Teste Oposto de Infoseg para apurar o que ele está fazendo. Os hackers às vezes usam isso para monitorar o firewall ou o defensor do sistema.
- **Escanear Infomorfo:** Você pode analisar um infomorfo com um Teste de Interface bem-sucedido. Isso lhe dirá qual o tipo de infomorfo, o seu perfil público (se não for privado), sua mesh ID, e se é ou não uma ILA ou um forque. Uma análise mais aprofundada exige um Teste de Interface e um prazo de 10 minutos, mas revelará seu [ID de código digital](../15/07-identity-systems.md#digital-code) e qualquer aplicativo embutido ou meshware. Se o infomorfo tem o meshware véu digital, esse é um teste oposto contra a Programação 80 do véu.
- **Rastrear:** Você pode rastrear um usuário até a sua localização física (ou pelo menos o sistema de onde ele se origina); veja [Rastreamento Físico](10-tracking.md#physical-tracking).
- **Disparar Alerta:** Você pode colocar o sistema em alerta passivo ou ativo.
- **Ver Logs:** Acessar os logs do sistema. Isso vai dizer quando os usuários acessaram o sistema, quais apps eles usaram, quais arquivos eles visualizaram ou modificaram, quais sistemas vinculados eles acessaram, seus mesh IDs, quais outros dispositivos estavam ao alcance sem fio em quais horários, e históricos forenses semelhantes. Os logs mais antigos (mais de um mês) frequentemente são backupeados em um serviço da nuvem e apagados. Buscar por uma informação específica pode exigir um Teste de Pesquisa.
- **Ver Usuários:** Você pode ver quais outros usuários estão acessando atualmente o sistema, quais aplicativos eles estão usando e seus mesh IDs. Invasores com status oculto não serão mostrados.

## Ações de Administrador

Apenas contas de administrador estão autorizadas a realizar essas ações.

- **Desativar Sensores ou Funções de Dispositivo:** Você pode desligar sensores ou outras funções físicas. Isso pode impedir que alguém com acesso físico ao dispositivo o utilize.
- **Modificar Contas:** Você pode adicionar novas contas e remover antigas. Não é possível remover contas que estão sendo acessadas no momento — o usuário deve deslogar completamente primeiro (ou ter seu console de conta travado em combate na mesh). Todo dispositivo tem uma conta de administrador root que não pode ser removida (sem eliminar o sistema).
- **Modificar Privilégios:** Você pode adicionar ou remover privilégios específicos, como permitir o acesso a determinados diretórios, arquivos, sensores ou apps. Você também pode rebaixar contas de segurança para privilégios de usuários ou elevar contas de usuário para contas de segurança e contas de segurança para contas de administrador. Você pode remover ou rebaixar privilégios de administrador de outras contas, entretanto todo dispositivo tem uma conta de administrador root que não pode ser modificada (em ware, isso geralmente significa a pessoa em que eles estão instalados).
- **Modificar Programa:** Você pode instalar, remover e atualizar apps.
- **Eliminar Sistema:** Você pode apagar completamente todos os dados do sistema: todos os arquivos, apps, contas, infomorfos e o próprio sistema operacional. Esse é um processo longo, que leva 1 minuto para ciscos, 3 minutos para terminais e 10 para servidores. Os infomorfos são imediatamente avisados, para que tenham tempo para se copiarem ou mudarem para um novo dispositivo habitado. Os métodos forenses (um Teste de Interface) podem ser usados para recuperar os dados eliminados, pelo menos até que o sistema seja reinstalado, a menos que você opte por eliminar de forma segura o sistema (dobre o tempo).

## Scripts

Um script é um programa simples — um lote de instruções — que você pode embutir em um sistema para ser executado em um horário agendado posterior ou na ocorrência de um determinado evento, sem a sua presença. Quando ativado, o script vai realizar uma série de ações pré-definidas, em ordem. Scripts são comumente usados por hackers para subverter um sistema enquanto estão ocupados em outros lugares, mas eles também podem ser usados em seus próprios sistemas (embora geralmente seja mais fácil dizer às ILAs o que fazer).

Scripts podem ser programados em tempo real ou pré-programados. Ao compor o script, você deve detalhar quais ações o script vai fazer, em que ordem e em que momentos (ou eventos de ativação). O script não pode conter mais etapas/tarefas do que sua perícia Programação ÷ 10. Para programar um script, você deve ter sucesso em um Teste de Programação com um prazo de 1 hora por etapa. Os sucessos maiores fornecem 1 ponto de parada de Inspiração que o script pode usar para fazer testes.

Para carregar um script em um sistema, você deve ter os privilégios de acesso necessários ou deve ter sucesso em um [Teste de Hackeamento](11-hacking.md#hacking-tests). Se for bem-sucedido, o script é carregado no sistema e será executado como programado. Uma vez que o script é ativado, ele executa a sequência de ações pré-programadas. O script é considerado como tendo os mesmos privilégios de acesso que a conta que o executa. As perícias de Infoseg, Interface e Pesquisa do programador são utilizadas para quaisquer testes exigidos por essas ações, mas apenas a própria parada de Inspiração do script pode ser usada.

Scripts podem ser descobertos em [auditorias de segurança](12-countermeasures.md#security-audits).
