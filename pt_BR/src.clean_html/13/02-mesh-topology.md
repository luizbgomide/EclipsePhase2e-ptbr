# Topologia da Mesh

Apesar da mesh com um todo consistir em inúmeros dispositivos, todos conectados aos outros ao redor deles, o layout real é muito mais complexo. Muitas sub-redes existem dentro da própria rede mesh: dispositivos subordinados, VPNs, PANs e sistemas em camadas.

## Dispositivos Subordinados

Alguns dispositivos são subordinados a outros, de modo que todo tráfego e tentativas de acesso passam por um único ponto de ligação bem protegido. Por exemplo, componentes individuais de um sistema de segurança (portas, sensores, etc.) são geralmente subordinados de um nodo de segurança central que serve como um gargalo contra qualquer um tentando hackear o sistema. Todo tráfego entrando e saindo dos dispositivos subordinados é roteado através do mestre. Isso permite que um dispositivo subordinado dependa dos recursos de segurança e monitoramento ativo do mestre. Qualquer um que tentar conectar com ou hackear um dispositivo subordinado é redirecionado para o mestre, para autenticação e verificação de segurança.

Dispositivos subordinados automaticamente aceitam comandos do seu dispositivo mestre. Isso significa que um hacker que invada o sistema mestre pode acessar e emitir comandos legitimamente para um dispositivo subordinado, assumindo que seus [privilégios de acesso](../13/05-authentication-and-encryption.md#accounts--access-privileges) permitam.

## PANs: Redes de Área Pessoal

Como muitas das coisas que você veste, usa, ou implantou estão em mesh, faz sentido criar uma rede entre eles — esta é a sua PAN. Seus insertos da mesh (ou ecto) agem como a central mestre da sua rede; seus outros dispositivos são subordinados. Isso significa que qualquer um que queira acessar esses dispositivos deve passar por você (ou sua musa) primeiro. Você pode interfacear com seus dispositivos na PAN via RA e compartilhar livremente dados entre eles. Você pode compartilhar acesso a esses dispositivos com os outros de forma temporária ou permanente. Por outro lado, qualquer um que hackear você terá acesso aos seus dispositivos subordinados.

## VPNs: Redes Privadas Virtuais

As VPNs ligam nodos através de “túneis” criptografados ponto a ponto através da mesh pública. Essa conexão segura permite aos usuários conectados a comunicação e compartilhamento remoto de serviços e recursos de forma privada. As VPNs permitem que escritórios móveis, redes sociais, tacnets e outras redes privadas existam e funcionem dentro da vasta mesh.

Em termos práticos, as VPNs oferecem uma criptografia melhor do que o tráfego comum da mesh, dificultando o [farejamento](../13/04-devices-apps-and-links.md#sniffing) de suas conexões, embora você ainda possa ser [rastreado](../13/10-tracking.md). No entanto, se um dos nodos dentro da VPN for hackeado, esse tráfego se torna vulnerável.

## Sistemas em Camadas

As redes de hipercorps, habitats, e grandes sistemas semelhantes operam em um modelo de camadas. Para poder acessar um dispositivo ou rede específica, você primeiro precisa acessar os nodos ou redes das camadas acima. Nodos em uma camada inferior só se comunicarão com dispositivos reconhecidos na camada acima deles. Geralmente quando mais fundo você vai, mais forte fica a segurança. Os sistemas em camadas às vezes podem ser derrotados por [ataques de mascaramento](../13/05-authentication-and-encryption.md#spoofing), falsificando sinais de um nodo da camada superior.

## Sistemas Desconectados

Os sistemas mais fortemente seguros estão desconectados — fisicamente separados da mesh. Eles podem ser cabeados, não possuir transceptores sem fio, ou estarem dentro de barreiras à prova de rádio. A única maneira de acessar esses sistemas é fisicamente, seja se conectando diretamente, inutilizando o invólucro de blindagem de rádio, ou de alguma forma conectando um transceptor sem fio ao sistema.

## Ilhas na Rede

A distância entre os habitats exige uma atenção especial. Um sinal enviado dos planetas interiores para uma estação no Cinturão de Kuiper, a 50&nbsp;UA do sol, poderia demorar até 7 horas, viajando à velocidade da luz. Isso significa que a comunicações entre habitats fora da sua região local (outros dentro de 50.000 quilômetros) pode sofrer atrasos de minutos ou horas — na ida e na volta. Isso faz das formas padrões de comunicação (chamadas de vídeo e mensagens) um desafio, e significa que notícias vindas de longe já estão velhas quando são recebidas. De certo modo, cada região é sua própria ilha na mesh. Em corpos planetários como Marte, Vênus, Lua ou Titã, “local” engloba todos os habitats e redes ligadas em mesh no corpo planetário e em órbita.

Se você deseja pesquisar na mesh ou interagir com alguém ou alguma coisa fora da sua região, o melhor método é transmitir uma ILA de pesquisa (geralmente uma cópia da sua musa) ou um forque. Neste caso, o tempo de transmissão é adicionado ao prazo ajustado de quaisquer ações de tarefas (ex.: pesquisar na mesh de uma estação a 10 minutos-luz adiciona 20 minutos, pois a IA é transmitida para lá e os resultados transmitidos de volta). Já que comunicações de longa distância às vezes sofrem interferência ou são deixadas de lado por itens de maior prioridade, os MJs podem aumentar esse tempo a seu critério. Se a pesquisa envolve correlação e ajuste nos parâmetros de busca baseados em dados acumulados de diferentes locais, o prazo pode ser aumentado exponencialmente devido a necessidade de interações múltiplas.

As redes mesh de exoplanetas estão ainda mais isoladas. Elas só podem ser acessadas em intervalos curtos quando o portão de pandora está aberto para sua localização. Dependendo da colônia ou importância da missão de desbravamento, o tempo entre as conexões podem ser de dias, semanas ou meses.
