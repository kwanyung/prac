// res.app: 똑같이 res 객체를 통해 app 객체에 접근한다. res.app.get('')같이 사용 가능.
// res.set(헤더, 값) / res.setHeader(헤더, 값): 응답의 헤더를 설정한다. req.get()이 헤더값을 가져오는거라면 이건 헤더 설정
// res.status(코드) / res.sendStatus(코드): 응답 시의 HTTP 상태 코드를 지정한다.
// res.type(type) : Contents-Type 헤더를 설정할 수 있는 간단한 메서드.
// res.cookie(키, 값, 옵션): 쿠키를 응답에 설정하는 메서드이다. (cookie-parser 패키지가 필요)
// res.clearCookie(키, 값, 옵션): 쿠키를 응답에서 제거하는 메서드이다.
// res.end(): 데이터 없이 응답을 보낸다.
// res.json(JSON): JSON 형식의 응답을 보낸다.
// res.redirect(주소): 리다이렉트할 주소와 함께 응답을 보낸다.
// res.locals / res.render(뷰, 데이터): res.locals는 뷰를 렌더링하는 기본 콘텍스트를 포함하는 객체다. res.render는 jade와 같은 템플릿 엔진을 사용하여 뷰를 렌더링한다.
// res.send(body), res.send(status, body) : 클라이언트에 응답을 보냄. 상태 코드는 옵션. 기본 콘텐츠 타입은 text/html이므로 text/plain을 보내려면 res.set(‘Content-Type’, ‘text/plain’)을 먼저 호출 해야한다. 
// res.sendFile(경로): 경로에 위치한 파일을 응답한다.
// res.attachment([filename]), res.download(path, [filename], [callback]) : 
// 클라이언트에게 파일을 표시하지 말고 다운로드 받으라고 전송함. filename을 주면 파일 이름이 명시되며, res.attachment는 헤더만 설정하므로 다운로드를 위한 node 코드가 따로 필요하다.
// 출처: https://inpa.tistory.com/entry/EXPRESS-📚-요청-객체와-응답-객체-req-res?category=898807 [👨‍💻 Dev Scroll:티스토리]

/**
 * req.app: req 객체를 통한 app 객체로의 접근이다. 예를 들어 req.app.get('port')와 같은 식으로 사용할 수 있다.
req.cookies: cookie-parser 미들웨어가 만드는 요청의 쿠키를 해석한 객체이다.
req.signedCookies: 서명된 쿠키들은 req.cookies 대신 여기에 담긴다.
req.get(헤더 이름): 헤더의 값을 가져온다. req.get('Content-type')
req.body: body-parser 미들웨어가 만드는 요청의 본문을 해석한 객체이다. POST 방식으로 넘어오는 데이터를 담는다.
req.params: 라우트 매개변수에 대한 정보가 담긴다.
req.query: GET방식으로 넘어오는 데이터, 쿼리스트링의 정보가 담긴다.
req.route : 현재 라우트에 관한 정보. 디버깅용.
req.headers : HTTP의 Header 정보를 가지고 있다.
req.accepts([types]) : 클라이언트가 해당하는 타입을 받을 수 있는지 확인하는 간단한 메서드.
req.ip: 요청의 ip 주소를 담는다.
req.path : 클라이언트가 요청한 경로. 프로토콜, 호스트, 포트, 쿼리스트링을 제외한 순수 요청 경로다.
req.host : 요청 호스트 이름을 반환하는 간단한 메서드. 조작될 수 있으므로 보안 목적으로는 사용하면 안된다.
req.xhr : 요청이 ajax 호출로 시작되었다면 true를 반환하는 프로퍼티
req.protocol : 현재 요청의 프로토콜 (http, https 등)
req.secure : 현재 요청이 보안 요청(SSL?) 이면 true를 반환
req.url (req.originalUrl) : URL 경로와 쿼리 스트링을 반환. 원본 요청을 logging하는 목적으로 많이 쓰임.
req.acceptedLanguages : 클라이언트가 선호하는 자연어 목록을 반환. header에서 파싱하면 다국어를 지원한는 어플리케이션이라면 초기 언어 선택에 도움을 줄 수 있음.
출처: https://inpa.tistory.com/entry/EXPRESS-📚-요청-객체와-응답-객체-req-res?category=898807 [👨‍💻 Dev Scroll:티스토리]
 */