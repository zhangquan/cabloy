const { app, mockUrl, mockInfo, assert } = require('egg-born-mock')(__dirname);
const os = require('os');
const path = require('path');
const fse = require('fs-extra');

describe.only('test/controller/test/feat/openAuth.test.js', () => {
  it('action:openAuth:resource', async () => {
    // init file
    const { config } = await _readCabloyInitFile();
    // token
    const tokenName = `clidev@${app.name}`;
    const token = config.tokens[tokenName];
    // login
    let result = await app
      .httpRequest()
      .post(mockUrl('/a/authopen/auth/signin'))
      .set('Authorization', 'Bearer ')
      .send({
        data: {
          clientID: token.clientID,
          clientSecret: token.clientSecret,
        },
      });
    assert.equal(result.body.code, 0);
    // accessToken
    const accessToken = result.body['eb-jwt-oauth'].accessToken;
    assert.equal(!!accessToken, true);
    // echo
    result = await app
      .httpRequest()
      .post(mockUrl('/a/base/auth/echo'))
      .set('Authorization', `Bearer ${accessToken}`)
      .send();
    assert.equal(result.body.code, 0);
    assert.equal(result.body.data.user.op.userName, 'root');
    // resourceCheckSuccess
    result = await app
      .httpRequest()
      .post(mockUrl('/test/party/test/feat/openAuth/resourceCheckSuccess'))
      .set('Authorization', `Bearer ${accessToken}`)
      .send();
    assert.equal(result.body.code, 0);
    // resourceCheckFail
    result = await app
      .httpRequest()
      .post(mockUrl('/test/party/test/feat/openAuth/resourceCheckFail'))
      .set('Authorization', `Bearer ${accessToken}`)
      .send();
    assert.equal(result.status, 403);
    // logout
    result = await app
      .httpRequest()
      .post(mockUrl('/a/base/auth/logout'))
      .set('Authorization', `Bearer ${accessToken}`)
      .send();
    assert.equal(result.body.code, 0);
  });

  it('action:openAuth:atom', async () => {
    // init file
    const { config } = await _readCabloyInitFile();
    // token
    const tokenName = `clidev@${app.name}`;
    const token = config.tokens[tokenName];
    // login
    let result = await app
      .httpRequest()
      .post(mockUrl('/a/authopen/auth/signin'))
      .set('Authorization', 'Bearer ')
      .send({
        data: {
          clientID: token.clientID,
          clientSecret: token.clientSecret,
        },
      });
    assert.equal(result.body.code, 0);
    // accessToken
    const accessToken = result.body['eb-jwt-oauth'].accessToken;
    assert.equal(!!accessToken, true);
    // create
    result = await app
      .httpRequest()
      .post(mockUrl('/test/party/test/atom/checkRightCreate'))
      .set('Authorization', `Bearer ${accessToken}`)
      .send();
    assert.equal(result.body.code, 0);
    // logout
    result = await app
      .httpRequest()
      .post(mockUrl('/a/base/auth/logout'))
      .set('Authorization', `Bearer ${accessToken}`)
      .send();
    assert.equal(result.body.code, 0);
  });
});

async function _readCabloyInitFile() {
  // fileName
  const fileName = path.join(os.homedir(), '.cabloy', 'openauth.json');
  // config
  const content = await fse.readFile(fileName);
  const config = JSON.parse(content);
  // ok
  return { fileName, config };
}