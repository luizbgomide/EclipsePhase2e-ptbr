# Contramedidas

A luta contínua entre hackers e a segurança eletrônica é melhor descrita como uma corrida armamentista em constante evolução. Os hackers continuamente encontram e compartilham novas violações que permitem subverter novos sistemas, os fornecedores de software lançam atualizações de correções instaladas automaticamente para tapar os buracos, em uma repetição sem fim. Os administradores de sistema e hackers de segurança possuem várias de opções para lidar com invasores, mas o nível de segurança de um sistema pode variar desde inexistente até extremamente hostil.

## Firewall

Em Eclipse Phase, um firewall é um pacote de segurança de rede neural não sapiente que monitora o tráfego da rede e defende contra hackers. Todo sistema tem um app de firewall defendendo-o ativamente. Os firewalls podem iniciar contramedidas automáticas, dependendo da sua programação.

Cada firewall tem uma graduação que mede suas capacidades defensivas. As graduações do firewall são baseadas no tipo de dispositivo, conforme indicado na tabela Graduações do Firewall. Isso é usado para se opor a [Testes de Hackeamento](../13/11-hacking.md#hacking-tests) feitos por hackers. A critério do MJ, alguns firewalls podem ser mais fracos se forem antigos ou desatualizados ou mais fortes se forem de última geração.

Se o app de firewall em um dispositivo for excluído ou travado, testes para hackear o sistema não sofrem oposição até que o firewall seja restaurado, a menos que um defensor do sistema se envolva em monitoramento ativo.

<!-- CLEANED blockquote class="table" -->

### Graduações do Firewall

| Dispositivo | Graduação do Firewall |
|:-----------:|:---------------------:|
|    Cisco    |          30           |
|  Terminal   |          50           |
|  Servidor   |          70           |

<!-- CLEANED /blockquote -->

### Modelos de Ameaça do Firewall

Os firewalls constroem um entendimento sobre quais comportamentos são comuns ou incomuns e usam esses algoritmos para identificar potenciais invasores. Por exemplo, um firewall sabe quando um determinado usuário geralmente faz login, de onde, quais os apps ele usa, quais arquivos ele acessa, etc. Se um hacker usar as credenciais deste usuário mas de um lugar diferente, em um horário diferente, e fazendo coisas diferentes, o firewall pode suspeitar que algo está errado e dar uma olhada mais atenta. Se um hacker usar as credenciais deste usuário mas de um lugar diferente, em um horário diferente, e fazendo coisas diferentes, o firewall pode suspeitar que algo está errado e dar uma olhada mais atenta. Até mesmo um hacker habilidoso ainda pode ser identificado por ações anômalas.

Os MJs pode pedir um Teste de Hackeamento sempre que sentirem que um hacker pode ter excedido a atividade normal. Se o firewall vencer, rebaixe o status do hacker em um grau — de oculto para infiltrado (acionando um alerta passivo), ou de infiltrado para descoberto (acionando um alerta ativo). Como alternativa, um hacker que está claramente envolvido em atividades suspeitas em um sistema bastante seguro pode acionar um alerta, não importando o resultado da rolagem. Use esta opção com moderação, e lembre-se que ela se aplica tanto a PJs quanto a PNJs.

## Defensor do Sistema

O firewall é apenas a primeira linha de defesa. Quase todos os sistemas também são monitorados por um ente conhecido como _defendor do sistema_. Para a maioria dos dispositivos, este é a ILA residente. Personagens com perícia em Infoseg geralmente protegem suas próprias PANs; os que não têm, dependem de suas musas. Equipes operacionais dedicadas muitas vezes deixam suas PANs escravas ao hacker do grupo, que pode supervisionar a segurança do grupo todo.

Os defensores do sistema têm privilégios de segurança, ou até de administrador. Se um alerta passivo ou ativo for acionado, eles são informados. Os defensores são responsáveis por ativar contramedidas não automáticas.

**Múltiplos Defensores:** Alguns sistemas podem ter mais de um defensor presente. Quando se trata de contramedidas ativas e outras ações, os defensores escolhem trabalhar juntos ou separadamente. Se atuando em conjunto, os outros defensores fornecem um [bônus de trabalho em equipe](../03/01-how-to-play.md#teamwork); somente o defensor principal pode usar paradas. Se atuando individualmente, cada defensor depende de suas próprias Iniciativa, perícias e paradas.

### Defesa Ativa

Como uma ação complexa, um defensor do sistema pode assumir o controle das defesas do firewall de um sistema por um turno de ação. Enquanto estiver envolvido na defesa ativa, use a perícia Infoseg do defensor no lugar da graduação do Firewall em Testes de Hackeamento. O defensor pode usar paradas nesses testes. Apenas um defensor pode se engajar na defesa ativa por vez.

## Alertas de Segurança

Se uma tentativa de hackeamento não for furtiva o suficiente, é provável que ela atraia a atenção do firewall e do defensor do sistema. Os alertas de segurança ocorrem em dois tipos: passivos e ativos.

### Alerta Passivo

Os alertas passivos são acionados sempre que o firewall ou o defensor têm sucesso em sua rolagem, mas perde o teste oposto contra um [ataque de invasão sutil](../13/11-hacking.md#subtle-intrusion) do hacker. Eles também são disparados quando o hacker se expõe ao rolar uma falha maior em um Teste de Hackeamento dentro do sistema.

Alertas passivos ocorrem quando um sistema detecta atividade anômala que pode indicar uma tentativa de hackeamento em progresso. O sistema imediatamente dá um sinal visual ou acústico para os defensores do sistema e, possivelmente, para o proprietário ou os administradores. O sistema pode ser configurado para iniciar automaticamente uma ou mais contramedidas passivas (veja abaixo). Dependendo do sistema, hackers de segurança ou IAs extras podem ser trazidos para ajudar a investigar. Se o invasor não for encontrado novamente ou não for localizado dentro de um período de tempo definido (geralmente cerca de 10 minutos), o alarme é desativado e o evento é logado como uma anomalia.

### Alerta Ativo

Um alerta ativo é acionado quando um invasor atinge o status descoberto ou alguém tenta um ataque de força bruta sem obter um sucesso crítico.

Os alertas ativos são emitidos quando o sistema sabe que um invasor está presente. O sistema alerta imediatamente os defensores do sistema, proprietários e administradores. Outros ativos de segurança (hackers e IAs) podem ser chamados. O sistema também inicia contramedidas ativas contra o invasor (veja abaixo). Os alertas ativos são mantidos enquanto o invasor estiver presente e, às vezes, por um longo período depois, para o caso de o hacker retornar.

Quando um sistema está em alerta ativo, todos os invasores sofrem um modificador −10 em Testes de Infoseg pela duração do alerta.

## Contramedidas Passivas

As contramedidas passivas são iniciadas como precaução sempre que há atividade incomum ou outros sinais de que pode haver um invasor ou malware envolvido. Algumas dessas contramedidas são automaticamente ativadas pelo sistema ou firewall sempre que um alerta passivo ou ativo for iniciado.

### Backupear

**\[Automática\]**

Alguns sistemas são configurados para fazer backup automaticamente de todos os logs e dados críticos quando um alerta passivo é ativado. Esses backups frequentemente são copiados para um armazenamento seguro na nuvem ou para outro sistema dedicado, onde eles são protegidos contra exclusão.

### Filtrar Saída

**\[Automática\]**

Em uma tentativa de impedir a extração de dados, o firewall bloqueia temporariamente tentativas de download ou transferência de arquivos ou tipos de dados específicos. Os backups de ego e os logs de acesso são comumente sinalizados e bloqueados, embora cada sistema possa designar as suas próprias especificidades. Para superar essa filtragem, um hacker deve fazer uma ação complexa e vencer um Teste de Hackeamento.

### Localizar Invasor

O defensor do sistema pode tentar rastrear a origem do alerta passivo e localizar quaisquer intrusos. Veja [Localizando](../13/11-hacking.md#zeroing-in).

### Reautenticar

**\[Automática\]**

Os firewalls dos sistemas podem ser configurados para reautenticar automaticamente todos os usuários ativos sempre que um alerta passivo for ativado. Cada usuário será reautenticado em 1d6 turnos de ação, embora um sistema grande com centenas ou milhares de usuários possa levar 1d6 minutos. Quaisquer invasores que não tenham status oculto devem fazer um Teste de Hackeamento contra o firewall do sistema. Se o firewall vencer, o invasor ganha o status descoberto e o sistema entra em alerta ativo. Se o invasor possuir credenciais válidas (como uma senha roubada), ele tem sucesso automaticamente.

### Reduzir Privilégios

**\[Automática\]**

Como medida de proteção, o sistema reduz temporariamente os privilégios de acesso disponíveis para os usuários padrão — e, às vezes, para contas de segurança também. Isso significa que usuários legítimos podem ser incapazes de realizar certas funções, usar alguns apps/serviços ou acessar determinados diretórios sem a autorização de uma conta de administrador.

## Contramedidas Ativas

As contramedidas ativas são iniciadas quando um invasor é totalmente detectado (status descoberto). Os sistemas/firewalls podem ser configurados para acionar imediatamente contramedidas automáticas; outras podem ser executadas a critério do defensor.

### Contrainvadir

Apesar de ilegal em algumas jurisdições, os defensores do sistema podem proteger proativamente suas unidades contra-atacando o hacker. Para que isso ocorra, o invasor primeiro deve ser [rastreado com sucesso](../13/10-tracking.md#mesh-activity-tracking) e sua mesh ID obtida. Quando isso ocorrer, o defensor pode então iniciar sua própria invasão no sistema o qual o hacker se origina.

### Travar e Barrar

O defensor pode tentar travar o console de conta de um invasor que foi descoberto ([Combate na Mesh](../13/14-mesh-combat.md)). Se bem-sucedido, a mesh ID do invasor pode ser bloqueada de acessar o sistema novamente ([Barrar](../13/06-mesh-actions.md#security-actions)). As contas hackeadas são colocadas em quarentena ou excluídas, e não podem ser utilizadas novamente até que uma auditoria de segurança aprove e as restabeleça.

### Reinicializar/Desligar

A opção nuclear para lidar com um intruso é reinicializar ou desligar o sistema. Nesse caso, o sistema fecha todas as conexões com outros sistemas, desloga os usuários, encerra todos os processos e se desliga — expulsando assim o invasor (pelo menos temporariamente). A desvantagem, é claro, é que o sistema deve interromper suas atividades. Por exemplo, desligar seus insertos da mesh significa perder toda a comunicação com os companheiros de equipe, acesso à realidade aumentada e controle sobre dispositivos escravos/vinculados. O invasor pode tentar acessar o sistema quando ele for reinicializado, mas se ele não tiver credenciais de conta ou uma brecha, ele vai precisar hackear novamente. Os defensores remotos também precisarão fazer uma ação para logar de volta.

Iniciar uma reinicialização/desligamento usa apenas uma ação complexa, mas o processo de desligamento real leva 1d6 turnos de ação (ciscos e terminais) ou 1d6 minutos (servidores). A reinicialização demora uma quantidade de tempo equivalente.

Os usuários logados (incluindo invasores) são avisados quando uma reinicialização ou desligamento foi iniciada. Uma vez iniciado, o processo de desligamento não pode ser interrompido, mas pode ser prolongado por 1d6 turnos de ação com uma ação complexa; isso requer privilégios de segurança/administrador ou um Teste de Infoseg.

**Desligamento Direto:** O processo de desligamento leva tempo para poder avisar usuários, salvar arquivos, encerrar processos corretamente, e evitar problemas no sistema. Um desligamento "direto" também é possível em situações de emergência. Isso requer um Teste de Interface, uma ação complexa, e privilégios de administrador. Se bem-sucedido, o sistema é desligado no fim deste turno de ação. Os desligamentos diretos exigem o dobro do tempo de reinicialização e podem resultar em perdas de dados (a critério do MJ). Você também pode provocar um desligamento direto ao desligar fisicamente, cortar a energia ou destruir o dispositivo.

### Encerrar Conexões

**\[Automática\]**

Uma alternativa para o desligamento ou reinicialização é simplesmente cortar todas as conexões (geralmente desativando temporariamente as capacidades sem fio do dispositivo e indo para "modo avião"). O sistema perde todas as conexões ativas, mas quaisquer invasores são removidos. O encerramento usa uma ação complexa para ser iniciado e finaliza no fim deste turno de ação. A conectividade pode ser configurada para ser restaurada no próximo turno de ação, em um período de tempo definido, ou apenas quando iniciada por um administrador local. Reiniciar a conectividade leva um turno de ação. Qualquer usuário remoto precisará logar de novo; invasores sem credenciais adequadas precisarão hackear o sistema novamente. Enquanto as conexões estão encerradas, o sistema não pode se comunicar e interagir com outros sistemas.

### Rastrear

**\[Automática\]**

Os defensores podem iniciar um rastreamento em um invasor descoberto. A maioria dos hackers tem o cuidado de usar um serviço de anonimização para mascarar sua mesh ID e localização, mas esse nem sempre é o caso. Se um invasor for localizado fisicamente, o procedimento padrão é alertar a segurança do habitat ou outras polícias locais ou privadas, que se mobilizarão para prender o suspeito.

## Auditorias de Segurança

Os sistemas preocupados com sua segurança são submetidos a auditorias regularmente, ou após qualquer invasão detectada, com a intenção de corrigir vulnerabilidades que foram violadas, eliminar brechas instaladas, e determinar o que o invasor fez e o que ele queria. O MJ determina quando uma auditoria é realizada. Faça um Teste de Infoseg para o defensor do sistema, com um prazo de 24 horas. Se bem-sucedida, quaisquer vulnerabilidades violadas recentemente são corrigidas (o hacker perde o bônus de +30 para hackear novamente). Os sucessos maiores revelam brechas ou fornecem informações adicionais sobre o que o invasor estava fazendo.

<!-- CLEANED blockquote -->

## Projeto de Segurança

Cada sistema é único e lida com a segurança de forma diferente. O MJ determina as configurações de cada sistema.

**Ciscos** são notórios pode ter mínima segurança e defesas desatualizadas. Às vezes, porém, eles são escravos de um nodo controlador "gargalo" com melhor segurança (esse é o caso na maioria das PANs).

**Terminais** têm defesas que dependem em grande parte da consciência de segurança de seu proprietário. As musas agem como defensoras do sistema para insertos da mesh e ectos.

**Servidores** usam ILAs de segurança e tratam suas defesas seriamente. As redes corporativas costumam usar redes em camadas ou sistemas desconectados ([Topologia da Mesh](../13/02-mesh-topology.md)) para proteger recursos críticos. Os hackers de segurança podem estar presentes ou à disposição, chegando em 1d6 turnos de ação. Alguns simplesmente querem expulsar invasores. Outros vão rastrear invasores, enviar forças de segurança ou polícia para prender os suspeitos se forem localizados, ou hackeá-los de volta. As auditorias de segurança provavelmente são frequentes.

<!-- CLEANED /blockquote -->
