# Hackeamento

No reino digital, tudo tem uma vulnerabilidade. Os programas são o clássico “plano que nunca sobrevive ao contato com o inimigo”. Os hackers estão continuamente explorando falhas no código que lhes permitem explorá-lo para outros fins. Tão rapidamente quanto essas falhas são descobertas e corrigidas, novas são descobertas e usadas para obter vantagem.

Os hackers rotineiramente compartilham, trocam e vendem suas formas de violação online. As melhores delas acabam em bibliotecas de violações pré-empacotadas — ferramentas programáticas que escaneiam um alvo, abertamente ou com sutileza, testam vulnerabilidades e executam ataques automaticamente.

Há muitos métodos que você pode usar para hackear um sistema. O primeiro é contornar a [autenticação](../13/05-authentication-and-encryption.md) de uma conta legítima, mas isso exige conhecimento anterior da conta e requer tempo e esforços especiais. A segunda é [farejar](../13/04-devices-apps-and-links.md#sniffing) o tráfego de um usuário legítimo e remotamente [mascarar comandos](../13/05-authentication-and-encryption.md#spoofing), que podem ser poderosos mas limitados. O método mais comum de hackear é obter acesso direto ao alvo ([Invasão](../13/11-hacking.md#intrusion)) e subvertê-lo por dentro ([Subversão](../13/13-system-subversion.md)).

## Testes de Hackeamento

Quase todos os esforços de invasão e subversão dependem de Testes de Hackeamento. Esse teste oposto coloca a perícia Infoseg do hacker contra a [Graduação do Firewall](../13/12-countermeasures.md#firewall-ratings) do alvo — ou a perícia Infoseg do defensor se o sistema é [ativamente defendido](../13/12-countermeasures.md#active-defense). Se o hacker vencer, ele consegue a ação pretendida, caso contrário, sua ação falha.

## Invasão

A arte da invasão envolve penetrar na segurança de um sistema, aproveitando-se de defeitos no código e falhas nos protocolos de segurança para contornar as defesas do alvo. Os melhores métodos envolvem a infiltração de um sistema de forma lenta e discreta, sem chamar a atenção de um vigia. No entanto, quando necessário, um hacker pode deixar o fingimento de lado e tentar abrir caminho com força bruta.

### Estabelecendo uma Conexão

Para hackear um sistema, é preciso estabelecer uma conexão direta com o alvo. Se você está fazendo uma conexão sem fio direta, o sistema alvo deve ter acesso sem fio e estar do alcance de rádio sem fio, e você deve saber que o alvo está lá ([Sinais Camuflados](../13/04-devices-apps-and-links.md#stealthed-signals)). Se o sistema for cabeado, você deve plugar fisicamente usando uma porta de acesso comum (ou ligação dérmica, se o sistema estiver equipado para isso) ou grampear um cabo que transmite o tráfego do sistema (exigindo um Teste de Aparelhagem: Eletrônica e equipamentos apropriados, como um kit de eletrônica). Se você estiver acessando o através da mesh, o sistema deve estar online e você saber a mesh ID ou ter uma forma de encontrá-la através de pesquisa ou rastreamento.

### Ataque de Força Bruta

O hackeamento de força bruta é rápido, caótico e barulhento. Você seleciona o alvo, aciona seu app de violação e deixa ele tentar ataques rápidos e metódicos contra as vulnerabilidades mais comuns. As invasões de força bruta requerem apenas uma ação complexa, o que significa que elas podem ser um fator relevante até mesmo em cenas de combate. No entanto, o alvo é quase sempre alertado para a invasão digital.

Para usar força bruta em um alvo, faça um Teste de Hackeamento. O invasor sofre um modificador −30. Se você tiver sucesso, você ganha acesso ao sistema alvo com [privilégios de acesso](../13/05-authentication-and-encryption.md#accounts--access-privileges) de nível de usuário e status descoberto ([Status do Invasor](../13/11-hacking.md#intruder-status)), e o sistema entra em alerta ativo ([Alertas de Segurança](../13/12-countermeasures.md#security-alerts)). Cada sucesso maior aumenta seus privilégios em um grau (primeiro para segurança e depois para administrador). Com um sucesso crítico, você obtém [status infiltrado](../13/11-hacking.md#covert), mas um [alerta passivo](../13/12-countermeasures.md#passive-alert) ainda é acionado. Nessa situação, tanto os resultados maiores quanto os críticos têm efeito simultaneamente. Se você perder o teste oposto, você falhar em entrar e o sistema entra em [alerta passivo](../13/12-countermeasures.md#passive-alert).

### Invasão Sutil

O método preferido de dominar um alvo é sondá-lo discretamente e sistematicamente, analisar sua configuração e seus programas, e determinar as vulnerabilidades mais prováveis. A invasão sutil é uma ação de tarefa com um prazo de 1 hora (MJs podem alterar esse prazo para sistemas fortemente protegidos ou desprotegidos). Faça um Teste de Hackeamento. Se você tiver sucesso, você ganha acesso ao sistema alvo com [privilégios de acesso](../13/05-authentication-and-encryption.md#accounts--access-privileges) de nível de usuário e status infiltrado ([Status do Invasor](../13/11-hacking.md#intruder-status)). Cada sucesso maior aumenta seus privilégios em um grau (primeiro para segurança e depois para administrador). Com um sucesso crítico, você obtém [status oculto](../13/11-hacking.md#hidden); o defensor continua sem saber da invasão. Resultados maiores e críticos podem ser aplicados.

Se o firewall tiver sucesso mas perde no teste oposto, um alerta passivo é acionado ([Alertas de Segurança](../13/12-countermeasures.md#security-alerts)). Se o firewall vencer o teste oposto, você falhar em entrar e o sistema entra em [alerta passivo](../13/12-countermeasures.md#passive-alert).

### Hackeamento Conjunto

Você pode cooperar com outros para hackear: uma pessoa assume a liderança, usando sua conexão, enquanto as outras tomam ações para apoiar, fornecendo um [bônus de trabalho em equipe](../03/01-how-to-play.md#teamwork). Somente o hacker principal pode usar paradas, e apenas ele é alvo de [contramedidas](../13/12-countermeasures.md).

Como alternativa, vários hackers podem hackear separadamente o mesmo sistema simultaneamente. Embora suas ações sejam tratadas separadamente, se qualquer uma deles acionar um alerta, todos os invasores no sistema serão afetados.

### Hackeando Novamente

Se você tiver hackeado com sucesso o sistema uma vez, você receberá um bônus +30 em Testes de Hackeamento para invadir novamente o sistema, até que uma [auditoria de segurança](../13/12-countermeasures.md#security-audits) corrija a vulnerabilidade. Você também pode fornecer esse bônus para os outros compartilhando a violação usada.

## Status do Invasor

O status do invasor é uma maneira simples de medir a situação de um hacker enquanto invadem um sistema — ele chamou a atenção das defesas ou ele continua discreto? O status do invasor é determinado pela primeira vez quando você acessa um sistema, embora ele possa mudar de acordo com os eventos. Observe que o status do invasor é uma coisa separada dos [privilégios de acesso](../13/05-authentication-and-encryption.md#accounts--access-privileges) da conta. Este último representa suas permissões e o que você está autorizado a fazer em um sistema. O primeiro indica a consciência do sistema sobre a sua verdadeira natureza como um invasor.

### Oculto

Se o seu status está oculto, o sistema não tem noção nenhuma da sua presença e não pode agir contra você. Suas ações não são registradas em logs e outros usuários não podem detectar você. A sua presença pode deixar alguns vestígios, mas eles exigirão uma análise detalhada e algum tempo serem encontrados.

Enquanto oculto, você recebe um modificador +10 em quaisquer esforços para [subverter o sistema](../13/13-system-subversion.md).

### Infiltrado

Com status infiltrado, sua presença no sistema parece legítima e você não atrai nenhuma atenção especial. Só uma verificação abrangente revelará anormalidades. O sistema está ciente de você, mas não o considera uma ameaça.

### Descoberto

Se você tiver status descoberto, o sistema está ciente que a sua presença é uma invasão. Estar descoberto aciona automaticamente um [alerta ativo](../13/12-countermeasures.md#active-alert).

## Alterando o Status

Seu status de invasor pode ser alterado dependendo das suas ações e das ações do sistema.

### Melhorando o Status

Você pode tentar melhorar o seu status para se esconder melhor do sistema. Isso requer uma ação complexa e um Teste de Hackeamento. Se você vencer, você pode melhorar seu status em um grau (descoberto para infiltrado ou infiltrado para oculto). Um sucesso maior leva isso um grau adiante.

Observe que alterar seu status não afeta o estado de alerta do sistema. Se você for de descoberto para infiltrado ou oculto, o sistema ainda está ciente que houve uma invasão, ele apenas não pode localizá-lo atualmente.

### Exposição

Sempre que você usar a pericia Infoseg e se envolver em hacks enquanto estiver em um sistema, você corre o risco de se expor à segurança do sistema. Se você rolar uma falha maior em um Teste de Hackeamento, você aciona um [alerta passivo](../13/12-countermeasures.md#passive-alert). Isso pode instigar o defensor do sistema a dar uma olhada mais atenta.

Se você rolar uma falha crítica em um Teste de Hackeamento, seu status vai automaticamente para descoberto e o sistema entra em [alerta ativo](../13/12-countermeasures.md#active-alert).

Se você atacar um alvo em [combate na mesh](../13/14-mesh-combat.md), você também deve fazer um Teste de Hackeamento ou acionar um alerta passivo.

### Localizando

Se um sistema está em alerta passivo, o defensor do sistema pode tentar localizar invasores. Isso requer uma ação complexa e um Teste Oposto de Infoseg entre o defensor e cada hacker. Se o hacker estiver oculto, o defensor recebe um modificador −30. Se o defensor vencer, o status do hacker se torna descoberto e o sistema entra em alerta ativo.

<blockquote>

## Hackeamento Consolidado

Às vezes, um PJ pode querer hackear um sistema que é de menor importância para a história. Em vez de fazer cada hack passo a passo, o MJ pode consolidar esse hack em um único Teste de Infoseg de ação de tarefa. Primeiro, o hacker deve compilar uma lista curta de objetivos após hackear o sistema (ex.: localizar um arquivo, destravar uma porta, repetir um fluxo de sensor, eliminar rastros). Defina um prazo de 1 hora mais 10 minutos por objetivo. Se usar força bruta, o prazo será 2 turnos de ação por objetivo. Aplique os seguintes modificadores: −30 se usar força bruta, +10 se hackear um cisco, −10 se hackear um servidor e −10 se hackear múltiplos sistemas.

| Resultado do Teste de Infoseg | Resultado do Hackeamento                                                |
|:----------------------------- |:----------------------------------------------------------------------- |
| Falha Crítica                 | Hack falha, hacker rastreado.                                           |
| Falha Maior                   | Hack falha.                                                             |
| Falha                         | Hacker alcança apenas o primeiro objetivo.                              |
| Sucesso                       | Hacker alcança todos os objetivos.                                      |
| Sucesso Maior                 | Hacker alcança todos os objetivos em 25% menos tempo por sucesso maior. |
| Sucesso Crítico               | Hacker alcança todos os objetivos, instala brecha no sistema.           |

</blockquote>
