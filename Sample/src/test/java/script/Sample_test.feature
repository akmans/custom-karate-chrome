Feature: 簡単テスト

Scenario: サンプル
  Given driver 'https://www.rakuten.co.jp/'
  * driver.screenshot()
  Then waitForText('.corporate-link a', '会社概要')
  * driver.screenshot()
  And match attribute('.corporate-link a', 'href') == 'https://corp.rakuten.co.jp/'
