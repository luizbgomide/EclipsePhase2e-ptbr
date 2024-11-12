# Combate na Mesh

“Combate” na mesh é uma abstração. Ao contrário do combate físico, não há avatares duelando, nem manobras digitais, nem programas mortais. O combate na mesh representa esforços para comprometer a estabilidade do programa — estados mentais de infomorfos (incluindo cibercérebros), consoles de contas, apps (incluindo o firewall), ou os próprios sistemas operacionais — forçando-os a travar. O combate na mesh segue as regras normais do combate, como descritas abaixo.

## Local vs. Remoto

Os ataques na mesh são locais (contra um alvo no mesmo sistema) ou remotos (contra um sistema inteiramente separado).

### Ataques Locais

Para atacar um alvo local na mesh, você deve ter acesso ao sistema em que ele está sendo executado. Isso pode exigir que você localize e hackeie o sistema primeiro. Por exemplo, se um infomorfo usando um servidor remoto como seu dispositivo habitado hackeia os seus insertos da mesh, você pode atacar o console de conta dele em seus implantes. No entanto, você não seria capaz de atacar o infomorfo diretamente, a não ser que você o rastreie até o seu servidor habitado, invada e ataque por lá.

### Ataques Remotos

Você pode atacar os sistemas operacionais de dispositivos remotos, inundando-os com tráfego e pacotes inválidos projetados para criar instabilidade. Essencialmente, você está alvejando dispositivo remoto inteiro com um ataque de negação de serviço, na esperança de prejudicá-lo ou travá-lo. Consoles de conta, apps, cibercérebros e infomorfos não podem ser alvejados remotamente.

## Ataque e Defesa na Mesh

Você ataca um alvo local ou remoto, tentando desestabilizar seus processos programáticos subjacentes. Faça um ação complexa e role a perícia Infoseg. Para um ataque local, se você não tiver privilégios de administrador, você sofre um modificador −30.

Se o defensor do sistema estiver ativamente protegendo o alvo ([Proteger Programa](06-mesh-actions.md#universal-actions)), esse é o um teste oposto contra a perícia Infoseg dele. Se não, é um teste de sucesso padrão. Ataques remotos são opostos pela graduação do Firewall (ou a perícia Infoseg do defensor se estiver defendendo ativamente).

**Consciência de Ataques:** Não é automaticamente aparente de onde um ataque da mesh se origina — ou mesmo que ele está acontecendo. Se você, seu programa, ou o sistema operacional do dispositivo que você está acessando/executando recebe dano ou ferimentos, você perceberá isso como mau funcionamento do programa — uma ocorrência infelizmente comum, até mesmo em Eclipse Phase. Se você desconfiar que está sob ataque, você pode usar uma ação complexa e fazer um Teste de Infoseg para identificar o atacante e sua mesh ID.

Os firewalls são treinados para detectar ataques na mesh. Sempre que um invasor fizer um ataque na mesh, ele também deve fazer um Teste de Hackeamento. Se ele perder, um alerta passivo é acionado.

## Dano e Blindagem na Mesh

Se o seu ataque vencer, você inflige dano. Um ataque na mesh padrão inflige VD 2d10. Alguns apps ou circunstâncias especiais podem modificar esse dano. Cada sucesso maior inflige um dano de 1d6 extra. Os sucessos críticos significam que o dano é duplicado.

Alguns apps, infomorfos e sistemas resistentes possuem redundâncias incorporadas para protegê-los de ataques na mesh. Isso conta como “blindagem” e é subtraído da rolagem de dano.

## Ferimentos na Mesh

Se o dano infligido exceder o Limiar de Ferimento do seu programa, um ferimento é infligido. Em combate na mesh, ferimentos representam processos quebrados, instabilidade, vazamentos de memória, e outros erros. Cada ferimento inflige um modificador −10 em todas as ações.

Ao contrário dos ferimentos físicos, os ferimentos na mesh não provocam provas contra derrubada ou inconsciência.

**Regra Opcional:** Para cada ferimento, há uma chance de 10% cumulativa de você sofre um [defeito](16-glitches.md); role sempre que um ferimento for infligido.

## Durabilidade na Mesh

Se o programa acumular dano que iguala ou excede sua Durabilidade ele imediatamente trava e deixa de funcionar. Todas as transferências de dados e outros processos em andamento imediatamente param. Se o seu console de conta travar, você é expulso do sistema (embora você possa tentar fazer login ou hackeá-lo novamente). Os infomorfos travados não podem mais agir. Se um cibercérebro trava, o morfo fica congelado ou cai. Se um serviço ou sistema operacional trava, todos os usuários são desconectados (incluindo o atacante) e quaisquer outros processos em andamento no sistema são interrompidos.

Infomorfos, cibercérebros, serviços e sistemas operacionais [reinicializam](12-countermeasures.md#rebootshutdown) automaticamente, o que leva 1d6 turnos de ação. A reinicialização elimina todos os danos e ferimentos acumulados na mesh.

Programas (exceto consoles de contas) ainda podem ser atacados depois de serem travados. Isso representa tentativas de danificar irremediavelmente o código para que ele não possa mais ser executado. Se o programa acumular dano que iguala ou excede seu Grau de Destruição, ele é permanentemente corrompido. Apps e serviços devem ser reinstalados. Os cibercérebros e dispositivos devem ser reparados ou substituídos. Infomorfos e egos dentro de cibercérebros estão efetivamente mortos. Danos e ferimentos infligidos em programas travados são aplicados quando eles reinicializam.

**Infomorfos Distribuídos:** Infomorfos que são distribuídos devem dividir uniformemente sua Durabilidade entre os dispositivos. O Limiar de Ferimento permanece inalterado, mas um ferimento é infligido se a sua presença distribuída em qualquer dispositivo (ou o próprio dispositivo) for travada.

<!-- CLEANED blockquote class="table" -->

### Durabilidade na Mesh

<!--sort-->

| Programa                                             | Limiar de Ferimento | Durabilidade | Grau de Destruição |
|:---------------------------------------------------- |:-------------------:|:------------:|:------------------:|
| Console de Conta                                     |          3          |      15      |        N/A         |
| ILA                                                  |          4          |      20      |         40         |
| App                                                  |          2          |      10      |         20         |
| <!--sort-union--><p class="indent">» App de Firewall</p> |          6          |      30      |         60         |
| Cibercérebro                                         |          7          |      35      |         70         |
| Infomorfo                                            |                     |              |                    |
| <!--sort-union--><p class="indent">» Digimorfo</p> |          5          |      25      |         50         |
| <!--sort-union--><p class="indent">» Agente</p> |          8          |      40      |         80         |
| <!--sort-union--><p class="indent">» Ikon</p> |          6          |      30      |         60         |
| <!--sort-union--><p class="indent">» Operador</p> |          7          |      35      |         70         |
| Sistema Operacional                                  |                     |              |                    |
| <!--sort-union--><p class="indent">» Cisco</p> |          4          |      20      |         40         |
| <!--sort-union--><p class="indent">» Terminal</p> |          8          |      40      |         80         |
| <!--sort-union--><p class="indent">» Servidor</p> |         12          |      60      |        120         |

<!-- CLEANED /blockquote -->

## Reparo de Dano da Mesh

Danos e ferimentos em apps não podem ser reparados; o app deve ser reinicializado para remover erros. Infomorfos, cibercérebros, consoles de contas e sistemas operacionais possuem configurações de redundância embutidas que corrigirão processos quebrados e erros ao longo do tempo. Esses programas vão reparar 1d10 de dano ou 1 ferimento por minuto; todo dano deve ser corrigido primeiro.
