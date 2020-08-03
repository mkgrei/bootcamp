(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{317:function(t,a,e){t.exports=e.p+"assets/img/white-label-error.c9ee4513.png"},415:function(t,a,e){t.exports=e.p+"assets/img/docker-preferences-memory.1535f0e3.png"},416:function(t,a,e){t.exports=e.p+"assets/img/docker-remote-container.81bc830b.png"},453:function(t,a,e){"use strict";e.r(a);var o=e(42),r=Object(o.a)({},(function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"下準備"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#下準備"}},[t._v("#")]),t._v(" 下準備")]),t._v(" "),o("p",[t._v("IIJ Bootcamp の Java；Springboot を始めるうえでいくつか環境の整備をしておいてください。")]),t._v(" "),o("h2",{attrs:{id:"環境整備"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#環境整備"}},[t._v("#")]),t._v(" 環境整備")]),t._v(" "),o("h3",{attrs:{id:"最低動作設定"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#最低動作設定"}},[t._v("#")]),t._v(" 最低動作設定")]),t._v(" "),o("h4",{attrs:{id:"docker"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#docker"}},[t._v("#")]),t._v(" docker")]),t._v(" "),o("p",[t._v("この Java ハンズオンの開発は Docker のコンテナの内部で実行します。そのため、事前に Docker のインストールと動作確認まで実施しておいてください。")]),t._v(" "),o("blockquote",[o("p",[t._v("docker pull openjdk:11-slim")])]),t._v(" "),o("h4",{attrs:{id:"visual-studio-code"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#visual-studio-code"}},[t._v("#")]),t._v(" Visual Studio Code")]),t._v(" "),o("p",[t._v("このハンズオンでは Java の IDE として Microdsoft 社の提供する Visual Studio Code(以下 VSCode)を利用します。事前に VSCode のインストールと起動確認、および後述する RemoteDevelopment の拡張機能をインストールしておいてください。")]),t._v(" "),o("h4",{attrs:{id:"remote-containers-vscode-拡張機能"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#remote-containers-vscode-拡張機能"}},[t._v("#")]),t._v(" Remote - Containers(VSCode 拡張機能)")]),t._v(" "),o("p",[t._v("Docker コンテナの内部のファイルシステムを VSCode 経由で利用できるようになる拡張機能です。開発環境を Docker コンテナの中で閉じることができます。")]),t._v(" "),o("h4",{attrs:{id:"java-extention-pack-vscode-拡張機能"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#java-extention-pack-vscode-拡張機能"}},[t._v("#")]),t._v(" Java Extention Pack(VSCode 拡張機能)")]),t._v(" "),o("p",[t._v("Microsoft 社が提供する Java の開発を行ううえで必要な機能がまとめられた拡張機能パックです。動作させるには JDK(Java の開発に必要なバイナリ) が必要になるため、"),o("code",[t._v("Remote - Containers")]),t._v("の拡張機能でコンテナ内部に入ったタイミングでインストールしておいてください。")]),t._v(" "),o("details",{staticClass:"custom-block details"},[o("summary",[t._v("あまりにも重すぎる場合")]),t._v(" "),o("p",[t._v("Java の開発にはメモリを大量に消費します。あまりにも開発が重い等あれば、Docker の利用可能なメモリを一時的に 4GiB 程度まで増やしてみてください。(Docker for Windows / Docker for Mac を利用の方は、設定画面 > リソースで Docker が利用できるメモリ量を調整できます。)")]),t._v(" "),o("p",[o("img",{attrs:{src:e(415),alt:"メモリ設定"}})])]),t._v(" "),o("h2",{attrs:{id:"動作確認"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#動作確認"}},[t._v("#")]),t._v(" 動作確認")]),t._v(" "),o("details",{staticClass:"custom-block details"},[o("summary",[t._v("プロキシ環境下の追加設定")]),t._v(" "),o("p",[t._v("プロキシの中にいる人は"),o("code",[t._v("gradlew")]),t._v("ファイルの先頭部分にプロキシの設定を入れてあげてください。")]),t._v(" "),o("div",{staticClass:"language-bash extra-class"},[o("pre",{pre:!0,attrs:{class:"language-bash"}},[o("code",[o("span",{pre:!0,attrs:{class:"token shebang important"}},[t._v("#!/usr/bin/env sh")]),t._v("\n\n"),o("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 追記BEGIN")]),t._v("\n"),o("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("PROXY_HOST")]),o("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("proxy.example.com "),o("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# set your proxy host")]),t._v("\n"),o("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("PROXY_PORT")]),o("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),o("span",{pre:!0,attrs:{class:"token number"}},[t._v("8080")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# set your proxy port")]),t._v("\n"),o("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("JAVA_OPTS")]),o("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),o("span",{pre:!0,attrs:{class:"token string"}},[t._v('"-Dhttp.proxyHost='),o("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$PROXY_HOST")]),t._v(" -Dhttp.proxyPort="),o("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$PROXY_PORT")]),t._v(" -Dhttps.proxyHost="),o("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$PROXY_HOST")]),t._v(" -Dhttps.proxyPort="),o("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$PROXY_PORT")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$JAVA_OPTS")]),t._v('"')]),t._v("\n"),o("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 追記END")]),t._v("\n\n")])])])]),t._v(" "),o("h3",{attrs:{id:"docker-の起動"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#docker-の起動"}},[t._v("#")]),t._v(" Docker の起動")]),t._v(" "),o("p",[t._v("環境が整ったら動作の確認をしましょう。下記のコマンドで Docker を起動しましょう。")]),t._v(" "),o("blockquote",[o("p",[t._v('docker run -d -t --name bootcamp-java --mount type=bind,source="$(pwd)/app",dst=/app -p 8080:8080 openjdk:11-slim')])]),t._v(" "),o("p",[t._v("Docker が正常に起動したことを確認してください。")]),t._v(" "),o("blockquote",[o("p",[t._v("docker ps | grep bootcamp-java | awk '{print $7}'")])]),t._v(" "),o("p",[t._v('"UP"と表示されれば Docker は動いています。')]),t._v(" "),o("h3",{attrs:{id:"vscode-の起動と-attach-to-running-container"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#vscode-の起動と-attach-to-running-container"}},[t._v("#")]),t._v(" VSCode の起動と Attach to Running Container")]),t._v(" "),o("p",[t._v("Docker の起動まで確認したら、VSCode を起動して Docker コンテナの内部へアクセスしてみましょう。")]),t._v(" "),o("p",[t._v("VSCode の左下から RemoteDevelopment を起動しコマンドパレットから"),o("code",[t._v("attach to running container")]),t._v("と入力しましょう。")]),t._v(" "),o("p",[o("img",{attrs:{src:e(416),alt:"attach to running container"}})]),t._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[t._v("コマンドパレットのショートカット")]),t._v(" "),o("p",[t._v("Mac")]),t._v(" "),o("blockquote",[o("p",[t._v("command + shift + p")])]),t._v(" "),o("p",[t._v("Windows")]),t._v(" "),o("blockquote",[o("p",[t._v("ctrl + shift + p")])])]),t._v(" "),o("p",[t._v("VSCode が開き、コンテナ内部へアクセスできたことを確認したら"),o("code",[t._v("/app")]),t._v("のディレクトリを開いてください。")]),t._v(" "),o("h3",{attrs:{id:"java-開発環境構築"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#java-開発環境構築"}},[t._v("#")]),t._v(" Java 開発環境構築")]),t._v(" "),o("h4",{attrs:{id:"拡張機能のインストール"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#拡張機能のインストール"}},[t._v("#")]),t._v(" 拡張機能のインストール")]),t._v(" "),o("p",[t._v("VSCode に Java IDE としての設定を行います。まず拡張機能の"),o("code",[t._v("Java Extention Pack")]),t._v("をインストールしておいてください。")]),t._v(" "),o("p",[o("code",[t._v("Java Extention Pack")]),t._v("によって、プロジェクトの依存関係を解消しコードの補完が効くようになります。")]),t._v(" "),o("p",[t._v("拡張機能のインストールが終わったら、画面のリロードを行っておいてください。")]),t._v(" "),o("h3",{attrs:{id:"初回起動"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#初回起動"}},[t._v("#")]),t._v(" 初回起動")]),t._v(" "),o("p",[t._v("コマンドパレットに"),o("code",[t._v("toggle integrated terminal")]),t._v("と入力し、ターミナルを開きます。ターミナルが開いたら下記のコマンドを叩いてください。")]),t._v(" "),o("blockquote",[o("p",[t._v("./gradlew bootRun")])]),t._v(" "),o("p",[t._v("10 分程度すると Springboot が起動したログが表示されます。")]),t._v(" "),o("pre",[t._v("> Task :bootRun\n\n  .   ____          _            __ _ _\n /\\\\ / ___'_ __ _ _(_)_ __  __ _ \\ \\ \\ \\\n( ( )\\___ | '_ | '_| | '_ \\/ _` | \\ \\ \\ \\\n \\\\/  ___)| |_)| | | | | || (_| |  ) ) ) )\n  '  |____| .__|_| |_|_| |_\\__, | / / / /\n =========|_|==============|___/=/_/_/_/\n :: Spring Boot ::        (v2.2.4.RELEASE)\n\n2020-06-02 14:21:53.490  INFO 3961 --- [  restartedMain] com.example.demo.DemoApplication         : Starting DemoApplication on ebbd1863c7bf with PID 3961 (/app/build/classes/java/main started by root in /app)\n2020-06-02 14:21:53.546  INFO 3961 --- [  restartedMain] com.example.demo.DemoApplication         : No active profile set, falling back to default profiles: default\n2020-06-02 14:21:55.114  INFO 3961 --- [  restartedMain] .e.DevToolsPropertyDefaultsPostProcessor : Devtools property defaults active! Set 'spring.devtools.add-properties' to 'false' to disable\n2020-06-02 14:21:55.115  INFO 3961 --- [  restartedMain] .e.DevToolsPropertyDefaultsPostProcessor : For additional web related logging consider setting the 'logging.level.web' property to 'DEBUG'\n2020-06-02 14:22:06.932  INFO 3961 --- [  restartedMain] o.s.b.w.embedded.tomcat.TomcatWebServer  : Tomcat initialized with port(s): 8080 (http)\n2020-06-02 14:22:06.993  INFO 3961 --- [  restartedMain] o.apache.catalina.core.StandardService   : Starting service [Tomcat]\n2020-06-02 14:22:06.994  INFO 3961 --- [  restartedMain] org.apache.catalina.core.StandardEngine  : Starting Servlet engine: [Apache Tomcat/9.0.30]\n2020-06-02 14:22:07.235  INFO 3961 --- [  restartedMain] o.a.c.c.C.[Tomcat].[localhost].[/]       : Initializing Spring embedded WebApplicationContext\n2020-06-02 14:22:07.235  INFO 3961 --- [  restartedMain] o.s.web.context.ContextLoader            : Root WebApplicationContext: initialization completed in 12118 ms\n2020-06-02 14:22:07.926  INFO 3961 --- [  restartedMain] o.s.s.concurrent.ThreadPoolTaskExecutor  : Initializing ExecutorService 'applicationTaskExecutor'\n2020-06-02 14:22:08.640  INFO 3961 --- [  restartedMain] o.s.b.d.a.OptionalLiveReloadServer       : LiveReload server is running on port 35729\n2020-06-02 14:22:08.806  INFO 3961 --- [  restartedMain] o.s.b.w.embedded.tomcat.TomcatWebServer  : Tomcat started on port(s): 8080 (http) with context path ''\n2020-06-02 14:22:08.825  INFO 3961 --- [  restartedMain] com.example.demo.DemoApplication         : Started DemoApplication in 21.232 seconds (JVM running for 28.351)\n")]),t._v(" "),o("p",[t._v("ホストマシンから"),o("a",{attrs:{href:"http://localhost:8080",target:"_blank",rel:"noopener noreferrer"}},[t._v("localhost:8080"),o("OutboundLink")],1),t._v("にアクセスしてみましょう。")]),t._v(" "),o("p",[o("img",{attrs:{src:e(317),alt:"初回起動 - WhitelabelErrorPage"}})]),t._v(" "),o("p",[t._v("上記のようなエラーページが表示されていれば、環境のセットアップ完了です。")]),t._v(" "),o("div",{staticClass:"custom-block warning"},[o("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),o("p",[t._v('bootRun を実行することで、環境によっては"想像を絶する重さ"になると思います。理由としては'),o("code",[t._v("Java Extention Pack")]),t._v("が Java の依存関係を解消しようと裏で動いていることが原因です。")]),t._v(" "),o("p",[t._v("IDLE が表示されているまま、動くまで少々お待ちください。(初回だけです)")])])])}),[],!1,null,null,null);a.default=r.exports}}]);