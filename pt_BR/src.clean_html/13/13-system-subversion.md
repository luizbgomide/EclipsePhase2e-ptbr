# Subversão de Sistema

Assim que você tenha penetrado com sucesso um sistema, suas opções dependerão de seus privilégios de acesso e da natureza do sistema. Muitas das ações que você faz como invasor não são tão diferentes das de um usuário regular: procurar arquivos, operar dispositivos, etc. Veja [Ações da Mesh](../13/06-mesh-actions.md). Veja [Ações da Mesh](../13/06-mesh-actions.md).

Sempre que você tentar fazer algo que seus [privilégios de acesso](../13/05-authentication-and-encryption.md#accounts--access-privileges) não permitem, você precisa hackear o sistema para isso. Na maioria dos casos, isso requer um [Teste de Hackeamento](../13/11-hacking.md#hacking-tests). Aplique os modificadores de [alertas do sistema](../13/12-countermeasures.md#security-alerts) em andamento. Se você vencer a disputa, você tem sucesso, mas cada tentativa coloca você em risco de ser descoberto se você rolar uma falha maior ou crítica ([Exposição](../13/11-hacking.md#exposure)).

Além de exceder seus privilégios, há algumas técnicas que são explicitamente subversivas. Uma amostra de subversões comuns estão descritas abaixo; os MJs devem usá-las como orientação para julgar outras.

## Quebrar Criptografia

Você pode tentar descriptografar um arquivo criptografado sem ter autorização adequada ([Criptoanálise](../13/05-authentication-and-encryption.md#codebreaking)).

## Controlar Ware

Se hackear insertos da mesh, um cibercérebro ([Hackeamento de Ware Mental](../13/17-mindware-hacking.md)), ou o nodo mestre de uma PAN, você pode ter acesso privilegiado aos wares do morfo — além de poder hackear o ware diretamente. Um hacker pode usar isso para (des)ativar o ware, modificar seus parâmetros de funcionamento, acessar diagnósticos e logs de uso ou instalar [scripts](../13/06-mesh-actions.md#scripting) para manipular esse ware no futuro, entre outros usos criativos.

## Desativar Mecanismos de Segurança

Muitos sistemas têm recursos de segurança em vigor para evitar que pessoas acidentalmente (ou intencionalmente) prejudicam a si mesmas ou a outras. Você pode anular os avisos e mecanismos de sistemas de segurança se vencer um Teste de Hackeamento. Aplica-se um modificador −30, uma vez que tais sistemas são construídos com recursos redundantes. Isso pode ser usado para abrir os dois lados de uma câmara de ar simultaneamente, silenciar o alerta de colisão iminente em uma espaçonave, ou para evitar que usuários autorizados sejam notificados de equipamentos adulterados ou circunstâncias perigosas. A critério do MJ, alguns recursos de segurança podem reiniciar automaticamente, exigindo supressão ([Suprimir Processo](../13/13-system-subversion.md#suppress-process)).

## Editar Fluxo de RA

Se hackear um dispositivo de transmissão de RA, você pode bloquear ou editar dados sensoriais específicos usando um aplicativo de ilusão de RA, ou simplesmente encerrar por completo o fluxo de RA. Isto pode implicar o bloqueio de todos os dados RA de um tipo específico (auditivo, visual, tátil, etc.) ou o bloqueio de pessoas específicas, coisas, sons ou outras coisas. Por exemplo, você pode bloquear o usuário de ver as mensagens de um amigo, remover uma pessoa da visão dele, impedir que ele escutem uma sirene de alarme, etc. Dependendo da situação e do contexto, o MJ pode decidir que isso tem sucesso automático (algo que poderia passar despercebido) ou pode dar ao alvo um Teste de Percepção modificado (−0 a −30) para notar a mudança (se o bloqueio cria lacunas óbvias ou está discordante das respostas dos outros). Dependendo da situação e do contexto, o MJ pode decidir que isso tem sucesso automático (algo que poderia passar despercebido) ou pode dar ao alvo um Teste de Percepção modificado (−0 a −30) para notar a mudança (se o bloqueio cria lacunas óbvias ou está discordante das respostas dos outros). Por exemplo, bloquear a visão de alguém que se desloca por uma multidão não vai mudar o fato de que a multidão está abrindo espaço para aquela pessoa se mover. Da mesma forma, bloquear o cheiro de fumaça não impedirá o alvo de ver fumaça, chamas, ou os outros reagindo ao incêndio.

## Eliminar Rastros

Para atrapalhar [auditorias de segurança](../13/12-countermeasures.md#security-audits), você pode limpar evidências de sua invasão antes de sair de um sistema. Isso envolve apagar dados incriminatórios nos logs de acesso e de segurança e ocultar qualquer evidência de adulteração do sistema. Use uma ação complexa e faça um Teste de Hackeamento. Se bem-sucedido, você elimina detalhes que poderiam ser usados para rastrear você ou revelar o que você fez, incluindo sua mesh ID.

## Forçar Reautenticação

Enquanto estiver farejando um alvo, você pode quebrar a conexão e forçá-lo a se autenticar novamente para você poder capturar as credenciais de login ([Farejamento](../13/04-devices-apps-and-links.md#sniffing)). Isso requer vencer um Teste de Hackeamento contra o firewall fazendo autenticação.

## Ocultar Arquivo ou Processo

É possível ofuscar a presença de um arquivo, elemento de código ou até mesmo um app, script ou outro processo de software ativo. Isso usa uma ação complexa e um Teste de Infoseg; anote o resultado. Qualquer um que tente encontrar esse arquivo ou processo posteriormente deve vencer o seu resultado com um Teste Oposto de Pesquisa com −30.

## Debilitar os Sentidos

Se hackear um dispositivo que projete RA, o app de ilusão de RA pode ser usado para distrair e prejudicar o alvo. Por exemplo, nuvens ilusórias escuras podem obscurecer visão, ruídos altos estridentes podem fazer as pessoas se contorcerem, e uma sensação de cócegas persistente pode deixar qualquer um louco. Faça um Teste de Interface; se bem-sucedido o alvo sofre um modificador −10 de debilitação em Percepção e outras ações, com um −10 adicional por sucesso maior. Os modificadores podem ser temporários, uma vez que o alvo pode ajustar seus filtros e/ou desligar sua RA se necessário.

## Injetar RA/Illusão

Se hackear um dispositivo compatível com RA, você pode inserir informações sensoriais falsas no fluxo de RA com um Teste de Hackeamento. O uso primário do app de ilusões de RA é injetar diferentes tipos de ilusões visuais, auditivas, táteis e até mesmo emocionais na realidade aumentada do usuário do dispositivo, dependendo do tipo de interface utilizada. Como o usuário hackeado responderá à ilusão depende de ele estar ciente do invasor, de que tipo de interface está usando (entóptica ou tátil), e de quão realista é a ilusão.

As melhores ilusões são construídas antecipadamente, utilizando filmagens reais e ferramentas avançadas de imagem e manipulação sensorial. Tais ilusões são hiper-realistas. Se injetada sutilmente, no momento certo, e no contexto adequado, não há razão para o alvo desconfiar de alguma coisa. Mas se houver algo estranho, isso se torna um teste oposto entre a perícia Interface do criador da ilusão e a Percepção do alvo. Os MJs devem aplicar os modificadores conforme desejarem. Tenha em mente que mesmo que alguém veja através da farsa, ele ainda pode agir instintivamente; quase qualquer um vai se abaixar quando vê um objeto voando na sua direção, pois o corpo reage antes que o cérebro compreenda que é uma ilusão e não uma ameaça.

**Improvisando no Momento:** Hackers também podem improvisar ilusões se necessário, se aproveitando das ferramentas avançadas dos app de ilusão de RA, corrigindo e manipulando clipes sensoriais em tempo real. Isso requer uma ação de tarefa sustentada do hacker, e é mais difícil e facilmente descoberta (modificador +10 a +30 em Testes de Percepção). A vantagem é que o hacker pode modificar a ilusão em reação às ações do usuário ou fatores ambientais em tempo real.

## Instalar Brecha

As brechas são entradas para um sistema que contornam a autenticação normal e os recursos de segurança. As brechas são instaladas secretamente por invasores ocultos, para que possam acessar o sistema em outro momento sem precisar hackear novamente. Os detalhes da brecha podem ser compartilhados com outras pessoas.

A maioria das brechas são instaladas substituindo um app existente com uma cópia modificada para incorporar uma vulnerabilidade que permite acesso remoto instantâneo ao sistema. O truque está em fazer o aplicativo copiado parecer com o original não modificado, para que ele não seja detectado durante as auditorias de segurança.

Para instalar uma brecha, você deve ter acesso ao sistema, fazer uma ação complexa e vencer um Teste de Hackeamento. Aplique um modificador −20 se você quiser que a brecha forneça privilégios de acesso de segurança, −30 para privilégios de administrador. Se você tiver sucesso, a brecha está instalada — você pode usá-la para acessar o sistema sem fazer um teste até que ela seja removida; você automaticamente adquire status infiltrado. Cada sucesso maior aplica um modificador −10 nas tentativas de descobrir a brecha posteriormente ([Auditorias de Segurança](../13/12-countermeasures.md#security-audits)). Com um sucesso crítico, a brecha fornece status oculto.

## Instalar Restrição

Para impedir contramedidas, você pode ativar um processo que vai preventivamente restringir um app, comando ou ação específicos neste sistema. Por exemplo, você poderia instalar uma restrição para evitar que um desligamento seja iniciado, impedir que um app seja carregado ou evitar que uma função do dispositivo seja ativada. Criar uma restrição exige uma ação complexa e um Teste de Hackeamento; a ação específica que ela restringe deve ser especificada. Se bem-sucedido, qualquer tentativa de conduzir essa ação automaticamente falha. Para desfazer uma restrição, primeiro ela deve ser localizada (exigindo um Teste de Pesquisa) e então excluída (uma ação complexa). A reinicialização do sistema também remove todas as restrições.

As restrições não são onipotentes; os MJs devem usar seu bom senso para definir suas limitações e capacidades.

## Bloquear Sinais

Você pode transmitir sinais de rádio que interferem deliberadamente com outros sinais de rádio para interromper as comunicações. Você pode escolher bloquear seletivamente um ou mais dispositivos específicos, ou bloquear universalmente todos os sinais de rádio. O bloqueio exige uma ação complexa e um Teste de Interface para ser iniciado. Se bem-sucedido, os dispositivos afetados dentro do alcance têm suas comunicações de rádio interrompidas — eles são cortados da mesh e não podem usar comunicação sem fio até que o bloqueio termine ou eles se movam para fora do alcance. Os dispositivos cabeados não são afetados.

O bloqueio é bastante difícil de superar ([Evitar Bloqueio de Sinal](../13/06-mesh-actions.md#security-actions)). O bloqueio também pode ser usado para bloquear sinais de radar e sensores.

## Repetir Fluxo de Sensor

Um método comum de compromenter os sistemas de vigilância é repetir o fluxo do sensor, de modo que ele exiba repetidamente imagens ou dados insignificantes, permitindo que intrusos físicos passem despercebidos. Para repetir um fluxo, você primeiro deve encontrar e copiar um segmento gravado do fluxo do sensor (possivelmente exigindo um Teste de Pesquisa) ou gastar tempo para gravá-lo. Repetir um fluxo exige uma ação complexa e um Teste de Hackeamento. Fluxos repetidos podem ser configurados para voltarem ao normal após um período de tempo.

## Modificar TacNet

Se hackear um sistema compatível com tacnet, você pode altear, bloquear, ou injetar seus próprios dados de tacnet. Isso poderia ser usado para trocar mapas, bloquear fluxos sensoriais, alterar indicadores de estado de saúde, e assim por diante. Você também pode marcar oponentes como amigos, o que impediria que armas com ligação inteligente sejam usadas contra eles.

## Farejar Tráfego

Você pode interceptar e monitorar o tráfego sem fio ([Farejamento](../13/04-devices-apps-and-links.md#sniffing)).

## Suprimir Alarme

Você pode tentar desligar um alerta passivo vencendo um Teste de Hackeamento. O sistema terá alertado quaisquer defensores assim que o alerta foi acionado, de modo que isso não necessariamente evitará a fiscalização, mas pode evitar contramedidas automáticas como a reautenticação ou redução de privilégios. A mesma ação pode ser usada para reduzir um alerta ativo para um alerta passivo (o que posteriormente podem ser desligado com outra ação de suprimir).

## Suprimir Processo

Muitas técnicas de hackeamento são imediatas — você desativa uma função, mata o app, encerra a conexão, etc. — e depois segue em frente. A interrupção é temporária; o defensor do sistema ou outro usuário pode simplesmente reiniciar o processo. Alguns sistemas são projetados para automaticamente reiniciar certos processos por conta própria (a critério do MJ). Para evitar que o processo seja reiniciado, você precisa excluir o software subjacente do sistema (geralmente exigindo privilégios de administrador; [Modificar Software](../13/06-mesh-actions.md#admin-actions)) ou você deve suprimir ativamente o processo.

Suprimir um processo requer uma ação complexa a cada turno de ação. Isso vai combater as tentativas automáticas do sistema de reiniciar o processo. Qualquer um que deseje reiniciar o processo deve derrotá-lo com sucesso em um Teste Oposto de Infoseg, embora o processo possa ser encerrado novamente… a menos que o encerramento seja restringido.

Muitos hackers incumbem suas musas com a supressão de processos.

## Grampear RA

Você pode acessar e monitorar qualquer realidade aumentada vivida por um usuário como se fosse a sua própria com um Teste de Hackeamento. Você pode até configurar isso para lhe encaminhar automaticamente a mesma experiência de RA se você sair do sistema.

## Grampear Sentidos

Se hackear insertos da mesh ou um cibercérebro ([Hackeamento de Ware Mental](../13/17-mindware-hacking.md)), você pode grampear o sensório do alvo para fins de vigilância.

Os dados sensoriais também podem ser gravados ou transmitidos como XP.

<!-- CLEANED blockquote -->

## Hackeamento Simples

Se essas regras à primeira vista parecem intimidantes, tenha em mente que as regras principais de hackeamento são bastante simples. As orientações a seguir devem resolver a maioria das situações:

- Quase todos os testes de hackeamento colocam a Infoseg do hacker vs. o Firewall do sistema alvo.
- Para hackear um sistema, você pode escolher ser rápido (imediato, modificador −30, aciona um alerta) ou lento (sem modificador, leva uma hora, sem alerta).
- Por padrão, você entra com privilégios de usuário padrão. Sucessos maiores dão privilégios melhores.
- Uma vez dentro, você pode realizar qualquer ação que seus privilégios permitam sem fazer um teste.
- Se seus privilégios não permitem, faça um Teste de Hackeamento (Infoseg vs. Firewall) para tentar conseguir.
- Use sua imaginação! Se você quiser fazer algo — repetir sensores, bloquear sinais de armas, roubar arquivos, abrir uma porta, travar uma IA inimiga — seu MJ dirá se você precisa fazer um teste.
- Não se esqueça de usar a parada de Inspiração para ter ações extras da mesh ou para modificar as rolagens!
