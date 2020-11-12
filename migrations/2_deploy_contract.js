const Klaystagram = artifacts.require('./painters.sol')
const fs = require('fs')

module.exports = function (deployer) {
  deployer.deploy(painters)
    .then(() => {
    if (painters._json) {
      // 1. 최근에 배포한 컨트랙트의 ABI 파일을 'deployedABI'에 기록합니다.
      fs.writeFile(
        'deployedABI',
        JSON.stringify(painters._json.abi, 2),
        (err) => {
          if (err) throw err
          console.log(`The abi of ${painters._json.contractName} is recorded on deployedABI file`)
        })
    }

    // 2. 최근에 배포한 컨트랙트 주소를 'deployedAddress'에 기록합니다.
    fs.writeFile(
      'deployedAddress',
      painters.address,
      (err) => {
        if (err) throw err
        console.log(`The deployed contract address * ${painters.address} * is recorded on deployedAddress file`)
    })
  })
}