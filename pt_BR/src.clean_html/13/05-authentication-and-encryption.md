# Autenticação & Criptografia

A segurança da mesh depende fortemente de autenticação e criptografia para identificar usuários legítimos e evitar que dados protegidos sejam interceptados.

## Mesh ID

Sua mesh ID é um código identificador único que distingue você de todos os outros usuários e dispositivos na mesh. Seu computador cranial ou ecto automaticamente associa esse endereço de ID com suas contas e nomes de usuário, permitindo que você receba mensagens e outras transmissões. Essa ID é gerada automaticamente sempre que você fica online e é exigida para quase todas as interações online. Essas interações são logadas universalmente, deixando uma trilha de dados que pode ser usada para rastrear sua atividade ([Rastreamento](10-tracking.md)). Felizmente, [serviços de anonimização](../16/04-services.md#mesh-services) estão disponíveis para aqueles que valorizam a sua privacidade.

Muitos mesh IDs são registrados publicamente (e em algumas jurisdições, isso é uma obrigação legal). Consultar uma mesh ID registrada é trivial. Os dados de registro podem incluir um nome, endereço físico, e perfil de mídia social se desejado.

## Contas & Privilégios de Acesso

Para acessar qualquer dispositivo ou serviço na mesh, você precisa de uma conta. Sua conta vincula-se à sua mesh ID e determina seus privilégios de acesso — o que você pode ver e fazer com o dispositivo/serviço. Como alguns sistemas são mais restritivos do que outros, o MJ decide quais privilégios uma conta fornece ([Ações da Mesh](06-mesh-actions.md)). Há quatro tipos de contas: pública, usuário, segurança e administrador.

**Console de Conta:** Quando você faz loga em um sistema, um console de conta é criado. Esse console de conta é a interface de usuário que permite que você interaja com o sistema. Esse processo representa sua presença quando você acessa o sistema. Ele pode ser atacado em [combate na mesh](14-mesh-combat.md).

### Contas Públicas

As contas públicas fornecem acesso a qualquer pessoa na mesh. Eles não exigem nenhum tipo de autenticação ou processo de login — seu mesh ID é suficiente. As contas públicas deixam você navegar na mesh em sites, fóruns, arquivos públicos, bases de dados abertas, redes sociais, etc. As contas públicas geralmente têm a capacidade de visualizar e fazer download de dados públicos e, às vezes, escrever (comentários de fórum, por exemplo), mas não muito mais.

### Contas de Usuário

As contas de usuário exigem alguma forma de [autenticação](#authentication-methods) para acessar o dispositivo/serviço. Essas contas são fornecidas a pessoas que utilizam regularmente o sistema: funcionários, clientes, etc. A maioria dos usuários tem permissão para usar os recursos padrão do sistema, assim como visualizar, fazer download, fazer upload, e alterar dados próprios ou compartilhados. Elas não têm permissão para criar novas contas, acessar logs, alterar recursos de segurança ou fazer qualquer coisa que possa impactar as funções do sistema.

### Contas de Segurança

As contas de segurança destinam-se ao pessoal de segurança e ILAs que vigiam o sistema. Elas também exigem [autenticação](#authentication-methods), mas fornecem mais privilégios do que os usuários padrão. As contas de segurança podem tipicamente visualizar e editar logs, controlar os recursos de segurança e ILAs, adicionar/excluir contas não administrativas, alterar os dados de outros usuários, etc.

### Contas de Administrador

As contas de administrador fornecem controle completo (“root”) sobre o sistema. Os privilégios de administrador permitem que você acesse e altere todos os recursos e dados. Eles podem fazer tudo que as contas de segurança podem, assim como alterar privilégios de acesso de outras contas, encerrar ou reinicializar o sistema, parar e iniciar quaisquer apps ou serviços, além de adicionar ou excluir qualquer programa. Cada sistema tem uma conta de administrador root que não pode ser excluída ou perder seus privilégios; para implantes e aparelhos, essa conta root geralmente pertence à pessoa a qual eles estão incorporados.

## Métodos de Autenticação

A maioria dos sistemas requer algum tipo de autenticação (um processo pelo qual um sistema determina se a identidade assumida por um usuário é genuína) antes de lhe conceder uma conta e privilégios de acesso. Há vários métodos de autenticação que um sistema pode usar (sistemas altamente seguros podem exigir mais de um). Embora alguns sejam mais seguros do que outros, cada um tem suas desvantagens.

### Leitura Biométrica

Esses sistemas escaneiam uma ou mais das assinaturas biométricas do seu morfo (impressão digital, impressão palmar, leitura de retina, amostra de DNA, etc.). Populares antes da Queda, esses sistemas caíram em desuso já que são impraticáveis com sintemorfos ou usuários que fazem reencapes frequentemente.

### Escaneamento de Ego

Esse sistema autentica a [ego ID](../15/07-identity-systems.md#ego-id) do usuário, verificada através do escaneamento de ondas cerebrais. Como ela exige uma escaneador de impressão cerebral cabeado e inviolável, esses sistemas geralmente são encontrados apenas em ambientes de alta segurança.

### Interface Neural Direta

Se você tem implantes ou equimplantes embutidos, eles são inseridos diretamente no seu sistema nervoso, com as próprias ligações físicas fornecendo a autenticação.

### Mesh ID

Alguns sistemas aceitam sua mesh ID como autenticação. Isso é extremamente comum com a maioria dos sistemas públicos, que meramente registram a mesh ID de qualquer usuário que queira acesso. Outros sistemas só permitirão o acesso a mesh IDs específicas, mas esses são vulneráveis a [ataques de mascaramento](#spoofing).

### Outra Conta

Se você tem acesso a uma conta em um sistema ou serviço, e está logado, isso pode dar acesso automático a contas em sistemas ou serviços relacionados. Por exemplo, ter uma conta com um portal de rede social pode dar acesso gratuito a determinados fluxos de notícias online ou arquivos de dados comerciais. Esse também é o método usados por [dispositivos subordinados](02-mesh-topology.md#puppeted-devices), em que o acesso ao dispositivo mestre automaticamente fornece acesso aos dispositivos subordinados. Os hackers preferem it atrás de contas de mestre como uma forma de acessar outros sistemas.

### Senha

O método de autenticação mais comum é a senha — uma sequência de caracteres alfanuméricos ou símbolos logográficos. Qualquer pessoa com a senha pode acessar a conta. A maioria das senhas são bastante longas (para evitar os métodos de crackeamento de força bruta), e por isso são armazenados em um formato criptografado em seus insertos da mesh.

### Chave de Acesso

Sistema de chave de acesso pedem um código criptografado que está incorporado em um dispositivo físico (que está implantado ou fisicamente conectado a um ecto) ou extraído de um programa especializado. As chaves de acesso avançadas combinam criptografia integrada com nanotecnologia de gravação física para criar uma chave única. Para acessar esses sistemas, a chave de acesso deve ser adquirida ou de alguma forma mascarada.

### Chave Quântica

Sistemas CQ dependem de uma senha entregue em canal de entrelaçamento quântico criptografado. Devido ao seu custo e logística, eles são raros, mas altamente seguros.

## Burlando a Autenticação

Como hackear ou quebrar a criptografia podem ser desafiadores ou levar tempo, às vezes é mais fácil contornar os sistemas de autenticação.

### Aquisição de Credenciais

Se você puder de alguma forma adquirir a senha, chave de acesso, biometria, ou dispositivo de entrelaçamento quântico usado para autenticar uma conta, você pode fazer login como um usuário legítimo, sem precisar de testes. Esses podem exigir meios criativos para serem adquiridos: roubo, chantagem, suborno, engenharia social, forquestro, ou métodos desagradáveis como tortura.

### Forjando a Autenticação

Não tendo as credenciais reais, você pode tentar falsificá-las. Sistemas biométricos e de chave de acesso podem ser forjados por hackers que conseguirem dar uma olhada nos originais. Os meios e as técnicas para fazê-lo diferem e estão além do escopo deste livro, mas forjar com sucesso tais sistemas permitiria que um hacker efetuasse login como o usuário legítimo. O forjamento deve exigir, no mínimo, vários testes de perícia (por exemplo, Infoseg e Aparelhagem: Eletrônica para extrair uma impressão de retina da memória do leitor de retina, e Medicina: Biotecnologia para cultivar um olho duplicado) e longos prazos.

### Mascaramento

Você pode tentar disfarçar a sua conexão como se ela viesse de um usuário ou sistema legítimo. Se tiver sucesso, o sistema de destino é enganado pela farsa e trata seus comandos e outros tráfegos como legítimos.

Para mascarar sinais, você precisa primeiro monitorar com sucesso uma conexão ativa entre os dois sistemas usando um app de farejamento ([Farejamento](04-devices-apps-and-links.md#sniffing)). Armado com esses dados, você pode usá-los para mascarar seus próprios sinais com um app de mascaramento. Isso requer uma ação complexa e um [Teste de Hackeamento](11-hacking.md#hacking-tests) entre você o sistema alvo (o que está _recebendo_ os sinais). Se os sistemas estão se comunicando via VPN, esse teste sofre um modificador −30. Se você vencer, suas comunicações são tratadas como se viessem do sistema legítimo. Se o firewall perder a disputa mas também tiver sucesso, ele está ciente que há discrepâncias com a transmissão (o que não é tão incomum). Ele pode investigar mais; isso requer outro Teste de Hackeamento (o mascaramento sofre −30 contra uma VPN); se o defensor vencer, ele detecta evidências que as comunicações recebidas estão sendo adulteradas e pode responder de acordo ([Contramedidas](12-countermeasures.md)).

Observe que o mascaramento só permite que você falsifique sinais de um sistema para outro. Para falsificar sinais no outro sentido, você deve ter sucesso em um [Teste de Hackeamento](11-hacking.md#hacking-tests) contra o outro sistema também. Um ataque de intermediário contra os dois sistemas pode ser desafiador, mas bastante devastador.

## Criptografia

Existem dois tipos de criptografia comumente usadas em Eclipse Phase: chave pública e quântica.

### Criptografia de Chave Pública

Em sistemas de chave pública, você gera duas chaves, uma chave pública e uma chave secreta. Você dá a chave pública aos seus amigos ou simplesmente posta-a na mesh. Os outros podem usar sua chave pública para criptografar mensagens para você que somente a sua chave secreta — controlada por você — pode descriptografar. A criptografia de chave pública é amplamente utilizada para criptografar arquivos. Devido à força dos algoritmos de sistemas de chaves públicas, essas criptografias são essencialmente inquebráveis sem um computador quântico ([Quebra de Código Quântica](#quantum-codebreaking)). Criptografia de chave pública também é usada em VPNs, mas apps de farejamento exploram falhas na implementação do protocolo que lhes permite capturar, contornar, ou mascarar as chaves de criptografia sem realmente quebrá-las.

### Criptografia de Chave Quântica

Sistema de distribuição de chave quântica usam mecânica quântica para permitir a comunicação segura entre duas partes. A vantagem de transmitir informações em estados quânticos é que o próprio sistema detecta instantaneamente tentativas de espionagem, pois os sistemas quânticos são perturbados por qualquer tipo de interferência externa. Em termos práticos, isso significa que transferências de dados com criptografia quântica são inquebráveis e tentativas de interceptá-los falham automaticamente. Observe que a criptografia quântica não funciona para criptografia básica de arquivos, ela só é usada para proteger os canais de comunicação.

Embora os sistemas de chaves quânticas tenham uma vantagem sobre os sistemas de chave pública, eles são mais caros e menos práticos. Para gerar uma chave quântica, os dois dispositivos de comunicação devem estar entrelaçados em nível quântico no mesmo local, e depois separados. Isso significa que os canais de comunicação com criptografia quântica exigem algum esforço de preparação, especialmente se longas distâncias estiverem envolvidas. Como resultado, os protocolos de criptografia quântica são reservados para ligações de comunicação de alta segurança.

### Quebra de Código

O que tudo isso significa é que os arquivos criptografados com chaves públicas são relativamente seguros e as comunicações com criptografia quântica são completamente seguras. Os MJs devem reparar que isso pode ser útil para os PCs, mas também pode atrapalhá-los. Se os PCs precisarem de algo que está criptografado, eles podem precisar implementar métodos além de hackeamento para obter a chave secreta/senha ou encontrar alguma maneira de contornar completamente a criptografia.

### Quebra de Código Quântica

Os computadores quânticos podem ser usados para quebrar a criptografia de chave pública. Essa é uma ação de tarefa de Infoseg com um prazo de 1 semana. Uma vez iniciado, o computador quântico finaliza o trabalho por conta própria; não é necessária uma supervisão constante. Esse processo não se beneficia de simulespaços de tempo acelerado. Os MJs devem modificar esse prazo para se encaixar nas necessidades de seus jogos. Observe que os computadores quânticos não podem quebrar as comunicações com criptografia quântica, somente arquivos criptografados com chaves públicas.
