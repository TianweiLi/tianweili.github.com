#Python模拟浏览器登陆

很多网站限制必须是已登录状态的用户才能进行各种操作。那么我们如何使用Python爬虫来登录网站呢？

想要登录网站，我们需要借助`cookielib`模块，这个模块的作用是记录了我们登录之后保存到本地的cookie，以便我们能够访问这个网站的各个网页，并进行一些操作。

先上请求登录的爬虫代码：

```python crawler.py
# request login url
loginurl = 'https://publisher.connexity.com/login'

# set user-agent into request headers
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.99 Safari/537.36'}

# set the form data to be submitted
formdata = {
    'email': 'your username',  # username
    'password': 'your password',  # password
}

# create a cookie object with cookielib, then create cookie handler with urllib2
cookie = cookielib.CookieJar()
cookie_handler = urllib2.HTTPCookieProcessor(cookie)

formdata_encoded = urllib.urlencode(formdata)  # encode the form data
req = urllib2.Request(url=loginurl, data=formdata_encoded, headers=headers)  # create a request object
opener = urllib2.build_opener(cookie_handler)  # create a opener handler.
response = opener.open(req)  # call url and return response
page = response.read()  # read the response content

print page
```

上面的注释已经很详细了。至于请求URL和登录所需要提交的表单信息可以借助Google浏览器的开发者工具来找到：

![]()

但是执行之后会报如下错误：

```python
Traceback (most recent call last):
  File "C:/tcc/fdp/apps/mytest/crawler.py", line 25, in <module>
    response = opener.open(req)  # call url and return response
  File "C:\Python27\lib\urllib2.py", line 404, in open
    response = self._open(req, data)
  File "C:\Python27\lib\urllib2.py", line 422, in _open
    '_open', req)
  File "C:\Python27\lib\urllib2.py", line 382, in _call_chain
    result = func(*args)
  File "C:\Python27\lib\urllib2.py", line 1222, in https_open
    return self.do_open(httplib.HTTPSConnection, req)
  File "C:\Python27\lib\urllib2.py", line 1184, in do_open
    raise URLError(err)
urllib2.URLError: <urlopen error [Errno 8] _ssl.c:510: EOF occurred in violation of protocol>
```

因为访问HTTPS站点，所以我们需要借助SSL登录。网上有很多种解决办法，但是我们可以重载`httplib`来解决SSL登录的问题，而不需要修改系统变量。在Python脚本上面添加下面代码：

```python
import socket
import httplib
import ssl
from httplib import HTTPConnection, HTTPS_PORT


class HTTPSConnection(HTTPConnection):
    "This class allows communication via SSL."
    default_port = HTTPS_PORT

    def __init__(self, host, port=None, key_file=None, cert_file=None,
                 strict=None, timeout=socket._GLOBAL_DEFAULT_TIMEOUT,
                 source_address=None):
        HTTPConnection.__init__(self, host, port, strict, timeout,
                                source_address)
        self.key_file = key_file
        self.cert_file = cert_file

    def connect(self):
        "Connect to a host on a given (SSL) port."
        sock = socket.create_connection((self.host, self.port),
                                        self.timeout, self.source_address)
        if self._tunnel_host:
            self.sock = sock
            self._tunnel()
        # this is the only line we modified from the httplib.py file
        # we added the ssl_version variable
        self.sock = ssl.wrap_socket(sock, self.key_file, self.cert_file, ssl_version=ssl.PROTOCOL_TLSv1)

# now we override the one in httplib
httplib.HTTPSConnection = HTTPSConnection
# ssl_version corrections are done
```

