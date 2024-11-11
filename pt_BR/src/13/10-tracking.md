# Rastreamento

Toda vez que você interage com outros sistemas na mesh, você deixa rastros da sua presença. Logins são registrados, o acesso é logado e a maioria dos dispositivos até mantém um registro de todos os outros dispositivos que estiveram dentro do alcance de rádio. No mínimo o seu mesh ID será registrado, e possivelmente outros dados também: tipo de dispositivo, duração da conexão, apps usados, RA percebida, tempo, localização física e possivelmente os mesh IDs de outros sistemas que você estava conectado. Além disso, apps e serviços — especialmente os comerciais — mantêm um histórico de uso e frequentemente logam sorrateiramente outros dados sobre você, o que é depois transmitido aos seus fornecedores e vendido a redes de publicidade e outros bancos de registros. Isso pode incluir listas de amigos, apps instalados, histórico de navegação, dados pessoais, formulários salvos e uma “impressão digital” do seu dispositivo que pode ser usada para rastreá-lo online mesmo se você alterar seu mesh ID.

## Rastreamento Físico

Muitos usuários voluntariamente se deixam rastrear fisicamente através da mesh. Para eles, isso é um recurso útil — isso permite que seus amigos os encontrem, seus entes queridos saibam onde estão e as autoridades vêm em seu auxílio em caso de emergência. Encontrar sua localização é simplesmente uma questão de procurá-los no diretório local, e nenhum teste é necessário (supondo que você saiba quem eles são). O posicionamento na mesh é preciso em um raio de 5 metros. Uma vez localizada, a posição do alvo pode ser monitorada à medida que ele se move, desde que ele mantenha uma conexão sem fio ativa com a mesh.

Para as pessoas que não divulgam livremente a sua localização, as seguintes regras se aplicam.

### Rastreando por Mesh ID

Para rastrear a localização física atual ou a última conhecida de um [mesh ID](05-authentication-and-encryption.md#mesh-id) requer um Teste de Pesquisa. Se bem-sucedidos, os resultados são produzidos instantaneamente se o alvo estiver dentro da região da mesh local; alvos mais afastados podem demorar mais, de acordo com o atraso da distância. Os sucessos maiores podem melhorar a localização ou fornecer detalhes adicionais, como dados ao vivo de sensores.

Se o alvo estiver no [modo privativo](01-everyware.md#modo-privativo), aplique um modificador −30 a esse teste. Se o alvo estiver disfarçando ativamente sua atividade mascarando mesh IDs ou alternando mesh IDs falsas, esse se torna um teste oposto colocando a Pesquisa contra a perícia Infoseg do alvo, com um prazo de 1 hora. Se o alvo estiver usando um serviço de anonimização, eles só podem ser rastreados até o próprio serviço ([Anonimizador](../16/04-services.md#serviços-da-mesh)).

### Rastreando por Biometria

A prevalência de ciscos sensores, fluxos de XP e apps de reconhecimento biométrico possibilitam rastrear as pessoas por seu rosto, morfo, modo de andar, voz, roupas, equipamentos, assinaturas térmicas, cheiro e outras características físicas. No entanto, a enorme quantidade de sensores e pessoas pode tornar isso desafiador e disparar tanto falsos-positivos como falsos-negativos. O sucesso de buscas desse tipo é deixado ao gosto do MJ, mas um Teste de Percepção (se estiver observando) ou Pesquisa (se usar um app de comparação biométrico) também pode ser exigido, modificado apropriadamente pelo tamanho da área vigiada, como indicado na tabela de Pesquisas Biométricas.

Se o alvo estiver ativamente evitando a detecção de sensores, esse Teste de Pesquisa é oposto pela perícia Infiltração do alvo (ou Perícia Exótica: Disfarce).

<blockquote class="table">

### Pesquisas Biométricas

| Área                                                     | Modificador |
|:-------------------------------------------------------- |:-----------:|
| Habitat Grande (Cilindro) ou Cidade                      |     −30     |
| Habitat Médio (Toroide) ou Vizinhança                    |     −20     |
| Habitat Pequeno (Enlatado) ou Prédio Grande              |     −10     |
| Alto Tráfego                                             |     −10     |
| Múltiplas Biometrias                                     |     +10     |
| Sensores Biométricos Menos Disponíveis (Cheiro, Térmico) |     −10     |
| Acesso a Redes de Sensores Privados                      |  +10 a +30  |
| Alvo em Modo Privativo                                   |     −10     |

</blockquote>

## Rastreamento de Atividades na Mesh

Ao mesmo tempo em que ver a presença pública de alguém na mesh é relativamente fácil, acompanhar a atividade online menos pública de alguém é geralmente um caso mais desafiador.

### Pesquisando a Presença Pública na Mesh

A maioria das pessoas posta uma vasta quantidade de informações sobre si mesmo online. Perfis de rede social, posts de fóruns, registros de lifelog, coleções de mídias pessoais, projeções XP, portfólios de trabalho, índices de residentes de habitat e mais estão prontamente acessíveis com um Teste de Pesquisa. As pessoas preocupadas com privacidade geralmente tem uma presença online similar, exceto que usam pseudônimos e/ou são visíveis apenas para amigos e contatos selecionados. Dados de perfis privados ainda podem ser pesquisados, mas isso requer o uso de contas de falsas ou de intermediação, e serviços de coleta de dados (aplique um modificador −30 de dados privados). Como alternativa, favores de rep também podem funcionar, especialmente se o alvo é um amigo de um amigo.

A maioria das hipercorps e governos tem acesso a vastas bases de dados compiladas por empresas de publicidade e de informações privadas. Esses podem fornecer dados abrangentes como hábitos de compras e de viagens, pessoas conhecidos e muito mais. O acesso a esses dados é frequentemente obtido usando serviços do mercado negro.

### Rastreando Atividade em Andamento na Mesh

É complicado, mas não impossível, adquirir uma avaliação bem mais detalhada da atividade da mesh de alguém: interações em redes de rep, serviços utilizados, sites navegados, pessoas contatadas, etc. No mínimo, isso implicaria saber o mesh ID e aplicar um modificador −30 de dados obscuros em seu Teste de Pesquisa, simplesmente porque você dependeria em grande parte de logs de acesso e transações que raramente estão disponíveis ao público. Uma abordagem um pouco melhor é focar em um tipo específico de atividade — por exemplo, o uso de determinados serviços online — e implantar hackeamento criterioso de baixo nível (resumido em um simples Teste de Infoseg com prazo de 1 hora) ou usar favores de rep, subornos ou ameaças para obter a informação de que precisa. O MJ deve julgar a cada caso quando aplicar modificadores.

Rastrear as atividades de alguém em um único sistema é muito mais fácil, exigindo uma [ação de monitorar atividade](06-mesh-actions.md#ações-de-segurança).

### Monitoramento Ativo

De longe, a melhor abordagem para monitorar a atividade de alguém na mesh, especialmente em tempo real, é analisar ativamente o tráfego de mesh dela. Isso pode ser feito remotamente e requer apenas mesh ID dela e um app de farejamento ([Farejamento](04-devices-apps-and-links.md#farejamento)). Como alternativa, você pode hackear a PAN dela e monitorar o que ela faz a partir daí.

## Contramedidas de Rastreamento

Dada a prevalência da vigilância e rastreamento na mesh, agentes infiltrados e aqueles preocupados com a sua privacidade têm várias opções além do simples [modo privativo](01-everyware.md#modo-privativo).

### Mesh IDs Descartáveis

O método mais fácil de anonimizar sua atividade de mesh é utilizar uma mesh ID “descartável” para cada transação online separada. As IDs descartáveis são feitas para serem usadas uma vez e então apagadas. Embora sejam ilegais em muitas jurisdições, elas são populares com criminosos e com aqueles que buscam discrição. Você pode usar IDs descartáveis simultaneamente com usa mesh ID real ou com outras descartáveis para diferentes conexões online (embora isso seja considerado uma operação de segurança ruim, pois elas podem ser correlacionadas).

As IDs descartáveis são ideais pois elas só são usadas por curtos períodos. Embora elas possam ser rastreadas ou até mesmo farejadas como outras mesh IDs, o rastro vai acabar quando elas deixarem de ser usadas. Mesmo elas sendo fáceis de usar, elas não são a prova de idiotas, é preciso ter cuidado para evitar vazar sua mesh ID real ou associá-la negligentemente com contas ou outros dados que possam trai-lo. Tenha em mente que uma ID descartável não vai ajudá-lo se você for rastreado ou farejado enquanto ainda a estiver usando. Um oponente habilidoso também pode ser capaz de correlacionar o uso de IDs descartáveis com imagens de câmeras de vigilância física ou outros logs de ID de mesh. Se alguém tentar rastreá-lo usando uma mesh ID descartável que você descartou, eles devem fazer um Teste de Pesquisa com −30 contra sua perícia Infoseg.

**Ectos Descartáveis:** Uma versão tecnologicamente mais simples desse truque é simplesmente usar ectos descartáveis. Use uma vez, ou até chamar atenção, e então descarte. A vantagem é que os ectos podem ser fisicamente deixados para trás ou plantados em outros, ambos úteis para criar distrações.

### Serviços de Intermediação Anônima

Muitas pessoas têm interesse em manter os seus assuntos anônimos. Para atender a essa demanda, os fornecedores de serviços online oferecem contas de intermediação anônima. Basta primeiro logar em sua conta anônima e rotear todo o seu tráfego através do nodo de saída. Toda a atividade da mesh conduzida pela intermediação anônima vai usar o mesh ID da intermediação. As tentativas de rastrear esse mesh ID terminarão no serviço de anonimização. Suas interações com o serviço de anonimização não são logadas, então mesmo se os servidores do fornecedor forem hackeados, um invasor não encontrará nenhuma pista. Enquanto algumas contas anônimas são estabelecidas para uso regular, os verdadeiramente paranóicos usam contas descartáveis para ter máxima segurança.

Rastrear uma conta anônima é uma impossibilidade prática e algo que apenas uma organização extremamente engenhosa empregando um esforço caro e sistemático poderia tentar.

### Mascarando Mesh IDs

Alguns hackers preferem mascarar-se como outros usuários, seja como uma distração, uma demonstração, ou para enquadrar outra pessoa. Isso segue o mesmo procedimento de mascarar alguém para autenticação ([Mascaramento](05-authentication-and-encryption.md#mascaramento)).
