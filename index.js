{
  "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.100 Safari/537.36",
  "environment": {
    "networkUserAgent": "Mozilla/5.0 (Linux; Android 6.0.1; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3694.0 Mobile Safari/537.36 Chrome-Lighthouse",
    "hostUserAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.100 Safari/537.36",
    "benchmarkIndex": 1580
  },
  "lighthouseVersion": "5.1.0",
  "fetchTime": "2019-06-23T17:55:35.782Z",
  "requestedUrl": "http://www.baidu.com/",
  "finalUrl": "http://www.baidu.com/",
  "runWarnings": [],
  "audits": {
    "is-on-https": {
      "id": "is-on-https",
      "title": "Does not use HTTPS",
      "description": "All sites should be protected with HTTPS, even ones that don't handle sensitive data. HTTPS prevents intruders from tampering with or passively listening in on the communications between your app and your users, and is a prerequisite for HTTP/2 and many new web platform APIs. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/https).",
      "score": 0,
      "scoreDisplayMode": "binary",
      "displayValue": "60 insecure requests found",
      "details": {
        "type": "table",
        "headings": [
          {
            "key": "url",
            "itemType": "url",
            "text": "Insecure URL"
          }
        ],
        "items": [
          {
            "url": "http://www.baidu.com/"
          },
          {
            "url": "http://sm.bdimg.com/static/wiseindex/img/fetch_ing_8_0.png"
          },
          {
            "url": "http://static.open.baidu.com/media/ch16/png/1.png"
          },
          {
            "url": "http://sm.bdimg.com/static/wiseindex/fonts/n-icons_7bcbf44.woff"
          },
          {
            "url": "http://hpd.baidu.com/v.gif?tid=13&ct=1&cst=1&logFrom=index&logInfo=index&ssid=0&from=844b&pu=sz%40320_1001%2Cta%40iphone_2_6.0_24_74.0&qid=3336455358&sid=130611_126895_127759_132656_133282_114745_130511_131888_120138_132866_133017_132910_133044_131246_122157_132440_130763_132394_132378_132325_132213_131517_132260_118878_118873_131401_118856_118829_118797_131649_131577_132840_131533_131529_133158_132604_129565_107317_132590_132781_130128_122034_131874_132708_131196_133352_133479_129651_133164_131861_132558_132540_133290_133473_131905_128891_132293_132552_133067_132543_131423_132421_133414_110085_131770_127969_133153_123289_127316_133195_127417_131548_132725_133180_133341&logid=3336455358&ref=index_iphone&r=l1561312537517"
          },
          {
            "url": "http://m.baidu.com/static/index/plus/public/icon_police.png"
          },
          {
            "url": "http://www.baidu.com/?action=static&ms=1&version=css_page_2@0,css_callapp@0,css_weather@0,css_icon@0,css_plus@0,css_edit@0,css_modal@0,css_widget_sug@0,css_skin@0,js_esl@0,js_zepto@0,js_event@0,js_fastclick@0,js_utils@0,js_smartymonkey@0,js_index@0,js_banner_ctrl@0,js_inputlog@0,js_bdnow@0,js_nctips@0,js_widget_textinput@0,js_widget_sug@0,js_mp@0,js_hash_lib@0,js_skinRenderIndex@0,js_skinIphone@0,js_prefetch@0,js_sug@0,js_iscroll@0,js_superframe@0,js_init@0,js_geolocation@0,js_login@0,js_tab@0,js_md5@0,js_url@0,js_lswrite@0,js_modal@0,js_thirdparty@0,js_m_monitor@0,js_superstart@0,js_baiduloc@0,js_callbaiduapp_android@0&callback=B.getCode&r=433&sid=130611_126895_127759_132656_133282_114745_130511_131888_120138_132866_133017_132910_133044_131246_122157_132440_130763_132394_132378_132325_132213_131517_132260_118878_118873_131401_118856_118829_118797_131649_131577_132840_131533_131529_133158_132604_129565_107317_132590_132781_130128_122034_131874_132708_131196_133352_133479_129651_133164_131861_132558_132540_133290_133473_131905_128891_132293_132552_133067_132543_131423_132421_133414_110085_131770_127969_133153_123289_127316_133195_127417_131548_132725_133180_133341"
          },
          {
            "url": "http://m.baidu.com/se/static/img/iphone/logo.png"
          },
          {
            "url": "http://m.baidu.com/se/static/img/iphone/tab_loading__bg_logo.png"
          },
          {
            "url": "http://m.baidu.com/static/search/clear.png"
          },
          {
            "url": "http://sm.bdimg.com/static/wiseindex/amd_modules/ralltiir_489d038.js"
          },
          {
            "url": "http://m.baidu.com/sugrec?callback=jsonp1&type=3&prod=his&pic=1&from=wise_web&lid=3336455358&ishome=1&net=&islogin=0&hissid=130611,126895,127759,132656,133282,114745,130511,131888,120138,132866,133017,132910,133044,131246,122157,132440,130763,132394,132378,132325,132213,131517,132260,118878,118873,131401,118856,118829,118797,131649,131577,132840,131533,131529,133158,132604,129565,107317,132590,132781,130128,122034,131874,132708,131196,133352,133479,129651,133164,131861,132558,132540,133290,133473,131905,128891,132293,132552,133067,132543,131423,132421,133414,110085,131770,127969,133153,123289,127316,133195,127417,131548,132725,133180,133341&lid=3336455358&_=1561312537749"
          },
          {
            "url": "http://sm.bdimg.com/static/wiseindex/js/package/newsActivity_f3a3935.js"
          },
          {
            "url": "http://s.bdstatic.com/common/openjs/openBox.js?_v=2019-06-24-1"
          },
          {
            "url": "http://m.baidu.com/tc?tcreq4log=1&r=1561312537711&logid=3336455358&from=844b&pu=sz%2540320_1001%252Cta%2540iphone_2_6.0_24_74.0&ct=10&cst=1&ref=index_iphone&logFrom=index"
          },
          {
            "url": "http://sm.bdimg.com/static/wiseindex/amd_modules/@searchfe/assert_3ed54c3.js"
          },
          {
            "url": "http://sm.bdimg.com/static/wiseindex/amd_modules/@searchfe/underscore_23fe246.js"
          },
          {
            "url": "http://sm.bdimg.com/static/wiseindex/js/lib/atomWrapper_6fc442d.js"
          },
          {
            "url": "http://m.baidu.com/se/static/wiseatom/personalcenter/pack_bc18b69.js"
          },
          {
            "url": "http://sm.bdimg.com/static/wiseindex/js/package/superframe_5b7bdae.js"
          },
          {
            "url": "http://m.baidu.com/static/index/plus/public/tab_news.png"
          },
          {
            "url": "http://m.baidu.com/se/static/wiseatom/personalcenter/assets/img/default_icon_02f13d8.png"
          },
          {
            "url": "http://m.baidu.com/se/static/wiseatom/personalcenter/assets/img/hanbaobao_04adf60.png"
          },
          {
            "url": "http://m.baidu.com/se/static/wiseatom/personalcenter/assets/img/guanzhu_0edf6fe.png"
          },
          {
            "url": "http://m.baidu.com/se/static/wiseatom/personalcenter/assets/img/shoucang_5ef89d6.png"
          },
          {
            "url": "http://m.baidu.com/se/static/wiseatom/personalcenter/assets/img/dingdan_6391122.png"
          },
          {
            "url": "http://m.baidu.com/se/static/wiseatom/personalcenter/assets/img/pifu_eef387c.png"
          },
          {
            "url": "http://m.baidu.com/se/static/wiseatom/personalcenter/assets/img/fankui_cc44349.png"
          },
          {
            "url": "http://m.baidu.com/se/static/wiseatom/personalcenter/assets/img/spritelist_71904c7.png"
          },
          {
            "url": "http://sm.bdimg.com/static/wiseindex/js/lib/transfer/bubble/bubble_99b5770.js"
          },
          {
            "url": "http://sm.bdimg.com/static/wiseindex/js/lib/transfer/logo/logo_857fccc.js"
          },
          {
            "url": "http://sm.bdimg.com/static/wiseindex/js/lib/transfer/a4/index_499c00c.js"
          },
          {
            "url": "http://sm.bdimg.com/static/wiseindex/js/plugin/safariicon_6bd009a.js"
          },
          {
            "url": "http://sm.bdimg.com/static/wiseindex/js/lib/invoke/setIvkCK_bdaf5e4.js"
          },
          {
            "url": "http://sm.bdimg.com/static/wiseindex/js/lib/invoke/component/background_dbdb406.js"
          },
          {
            "url": "http://sm.bdimg.com/static/wiseindex/js/lib/invoke/component/btmBanner_f91323e.js"
          },
          {
            "url": "http://sm.bdimg.com/static/wiseindex/js/lib/invoke/component/fullscreen_f01324e.js"
          },
          {
            "url": "http://sm.bdimg.com/static/wiseindex/img/favicon64.ico"
          },
          {
            "url": "http://sm.bdimg.com/static/wiseindex/js/lib/transfer/common/ivkBox_cd5790c.js"
          },
          {
            "url": "http://sm.bdimg.com/static/wiseindex/js/lib/invoke/getInvokeLogData_fc32168.js"
          },
          {
            "url": "http://sm.bdimg.com/static/wiseindex/js/lib/invoke/serverDataFactory_53f7feb.js"
          },
          {
            "url": "http://sm.bdimg.com/static/wiseindex/js/lib/invoke/fnProvider_aeb4eed.js"
          },
          {
            "url": "http://sm.bdimg.com/static/wiseindex/js/lib/transfer/common/Core_426be15.js"
          },
          {
            "url": "http://sm.bdimg.com/static/wiseindex/js/lib/invoke/log_8406fdd.js"
          },
          {
            "url": "http://sm.bdimg.com/static/wiseindex/js/lib/invoke/setFullScreenIvkCK_92b17a0.js"
          },
          {
            "url": "http://sm.bdimg.com/static/wiseindex/amd_modules/@baidu/invoke-box_36cd511.js"
          },
          {
            "url": "http://sm.bdimg.com/static/wiseindex/js/lib/invoke/invokeBox_12354c1.js"
          },
          {
            "url": "http://sm.bdimg.com/static/wiseindex/js/lib/invoke/invokeSecr_13c5fec.js"
          },
          {
            "url": "http://sm.bdimg.com/static/wiseindex/js/lib/transfer/common/DataProcess_deb477f.js"
          },
          {
            "url": "http://sm.bdimg.com/static/wiseindex/js/lib/transfer/common/StrategyDataProcess_787f12d.js"
          },
          {
            "url": "http://sm.bdimg.com/static/wiseindex/js/lib/transfer/common/ShieldMonitor_b61052e.js"
          },
          {
            "url": "http://sm.bdimg.com/static/wiseindex/amd_modules/@searchfe/user-agent_24ce52d.js"
          },
          {
            "url": "http://m.baidu.com/tc?tcreq4log=1&r=1561312538409&logid=3336455358&from=844b&pu=sz%2540320_1001%252Cta%2540iphone_2_6.0_24_74.0&ct=10&cst=1&ref=index_iphone&logFrom=baidulogo&logoInfo=%7B%22origin%22%3A%221023197w%22%2C%22from%22%3A%22844b%22%2C%22channel%22%3A%221023206g%22%2C%22browserid%22%3A%2224%22%2C%22qid%22%3A%223336455358%22%2C%22timestamp%22%3A1561312538409%7D"
          },
          {
            "url": "http://m.baidu.com/tc?tcreq4log=1&r=1561312538417&logid=3336455358&from=844b&pu=sz%2540320_1001%252Cta%2540iphone_2_6.0_24_74.0&ct=10&cst=1&ref=index_iphone&logFrom=A4&logInfo=%7B%22origin%22%3A%221023262j%22%2C%22from%22%3A%22844b%22%2C%22channel%22%3A%221023262o%22%2C%22browserid%22%3A%2224%22%2C%22qid%22%3A%223336455358%22%2C%22timestamp%22%3A1561312538410%2C%22action%22%3A%22show%22%7D"
          },
          {
            "url": "http://m.baidu.com/tc?tcreq4log=1&r=1561312538420&logid=3336455358&from=844b&pu=sz%2540320_1001%252Cta%2540iphone_2_6.0_24_74.0&ct=10&cst=2&ref=index_iphone&logFrom=callbaidu&logInfo=defaul_try"
          },
          {
            "url": "http://m.baidu.com/tcbox?service=bdbox&action=pblog&ctv=2&cen=uid_ua_ut&data=%7B%22appid%22%3A%221%22%2C%22dataid%22%3A%222%22%2C%22actiontype%22%3A%221%22%2C%22actionid%22%3A%222%22%2C%22actiondata%22%3A%7B%22ref%22%3A%22%22%2C%22gmv%22%3A%22%22%2C%22source%22%3A%22%22%2C%22boxVersion%22%3A0%2C%22boxPlatform%22%3A%22android%22%2C%22evtName%22%3A%22openBox%22%2C%22evtType%22%3A%221021206d%22%2C%22evtTag%22%3A%7B%22source%22%3A%221021206d%22%2C%22from%22%3A%22openbox%22%2C%22page%22%3A%22chrome%22%2C%22type%22%3A%22%22%2C%22value%22%3A%22%22%2C%22channel%22%3A%221021206r%22%2C%22extlog%22%3A%22%22%2C%22baiduId%22%3A%226FBB856F371C7962D5DE018E359165E8%3AFG%3D1%22%2C%22app_now%22%3A%22chrome_1561312538422_8535240216%22%2C%22yyb_pkg%22%3A%22com.baidu.searchbox%22%2C%22idmData%22%3A%7B%22firstOpen%22%3A%22lite%22%2C%22secondOpen%22%3A%22main%22%2C%22status%22%3A%220%22%2C%22timeout%22%3A1561398937966%7D%2C%22matrix%22%3A%22lite%22%7D%7D%2C%22cateid%22%3A14%7D&_rnd=3217788"
          },
          {
            "url": "baiduboxlite://utils?action=sendIntent&minver=3.3&params=%7B%22intent%22%3A%22intent%3A%23Intent%3Baction%3Dcom.baidu.searchbox.action.HOME%3Bpackage%3Dcom.baidu.searchbox.lite%3BS.targetCommand%3D%257B%2522mode%2522%253A%25220%2522%252C%2522intent%2522%253A%2522intent%253A%2523Intent%253Baction%253Dcom.baidu.searchbox.action.HOME%253Bcategory%253Dandroid.intent.category.DEFAULT%253BS.extra_target_tab%253DFeed%253Bend%2522%252C%2522min_v%2522%253A%252220120832%2522%257D%3Bend%22%7D&needlog=1&logargs=%7B%22source%22%3A%221021206d%22%2C%22from%22%3A%22openbox%22%2C%22page%22%3A%22chrome%22%2C%22type%22%3A%22%22%2C%22value%22%3A%22%22%2C%22channel%22%3A%221021206r%22%2C%22extlog%22%3A%22%22%2C%22baiduId%22%3A%226FBB856F371C7962D5DE018E359165E8%3AFG%3D1%22%2C%22app_now%22%3A%22chrome_1561312538422_8535240216%22%2C%22yyb_pkg%22%3A%22com.baidu.searchbox%22%2C%22idmData%22%3A%7B%22firstOpen%22%3A%22lite%22%2C%22secondOpen%22%3A%22main%22%2C%22status%22%3A%220%22%2C%22timeout%22%3A1561398937966%7D%2C%22matrix%22%3A%22lite%22%7D"
          },
          {
            "url": "baiduboxapp://utils?action=sendIntent&minver=7.4&params=%7B%22intent%22%3A%22intent%3A%23Intent%3Baction%3Dcom.baidu.searchbox.action.HOME%3Bpackage%3Dcom.baidu.searchbox%3BS.targetCommand%3D%257B%2522mode%2522%253A%25220%2522%252C%2522intent%2522%253A%2522intent%253A%2523Intent%253Baction%253Dcom.baidu.searchbox.action.HOME%253Bcategory%253Dandroid.intent.category.DEFAULT%253BS.extra_target_tab%253DFeed%253Bend%2522%252C%2522min_v%2522%253A%252216787968%2522%257D%3Bend%22%7D&needlog=1&logargs=%7B%22source%22%3A%221021206d%22%2C%22from%22%3A%22openbox%22%2C%22page%22%3A%22chrome%22%2C%22type%22%3A%22%22%2C%22value%22%3A%22%22%2C%22channel%22%3A%221021206r%22%2C%22extlog%22%3A%22%22%2C%22baiduId%22%3A%226FBB856F371C7962D5DE018E359165E8%3AFG%3D1%22%2C%22app_now%22%3A%22chrome_1561312538584_4783387319%22%2C%22yyb_pkg%22%3A%22com.baidu.searchbox%22%2C%22idmData%22%3A%7B%22firstOpen%22%3A%22lite%22%2C%22secondOpen%22%3A%22main%22%2C%22status%22%3A%220%22%2C%22timeout%22%3A1561398937966%7D%2C%22matrix%22%3A%22main%22%7D"
          },
          {
            "url": "http://hpd.baidu.com/v.gif?logid=3336455358&ssid=0&sid=130611_126895_127759_132656_133282_114745_130511_131888_120138_132866_133017_132910_133044_131246_122157_132440_130763_132394_132378_132325_132213_131517_132260_118878_118873_131401_118856_118829_118797_131649_131577_132840_131533_131529_133158_132604_129565_107317_132590_132781_130128_122034_131874_132708_131196_133352_133479_129651_133164_131861_132558_132540_133290_133473_131905_128891_132293_132552_133067_132543_131423_132421_133414_110085_131770_127969_133153_123289_127316_133195_127417_131548_132725_133180_133341&from=844b&pu=sz%2540320_1001%252Cta%2540iphone_2_6.0_24_74.0&ct=1&cst=1&logFrom=mid_news&logInfo=a2_l*&logExtra=%7B%22st%22%3A%22news%22%2C%22rid%22%3A%229096754004326685511%22%2C%22isBaijiahao%22%3A1%2C%22extra%22%3A%22%7B%5C%22rec_src%5C%22%3A%5B52%5D%2C%5C%22mark%5C%22%3A0%2C%5C%22mark_rec%5C%22%3A0%2C%5C%22round_loop_ids%5C%22%3A%5B100%2C200%5D%2C%5C%22top%5C%22%3A1%2C%5C%22ua%5C%22%3A%5C%220_0__0_240%5C%22%2C%5C%22ut%5C%22%3A%5C%22%5C%22%2C%5C%22province%5C%22%3A%5C%22%5C%5Cu5317%5C%5Cu4eac%5C%22%2C%5C%22city%5C%22%3A%5C%22%5C%5Cu5317%5C%5Cu4eac%5C%22%2C%5C%22district%5C%22%3A%5C%22%5C%22%2C%5C%22channel_id%5C%22%3A1%2C%5C%22session_id%5C%22%3A%5C%2215613125378738%5C%22%2C%5C%22refresh_index%5C%22%3A%5C%22%5C%22%2C%5C%22position%5C%22%3A0%2C%5C%22log_id%5C%22%3A3337869309%2C%5C%22refresh_state%5C%22%3A1%2C%5C%22city_code%5C%22%3A%5C%22131%5C%22%2C%5C%22local_city%5C%22%3A-1%2C%5C%22user_type%5C%22%3A2%2C%5C%22refresh_type%5C%22%3A1%2C%5C%22refresh_timestamp_ms%5C%22%3A1561312537892%2C%5C%22cs%5C%22%3A%5C%222824520757%203510552953%5C%22%2C%5C%22gr_policy_flag%5C%22%3A0%2C%5C%22final_score%5C%22%3A2%2C%5C%22author_authority_score_v1%5C%22%3A5%2C%5C%22audit_final_score%5C%22%3A3%2C%5C%22predictor_q_score%5C%22%3A0%2C%5C%22vertical_types%5C%22%3A%5B0%2C26%5D%2C%5C%22templates%5C%22%3A%7B%5C%22id%5C%22%3A%5B30%2C30%5D%7D%2C%5C%22wifiinfo%5C%22%3A%5C%22%5C%22%2C%5C%22gr_original_pos%5C%22%3A0%2C%5C%22gr_step_click%5C%22%3A0.0080885523930192%2C%5C%22gr_step_related_click%5C%22%3A8.11092713775e-5%2C%5C%22dispatch_time%5C%22%3A1561312537%2C%5C%22msrcid%5C%22%3A80001%2C%5C%22mthid%5C%22%3A%5C%221573407181922932%5C%22%2C%5C%22mrtype%5C%22%3A%5C%22text%5C%22%7D%22%2C%22title%22%3A%22%E4%B9%A0%E8%BF%91%E5%B9%B3%E4%BB%A5%E4%B8%89%E2%80%9C%E6%96%B0%E2%80%9D%E7%BB%AD%E5%86%99%E4%B8%AD%E6%9C%9D%E5%8F%8B%E8%B0%8A%E6%96%B0%E7%AF%87%E7%AB%A0%22%2C%22picNum%22%3A3%2C%22stype%22%3A0%2C%22itemType%22%3A%22newsTitle%22%2C%22pos%22%3A1%7D%2C%7B%22st%22%3A%22news%22%2C%22rid%22%3A%229011511856933223377%22%2C%22isBaijiahao%22%3A1%2C%22extra%22%3A%22%7B%5C%22rec_src%5C%22%3A%5B52%5D%2C%5C%22mark%5C%22%3A0%2C%5C%22mark_rec%5C%22%3A0%2C%5C%22sec_fixed%5C%22%3A1%2C%5C%22ua%5C%22%3A%5C%220_0__0_240%5C%22%2C%5C%22ut%5C%22%3A%5C%22%5C%22%2C%5C%22province%5C%22%3A%5C%22%5C%5Cu5317%5C%5Cu4eac%5C%22%2C%5C%22city%5C%22%3A%5C%22%5C%5Cu5317%5C%5Cu4eac%5C%22%2C%5C%22district%5C%22%3A%5C%22%5C%22%2C%5C%22channel_id%5C%22%3A1%2C%5C%22round_loop_ids%5C%22%3A%5B200%5D%2C%5C%22session_id%5C%22%3A%5C%2215613125378738%5C%22%2C%5C%22refresh_index%5C%22%3A%5C%22%5C%22%2C%5C%22position%5C%22%3A1%2C%5C%22log_id%5C%22%3A3337869309%2C%5C%22refresh_state%5C%22%3A1%2C%5C%22city_code%5C%22%3A%5C%22131%5C%22%2C%5C%22local_city%5C%22%3A-1%2C%5C%22user_type%5C%22%3A2%2C%5C%22refresh_type%5C%22%3A1%2C%5C%22refresh_timestamp_ms%5C%22%3A1561312537892%2C%5C%22cs%5C%22%3A%5C%221128252802%204037058600%5C%22%2C%5C%22gr_policy_flag%5C%22%3A0%2C%5C%22final_score%5C%22%3A2%2C%5C%22author_authority_score_v1%5C%22%3A5%2C%5C%22audit_final_score%5C%22%3A-1%2C%5C%22predictor_q_score%5C%22%3A0%2C%5C%22vertical_types%5C%22%3A%5B0%2C26%5D%2C%5C%22templates%5C%22%3A%7B%5C%22id%5C%22%3A%5B30%2C30%5D%7D%2C%5C%22wifiinfo%5C%22%3A%5C%22%5C%22%2C%5C%22gr_original_pos%5C%22%3A1%2C%5C%22gr_step_click%5C%22%3A0.04365961253643%2C%5C%22gr_step_related_click%5C%22%3A0.0001122939547713%2C%5C%22dispatch_time%5C%22%3A1561312537%2C%5C%22msrcid%5C%22%3A80001%2C%5C%22mthid%5C%22%3A%5C%221573407181922932%5C%22%2C%5C%22mrtype%5C%22%3A%5C%22text%5C%22%7D%22%2C%22title%22%3A%22%E8%BF%99%E7%A7%8D%E7%B2%BE%E7%A5%9E%EF%BC%8C%E4%B9%A0%E8%BF%91%E5%B9%B3%E8%A6%81%E6%B1%82%E7%BB%A7%E6%89%BF%E5%92%8C%E5%8F%91%E6%89%AC%22%2C%22picNum%22%3A3%2C%22stype%22%3A0%2C%22itemType%22%3A%22newsTitle%22%2C%22pos%22%3A2%7D&r=l1561312538830"
          },
          {
            "url": "http://m.baidu.com/tc?tcreq4log=1&r=1561312539218&logid=3336455358&from=844b&pu=sz%2540320_1001%252Cta%2540iphone_2_6.0_24_74.0&ct=10&cst=1&ref=index_iphone&logFrom=callbaidush&logInfo=%7B%22pos%22%3A3%2C%22browserid%22%3A%2224%22%2C%22from%22%3A%22844b%22%2C%22channel%22%3A%221023262o%22%2C%22source%22%3A%221023262j%22%2C%22show%22%3A1%7D"
          }
        ]
      }
    },
    "redirects-http": {
      "id": "redirects-http",
      "title": "Does not redirect HTTP traffic to HTTPS",
      "description": "If you've already set up HTTPS, make sure that you redirect all HTTP traffic to HTTPS. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/http-redirects-to-https).",
      "score": 0,
      "scoreDisplayMode": "binary"
    },
    "service-worker": {
      "id": "service-worker",
      "title": "Does not register a service worker that controls page and start_url",
      "description": "The service worker is the technology that enables your app to use many Progressive Web App features, such as offline, add to homescreen, and push notifications. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/registered-service-worker).",
      "score": 0,
      "scoreDisplayMode": "binary"
    },
    "works-offline": {
      "id": "works-offline",
      "title": "Current page does not respond with a 200 when offline",
      "description": "If you're building a Progressive Web App, consider using a service worker so that your app can work offline. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/http-200-when-offline).",
      "score": 0,
      "scoreDisplayMode": "binary",
      "warnings": []
    },
    "viewport": {
      "id": "viewport",
      "title": "Has a `<meta name=\"viewport\">` tag with `width` or `initial-scale`",
      "description": "Add a viewport meta tag to optimize your app for mobile screens. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/has-viewport-meta-tag).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "warnings": []
    },
    "without-javascript": {
      "id": "without-javascript",
      "title": "Contains some content when JavaScript is not available",
      "description": "Your app should display some content when JavaScript is disabled, even if it's just a warning to the user that JavaScript is required to use the app. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/no-js).",
      "score": 1,
      "scoreDisplayMode": "binary"
    },
    //首次内容绘制  
    // 如果首次内容绘制耗时太长，那么：
    // 你的网络连接可能有性能问题
    // 资源太过庞大（如 index.html），传输它们消耗太多时间
    "first-contentful-paint": {
      "id": "first-contentful-paint",
      "title": "First Contentful Paint",
      "description": "First Contentful Paint marks the time at which the first text or image is painted. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/first-contentful-paint).",
      "score": 1,
      "scoreDisplayMode": "numeric",
      "numericValue": 1292.75,
      "displayValue": "1.3 s"
    },
    // 首次有意义绘制  FMP = 最大布局变化时的绘制
    // FMP 指标如何对开发者产生帮助？
    // 太多资源（图片、样式、字体、JavaScript）有较高的加载优先级，因此，它们阻塞了 FMP 
    "first-meaningful-paint": {
      "id": "first-meaningful-paint",
      "title": "First Meaningful Paint",
      "description": "First Meaningful Paint measures when the primary content of a page is visible. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/first-meaningful-paint).",
      "score": 0.83,
      "scoreDisplayMode": "numeric",
      "numericValue": 2672.7135000000003,
      "displayValue": "2.7 s"
    },
    "load-fast-enough-for-pwa": {
      "id": "load-fast-enough-for-pwa",
      "title": "Page load is fast enough on mobile networks",
      "description": "A fast page load over a cellular network ensures a good mobile user experience. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/fast-3g).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "numericValue": 6916.872000000001
    },
    "speed-index": {
      "id": "speed-index",
      "title": "Speed Index",
      "description": "Speed Index shows how quickly the contents of a page are visibly populated. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/speed-index).",
      "score": 0.73,
      "scoreDisplayMode": "numeric",
      "numericValue": 4482.27466304704,
      "displayValue": "4.5 s"
    },
    "screenshot-thumbnails": {
      "id": "screenshot-thumbnails",
      "title": "Screenshot Thumbnails",
      "description": "This is what the load of your site looked like.",
      "score": null,
      "scoreDisplayMode": "informative",
      "details": {
        "type": "filmstrip",
        "scale": 3000,
        "items": [
          {
            "timing": 300,
            "timestamp": 41871259468,
            "data": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRQBAwQEBQQFCQUFCRQNCw0UFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFP/AABEIAMAAeAMBEQACEQEDEQH/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/AP1ToAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgD/9k="
          },
          {
            "timing": 600,
            "timestamp": 41871559468,
            "data": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRQBAwQEBQQFCQUFCRQNCw0UFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFP/AABEIAMAAeAMBEQACEQEDEQH/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/AP1ToAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgD/9k="
          },
          {
            "timing": 900,
            "timestamp": 41871859468,
            "data": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRQBAwQEBQQFCQUFCRQNCw0UFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFP/AABEIAMAAeAMBEQACEQEDEQH/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/AP1ToAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgD/9k="
          },
          {
            "timing": 1200,
            "timestamp": 41872159468,
            "data": "data:image/jpeg;base64,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"
          },
          {
            "timing": 1500,
            "timestamp": 41872459468,
            "data": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRQBAwQEBQQFCQUFCRQNCw0UFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFP/AABEIAMAAeAMBEQACEQEDEQH/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/AP1ToAKACgAoAKACgAoAKACgAoAKACgAoAqanfpptoZ5I5JEDKp8sZI3MFyfYZyT2AJ7UbCexieFPFNz4mupJF0e5stNECtHc3bosjS73V4miBJTaFRsk8hx6Glze8422OudGjGiqkZpzbacbPRK1nfz106W8zpqZyhQAUAFABQAUAFACbqVwFpgFABQAUAFAFXU9Ng1a0a2uVdoiyv+7kaNgVYMpDKQQQQDwaAK3h7w5YeFtOWw02F4LRWZ1iaZ5ApJyQNxJAzzgccnjmgDToAKACgAoAKACgDkPiD8WvCXwqTTJPFmu2uiR6ldLaWrXJPzyHucA7UHG6RsIuRuIyK68Lg8TjZSjhoczirtLokTKcYJc3U+Rrr9qz43+EPhz498Qa34FtheWPiSDSrJJbaQxWisJfOD+WwMyKUgjSQFdzXA+ZvlU/qeF4XybG4rCUKdd+/S55JON3K0bWu7Ju7bW6UWrHmPEV1GTa6/gfXGg+Mr/U/hxHrT2EUuvxWKve6TaTib7PeCINLbFlzlkcleMnjpX5PXpqlVlBO6T0fddH8z0oSU43R5RJ+0Hr62iyj+xnlMZJiFu2Q+EIGftHI+cjIGRtJwRnGJZ2/w0+Jmp+MPFF3ptwLC5s4rNbj7XZRsmyTco8t/3jjPJxzn5T1FAHqFABQAUAFABQAUAFADX+6fpQJ7Hxd8Yfiv4u0T4s/Em0sdR+JTQaObZtPHhPSLa8060JsYZf8ASjKpIHmMWIzypP4fPVa9X29ZXlaNtIpPovU/XcHgMtpZVl9adGg51ufmdWpUi9KkldWmopKNtbb26m5cftur4W8J+Gb7V/8AhGNVubvRrW/vUsteaO6WVow0sa24gdVcHOEaRcnjIpVc1dFQ+GXupvX/ACT/AEKwnASzCtiIU6k6ajUnCHNCLXu6Lmk5xe/xOMHbz2OR8aSeAv2ntC1LX/FEPia8ttM1rT08P2UWoW8U902oQwGO1RWRVjVy0W4M7FfLZg6jIP6Nwbm2Pw2NrfUWo3TbcrtKMYc7lZa6K9ld3PzniHKo4GhhvaaycXdxXWNScG3dtPVbpR0stXq+YvfH/wAVofizovi7T/G+manDfeJI/D03hc396NIt5J3nhig8sxIG2C3fdMEPz7GXeCQP0DCYTJa+Hr4GvQcfZ01VjUSXtGuWMm73a97mTUVa0XaTTsz5OUsQpc6d+liL4Nnw38C/g2/ivwL8QtRms/FPiC202e4v0h0waUYrW5n8icy214Gf58MyJ8xMZDBc7vjPELMsd9Yo08XQVKUUkuVpqSd9b8srLTSNrrW+59zwZk9HNcTWpyXOlFytZt35ox0SqUtfe6ytZPS9mtjRf2j/ABqnhXxZbv8AES38U6/p/h+XUU1PSntJbOFxe28Y/cHT4mVtkuOZHU4Y7ckbfxyOZVI05/vLtRburNbpdYp9T9hlwfllTE4eboOnSlUUHGXNzO9KpJ+9GrNW5oXtyqWyT0d2/C74pfEK6+KWhC7+KWl6h/a2uw2+p2n/AAlen3MUtsjukawWwtQIi4CD9wQ0hZSyozFo9aGLrutFOqneTT1ja3l59rHNmmSZXTw2JcMvlD2dNyg+SqnzNK7lee0fea5lZW3laz+94ye+fxr65n4BG/UkpFBQAUAFABQAUAIwypHt3pPyA8f8Wfsx6B4v8Va5r03iDxVpk+teX9vtNJ1mS1tbgJEsIDxoAGBRADnPeuOeEpznKpqnLe0mr6WPo6PEGNo4WlhLQlGnzcvNCEmuZ3erV3r3KcH7H/w50y01G00Wx1Lw9ZanAttf2ul6xdRRXkaoY1WVfMIcbWYHPXcxOSSTP1KjyuKTSaS0b2W35m9TifNcROlVxFRTlSm6kXKMXaUmm2tFu0tHdabF3/hlnwKngTWfCcNnd2um6mLUvJFeP58MltGiW8sUhyUdBGhzyCQc5BIPsZZiJ5PXWIwmktd9VZx5WrO61Wh4+YZlis0cZYuXM4ppejk5va32pN+W2w+T9nO2fSUtl8deNotQWNYf7Yi1nbdNGrFgrgJ5TnLMdzIW+ZjnJq/rUudzlCLT3TirbJdLPbonbY8T2EejY3wz+zD4T8F+B9F8M+H5tS0eHStQOqx39rcgXUt0YHt2ldmUqS0bsCAoHAwABWub5jic8xMcVjpKUo25dErJX0SVu7+89LB154GnUpUdqi5ZX6q6l8tYrVEupfs3+H9fnvpte1TW/Ecl5pr6S/8AaV4pC27TRzEL5aKQd8SHPsRXhTwlOrdVG3dW36af5Hr4HPsdllpYJxg1JTWifvKMoq976cs5K3n5Gho37PngzQvHFx4xtNOki8UXJP2jUhcyBpgduQYwRGMhEBwoJxyTk5pYWlGbqpe8+v8AwNgrcQZniMKsBVqXox2WnTbW3M0uibaR6QoxXUfPDqBhQAUAJnmgAz7GgAz7GgAz7GgAz7GgAz7GgAz7GgAz7GgAz7GgBA2enP0oAXdigBC+BmgWwhkA/wD107BddwMoUgHgnpk0tHsF0tzGs/Epu/GeqaD9mCiy0+0vvtPmZ3+fJcps2442/Zs5yc7+gxyDNvvQAtABQAUAFABQAUAFAEV1C9xazRRzyW0joVWaIKXjJGAy7gRkdRkEeoNAHmn7Ofwdn+BXw3j8JSaodVtrW7nktZHyXWJ23fM2ACzNvkwFAXzAmZChlkAOa/af/Z61r48nw1/ZfiG20ZNHF3II7tLlgt1IsYgu4vIni2zwbZCjPvA81vlOTQB6n4Q8P33h3wDoOh6lqUmt6jYadBZXOpXBYvdypEEeVtxYkuwLHJJ55JovbVCaUk0zz/X/AAR4+1HTNIj0/UrCxu7W9e6uGOo3RW4UqMRE7c7WYv7IAu0en1NLHZfTqVOaDaasrxjpr6v7PXr1R8tPLcW1FKa0d935dkuqZ2E/hDVzYPF/wlWqXsjywFWuhbJ5SrKrOVMUCkkoGGG3Kc4IwTXztOsoy5uW2/5ab+fb5HvVaLqxs5a3X/BItETy/jB4mXJbGgaSMnqf9I1GsW7ts64pRSijsy8TMrFlyvQ5pDF81P76/nQAean99fzoAPNT++v50AHmp/fX86ADzU/vr+dAB5qf31/OgA81P76/nQAean99fzoAPNT++v50AHmp/fX86ADzU/vj86ADzU/vr+dAB5qf31/OgCBLazS+kvFihW7kjWF5wo3siliqlupALuQO24+poAm8iP8AuigA8iP+6KADyI/7ooAPIj/uigA8iP8AuigA8iP+6KAEMMQOCADQAeTF/dFACiGM9FBoAPIj/uigA8iP+6KADyI/7ooAPIj/ALooAPIj/uigA8iMfwigCSgAoAKACgAoAKAOX1Twzq2q6vqLvrSwaTdWyQR29tDJHcQMu47xKJcZJdsjYMgKO2SAc5dfC7xDJoEthB42uYrsSRtBfyRTSOiqrABl+0AMctuzxyBkMAAAC94c+Het6Rc6dLeeMb7URa3dxcyBlYGdZAMRPukZSikEj5cgYCledwB3tABQAUAFABQAUAUvtcn+z+VAB9rk/wBn8qAD7XJ/s/lQAfa5P9n8qAD7XJ/s/lQAfapD6flQALdyN02n6CgAF3ITgbSfpQAfapPb8qAD7XJ/s/lQAfa5P9n8qAD7XJ/s/lQAfa5P9n8qAD7XJ/s/lQAoupD/AHfyoAgoAKACgAoAKAIruN5rWaOJ/LkZGVX5+UkcHjmgDE1jw/qer6XDaJr11pkonEkl1YqFl2BT8iFsgZbBJYNwCMDIKgEWq+Fr+70+KOx1y60+8SRpvtRJlLMxbIZcqGUBiAD6L12igCz4f0C60e/1O4uNUmvYrpwYreR5GW3ALHCl3c5IYZxgfKMKKANygAoAKACgAoAVetACUAFABQBk+I5tWgtrdtIijml84ecrgE+VtbO0FlGd20csOv5AGdd3HiiO5tGt7aGSAzM0qhFVkjyu1MmXkgGT5h3HTnNAFGPUPHAtIQdLsZZpLcmXMvlhJtkhAHzNxnyhnHOT25ABoWtz4okvpllsrWG1EUZjO/cxJZdwOG4O3dxyMkfOw5oAsBvEYvocx6YbTJ83DSB8FhgLnjIUsOfvEZ+XpQAGXxA1k7QwWpmMkmyO7JQqm4BN2xmB+XceCM/L0OcAD5rjWxqEixWsRhDKUmZwqlOdw6lg4zgcYPJ44FAD7D+3XGb4WPMmSkAf5VCvk7ieSTswMDAz1zigBvh6XW5ZbsaxBBCBsMRgbcrEgl8d8A4HPX9aANmgAoAVetACZoAM0AGaAEPSgT2OSj8GahD451fX4/EmoG2vrEWqaRNIXtLeQbcSpHkYbg5wRncea4oU6qxEqrneLW1tn33PRnioSwqwyppSUr81tWu1+3kWJvC2oSWqWy69cRxBIw7gMZXKyFiN2/5VIJHygNwvzEDbXaeeMu/CWpTRgReJLyGWNESGTaD91UBLjID5KluR1b0yCAF74Rv7hkMWvXMeHkdg7SndukLgfLIuAAQuOmAAMDigCmnw/vo5/NHinU2OCoieaQxgEYPG/dnk4O7IIU9QdwBs2WiahaxhG1dpMyNIzNGxOC4baCznAGXA64Hlg52tvAGWvhy7jvIrmbW7uR0m80wxnbCw8qNCm1txxmMsOePMbqfmoA380AGaADNACr1oAofaZP7w/IUAH2mT+8PyFAB9pk/vD8hQAfaZP7w/IUAH2mT+8PyFAB9pk/vD8hQAfaZP7w/IUAH2mT+8PyFAB9pk/vD8hQAfaZP7w/IUAH2mT+8PyFAB9pk/vD8hQAfaZP7w/IUAH2mT+8PyFACrcyZ+8PyFAENABQAUAFABQAUAFABQAUAFABQAUAFABQAq9aAEoAKACgAoAKACgAoAKACgAoAKACgAoAKAFXrQAlABQAUAFABQAUAFABQAUAFABQAUAFABQAq9aAEoAKACgAoAKACgAoAKACgAoAKACgAoAKAFXrQAlABQAUAFABQAUAFABQAUAFABQAUAFABQAq9aAEoAKACgAoAKACgAoAKACgAoAKACgAoAKAFXrQAlABQAUAFABQAUAFABQAUAFABQAUAFABQAq9aAEoAKACgAoAKACgAoAKACgAoAKACgAoAKAFXrQAmaADNABmgAzQAZoAM0AGaADNABmgAzQAZoAM0AGaADNACqRnrQB//Z"
          },
          {
            "timing": 1800,
            "timestamp": 41872759468,
            "data": "data:image/jpeg;base64,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"
          },
          {
            "timing": 2100,
            "timestamp": 41873059468,
            "data": "data:image/jpeg;base64,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"
          },
          {
            "timing": 2400,
            "timestamp": 41873359468,
            "data": "data:image/jpeg;base64,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"
          },
          {
            "timing": 2700,
            "timestamp": 41873659468,
            "data": "data:image/jpeg;base64,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"
          },
          {
            "timing": 3000,
            "timestamp": 41873959468,
            "data": "data:image/jpeg;base64,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"
          }
        ]
      }
    },
    "final-screenshot": {
      "id": "final-screenshot",
      "title": "Final Screenshot",
      "description": "The last screenshot captured of the pageload.",
      "score": null,
      "scoreDisplayMode": "informative",
      "details": {
        "type": "screenshot",
        "timing": 2066,
        "timestamp": 41873025738,
        "data": "data:image/jpeg;base64,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p90c72Pexjml0TWNyQTkZyccsYIznxUvJZYJZuPPNUyVTfmT78Oj9jQMAD7OfjleVNljqZWyy1VUZmt2h+W9MEHltxzyfDxQRtmuldW0VK0TxGeSV7HyuZvGAzdyA29wFl3OW4Wyy1M0tdTyPjiIY90Wwl3fqQT7MdVl0Npio5WSNllkc3eRv29XbcnkB9X+Kyq+mbWUktO972MkG1xZjOPEcwUGo0eoK6a+Mhkk/wCbmTbtaAM/O5YLd3UezoVkMvlydY/PWGKSZzYi2I0skbcvcBgOJw7qeilY9PUkdy89D5TNxHSEHbjnu5dM/rHxWcKCnFFDShh4EOzY3ceWwgt5/YEEXBepqu5SRUMUcsAphKwuO0uf6pxnsA8eCsvvNaaKKeNsALKNtXMC0ndk/Nbz5dDz5+Cl6K10lE5rqaLYWhzRgno4hx/iAqJLNRSMhY6N2yJgjAD3AFgIO13PmOXigwILlWzytw+mjinMwiLoyTHw3Yy71hnIz2ws+w1FVV29tRWGImQl0fDYW5Z+qSCTzPX7V620UbZZniN2ZWvaRvdgB/N20ZwM+xZsTGxRsjYMMaA0DsAgqREQEREBERAREQEREBERAREQEREBERAREQEREFEsnC9Z30fiey9YS4ZIxnoPYjmBzgXcwOg8EYwMGATjwHZB7J9G73FEk+jd7iiDH47uzU47uzURA47uzU47uzURA47uzU47uzURA47uzU47uzURA47uzU47uzURA47uzU47uzURA47uzU47uzURA47uzU47uzURA47uzU47uzURA47uzU47uzURA47uzU47uzURA47uzU47uzURA47uzU47uzURA47uzU47uzURA47uzU47uzURA47uzU47uzURA47uzU47uzURA47uzU47uzURA47uzU47uzURBTJO7Y7k3oUREH//2Q=="
      }
    },
    "estimated-input-latency": {
      "id": "estimated-input-latency",
      "title": "Estimated Input Latency",
      "description": "Estimated Input Latency is an estimate of how long your app takes to respond to user input, in milliseconds, during the busiest 5s window of page load. If your latency is higher than 50 ms, users may perceive your app as laggy. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/estimated-input-latency).",
      "score": 1,
      "scoreDisplayMode": "numeric",
      "numericValue": 31.535714285714285,
      "displayValue": "30 ms"
    },
    "max-potential-fid": {
      "id": "max-potential-fid",
      "title": "Max Potential First Input Delay",
      "description": "The maximum potential First Input Delay that your users could experience is the duration, in milliseconds, of the longest task. [Learn more](https://developers.google.com/web/updates/2018/05/first-input-delay).",
      "score": 0.64,
      "scoreDisplayMode": "numeric",
      "numericValue": 208,
      "displayValue": "210 ms"
    },
    // 记录控制台的错误
    "errors-in-console": {
      "id": "errors-in-console",
      "title": "Browser errors were logged to the console",
      "description": "Errors logged to the console indicate unresolved problems. They can come from network request failures and other browser concerns.",
      "score": 0,
      "scoreDisplayMode": "binary",
      "numericValue": 1,
      "details": {
        "type": "table",
        "headings": [
          {
            "key": "url",
            "itemType": "url",
            "text": "URL"
          },
          {
            "key": "description",
            "itemType": "code",
            "text": "Description"
          }
        ],
        "items": [
          {
            "source": "network",
            "description": "Failed to load resource: net::ERR_CONNECTION_REFUSED",
            "url": "http://127.0.0.1:59468/?data=fCMxIzsjMi8xLzUjLSMyIzsjbVRmW1ZlT3daWElUN1cyZFQzNm15UzBLRmdRYjJNM2RlOThTMUd5cVNMWDVCMCxrUzE1UHFodGVHOmlPZjpGdGJrTDhrNEhZNFZ6ezozZ0hmNTFmbmg%2BPiMtIzMjOyM5NTVjfSMtIzQjOzI2NzI0MjM2NDg5Mzl%2B"
          }
        ]
      }
    },
    //首字节时间      ->>>>>>通过缓存改善您的网站的TTFB
    //典型的良好TTFB速度 是： 
    //静态内容100ms（服务器上已作为文件存在的内容）
    //动态内容200-500ms（从数据库和模板组合在一起的内容，例如WordPress）
    // 是什么原因导致TTFB变慢？
    // TTFB缓慢的四个原因是：
    // 高网站流量
    // 网络问题
    // 动态内容：
    // 磁盘使用情况
    // 磁盘速度
    // RAM使用情况
    // 数据库设置
    // 数据库速度
    // 服务器配置：
    // PHP / ASP设置
    // 数据库设置
    // 共享服务器？
    "time-to-first-byte": {
      "id": "time-to-first-byte",
      "title": "Server response times are low (TTFB)",
      "description": "Time To First Byte identifies the time at which your server sends a response. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/ttfb).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "numericValue": 366.971,
      "displayValue": "Root document took 370 ms",
      "details": {
        "type": "opportunity",
        "overallSavingsMs": -233.029,
        "headings": [],
        "items": []
      }
    },
    "first-cpu-idle": {
      "id": "first-cpu-idle",
      "title": "First CPU Idle",
      "description": "First CPU Idle marks the first time at which the page's main thread is quiet enough to handle input. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/first-interactive).",
      "score": 0.58,
      "scoreDisplayMode": "numeric",
      "numericValue": 5929.424000000001,
      "displayValue": "5.9 s"
    },
    "interactive": {
      "id": "interactive",
      "title": "Time to Interactive",
      "description": "Time to interactive is the amount of time it takes for the page to become fully interactive. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/consistently-interactive).",
      "score": 0.54,
      "scoreDisplayMode": "numeric",
      "numericValue": 6916.872000000001,
      "displayValue": "6.9 s"
    },
    "user-timings": {
      "id": "user-timings",
      "title": "User Timing marks and measures",
      "description": "Consider instrumenting your app with the User Timing API to measure your app's real-world performance during key user experiences. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/user-timing).",
      "score": null,
      "scoreDisplayMode": "notApplicable",
      "details": {
        "type": "table",
        "headings": [],
        "items": []
      }
    },
    "critical-request-chains": {
      "id": "critical-request-chains",
      "title": "Minimize Critical Requests Depth",
      "description": "The Critical Request Chains below show you what resources are loaded with a high priority. Consider reducing the length of chains, reducing the download size of resources, or deferring the download of unnecessary resources to improve page load. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/critical-request-chains).",
      "score": null,
      "scoreDisplayMode": "informative",
      "displayValue": "2 chains found",
      "details": {
        "type": "criticalrequestchain",
        "chains": {
          "CD608E0629AD2744B2957D9E8A9D4952": {
            "request": {
              "url": "http://www.baidu.com/",
              "startTime": 41870.962636,
              "endTime": 41871.952362,
              "responseReceivedTime": 41871.330165,
              "transferSize": 90192
            },
            "children": {
              "1000019668.2": {
                "request": {
                  "url": "http://sm.bdimg.com/static/wiseindex/fonts/n-icons_7bcbf44.woff",
                  "startTime": 41872.046064,
                  "endTime": 41872.091215,
                  "responseReceivedTime": 41872.083007,
                  "transferSize": 43404
                }
              },
              "1000019668.65": {
                "request": {
                  "url": "https://gss0.bdstatic.com/5bd1bjqh_Q23odCf/static/itemrep/base/uilib/iconfont/iconfont_fcd5aba.woff?",
                  "startTime": 41872.628444,
                  "endTime": 41872.692518,
                  "responseReceivedTime": 41872.691418,
                  "transferSize": 29718
                }
              }
            }
          }
        },
        "longestChain": {
          "duration": 1729.88200000691,
          "length": 2,
          "transferSize": 29718
        }
      }
    },
    "redirects": {
      "id": "redirects",
      "title": "Avoid multiple page redirects",
      "description": "Redirects introduce additional delays before the page can be loaded. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/redirects).",
      "score": 1,
      "scoreDisplayMode": "numeric",
      "numericValue": 0,
      "displayValue": "",
      "details": {
        "type": "opportunity",
        "headings": [],
        "items": [],
        "overallSavingsMs": 0
      }
    },
    "installable-manifest": {
      "id": "installable-manifest",
      "title": "Web app manifest does not meet the installability requirements",
      "description": "Browsers can proactively prompt users to add your app to their homescreen, which can lead to higher engagement. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/install-prompt).",
      "score": 0,
      "scoreDisplayMode": "binary",
      "explanation": "Failures: No manifest was fetched.",
      "details": {
        "type": "debugdata",
        "items": [
          {
            "failures": [
              "No manifest was fetched"
            ],
            "isParseFailure": true,
            "parseFailureReason": "No manifest was fetched"
          }
        ]
      }
    },
    "apple-touch-icon": {
      "id": "apple-touch-icon",
      "title": "Provides a valid `apple-touch-icon`",
      "description": "For ideal appearance on iOS when users add to the home screen, define an apple-touch-icon. It must point to a non-transparent 192px (or 180px) square PNG. [Learn More](https://developers.google.com/web/fundamentals/design-and-ux/browser-customization/).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "warnings": [
        "`apple-touch-icon-precomposed` is out of date; `apple-touch-icon` is preferred."
      ]
    },
    "splash-screen": {
      "id": "splash-screen",
      "title": "Is not configured for a custom splash screen",
      "description": "A themed splash screen ensures a high-quality experience when users launch your app from their homescreens. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/custom-splash-screen).",
      "score": 0,
      "scoreDisplayMode": "binary",
      "explanation": "Failures: No manifest was fetched.",
      "details": {
        "type": "debugdata",
        "items": [
          {
            "failures": [
              "No manifest was fetched"
            ],
            "isParseFailure": true,
            "parseFailureReason": "No manifest was fetched"
          }
        ]
      }
    },
    "themed-omnibox": {
      "id": "themed-omnibox",
      "title": "Does not set an address-bar theme color",
      "description": "The browser address bar can be themed to match your site. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/address-bar).",
      "score": 0,
      "scoreDisplayMode": "binary",
      "explanation": "Failures: No manifest was fetched,\nNo `<meta name=\"theme-color\">` tag found.",
      "details": {
        "type": "debugdata",
        "items": [
          {
            "failures": [
              "No manifest was fetched",
              "No `<meta name=\"theme-color\">` tag found"
            ],
            "themeColor": null,
            "isParseFailure": true,
            "parseFailureReason": "No manifest was fetched"
          }
        ]
      }
    },
    "content-width": {
      "id": "content-width",
      "title": "Content is sized correctly for the viewport",
      "description": "If the width of your app's content doesn't match the width of the viewport, your app might not be optimized for mobile screens. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/content-sized-correctly-for-viewport).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "explanation": ""
    },
    "image-aspect-ratio": {
      "id": "image-aspect-ratio",
      "title": "Displays images with correct aspect ratio",
      "description": "Image display dimensions should match natural aspect ratio. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/aspect-ratio).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "warnings": [],
      "details": {
        "type": "table",
        "headings": [],
        "items": []
      }
    },
    "deprecations": {
      "id": "deprecations",
      "title": "Uses deprecated APIs",
      "description": "Deprecated APIs will eventually be removed from the browser. [Learn more](https://www.chromestatus.com/features#deprecated).",
      "score": 0,
      "scoreDisplayMode": "binary",
      "displayValue": "1 warning found",
      "details": {
        "type": "table",
        "headings": [
          {
            "key": "value",
            "itemType": "code",
            "text": "Deprecation / Warning"
          },
          {
            "key": "url",
            "itemType": "url",
            "text": "URL"
          },
          {
            "key": "lineNumber",
            "itemType": "text",
            "text": "Line"
          }
        ],
        "items": [
          {
            "value": "getCurrentPosition() and watchPosition() no longer work on insecure origins. To use this feature, you should consider switching your application to a secure origin, such as HTTPS. See https://goo.gl/rStTGz for more details.",
            "url": "",
            "source": "deprecation",
            "lineNumber": 0
          }
        ]
      }
    },
    "mainthread-work-breakdown": {
      "id": "mainthread-work-breakdown",
      "title": "Minimize main-thread work",
      "description": "Consider reducing the time spent parsing, compiling and executing JS. You may find delivering smaller JS payloads helps with this.",
      "score": 0.67,
      "scoreDisplayMode": "numeric",
      "numericValue": 3149.5999999999985,
      "displayValue": "3.1 s",
      "details": {
        "type": "table",
        "headings": [
          {
            "key": "groupLabel",
            "itemType": "text",
            "text": "Category"
          },
          {
            "key": "duration",
            "itemType": "ms",
            "granularity": 1,
            "text": "Time Spent"
          }
        ],
        "items": [
          {
            "group": "scriptEvaluation",
            "groupLabel": "Script Evaluation",
            "duration": 1188.6399999999994
          },
          {
            "group": "other",
            "groupLabel": "Other",
            "duration": 908.2439999999992
          },
          {
            "group": "styleLayout",
            "groupLabel": "Style & Layout",
            "duration": 678.0039999999999
          },
          {
            "group": "scriptParseCompile",
            "groupLabel": "Script Parsing & Compilation",
            "duration": 177.24
          },
          {
            "group": "paintCompositeRender",
            "groupLabel": "Rendering",
            "duration": 110.43199999999993
          },
          {
            "group": "parseHTML",
            "groupLabel": "Parse HTML & CSS",
            "duration": 77.81599999999997
          },
          {
            "group": "garbageCollection",
            "groupLabel": "Garbage Collection",
            "duration": 9.224
          }
        ]
      }
    },
    "bootup-time": {
      "id": "bootup-time",
      "title": "JavaScript execution time",
      "description": "Consider reducing the time spent parsing, compiling, and executing JS. You may find delivering smaller JS payloads helps with this. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/bootup).",
      "score": 0.91,
      "scoreDisplayMode": "numeric",
      "numericValue": 1223.9720000000002,
      "displayValue": "1.2 s",
      "details": {
        "type": "table",
        "headings": [
          {
            "key": "url",
            "itemType": "url",
            "text": "URL"
          },
          {
            "key": "total",
            "granularity": 1,
            "itemType": "ms",
            "text": "Total CPU Time"
          },
          {
            "key": "scripting",
            "granularity": 1,
            "itemType": "ms",
            "text": "Script Evaluation"
          },
          {
            "key": "scriptParseCompile",
            "granularity": 1,
            "itemType": "ms",
            "text": "Script Parse"
          }
        ],
        "items": [
          {
            "url": "Other",
            "total": 2334.295999999999,
            "scripting": 592.6560000000001,
            "scriptParseCompile": 2.4799999999999995
          },
          {
            "url": "http://www.baidu.com/?action=static&ms=1&version=css_page_2@0,css_callapp@0,css_weather@0,css_icon@0,css_plus@0,css_edit@0,css_modal@0,css_widget_sug@0,css_skin@0,js_esl@0,js_zepto@0,js_event@0,js_fastclick@0,js_utils@0,js_smartymonkey@0,js_index@0,js_banner_ctrl@0,js_inputlog@0,js_bdnow@0,js_nctips@0,js_widget_textinput@0,js_widget_sug@0,js_mp@0,js_hash_lib@0,js_skinRenderIndex@0,js_skinIphone@0,js_prefetch@0,js_sug@0,js_iscroll@0,js_superframe@0,js_init@0,js_geolocation@0,js_login@0,js_tab@0,js_md5@0,js_url@0,js_lswrite@0,js_modal@0,js_thirdparty@0,js_m_monitor@0,js_superstart@0,js_baiduloc@0,js_callbaiduapp_android@0&callback=B.getCode&r=433&sid=130611_126895_127759_132656_133282_114745_130511_131888_120138_132866_133017_132910_133044_131246_122157_132440_130763_132394_132378_132325_132213_131517_132260_118878_118873_131401_118856_118829_118797_131649_131577_132840_131533_131529_133158_132604_129565_107317_132590_132781_130128_122034_131874_132708_131196_133352_133479_129651_133164_131861_132558_132540_133290_133473_131905_128891_132293_132552_133067_132543_131423_132421_133414_110085_131770_127969_133153_123289_127316_133195_127417_131548_132725_133180_133341",
            "total": 404.7360000000002,
            "scripting": 295.9960000000002,
            "scriptParseCompile": 75.67200000000005
          },
          {
            "url": "http://www.baidu.com/",
            "total": 152.236,
            "scripting": 121.22799999999998,
            "scriptParseCompile": 20.195999999999998
          },
          {
            "url": "https://hm.baidu.com/hm.js?12423ecbc0e2ca965d84259063d35238",
            "total": 116.42399999999996,
            "scripting": 104.87599999999996,
            "scriptParseCompile": 10.868
          }
        ],
        "summary": {
          "wastedMs": 1223.9720000000002
        }
      }
    },
    "uses-rel-preload": {
      "id": "uses-rel-preload",
      "title": "Preload key requests",
      "description": "Consider using <link rel=preload> to prioritize fetching resources that are currently requested later in page load. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/preload).",
      "score": 1,
      "scoreDisplayMode": "numeric",
      "numericValue": 0,
      "displayValue": "",
      "details": {
        "type": "opportunity",
        "headings": [],
        "items": [],
        "overallSavingsMs": 0
      }
    },
    "uses-rel-preconnect": {
      "id": "uses-rel-preconnect",
      "title": "Preconnect to required origins",
      "description": "Consider adding preconnect or dns-prefetch resource hints to establish early connections to important third-party origins. [Learn more](https://developers.google.com/web/fundamentals/performance/resource-prioritization#preconnect).",
      "score": 0.74,
      "scoreDisplayMode": "numeric",
      "numericValue": 313.584,
      "displayValue": "Potential savings of 310 ms",
      "warnings": [],
      "details": {
        "type": "opportunity",
        "headings": [
          {
            "key": "url",
            "valueType": "url",
            "label": "URL"
          },
          {
            "key": "wastedMs",
            "valueType": "timespanMs",
            "label": "Potential Savings"
          }
        ],
        "items": [
          {
            "url": "https://ss0.bdstatic.com",
            "wastedMs": 313.584
          },
          {
            "url": "https://ss0.baidu.com",
            "wastedMs": 313.332
          },
          {
            "url": "https://ss1.baidu.com",
            "wastedMs": 312.876
          },
          {
            "url": "https://ss2.baidu.com",
            "wastedMs": 312.204
          },
          {
            "url": "https://s.bdstatic.com",
            "wastedMs": 301.2
          },
          {
            "url": "https://ext.baidu.com",
            "wastedMs": 301.036
          },
          {
            "url": "https://sv.bdstatic.com",
            "wastedMs": 301.01
          },
          {
            "url": "https://hm.baidu.com",
            "wastedMs": 300.98
          },
          {
            "url": "https://gss0.bdstatic.com",
            "wastedMs": 300.784
          },
          {
            "url": "https://feed.baidu.com",
            "wastedMs": 300.748
          },
          {
            "url": "http://s.bdstatic.com",
            "wastedMs": 150.023
          },
          {
            "url": "http://sm.bdimg.com",
            "wastedMs": 150
          },
          {
            "url": "http://m.baidu.com",
            "wastedMs": 139.48799999803305
          },
          {
            "url": "http://hpd.baidu.com",
            "wastedMs": 111.80599999427795
          }
        ],
        "overallSavingsMs": 313.584
      }
    },
    "font-display": {
      "id": "font-display",
      "title": "Ensure text remains visible during webfont load",
      "description": "Leverage the font-display CSS feature to ensure text is user-visible while webfonts are loading. [Learn more](https://developers.google.com/web/updates/2016/02/font-display).",
      "score": 0,
      "scoreDisplayMode": "binary",
      "details": {
        "type": "table",
        "headings": [
          {
            "key": "url",
            "itemType": "url",
            "text": "URL"
          },
          {
            "key": "wastedMs",
            "itemType": "ms",
            "text": "Potential Savings"
          }
        ],
        "items": [
          {
            "url": "http://sm.bdimg.com/static/wiseindex/fonts/n-icons_7bcbf44.woff",
            "wastedMs": 45.150999998440966
          },
          {
            "url": "https://gss0.bdstatic.com/5bd1bjqh_Q23odCf/static/itemrep/base/uilib/iconfont/iconfont_fcd5aba.woff?",
            "wastedMs": 64.07400000171037
          }
        ]
      }
    },
    "diagnostics": {
      "id": "diagnostics",
      "title": "Diagnostics",
      "description": "Collection of useful page vitals.",
      "score": null,
      "scoreDisplayMode": "informative",
      "details": {
        "type": "debugdata",
        "items": [
          {
            "numRequests": 94,
            "numScripts": 40,
            "numStylesheets": 0,
            "numFonts": 2,
            "numTasks": 1265,
            "numTasksOver10ms": 15,
            "numTasksOver25ms": 5,
            "numTasksOver50ms": 2,
            "numTasksOver100ms": 1,
            "numTasksOver500ms": 0,
            "rtt": 0.178,
            "throughput": 7962547.721765273,
            "maxRtt": 11.89,
            "maxServerLatency": 141.36299999999997,
            "totalByteWeight": 774308,
            "totalTaskTime": 787.399999999995,
            "mainDocumentTransferSize": 90192
          }
        ]
      }
    },
    "network-requests": {
      "id": "network-requests",
      "title": "Network Requests",
      "description": "Lists the network requests that were made during page load.",
      "score": null,
      "scoreDisplayMode": "informative",
      "numericValue": 94,
      "details": {
        "type": "table",
        "headings": [
          {
            "key": "url",
            "itemType": "url",
            "text": "URL"
          },
          {
            "key": "startTime",
            "itemType": "ms",
            "granularity": 1,
            "text": "Start Time"
          },
          {
            "key": "endTime",
            "itemType": "ms",
            "granularity": 1,
            "text": "End Time"
          },
          {
            "key": "transferSize",
            "itemType": "bytes",
            "displayUnit": "kb",
            "granularity": 1,
            "text": "Transfer Size"
          },
          {
            "key": "resourceSize",
            "itemType": "bytes",
            "displayUnit": "kb",
            "granularity": 1,
            "text": "Resource Size"
          },
          {
            "key": "statusCode",
            "itemType": "text",
            "text": "Status Code"
          },
          {
            "key": "mimeType",
            "itemType": "text",
            "text": "MIME Type"
          },
          {
            "key": "resourceType",
            "itemType": "text",
            "text": "Resource Type"
          }
        ],
        "items": [
          {
            "url": "http://www.baidu.com/",
            "startTime": 0,
            "endTime": 989.7260000070673,
            "transferSize": 90192,
            "resourceSize": 205252,
            "statusCode": 200,
            "mimeType": "text/html",
            "resourceType": "Document"
          },
          {
            "url": "https://m.baidu.com/static/index/plus/plus_logo_web.png",
            "startTime": 999.5290000006207,
            "endTime": 1075.0550000011572,
            "transferSize": 29912,
            "resourceSize": 29628,
            "statusCode": 200,
            "mimeType": "image/png",
            "resourceType": "Image"
          },
          {
            "url": "http://sm.bdimg.com/static/wiseindex/img/fetch_ing_8_0.png",
            "startTime": 1000.2180000010412,
            "endTime": 1048.9430000016,
            "transferSize": 1299,
            "resourceSize": 917,
            "statusCode": 200,
            "mimeType": "image/png",
            "resourceType": "Image"
          },
          {
            "url": "http://static.open.baidu.com/media/ch16/png/1.png",
            "startTime": 1010.4220000066562,
            "endTime": 1059.4250000067404,
            "transferSize": 13433,
            "resourceSize": 13174,
            "statusCode": 200,
            "mimeType": "image/png",
            "resourceType": "Image"
          },
          {
            "url": "https://m.baidu.com/bdlogo/squareicon_e582f4c48e93901e747536ad982e030d.png",
            "startTime": 1010.7530000022962,
            "endTime": 1066.2350000056904,
            "transferSize": 548,
            "resourceSize": 369,
            "statusCode": 200,
            "mimeType": "image/png",
            "resourceType": "Image"
          },
          {
            "url": "http://sm.bdimg.com/static/wiseindex/fonts/n-icons_7bcbf44.woff",
            "startTime": 1083.4280000053695,
            "endTime": 1128.5790000038105,
            "transferSize": 43404,
            "resourceSize": 43036,
            "statusCode": 200,
            "mimeType": "application/octet-stream",
            "resourceType": "Font"
          },
          {
            "url": "http://hpd.baidu.com/v.gif?tid=13&ct=1&cst=1&logFrom=index&logInfo=index&ssid=0&from=844b&pu=sz%40320_1001%2Cta%40iphone_2_6.0_24_74.0&qid=3336455358&sid=130611_126895_127759_132656_133282_114745_130511_131888_120138_132866_133017_132910_133044_131246_122157_132440_130763_132394_132378_132325_132213_131517_132260_118878_118873_131401_118856_118829_118797_131649_131577_132840_131533_131529_133158_132604_129565_107317_132590_132781_130128_122034_131874_132708_131196_133352_133479_129651_133164_131861_132558_132540_133290_133473_131905_128891_132293_132552_133067_132543_131423_132421_133414_110085_131770_127969_133153_123289_127316_133195_127417_131548_132725_133180_133341&logid=3336455358&ref=index_iphone&r=l1561312537517",
            "startTime": 1102.5320000044303,
            "endTime": 1187.0970000018133,
            "transferSize": 311,
            "resourceSize": 0,
            "statusCode": 200,
            "mimeType": "image/gif",
            "resourceType": "Image"
          },
          {
            "url": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAxklEQVR4Xu3WzwnCQBDFYROsQgt5HV",
            "startTime": 1106.2970000057248,
            "endTime": 1106.3610000055633,
            "transferSize": 0,
            "resourceSize": 255,
            "statusCode": 200,
            "mimeType": "image/png",
            "resourceType": "Image"
          },
          {
            "url": "http://m.baidu.com/static/index/plus/public/icon_police.png",
            "startTime": 1107.2200000053272,
            "endTime": 1135.0100000054226,
            "transferSize": 3151,
            "resourceSize": 2798,
            "statusCode": 200,
            "mimeType": "image/png",
            "resourceType": "Image"
          },
          {
            "url": "http://www.baidu.com/?action=static&ms=1&version=css_page_2@0,css_callapp@0,css_weather@0,css_icon@0,css_plus@0,css_edit@0,css_modal@0,css_widget_sug@0,css_skin@0,js_esl@0,js_zepto@0,js_event@0,js_fastclick@0,js_utils@0,js_smartymonkey@0,js_index@0,js_banner_ctrl@0,js_inputlog@0,js_bdnow@0,js_nctips@0,js_widget_textinput@0,js_widget_sug@0,js_mp@0,js_hash_lib@0,js_skinRenderIndex@0,js_skinIphone@0,js_prefetch@0,js_sug@0,js_iscroll@0,js_superframe@0,js_init@0,js_geolocation@0,js_login@0,js_tab@0,js_md5@0,js_url@0,js_lswrite@0,js_modal@0,js_thirdparty@0,js_m_monitor@0,js_superstart@0,js_baiduloc@0,js_callbaiduapp_android@0&callback=B.getCode&r=433&sid=130611_126895_127759_132656_133282_114745_130511_131888_120138_132866_133017_132910_133044_131246_122157_132440_130763_132394_132378_132325_132213_131517_132260_118878_118873_131401_118856_118829_118797_131649_131577_132840_131533_131529_133158_132604_129565_107317_132590_132781_130128_122034_131874_132708_131196_133352_133479_129651_133164_131861_132558_132540_133290_133473_131905_128891_132293_132552_133067_132543_131423_132421_133414_110085_131770_127969_133153_123289_127316_133195_127417_131548_132725_133180_133341",
            "startTime": 1129.4240000061109,
            "endTime": 1263.65000000078,
            "transferSize": 150777,
            "resourceSize": 448870,
            "statusCode": 200,
            "mimeType": "text/javascript",
            "resourceType": "Script"
          },
          {
            "url": "http://m.baidu.com/se/static/img/iphone/logo.png",
            "startTime": 1130.2140000043437,
            "endTime": 1153.9800000027753,
            "transferSize": 14131,
            "resourceSize": 13750,
            "statusCode": 200,
            "mimeType": "image/png",
            "resourceType": "Image"
          },
          {
            "url": "http://m.baidu.com/se/static/img/iphone/tab_loading__bg_logo.png",
            "startTime": 1130.702000002202,
            "endTime": 1156.2880000055884,
            "transferSize": 8594,
            "resourceSize": 8214,
            "statusCode": 200,
            "mimeType": "image/png",
            "resourceType": "Image"
          },
          {
            "url": "http://m.baidu.com/static/search/clear.png",
            "startTime": 1313.41500000417,
            "endTime": 1321.2490000005346,
            "transferSize": 939,
            "resourceSize": 587,
            "statusCode": 200,
            "mimeType": "image/png",
            "resourceType": "Image"
          },
          {
            "url": "http://sm.bdimg.com/static/wiseindex/amd_modules/ralltiir_489d038.js",
            "startTime": 1319.418000006408,
            "endTime": 1328.4610000046086,
            "transferSize": 11602,
            "resourceSize": 37447,
            "statusCode": 200,
            "mimeType": "application/x-javascript",
            "resourceType": "Script"
          },
          {
            "url": "http://m.baidu.com/sugrec?callback=jsonp1&type=3&prod=his&pic=1&from=wise_web&lid=3336455358&ishome=1&net=&islogin=0&hissid=130611,126895,127759,132656,133282,114745,130511,131888,120138,132866,133017,132910,133044,131246,122157,132440,130763,132394,132378,132325,132213,131517,132260,118878,118873,131401,118856,118829,118797,131649,131577,132840,131533,131529,133158,132604,129565,107317,132590,132781,130128,122034,131874,132708,131196,133352,133479,129651,133164,131861,132558,132540,133290,133473,131905,128891,132293,132552,133067,132543,131423,132421,133414,110085,131770,127969,133153,123289,127316,133195,127417,131548,132725,133180,133341&lid=3336455358&_=1561312537749",
            "startTime": 1334.8340000011376,
            "endTime": 1349.3740000049002,
            "transferSize": 1159,
            "resourceSize": 952,
            "statusCode": 200,
            "mimeType": "text/plain",
            "resourceType": "Script"
          },
          {
            "url": "https://feed.baidu.com/feed/api/tab/gettabinfo?pd=wise&sid=130611_126895_127759_132656_133282_114745_130511_131888_120138_132866_133017_132910_133044_131246_122157_132440_130763_132394_132378_132325_132213_131517_132260_118878_118873_131401_118856_118829_118797_131649_131577_132840_131533_131529_133158_132604_129565_107317_132590_132781_130128_122034_131874_132708_131196_133352_133479_129651_133164_131861_132558_132540_133290_133473_131905_128891_132293_132552_133067_132543_131423_132421_133414_110085_131770_127969_133153_123289_127316_133195_127417_131548_132725_133180_133341&ssid=0&from=844b&pu=sz%2540320_1001%252Cta%2540iphone_2_6.0_24_74.0&qid=3336455358&ms=1&cb=indJsonp&current_data=%22%22&_=1561312537758&cb=jsonp2",
            "startTime": 1343.7450000055833,
            "endTime": 1381.7630000048666,
            "transferSize": 3322,
            "resourceSize": 3122,
            "statusCode": 200,
            "mimeType": "text/html",
            "resourceType": "Script"
          },
          {
            "url": "http://sm.bdimg.com/static/wiseindex/js/package/newsActivity_f3a3935.js",
            "startTime": 1353.0380000011064,
            "endTime": 1362.2050000049057,
            "transferSize": 33178,
            "resourceSize": 106288,
            "statusCode": 200,
            "mimeType": "application/x-javascript",
            "resourceType": "Script"
          },
          {
            "url": "http://s.bdstatic.com/common/openjs/openBox.js?_v=2019-06-24-1",
            "startTime": 1362.4049999998533,
            "endTime": 1391.3910000046599,
            "transferSize": 12541,
            "resourceSize": 31622,
            "statusCode": 200,
            "mimeType": "application/x-javascript",
            "resourceType": "Script"
          },
          {
            "url": "http://m.baidu.com/tc?tcreq4log=1&r=1561312537711&logid=3336455358&from=844b&pu=sz%2540320_1001%252Cta%2540iphone_2_6.0_24_74.0&ct=10&cst=1&ref=index_iphone&logFrom=index",
            "startTime": 1367.5300000031712,
            "endTime": 1383.3810000069207,
            "transferSize": 336,
            "resourceSize": 0,
            "statusCode": 200,
            "mimeType": "text/plain",
            "resourceType": "Image"
          },
          {
            "url": "http://sm.bdimg.com/static/wiseindex/amd_modules/@searchfe/assert_3ed54c3.js",
            "startTime": 1383.9690000022529,
            "endTime": 1392.2050000037416,
            "transferSize": 610,
            "resourceSize": 247,
            "statusCode": 200,
            "mimeType": "application/x-javascript",
            "resourceType": "Script"
          },
          {
            "url": "http://sm.bdimg.com/static/wiseindex/amd_modules/@searchfe/underscore_23fe246.js",
            "startTime": 1384.7180000011576,
            "endTime": 1399.3910000062897,
            "transferSize": 2273,
            "resourceSize": 4609,
            "statusCode": 200,
            "mimeType": "application/x-javascript",
            "resourceType": "Script"
          },
          {
            "url": "https://gss0.bdstatic.com/5bd1bjqh_Q23odCf/static/itemrep/channelMgr/index_c70dc69.js",
            "startTime": 1397.0550000012736,
            "endTime": 1431.9110000069486,
            "transferSize": 2420,
            "resourceSize": 5405,
            "statusCode": 200,
            "mimeType": "application/x-javascript",
            "resourceType": "Script"
          },
          {
            "url": "http://sm.bdimg.com/static/wiseindex/js/lib/atomWrapper_6fc442d.js",
            "startTime": 1403.17800000048,
            "endTime": 1412.837000003492,
            "transferSize": 24017,
            "resourceSize": 59197,
            "statusCode": 200,
            "mimeType": "application/x-javascript",
            "resourceType": "Script"
          },
          {
            "url": "http://m.baidu.com/se/static/wiseatom/personalcenter/pack_bc18b69.js",
            "startTime": 1404.0300000051502,
            "endTime": 1415.2630000025965,
            "transferSize": 3885,
            "resourceSize": 10048,
            "statusCode": 200,
            "mimeType": "application/x-javascript",
            "resourceType": "Script"
          },
          {
            "url": "http://sm.bdimg.com/static/wiseindex/js/package/superframe_5b7bdae.js",
            "startTime": 1408.8680000058957,
            "endTime": 1417.8769999998622,
            "transferSize": 3354,
            "resourceSize": 7744,
            "statusCode": 200,
            "mimeType": "application/x-javascript",
            "resourceType": "Script"
          },
          {
            "url": "https://hm.baidu.com/hm.js?12423ecbc0e2ca965d84259063d35238",
            "startTime": 1417.120000005525,
            "endTime": 1696.5990000026068,
            "transferSize": 12358,
            "resourceSize": 32847,
            "statusCode": 200,
            "mimeType": "application/javascript",
            "resourceType": "Script"
          },
          {
            "url": "http://127.0.0.1:59468/?data=fCMxIzsjMi8xLzUjLSMyIzsjbVRmW1ZlT3daWElUN1cyZFQzNm15UzBLRmdRYjJNM2RlOThTMUd5cVNMWDVCMCxrUzE1UHFodGVHOmlPZjpGdGJrTDhrNEhZNFZ6ezozZ0hmNTFmbmg%2BPiMtIzMjOyM5NTVjfSMtIzQjOzI2NzI0MjM2NDg5Mzl%2B",
            "startTime": 1418.7300000048708,
            "endTime": 1426.1250000054133,
            "transferSize": 0,
            "resourceSize": 0,
            "statusCode": -1,
            "mimeType": "",
            "resourceType": "Image"
          },
          {
            "url": "https://hm.baidu.com/hm.gif?si=c42dc7b5fa22eba9c22b2ca4d8829372&et=0&v=pixel-1.0&u=https%3A%2F%2Fm.baidu.com%2Fexp%2Ffailed%3Fv%3D1.0.4&rnd=1374895569",
            "startTime": 1430.5359999998473,
            "endTime": 1711.3490000047022,
            "transferSize": 499,
            "resourceSize": 43,
            "statusCode": 200,
            "mimeType": "image/gif",
            "resourceType": "Image"
          },
          {
            "url": "https://feed.baidu.com/feed/api/wise/feedlist?sid=130611_126895_127759_132656_133282_114745_130511_131888_120138_132866_133017_132910_133044_131246_122157_132440_130763_132394_132378_132325_132213_131517_132260_118878_118873_131401_118856_118829_118797_131649_131577_132840_131533_131529_133158_132604_129565_107317_132590_132781_130128_122034_131874_132708_131196_133352_133479_129651_133164_131861_132558_132540_133290_133473_131905_128891_132293_132552_133067_132543_131423_132421_133414_110085_131770_127969_133153_123289_127316_133195_127417_131548_132725_133180_133341&ssid=0&from=844b&pu=sz%2540320_1001%252Cta%2540iphone_2_6.0_24_74.0&qid=3336455358&clickDownload=0&tabId=1&sync=1&_=1561312537866&callback=jsonp3",
            "startTime": 1451.9270000018878,
            "endTime": 1593.8900000037393,
            "transferSize": 31545,
            "resourceSize": 142651,
            "statusCode": 200,
            "mimeType": "application/json",
            "resourceType": "Script"
          },
          {
            "url": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAAD1BMVEUAAABmZmZpaWmsrKxtbW2yWN",
            "startTime": 1453.1410000054166,
            "endTime": 1453.1850000057602,
            "transferSize": 0,
            "resourceSize": 148,
            "statusCode": 200,
            "mimeType": "image/png",
            "resourceType": "Image"
          },
          {
            "url": "http://m.baidu.com/static/index/plus/public/tab_news.png",
            "startTime": 1453.724000006332,
            "endTime": 1460.562000000209,
            "transferSize": 2612,
            "resourceSize": 2259,
            "statusCode": 200,
            "mimeType": "image/png",
            "resourceType": "Image"
          },
          {
            "url": "https://ext.baidu.com/rest/id-mapping/cuid?callback=_box_jsonp876",
            "startTime": 1465.4890000019805,
            "endTime": 1542.064000001119,
            "transferSize": 598,
            "resourceSize": 109,
            "statusCode": 200,
            "mimeType": "application/json",
            "resourceType": "Script"
          },
          {
            "url": "https://s.bdstatic.com/common/openjs/amd/eslx.js",
            "startTime": 1490.2270000020508,
            "endTime": 1518.2400000048801,
            "transferSize": 4123,
            "resourceSize": 8143,
            "statusCode": 200,
            "mimeType": "application/x-javascript",
            "resourceType": "Script"
          },
          {
            "url": "https://sv.bdstatic.com/static/fecommon/growth/release/core.js?_sv=2019062401",
            "startTime": 1490.8640000066953,
            "endTime": 1710.3000000061002,
            "transferSize": 25302,
            "resourceSize": 106199,
            "statusCode": 200,
            "mimeType": "application/x-javascript",
            "resourceType": "Script"
          },
          {
            "url": "http://m.baidu.com/se/static/wiseatom/personalcenter/assets/img/default_icon_02f13d8.png",
            "startTime": 1510.4340000034426,
            "endTime": 1525.0710000036634,
            "transferSize": 24695,
            "resourceSize": 24341,
            "statusCode": 200,
            "mimeType": "image/png",
            "resourceType": "Image"
          },
          {
            "url": "http://m.baidu.com/se/static/wiseatom/personalcenter/assets/img/hanbaobao_04adf60.png",
            "startTime": 1518.9010000030976,
            "endTime": 1527.4070000014035,
            "transferSize": 564,
            "resourceSize": 212,
            "statusCode": 200,
            "mimeType": "image/png",
            "resourceType": "Image"
          },
          {
            "url": "http://m.baidu.com/se/static/wiseatom/personalcenter/assets/img/guanzhu_0edf6fe.png",
            "startTime": 1520.4720000037923,
            "endTime": 1529.1900000011083,
            "transferSize": 2074,
            "resourceSize": 1721,
            "statusCode": 200,
            "mimeType": "image/png",
            "resourceType": "Image"
          },
          {
            "url": "http://m.baidu.com/se/static/wiseatom/personalcenter/assets/img/shoucang_5ef89d6.png",
            "startTime": 1520.9480000048643,
            "endTime": 1559.6000000005006,
            "transferSize": 2727,
            "resourceSize": 2374,
            "statusCode": 200,
            "mimeType": "image/png",
            "resourceType": "Image"
          },
          {
            "url": "http://m.baidu.com/se/static/wiseatom/personalcenter/assets/img/dingdan_6391122.png",
            "startTime": 1521.3199999998324,
            "endTime": 1558.9440000039758,
            "transferSize": 687,
            "resourceSize": 335,
            "statusCode": 200,
            "mimeType": "image/png",
            "resourceType": "Image"
          },
          {
            "url": "http://m.baidu.com/se/static/wiseatom/personalcenter/assets/img/pifu_eef387c.png",
            "startTime": 1522.065000004659,
            "endTime": 1556.9680000044173,
            "transferSize": 1881,
            "resourceSize": 1528,
            "statusCode": 200,
            "mimeType": "image/png",
            "resourceType": "Image"
          },
          {
            "url": "http://m.baidu.com/se/static/wiseatom/personalcenter/assets/img/fankui_cc44349.png",
            "startTime": 1525.4360000035376,
            "endTime": 1546.1400000058347,
            "transferSize": 3037,
            "resourceSize": 2684,
            "statusCode": 200,
            "mimeType": "image/png",
            "resourceType": "Image"
          },
          {
            "url": "http://m.baidu.com/se/static/wiseatom/personalcenter/assets/img/spritelist_71904c7.png",
            "startTime": 1527.555000000575,
            "endTime": 1549.860000006447,
            "transferSize": 28705,
            "resourceSize": 28351,
            "statusCode": 200,
            "mimeType": "image/png",
            "resourceType": "Image"
          },
          {
            "url": "https://gss0.bdstatic.com/5bd1bjqh_Q23odCf/static/itemrep/BdrainswDislike/dist/index_f95793e.js",
            "startTime": 1603.4790000048815,
            "endTime": 1609.19300000387,
            "transferSize": 3082,
            "resourceSize": 6799,
            "statusCode": 200,
            "mimeType": "application/x-javascript",
            "resourceType": "Script"
          },
          {
            "url": "https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3470253096,3046562130&fm=173&app=49&f=JPEG?w=218&h=146&s=3AA87023B2E160A24ED445D60100C0A0",
            "startTime": 1611.5830000053393,
            "endTime": 1656.4940000025672,
            "transferSize": 5184,
            "resourceSize": 4863,
            "statusCode": 200,
            "mimeType": "image/jpeg",
            "resourceType": "Image"
          },
          {
            "url": "https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=935178575,1994208433&fm=173&app=49&f=JPEG?w=218&h=146&s=DB24D14ACCED8134073595B00300D016",
            "startTime": 1611.8010000063805,
            "endTime": 1667.0830000002752,
            "transferSize": 3957,
            "resourceSize": 3634,
            "statusCode": 200,
            "mimeType": "image/jpeg",
            "resourceType": "Image"
          },
          {
            "url": "https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=1110421091,3197926947&fm=173&app=49&f=JPEG?w=218&h=146&s=CAF004C248010B5538012C370300C040",
            "startTime": 1612.228000005416,
            "endTime": 1679.5280000005732,
            "transferSize": 7910,
            "resourceSize": 7588,
            "statusCode": 200,
            "mimeType": "image/jpeg",
            "resourceType": "Image"
          },
          {
            "url": "https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2234553350,1922139704&fm=173&app=49&f=JPEG?w=218&h=146&s=7D2C34729B8F404B5CDDF1CA0000E0B1",
            "startTime": 1612.4520000012126,
            "endTime": 1695.0630000064848,
            "transferSize": 6317,
            "resourceSize": 5996,
            "statusCode": 200,
            "mimeType": "image/jpeg",
            "resourceType": "Image"
          },
          {
            "url": "https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2517986539,284342316&fm=173&app=49&f=JPEG?w=218&h=146&s=ECA2D45BDEE1BB665AC95C3A0300E046",
            "startTime": 1613.0260000063572,
            "endTime": 1659.72000000329,
            "transferSize": 5057,
            "resourceSize": 4734,
            "statusCode": 200,
            "mimeType": "image/jpeg",
            "resourceType": "Image"
          },
          {
            "url": "https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=2177506017,114415560&fm=173&app=49&f=JPEG?w=218&h=146&s=1098CB7D62386F36C4A7C4A00300E00A",
            "startTime": 1613.3160000026692,
            "endTime": 1656.765000006999,
            "transferSize": 4958,
            "resourceSize": 4636,
            "statusCode": 200,
            "mimeType": "image/jpeg",
            "resourceType": "Image"
          },
          {
            "url": "https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2943575840,3299669129&fm=173&app=49&f=JPEG?w=218&h=146&s=A98AD55F38733C1B163901350300E062",
            "startTime": 1613.9140000013867,
            "endTime": 1707.0260000036797,
            "transferSize": 4554,
            "resourceSize": 4232,
            "statusCode": 200,
            "mimeType": "image/jpeg",
            "resourceType": "Image"
          },
          {
            "url": "https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=2828194554,379760079&fm=173&app=49&f=JPEG?w=218&h=146&s=15B74F3400A9CD1F831978C0030070A0",
            "startTime": 1656.9170000002487,
            "endTime": 1700.4379999998491,
            "transferSize": 7504,
            "resourceSize": 7182,
            "statusCode": 200,
            "mimeType": "image/jpeg",
            "resourceType": "Image"
          },
          {
            "url": "https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=4200824156,235375465&fm=173&app=49&f=JPEG?w=218&h=146&s=EB3220C50863011B04988CD50300E099",
            "startTime": 1657.0490000012796,
            "endTime": 1709.1100000034203,
            "transferSize": 8009,
            "resourceSize": 7687,
            "statusCode": 200,
            "mimeType": "image/jpeg",
            "resourceType": "Image"
          },
          {
            "url": "https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=3135883046,2821928848&fm=173&app=49&f=JPEG?w=218&h=146&s=475239C44C6A3D1F44A88C2103005093",
            "startTime": 1657.1739999999409,
            "endTime": 1710.0830000053975,
            "transferSize": 8111,
            "resourceSize": 7789,
            "statusCode": 200,
            "mimeType": "image/jpeg",
            "resourceType": "Image"
          },
          {
            "url": "https://ss0.bdstatic.com/9bA1vGfa2gU2pMbfm9GUKT-w/timg?searchbox_feed&size=f218_146&quality=80&wh_rate=0&imgtype=0&ref=http%3A%2F%2Fwww.baidu.com&sec=0&di=d229e1096d214649a814ca8d3619ac10&src=http%3A%2F%2Fpic.rmb.bdstatic.com%2F4b61e54d8331cfc17f0a5e3ed82505db6171.jpeg",
            "startTime": 1657.2760000053677,
            "endTime": 1727.9250000065076,
            "transferSize": 5699,
            "resourceSize": 5337,
            "statusCode": 200,
            "mimeType": "image/jpeg",
            "resourceType": "Image"
          },
          {
            "url": "https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2422364419,1664958894&fm=173&app=49&f=JPEG?w=218&h=146&s=4E961BC594E241111A95E06A03000051",
            "startTime": 1657.3180000050343,
            "endTime": 1683.9580000014394,
            "transferSize": 6609,
            "resourceSize": 6288,
            "statusCode": 200,
            "mimeType": "image/jpeg",
            "resourceType": "Image"
          },
          {
            "url": "https://gss0.bdstatic.com/5bd1bjqh_Q23odCf/static/newtab/img/fetch_ing_8_0.png",
            "startTime": 1616.507000006095,
            "endTime": 1622.8940000000875,
            "transferSize": 1162,
            "resourceSize": 917,
            "statusCode": 200,
            "mimeType": "image/png",
            "resourceType": "Image"
          },
          {
            "url": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAnCAMAAAC7faEHAAAAQlBMVEUAAADtREbtQ0XtQ0XuQ0XtRE",
            "startTime": 1629.450000000361,
            "endTime": 1629.4900000066264,
            "transferSize": 0,
            "resourceSize": 298,
            "statusCode": 200,
            "mimeType": "image/png",
            "resourceType": "Image"
          },
          {
            "url": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAMAAADW3miqAAAAaVBMVEVHcEzS0tLf39/S0tLS0tLX19",
            "startTime": 1630.0350000019534,
            "endTime": 1630.1230000026408,
            "transferSize": 0,
            "resourceSize": 397,
            "statusCode": 200,
            "mimeType": "image/png",
            "resourceType": "Image"
          },
          {
            "url": "https://b.bdstatic.com/searchbox/icms/searchbox/img/report.png",
            "startTime": 1657.4380000020028,
            "endTime": 1734.9430000031134,
            "transferSize": 1787,
            "resourceSize": 1346,
            "statusCode": 200,
            "mimeType": "image/png",
            "resourceType": "Image"
          },
          {
            "url": "https://gss0.bdstatic.com/5bd1bjqh_Q23odCf/static/itemrep/base/uilib/iconfont/iconfont_fcd5aba.woff?",
            "startTime": 1665.8080000051996,
            "endTime": 1729.88200000691,
            "transferSize": 29718,
            "resourceSize": 29444,
            "statusCode": 200,
            "mimeType": "application/octet-stream",
            "resourceType": "Font"
          },
          {
            "url": "https://hm.baidu.com/hm.gif?cc=1&ck=1&cl=24-bit&ds=412x660&vl=660&et=0&ja=0&ln=zh-cn&lo=0&rnd=1551288429&si=12423ecbc0e2ca965d84259063d35238&v=1.2.51&lv=1&sn=6698&ct=!!&tt=%E7%99%BE%E5%BA%A6%E4%B8%80%E4%B8%8B",
            "startTime": 1725.3960000016377,
            "endTime": 1866.1340000035125,
            "transferSize": 299,
            "resourceSize": 43,
            "statusCode": 200,
            "mimeType": "image/gif",
            "resourceType": "Image"
          },
          {
            "url": "http://sm.bdimg.com/static/wiseindex/js/lib/transfer/bubble/bubble_99b5770.js",
            "startTime": 1877.0300000032876,
            "endTime": 1894.7440000047209,
            "transferSize": 715,
            "resourceSize": 378,
            "statusCode": 200,
            "mimeType": "application/x-javascript",
            "resourceType": "Script"
          },
          {
            "url": "http://sm.bdimg.com/static/wiseindex/js/lib/transfer/logo/logo_857fccc.js",
            "startTime": 1878.2150000042748,
            "endTime": 1892.509000004793,
            "transferSize": 725,
            "resourceSize": 485,
            "statusCode": 200,
            "mimeType": "application/x-javascript",
            "resourceType": "Script"
          },
          {
            "url": "http://sm.bdimg.com/static/wiseindex/js/lib/transfer/a4/index_499c00c.js",
            "startTime": 1879.1500000006636,
            "endTime": 1920.1490000050399,
            "transferSize": 1741,
            "resourceSize": 2584,
            "statusCode": 200,
            "mimeType": "application/x-javascript",
            "resourceType": "Script"
          },
          {
            "url": "http://sm.bdimg.com/static/wiseindex/js/plugin/safariicon_6bd009a.js",
            "startTime": 1880.1110000058543,
            "endTime": 1909.3840000059572,
            "transferSize": 3851,
            "resourceSize": 8542,
            "statusCode": 200,
            "mimeType": "application/x-javascript",
            "resourceType": "Script"
          },
          {
            "url": "http://sm.bdimg.com/static/wiseindex/js/lib/invoke/setIvkCK_bdaf5e4.js",
            "startTime": 1882.976000000781,
            "endTime": 1920.469000004232,
            "transferSize": 771,
            "resourceSize": 563,
            "statusCode": 200,
            "mimeType": "application/x-javascript",
            "resourceType": "Script"
          },
          {
            "url": "http://sm.bdimg.com/static/wiseindex/js/lib/invoke/component/background_dbdb406.js",
            "startTime": 1885.0560000064434,
            "endTime": 1919.7600000043167,
            "transferSize": 757,
            "resourceSize": 485,
            "statusCode": 200,
            "mimeType": "application/x-javascript",
            "resourceType": "Script"
          },
          {
            "url": "http://sm.bdimg.com/static/wiseindex/js/lib/invoke/component/btmBanner_f91323e.js",
            "startTime": 1894.9150000044028,
            "endTime": 1912.2110000025714,
            "transferSize": 5374,
            "resourceSize": 7529,
            "statusCode": 200,
            "mimeType": "application/x-javascript",
            "resourceType": "Script"
          },
          {
            "url": "http://sm.bdimg.com/static/wiseindex/js/lib/invoke/component/fullscreen_f01324e.js",
            "startTime": 1909.7010000041337,
            "endTime": 1923.0990000069141,
            "transferSize": 1693,
            "resourceSize": 2332,
            "statusCode": 200,
            "mimeType": "application/x-javascript",
            "resourceType": "Script"
          },
          {
            "url": "http://sm.bdimg.com/static/wiseindex/img/favicon64.ico",
            "startTime": 1891.0480000049574,
            "endTime": 1914.1130000061821,
            "transferSize": 17345,
            "resourceSize": 16958,
            "statusCode": 200,
            "mimeType": "image/x-icon",
            "resourceType": "Other"
          },
          {
            "url": "http://sm.bdimg.com/static/wiseindex/js/lib/transfer/common/ivkBox_cd5790c.js",
            "startTime": 1912.4700000029407,
            "endTime": 1929.6920000051614,
            "transferSize": 870,
            "resourceSize": 717,
            "statusCode": 200,
            "mimeType": "application/x-javascript",
            "resourceType": "Script"
          },
          {
            "url": "http://sm.bdimg.com/static/wiseindex/js/lib/invoke/getInvokeLogData_fc32168.js",
            "startTime": 1914.2770000034943,
            "endTime": 1929.9040000041714,
            "transferSize": 673,
            "resourceSize": 330,
            "statusCode": 200,
            "mimeType": "application/x-javascript",
            "resourceType": "Script"
          },
          {
            "url": "http://sm.bdimg.com/static/wiseindex/js/lib/invoke/serverDataFactory_53f7feb.js",
            "startTime": 1924.2860000013025,
            "endTime": 1934.5370000010007,
            "transferSize": 997,
            "resourceSize": 1129,
            "statusCode": 200,
            "mimeType": "application/x-javascript",
            "resourceType": "Script"
          },
          {
            "url": "http://sm.bdimg.com/static/wiseindex/js/lib/invoke/fnProvider_aeb4eed.js",
            "startTime": 1924.722000003385,
            "endTime": 1933.3080000069458,
            "transferSize": 1621,
            "resourceSize": 2730,
            "statusCode": 200,
            "mimeType": "application/x-javascript",
            "resourceType": "Script"
          },
          {
            "url": "http://sm.bdimg.com/static/wiseindex/js/lib/transfer/common/Core_426be15.js",
            "startTime": 1927.7800000054413,
            "endTime": 1940.6230000022333,
            "transferSize": 1350,
            "resourceSize": 2273,
            "statusCode": 200,
            "mimeType": "application/x-javascript",
            "resourceType": "Script"
          },
          {
            "url": "http://sm.bdimg.com/static/wiseindex/js/lib/invoke/log_8406fdd.js",
            "startTime": 1936.1420000059297,
            "endTime": 1962.3260000007576,
            "transferSize": 809,
            "resourceSize": 648,
            "statusCode": 200,
            "mimeType": "application/x-javascript",
            "resourceType": "Script"
          },
          {
            "url": "http://sm.bdimg.com/static/wiseindex/js/lib/invoke/setFullScreenIvkCK_92b17a0.js",
            "startTime": 1936.6480000026058,
            "endTime": 1962.8990000055637,
            "transferSize": 1087,
            "resourceSize": 1112,
            "statusCode": 200,
            "mimeType": "application/x-javascript",
            "resourceType": "Script"
          },
          {
            "url": "http://sm.bdimg.com/static/wiseindex/amd_modules/@baidu/invoke-box_36cd511.js",
            "startTime": 1941.0200000056648,
            "endTime": 1973.0820000040694,
            "transferSize": 8253,
            "resourceSize": 22960,
            "statusCode": 200,
            "mimeType": "application/x-javascript",
            "resourceType": "Script"
          },
          {
            "url": "http://sm.bdimg.com/static/wiseindex/js/lib/invoke/invokeBox_12354c1.js",
            "startTime": 1944.7970000037458,
            "endTime": 1972.741000005044,
            "transferSize": 1134,
            "resourceSize": 1381,
            "statusCode": 200,
            "mimeType": "application/x-javascript",
            "resourceType": "Script"
          },
          {
            "url": "http://sm.bdimg.com/static/wiseindex/js/lib/invoke/invokeSecr_13c5fec.js",
            "startTime": 1945.3490000014426,
            "endTime": 1972.1500000014203,
            "transferSize": 2450,
            "resourceSize": 4297,
            "statusCode": 200,
            "mimeType": "application/x-javascript",
            "resourceType": "Script"
          },
          {
            "url": "http://sm.bdimg.com/static/wiseindex/js/lib/transfer/common/DataProcess_deb477f.js",
            "startTime": 1949.5540000061737,
            "endTime": 1972.460000004503,
            "transferSize": 823,
            "resourceSize": 831,
            "statusCode": 200,
            "mimeType": "application/x-javascript",
            "resourceType": "Script"
          },
          {
            "url": "http://sm.bdimg.com/static/wiseindex/js/lib/transfer/common/StrategyDataProcess_787f12d.js",
            "startTime": 1962.64300000621,
            "endTime": 1985.3280000024824,
            "transferSize": 874,
            "resourceSize": 746,
            "statusCode": 200,
            "mimeType": "application/x-javascript",
            "resourceType": "Script"
          },
          {
            "url": "http://sm.bdimg.com/static/wiseindex/js/lib/transfer/common/ShieldMonitor_b61052e.js",
            "startTime": 1963.1460000018706,
            "endTime": 1988.7330000055954,
            "transferSize": 1243,
            "resourceSize": 1675,
            "statusCode": 200,
            "mimeType": "application/x-javascript",
            "resourceType": "Script"
          },
          {
            "url": "http://sm.bdimg.com/static/wiseindex/amd_modules/@searchfe/user-agent_24ce52d.js",
            "startTime": 1976.8180000028224,
            "endTime": 1990.6360000022687,
            "transferSize": 1296,
            "resourceSize": 2631,
            "statusCode": 200,
            "mimeType": "application/x-javascript",
            "resourceType": "Script"
          },
          {
            "url": "https://b.bdstatic.com/searchbox/icms/searchbox/img/APP-logo-120_.png",
            "startTime": 1996.5630000006058,
            "endTime": 2005.5890000003274,
            "transferSize": 8591,
            "resourceSize": 8141,
            "statusCode": 200,
            "mimeType": "image/png",
            "resourceType": "Image"
          },
          {
            "url": "https://gss0.bdstatic.com/5bd1bjqh_Q23odCf/static/wiseindex/img/baiduappAdClose2_530ee6b.png",
            "startTime": 1997.3170000012033,
            "endTime": 2006.2600000019302,
            "transferSize": 1274,
            "resourceSize": 1029,
            "statusCode": 200,
            "mimeType": "image/png",
            "resourceType": "Image"
          },
          {
            "url": "http://m.baidu.com/tc?tcreq4log=1&r=1561312538409&logid=3336455358&from=844b&pu=sz%2540320_1001%252Cta%2540iphone_2_6.0_24_74.0&ct=10&cst=1&ref=index_iphone&logFrom=baidulogo&logoInfo=%7B%22origin%22%3A%221023197w%22%2C%22from%22%3A%22844b%22%2C%22channel%22%3A%221023206g%22%2C%22browserid%22%3A%2224%22%2C%22qid%22%3A%223336455358%22%2C%22timestamp%22%3A1561312538409%7D",
            "startTime": 2009.386000005179,
            "endTime": 2027.3710000037681,
            "transferSize": 242,
            "resourceSize": 0,
            "statusCode": 200,
            "mimeType": "text/plain",
            "resourceType": "Image"
          },
          {
            "url": "http://m.baidu.com/tc?tcreq4log=1&r=1561312538417&logid=3336455358&from=844b&pu=sz%2540320_1001%252Cta%2540iphone_2_6.0_24_74.0&ct=10&cst=1&ref=index_iphone&logFrom=A4&logInfo=%7B%22origin%22%3A%221023262j%22%2C%22from%22%3A%22844b%22%2C%22channel%22%3A%221023262o%22%2C%22browserid%22%3A%2224%22%2C%22qid%22%3A%223336455358%22%2C%22timestamp%22%3A1561312538410%2C%22action%22%3A%22show%22%7D",
            "startTime": 2009.8070000021835,
            "endTime": 2026.5440000002855,
            "transferSize": 242,
            "resourceSize": 0,
            "statusCode": 200,
            "mimeType": "text/plain",
            "resourceType": "Image"
          },
          {
            "url": "http://m.baidu.com/tc?tcreq4log=1&r=1561312538420&logid=3336455358&from=844b&pu=sz%2540320_1001%252Cta%2540iphone_2_6.0_24_74.0&ct=10&cst=2&ref=index_iphone&logFrom=callbaidu&logInfo=defaul_try",
            "startTime": 2010.1950000025681,
            "endTime": 2023.2810000015888,
            "transferSize": 242,
            "resourceSize": 0,
            "statusCode": 200,
            "mimeType": "text/plain",
            "resourceType": "Image"
          },
          {
            "url": "http://m.baidu.com/tcbox?service=bdbox&action=pblog&ctv=2&cen=uid_ua_ut&data=%7B%22appid%22%3A%221%22%2C%22dataid%22%3A%222%22%2C%22actiontype%22%3A%221%22%2C%22actionid%22%3A%222%22%2C%22actiondata%22%3A%7B%22ref%22%3A%22%22%2C%22gmv%22%3A%22%22%2C%22source%22%3A%22%22%2C%22boxVersion%22%3A0%2C%22boxPlatform%22%3A%22android%22%2C%22evtName%22%3A%22openBox%22%2C%22evtType%22%3A%221021206d%22%2C%22evtTag%22%3A%7B%22source%22%3A%221021206d%22%2C%22from%22%3A%22openbox%22%2C%22page%22%3A%22chrome%22%2C%22type%22%3A%22%22%2C%22value%22%3A%22%22%2C%22channel%22%3A%221021206r%22%2C%22extlog%22%3A%22%22%2C%22baiduId%22%3A%226FBB856F371C7962D5DE018E359165E8%3AFG%3D1%22%2C%22app_now%22%3A%22chrome_1561312538422_8535240216%22%2C%22yyb_pkg%22%3A%22com.baidu.searchbox%22%2C%22idmData%22%3A%7B%22firstOpen%22%3A%22lite%22%2C%22secondOpen%22%3A%22main%22%2C%22status%22%3A%220%22%2C%22timeout%22%3A1561398937966%7D%2C%22matrix%22%3A%22lite%22%7D%7D%2C%22cateid%22%3A14%7D&_rnd=3217788",
            "startTime": 2010.5860000039684,
            "endTime": 2065.4060000015306,
            "transferSize": 0,
            "resourceSize": 0,
            "statusCode": 200,
            "mimeType": "text/html",
            "resourceType": "Image"
          },
          {
            "url": "baiduboxlite://utils?action=sendIntent&minver=3.3&params=%7B%22intent%22%3A%22intent%3A%23Intent%3Baction%3Dcom.baidu.searchbox.action.HOME%3Bpackage%3Dcom.baidu.searchbox.lite%3BS.targetCommand%3D%257B%2522mode%2522%253A%25220%2522%252C%2522intent%2522%253A%2522intent%253A%2523Intent%253Baction%253Dcom.baidu.searchbox.action.HOME%253Bcategory%253Dandroid.intent.category.DEFAULT%253BS.extra_target_tab%253DFeed%253Bend%2522%252C%2522min_v%2522%253A%252220120832%2522%257D%3Bend%22%7D&needlog=1&logargs=%7B%22source%22%3A%221021206d%22%2C%22from%22%3A%22openbox%22%2C%22page%22%3A%22chrome%22%2C%22type%22%3A%22%22%2C%22value%22%3A%22%22%2C%22channel%22%3A%221021206r%22%2C%22extlog%22%3A%22%22%2C%22baiduId%22%3A%226FBB856F371C7962D5DE018E359165E8%3AFG%3D1%22%2C%22app_now%22%3A%22chrome_1561312538422_8535240216%22%2C%22yyb_pkg%22%3A%22com.baidu.searchbox%22%2C%22idmData%22%3A%7B%22firstOpen%22%3A%22lite%22%2C%22secondOpen%22%3A%22main%22%2C%22status%22%3A%220%22%2C%22timeout%22%3A1561398937966%7D%2C%22matrix%22%3A%22lite%22%7D",
            "startTime": 2074.2620000019087,
            "endTime": 2077.2720000022673,
            "transferSize": 0,
            "resourceSize": 0,
            "statusCode": -1,
            "mimeType": "",
            "resourceType": "Document"
          },
          {
            "url": "baiduboxapp://utils?action=sendIntent&minver=7.4&params=%7B%22intent%22%3A%22intent%3A%23Intent%3Baction%3Dcom.baidu.searchbox.action.HOME%3Bpackage%3Dcom.baidu.searchbox%3BS.targetCommand%3D%257B%2522mode%2522%253A%25220%2522%252C%2522intent%2522%253A%2522intent%253A%2523Intent%253Baction%253Dcom.baidu.searchbox.action.HOME%253Bcategory%253Dandroid.intent.category.DEFAULT%253BS.extra_target_tab%253DFeed%253Bend%2522%252C%2522min_v%2522%253A%252216787968%2522%257D%3Bend%22%7D&needlog=1&logargs=%7B%22source%22%3A%221021206d%22%2C%22from%22%3A%22openbox%22%2C%22page%22%3A%22chrome%22%2C%22type%22%3A%22%22%2C%22value%22%3A%22%22%2C%22channel%22%3A%221021206r%22%2C%22extlog%22%3A%22%22%2C%22baiduId%22%3A%226FBB856F371C7962D5DE018E359165E8%3AFG%3D1%22%2C%22app_now%22%3A%22chrome_1561312538584_4783387319%22%2C%22yyb_pkg%22%3A%22com.baidu.searchbox%22%2C%22idmData%22%3A%7B%22firstOpen%22%3A%22lite%22%2C%22secondOpen%22%3A%22main%22%2C%22status%22%3A%220%22%2C%22timeout%22%3A1561398937966%7D%2C%22matrix%22%3A%22main%22%7D",
            "startTime": 2178.1060000066645,
            "endTime": 2181.186000001617,
            "transferSize": 0,
            "resourceSize": 0,
            "statusCode": -1,
            "mimeType": "",
            "resourceType": "Document"
          },
          {
            "url": "http://hpd.baidu.com/v.gif?logid=3336455358&ssid=0&sid=130611_126895_127759_132656_133282_114745_130511_131888_120138_132866_133017_132910_133044_131246_122157_132440_130763_132394_132378_132325_132213_131517_132260_118878_118873_131401_118856_118829_118797_131649_131577_132840_131533_131529_133158_132604_129565_107317_132590_132781_130128_122034_131874_132708_131196_133352_133479_129651_133164_131861_132558_132540_133290_133473_131905_128891_132293_132552_133067_132543_131423_132421_133414_110085_131770_127969_133153_123289_127316_133195_127417_131548_132725_133180_133341&from=844b&pu=sz%2540320_1001%252Cta%2540iphone_2_6.0_24_74.0&ct=1&cst=1&logFrom=mid_news&logInfo=a2_l*&logExtra=%7B%22st%22%3A%22news%22%2C%22rid%22%3A%229096754004326685511%22%2C%22isBaijiahao%22%3A1%2C%22extra%22%3A%22%7B%5C%22rec_src%5C%22%3A%5B52%5D%2C%5C%22mark%5C%22%3A0%2C%5C%22mark_rec%5C%22%3A0%2C%5C%22round_loop_ids%5C%22%3A%5B100%2C200%5D%2C%5C%22top%5C%22%3A1%2C%5C%22ua%5C%22%3A%5C%220_0__0_240%5C%22%2C%5C%22ut%5C%22%3A%5C%22%5C%22%2C%5C%22province%5C%22%3A%5C%22%5C%5Cu5317%5C%5Cu4eac%5C%22%2C%5C%22city%5C%22%3A%5C%22%5C%5Cu5317%5C%5Cu4eac%5C%22%2C%5C%22district%5C%22%3A%5C%22%5C%22%2C%5C%22channel_id%5C%22%3A1%2C%5C%22session_id%5C%22%3A%5C%2215613125378738%5C%22%2C%5C%22refresh_index%5C%22%3A%5C%22%5C%22%2C%5C%22position%5C%22%3A0%2C%5C%22log_id%5C%22%3A3337869309%2C%5C%22refresh_state%5C%22%3A1%2C%5C%22city_code%5C%22%3A%5C%22131%5C%22%2C%5C%22local_city%5C%22%3A-1%2C%5C%22user_type%5C%22%3A2%2C%5C%22refresh_type%5C%22%3A1%2C%5C%22refresh_timestamp_ms%5C%22%3A1561312537892%2C%5C%22cs%5C%22%3A%5C%222824520757%203510552953%5C%22%2C%5C%22gr_policy_flag%5C%22%3A0%2C%5C%22final_score%5C%22%3A2%2C%5C%22author_authority_score_v1%5C%22%3A5%2C%5C%22audit_final_score%5C%22%3A3%2C%5C%22predictor_q_score%5C%22%3A0%2C%5C%22vertical_types%5C%22%3A%5B0%2C26%5D%2C%5C%22templates%5C%22%3A%7B%5C%22id%5C%22%3A%5B30%2C30%5D%7D%2C%5C%22wifiinfo%5C%22%3A%5C%22%5C%22%2C%5C%22gr_original_pos%5C%22%3A0%2C%5C%22gr_step_click%5C%22%3A0.0080885523930192%2C%5C%22gr_step_related_click%5C%22%3A8.11092713775e-5%2C%5C%22dispatch_time%5C%22%3A1561312537%2C%5C%22msrcid%5C%22%3A80001%2C%5C%22mthid%5C%22%3A%5C%221573407181922932%5C%22%2C%5C%22mrtype%5C%22%3A%5C%22text%5C%22%7D%22%2C%22title%22%3A%22%E4%B9%A0%E8%BF%91%E5%B9%B3%E4%BB%A5%E4%B8%89%E2%80%9C%E6%96%B0%E2%80%9D%E7%BB%AD%E5%86%99%E4%B8%AD%E6%9C%9D%E5%8F%8B%E8%B0%8A%E6%96%B0%E7%AF%87%E7%AB%A0%22%2C%22picNum%22%3A3%2C%22stype%22%3A0%2C%22itemType%22%3A%22newsTitle%22%2C%22pos%22%3A1%7D%2C%7B%22st%22%3A%22news%22%2C%22rid%22%3A%229011511856933223377%22%2C%22isBaijiahao%22%3A1%2C%22extra%22%3A%22%7B%5C%22rec_src%5C%22%3A%5B52%5D%2C%5C%22mark%5C%22%3A0%2C%5C%22mark_rec%5C%22%3A0%2C%5C%22sec_fixed%5C%22%3A1%2C%5C%22ua%5C%22%3A%5C%220_0__0_240%5C%22%2C%5C%22ut%5C%22%3A%5C%22%5C%22%2C%5C%22province%5C%22%3A%5C%22%5C%5Cu5317%5C%5Cu4eac%5C%22%2C%5C%22city%5C%22%3A%5C%22%5C%5Cu5317%5C%5Cu4eac%5C%22%2C%5C%22district%5C%22%3A%5C%22%5C%22%2C%5C%22channel_id%5C%22%3A1%2C%5C%22round_loop_ids%5C%22%3A%5B200%5D%2C%5C%22session_id%5C%22%3A%5C%2215613125378738%5C%22%2C%5C%22refresh_index%5C%22%3A%5C%22%5C%22%2C%5C%22position%5C%22%3A1%2C%5C%22log_id%5C%22%3A3337869309%2C%5C%22refresh_state%5C%22%3A1%2C%5C%22city_code%5C%22%3A%5C%22131%5C%22%2C%5C%22local_city%5C%22%3A-1%2C%5C%22user_type%5C%22%3A2%2C%5C%22refresh_type%5C%22%3A1%2C%5C%22refresh_timestamp_ms%5C%22%3A1561312537892%2C%5C%22cs%5C%22%3A%5C%221128252802%204037058600%5C%22%2C%5C%22gr_policy_flag%5C%22%3A0%2C%5C%22final_score%5C%22%3A2%2C%5C%22author_authority_score_v1%5C%22%3A5%2C%5C%22audit_final_score%5C%22%3A-1%2C%5C%22predictor_q_score%5C%22%3A0%2C%5C%22vertical_types%5C%22%3A%5B0%2C26%5D%2C%5C%22templates%5C%22%3A%7B%5C%22id%5C%22%3A%5B30%2C30%5D%7D%2C%5C%22wifiinfo%5C%22%3A%5C%22%5C%22%2C%5C%22gr_original_pos%5C%22%3A1%2C%5C%22gr_step_click%5C%22%3A0.04365961253643%2C%5C%22gr_step_related_click%5C%22%3A0.0001122939547713%2C%5C%22dispatch_time%5C%22%3A1561312537%2C%5C%22msrcid%5C%22%3A80001%2C%5C%22mthid%5C%22%3A%5C%221573407181922932%5C%22%2C%5C%22mrtype%5C%22%3A%5C%22text%5C%22%7D%22%2C%22title%22%3A%22%E8%BF%99%E7%A7%8D%E7%B2%BE%E7%A5%9E%EF%BC%8C%E4%B9%A0%E8%BF%91%E5%B9%B3%E8%A6%81%E6%B1%82%E7%BB%A7%E6%89%BF%E5%92%8C%E5%8F%91%E6%89%AC%22%2C%22picNum%22%3A3%2C%22stype%22%3A0%2C%22itemType%22%3A%22newsTitle%22%2C%22pos%22%3A2%7D&r=l1561312538830",
            "startTime": 2416.791000003286,
            "endTime": 2546.3290000043344,
            "transferSize": 311,
            "resourceSize": 0,
            "statusCode": 200,
            "mimeType": "image/gif",
            "resourceType": "Image"
          },
          {
            "url": "http://m.baidu.com/tc?tcreq4log=1&r=1561312539218&logid=3336455358&from=844b&pu=sz%2540320_1001%252Cta%2540iphone_2_6.0_24_74.0&ct=10&cst=1&ref=index_iphone&logFrom=callbaidush&logInfo=%7B%22pos%22%3A3%2C%22browserid%22%3A%2224%22%2C%22from%22%3A%22844b%22%2C%22channel%22%3A%221023262o%22%2C%22source%22%3A%221023262j%22%2C%22show%22%3A1%7D",
            "startTime": 2803.708999999799,
            "endTime": 2816.939000003913,
            "transferSize": 242,
            "resourceSize": 0,
            "statusCode": 200,
            "mimeType": "text/plain",
            "resourceType": "Image"
          }
        ]
      }
    },
    "network-rtt": {
      "id": "network-rtt",
      "title": "Network Round Trip Times",
      "description": "Network round trip times (RTT) have a large impact on performance. If the RTT to an origin is high, it's an indication that servers closer to the user could improve performance. [Learn more](https://hpbn.co/primer-on-latency-and-bandwidth/).",
      "score": null,
      "scoreDisplayMode": "informative",
      "numericValue": 11.89,
      "displayValue": "10 ms",
      "details": {
        "type": "table",
        "headings": [
          {
            "key": "origin",
            "itemType": "text",
            "text": "URL"
          },
          {
            "key": "rtt",
            "itemType": "ms",
            "granularity": 1,
            "text": "Time Spent"
          }
        ],
        "items": [
          {
            "origin": "https://b.bdstatic.com",
            "rtt": 11.89
          },
          {
            "origin": "https://ss0.bdstatic.com",
            "rtt": 6.97
          },
          {
            "origin": "https://ss0.baidu.com",
            "rtt": 6.843999999999999
          },
          {
            "origin": "https://ss1.baidu.com",
            "rtt": 6.616
          },
          {
            "origin": "https://ss2.baidu.com",
            "rtt": 6.279999999999999
          },
          {
            "origin": "https://m.baidu.com",
            "rtt": 1.483
          },
          {
            "origin": "https://s.bdstatic.com",
            "rtt": 0.778
          },
          {
            "origin": "https://ext.baidu.com",
            "rtt": 0.696
          },
          {
            "origin": "https://sv.bdstatic.com",
            "rtt": 0.6829999999999998
          },
          {
            "origin": "https://hm.baidu.com",
            "rtt": 0.6679999999999999
          },
          {
            "origin": "https://gss0.bdstatic.com",
            "rtt": 0.57
          },
          {
            "origin": "https://feed.baidu.com",
            "rtt": 0.552
          },
          {
            "origin": "http://static.open.baidu.com",
            "rtt": 0.484
          },
          {
            "origin": "http://hpd.baidu.com",
            "rtt": 0.3550000000000001
          },
          {
            "origin": "http://m.baidu.com",
            "rtt": 0.21000000000000008
          },
          {
            "origin": "http://s.bdstatic.com",
            "rtt": 0.20100000000000007
          },
          {
            "origin": "http://sm.bdimg.com",
            "rtt": 0.178
          },
          {
            "origin": "http://www.baidu.com",
            "rtt": 0.178
          }
        ]
      }
    },
    "network-server-latency": {
      "id": "network-server-latency",
      "title": "Server Backend Latencies",
      "description": "Server latencies can impact web performance. If the server latency of an origin is high, it's an indication the server is overloaded or has poor backend performance. [Learn more](https://hpbn.co/primer-on-web-performance/#analyzing-the-resource-waterfall).",
      "score": null,
      "scoreDisplayMode": "informative",
      "numericValue": 141.36299999999997,
      "displayValue": "140 ms",
      "details": {
        "type": "table",
        "headings": [
          {
            "key": "origin",
            "itemType": "text",
            "text": "URL"
          },
          {
            "key": "serverReponseTime",
            "itemType": "ms",
            "granularity": 1,
            "text": "Time Spent"
          }
        ],
        "items": [
          {
            "origin": "https://hm.baidu.com",
            "serverReponseTime": 141.36299999999997
          },
          {
            "origin": "http://www.baidu.com",
            "serverReponseTime": 104.75
          },
          {
            "origin": "http://hpd.baidu.com",
            "serverReponseTime": 82.853
          },
          {
            "origin": "https://ext.baidu.com",
            "serverReponseTime": 54.144000000000005
          },
          {
            "origin": "http://static.open.baidu.com",
            "serverReponseTime": 34.989999999999995
          },
          {
            "origin": "https://ss2.baidu.com",
            "serverReponseTime": 32.001
          },
          {
            "origin": "http://s.bdstatic.com",
            "serverReponseTime": 26.724
          },
          {
            "origin": "http://sm.bdimg.com",
            "serverReponseTime": 16.755
          },
          {
            "origin": "http://m.baidu.com",
            "serverReponseTime": 15.681999999999999
          },
          {
            "origin": "https://sv.bdstatic.com",
            "serverReponseTime": 15.516000000000012
          },
          {
            "origin": "https://feed.baidu.com",
            "serverReponseTime": 15.3
          },
          {
            "origin": "https://m.baidu.com",
            "serverReponseTime": 10.732999999999997
          },
          {
            "origin": "https://s.bdstatic.com",
            "serverReponseTime": 5.661999999999997
          },
          {
            "origin": "https://gss0.bdstatic.com",
            "serverReponseTime": 5.005999999999993
          },
          {
            "origin": "https://ss1.baidu.com",
            "serverReponseTime": 2.7900000000000063
          },
          {
            "origin": "https://ss0.baidu.com",
            "serverReponseTime": 2.197999999999995
          },
          {
            "origin": "https://ss0.bdstatic.com",
            "serverReponseTime": 0
          },
          {
            "origin": "https://b.bdstatic.com",
            "serverReponseTime": 0
          }
        ]
      }
    },
    "main-thread-tasks": {
      "id": "main-thread-tasks",
      "title": "Tasks",
      "description": "Lists the toplevel main thread tasks that executed during page load.",
      "score": null,
      "scoreDisplayMode": "informative",
      "numericValue": 25,
      "details": {
        "type": "table",
        "headings": [
          {
            "key": "startTime",
            "itemType": "ms",
            "granularity": 1,
            "text": "Start Time"
          },
          {
            "key": "duration",
            "itemType": "ms",
            "granularity": 1,
            "text": "End Time"
          }
        ],
        "items": [
          {
            "duration": 6.898,
            "startTime": 382.004
          },
          {
            "duration": 9.132,
            "startTime": 996.922
          },
          {
            "duration": 68.912,
            "startTime": 1016.681
          },
          {
            "duration": 9.79,
            "startTime": 1094.349
          },
          {
            "duration": 12.729,
            "startTime": 1105.135
          },
          {
            "duration": 12.301,
            "startTime": 1118.865
          },
          {
            "duration": 7.124,
            "startTime": 1131.59
          },
          {
            "duration": 8.655,
            "startTime": 1157.936
          },
          {
            "duration": 104.188,
            "startTime": 1272.185
          },
          {
            "duration": 6.389,
            "startTime": 1389.29
          },
          {
            "duration": 33.371,
            "startTime": 1396.641
          },
          {
            "duration": 24.139,
            "startTime": 1441.702
          },
          {
            "duration": 7.868,
            "startTime": 1466.327
          },
          {
            "duration": 5.027,
            "startTime": 1481.221
          },
          {
            "duration": 17.586,
            "startTime": 1486.375
          },
          {
            "duration": 16.128,
            "startTime": 1504.403
          },
          {
            "duration": 17.709,
            "startTime": 1524.87
          },
          {
            "duration": 29.216,
            "startTime": 1602.422
          },
          {
            "duration": 36.775,
            "startTime": 1633.259
          },
          {
            "duration": 23.231,
            "startTime": 1709.624
          },
          {
            "duration": 12.266,
            "startTime": 1755.085
          },
          {
            "duration": 5.072,
            "startTime": 1876.455
          },
          {
            "duration": 14.597,
            "startTime": 1881.959
          },
          {
            "duration": 24.408,
            "startTime": 1999.079
          },
          {
            "duration": 5.407,
            "startTime": 2419.655
          }
        ]
      }
    },
    "metrics": {
      "id": "metrics",
      "title": "Metrics",
      "description": "Collects all available metrics.",
      "score": null,
      "scoreDisplayMode": "informative",
      "numericValue": 6916.872000000001,
      "details": {
        "type": "debugdata",
        "items": [
          {
            "firstContentfulPaint": 1293,
            "firstMeaningfulPaint": 2673,
            "firstCPUIdle": 5929,
            "interactive": 6917,
            "speedIndex": 4482,
            "estimatedInputLatency": 32,
            "observedNavigationStart": 0,
            "observedNavigationStartTs": 41870959468,
            "observedFirstPaint": 1006,
            "observedFirstPaintTs": 41871965288,
            "observedFirstContentfulPaint": 1089,
            "observedFirstContentfulPaintTs": 41872048824,
            "observedFirstMeaningfulPaint": 1675,
            "observedFirstMeaningfulPaintTs": 41872634892,
            "observedTraceEnd": 3098,
            "observedTraceEndTs": 41874057002,
            "observedLoad": 1874,
            "observedLoadTs": 41872833608,
            "observedDomContentLoaded": 1109,
            "observedDomContentLoadedTs": 41872068136,
            "observedFirstVisualChange": 1016,
            "observedFirstVisualChangeTs": 41871975468,
            "observedLastVisualChange": 2066,
            "observedLastVisualChangeTs": 41873025468,
            "observedSpeedIndex": 1494,
            "observedSpeedIndexTs": 41872453594
          }
        ]
      }
    },
    "offline-start-url": {
      "id": "offline-start-url",
      "title": "start_url does not respond with a 200 when offline",
      "description": "A service worker enables your web app to be reliable in unpredictable network conditions. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/http-200-when-offline).",
      "score": 0,
      "scoreDisplayMode": "binary",
      "explanation": "No usable web app manifest found on page.",
      "warnings": []
    },
    "performance-budget": {
      "id": "performance-budget",
      "title": "Performance budget",
      "description": "Keep the quantity and size of network requests under the targets set by the provided performance budget. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/budgets).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "resource-summary": {
      "id": "resource-summary",
      "title": "Keep request counts low and transfer sizes small",
      "description": "To set budgets for the quantity and size of page resources, add a budget.json file. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/budgets).",
      "score": null,
      "scoreDisplayMode": "informative",
      "displayValue": "94 requests • 756 KB",
      "details": {
        "type": "table",
        "headings": [
          {
            "key": "label",
            "itemType": "text",
            "text": "Resource Type"
          },
          {
            "key": "requestCount",
            "itemType": "numeric",
            "text": "Requests"
          },
          {
            "key": "size",
            "itemType": "bytes",
            "text": "Transfer Size"
          }
        ],
        "items": [
          {
            "resourceType": "total",
            "label": "Total",
            "requestCount": 94,
            "size": 774308
          },
          {
            "resourceType": "script",
            "label": "Script",
            "requestCount": 40,
            "size": 365253
          },
          {
            "resourceType": "image",
            "label": "Image",
            "requestCount": 48,
            "size": 228396
          },
          {
            "resourceType": "document",
            "label": "Document",
            "requestCount": 3,
            "size": 90192
          },
          {
            "resourceType": "font",
            "label": "Font",
            "requestCount": 2,
            "size": 73122
          },
          {
            "resourceType": "other",
            "label": "Other",
            "requestCount": 1,
            "size": 17345
          },
          {
            "resourceType": "stylesheet",
            "label": "Stylesheet",
            "requestCount": 0,
            "size": 0
          },
          {
            "resourceType": "media",
            "label": "Media",
            "requestCount": 0,
            "size": 0
          },
          {
            "resourceType": "third-party",
            "label": "Third-party",
            "requestCount": 49,
            "size": 271888
          }
        ]
      }
    },
    "pwa-cross-browser": {
      "id": "pwa-cross-browser",
      "title": "Site works cross-browser",
      "description": "To reach the most number of users, sites should work across every major browser. [Learn more](https://developers.google.com/web/progressive-web-apps/checklist#site-works-cross-browser).",
      "score": null,
      "scoreDisplayMode": "manual"
    },
    "pwa-page-transitions": {
      "id": "pwa-page-transitions",
      "title": "Page transitions don't feel like they block on the network",
      "description": "Transitions should feel snappy as you tap around, even on a slow network, a key to perceived performance. [Learn more](https://developers.google.com/web/progressive-web-apps/checklist#page-transitions-dont-feel-like-they-block-on-the-network).",
      "score": null,
      "scoreDisplayMode": "manual"
    },
    "pwa-each-page-has-url": {
      "id": "pwa-each-page-has-url",
      "title": "Each page has a URL",
      "description": "Ensure individual pages are deep linkable via the URLs and that URLs are unique for the purpose of shareability on social media. [Learn more](https://developers.google.com/web/progressive-web-apps/checklist#each-page-has-a-url).",
      "score": null,
      "scoreDisplayMode": "manual"
    },
    "accesskeys": {
      "id": "accesskeys",
      "title": "`[accesskey]` values are unique",
      "description": "Access keys let users quickly focus a part of the page. For proper navigation, each access key must be unique. [Learn more](https://dequeuniversity.com/rules/axe/3.1/accesskeys?application=lighthouse).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "aria-allowed-attr": {
      "id": "aria-allowed-attr",
      "title": "`[aria-*]` attributes match their roles",
      "description": "Each ARIA `role` supports a specific subset of `aria-*` attributes. Mismatching these invalidates the `aria-*` attributes. [Learn more](https://dequeuniversity.com/rules/axe/3.1/aria-allowed-attr?application=lighthouse).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "aria-required-attr": {
      "id": "aria-required-attr",
      "title": "`[role]`s have all required `[aria-*]` attributes",
      "description": "Some ARIA roles have required attributes that describe the state of the element to screen readers. [Learn more](https://dequeuniversity.com/rules/axe/3.1/aria-required-attr?application=lighthouse).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "aria-required-children": {
      "id": "aria-required-children",
      "title": "Elements with `[role]` that require specific children `[role]`s, are present",
      "description": "Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions. [Learn more](https://dequeuniversity.com/rules/axe/3.1/aria-required-children?application=lighthouse).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "aria-required-parent": {
      "id": "aria-required-parent",
      "title": "`[role]`s are contained by their required parent element",
      "description": "Some ARIA child roles must be contained by specific parent roles to properly perform their intended accessibility functions. [Learn more](https://dequeuniversity.com/rules/axe/3.1/aria-required-parent?application=lighthouse).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "aria-roles": {
      "id": "aria-roles",
      "title": "`[role]` values are valid",
      "description": "ARIA roles must have valid values in order to perform their intended accessibility functions. [Learn more](https://dequeuniversity.com/rules/axe/3.1/aria-roles?application=lighthouse).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "aria-valid-attr-value": {
      "id": "aria-valid-attr-value",
      "title": "`[aria-*]` attributes have valid values",
      "description": "Assistive technologies, like screen readers, can't interpret ARIA attributes with invalid values. [Learn more](https://dequeuniversity.com/rules/axe/3.1/aria-valid-attr-value?application=lighthouse).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "aria-valid-attr": {
      "id": "aria-valid-attr",
      "title": "`[aria-*]` attributes are valid and not misspelled",
      "description": "Assistive technologies, like screen readers, can't interpret ARIA attributes with invalid names. [Learn more](https://dequeuniversity.com/rules/axe/3.1/aria-valid-attr?application=lighthouse).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "audio-caption": {
      "id": "audio-caption",
      "title": "`<audio>` elements contain a `<track>` element with `[kind=\"captions\"]`",
      "description": "Captions make audio elements usable for deaf or hearing-impaired users, providing critical information such as who is talking, what they're saying, and other non-speech information. [Learn more](https://dequeuniversity.com/rules/axe/3.1/audio-caption?application=lighthouse).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "button-name": {
      "id": "button-name",
      "title": "Buttons have an accessible name",
      "description": "When a button doesn't have an accessible name, screen readers announce it as \"button\", making it unusable for users who rely on screen readers. [Learn more](https://dequeuniversity.com/rules/axe/3.1/button-name?application=lighthouse).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "details": {
        "type": "table",
        "headings": [],
        "items": []
      }
    },
    "bypass": {
      "id": "bypass",
      "title": "The page does not contain a heading, skip link, or landmark region",
      "description": "Adding ways to bypass repetitive content lets keyboard users navigate the page more efficiently. [Learn more](https://dequeuniversity.com/rules/axe/3.1/bypass?application=lighthouse).",
      "score": 0,
      "scoreDisplayMode": "binary",
      "details": {
        "type": "table",
        "headings": [
          {
            "key": "node",
            "itemType": "node",
            "text": "Failing Elements"
          }
        ],
        "items": [
          {
            "node": {
              "type": "node",
              "selector": "html",
              "path": "1,HTML",
              "snippet": "<html class=\"\">",
              "explanation": "Fix any of the following:\n  No valid skip link found\n  Page does not have a header\n  Page does not have a landmark region",
              "nodeLabel": "html"
            }
          }
        ],
        "debugData": {
          "type": "debugdata",
          "impact": "serious",
          "tags": [
            "cat.keyboard",
            "wcag2a",
            "wcag241",
            "section508",
            "section508.22.o"
          ]
        }
      }
    },
    "color-contrast": {
      "id": "color-contrast",
      "title": "Background and foreground colors do not have a sufficient contrast ratio.",
      "description": "Low-contrast text is difficult or impossible for many users to read. [Learn more](https://dequeuniversity.com/rules/axe/3.1/color-contrast?application=lighthouse).",
      "score": 0,
      "scoreDisplayMode": "binary",
      "details": {
        "type": "table",
        "headings": [
          {
            "key": "node",
            "itemType": "node",
            "text": "Failing Elements"
          }
        ],
        "items": [
          {
            "node": {
              "type": "node",
              "selector": "#index-bn",
              "path": "1,HTML,2,BODY,3,DIV,0,DIV,1,DIV,3,DIV,0,FORM,0,DIV,0,DIV,2,DIV,2,BUTTON",
              "snippet": "<button id=\"index-bn\" class=\"se-bn\" type=\"submit\">百度一下</button>",
              "explanation": "Fix any of the following:\n  Element has insufficient color contrast of 3.43 (foreground color: #3388ff, background color: #ffffff, font size: 12.0pt, font weight: bold). Expected contrast ratio of 4.5:1",
              "nodeLabel": "百度一下"
            }
          },
          {
            "node": {
              "type": "node",
              "selector": "article > div > div:nth-child(1) > div:nth-child(3)",
              "path": "1,HTML,2,BODY,3,DIV,0,DIV,1,DIV,6,ARTICLE,0,DIV,0,DIV,2,DIV",
              "snippet": "<div style=\"-webkit-box-sizing: border-box;box-sizing: border-box;width: .67rem;height: .32rem;line-height: .30rem;border-radius: .16rem;border: 1px solid #38f;color: #38f;font-size: 14px;\">打开</div>",
              "explanation": "Fix any of the following:\n  Element has insufficient color contrast of 3.43 (foreground color: #3388ff, background color: #ffffff, font size: 10.5pt, font weight: normal). Expected contrast ratio of 4.5:1",
              "nodeLabel": "打开"
            }
          },
          {
            "node": {
              "type": "node",
              "selector": "a[data-rid=\"\\39 096754004326685511\"] > .rn-footer > .rn-icon-hot",
              "path": "1,HTML,2,BODY,3,DIV,0,DIV,5,DIV,0,DIV,0,DIV,3,DIV,1,DIV,0,DIV,0,DIV,1,DIV,0,A,1,DIV,0,SPAN",
              "snippet": "<span class=\"rn-icon-hot\">置顶</span>",
              "explanation": "Fix any of the following:\n  Element has insufficient color contrast of 3.84 (foreground color: #ec4345, background color: #ffffff, font size: 9.8pt, font weight: normal). Expected contrast ratio of 4.5:1",
              "nodeLabel": "置顶"
            }
          },
          {
            "node": {
              "type": "node",
              "selector": "a[data-rid=\"\\39 096754004326685511\"] > .rn-footer > .rn-domainName",
              "path": "1,HTML,2,BODY,3,DIV,0,DIV,5,DIV,0,DIV,0,DIV,3,DIV,1,DIV,0,DIV,0,DIV,1,DIV,0,A,1,DIV,1,SPAN",
              "snippet": "<span class=\"rn-domainName\">央视网新闻</span>",
              "explanation": "Fix any of the following:\n  Element has insufficient color contrast of 2.84 (foreground color: #999999, background color: #ffffff, font size: 9.8pt, font weight: normal). Expected contrast ratio of 4.5:1",
              "nodeLabel": "央视网新闻"
            }
          },
          {
            "node": {
              "type": "node",
              "selector": "a[data-rid=\"\\39 011511856933223377\"] > .rn-footer > .rn-icon-hot",
              "path": "1,HTML,2,BODY,3,DIV,0,DIV,5,DIV,0,DIV,0,DIV,3,DIV,1,DIV,0,DIV,1,DIV,1,DIV,0,A,1,DIV,0,SPAN",
              "snippet": "<span class=\"rn-icon-hot\">置顶</span>",
              "explanation": "Fix any of the following:\n  Element has insufficient color contrast of 3.84 (foreground color: #ec4345, background color: #ffffff, font size: 9.8pt, font weight: normal). Expected contrast ratio of 4.5:1",
              "nodeLabel": "置顶"
            }
          },
          {
            "node": {
              "type": "node",
              "selector": "a[data-rid=\"\\39 011511856933223377\"] > .rn-footer > .rn-domainName",
              "path": "1,HTML,2,BODY,3,DIV,0,DIV,5,DIV,0,DIV,0,DIV,3,DIV,1,DIV,0,DIV,1,DIV,1,DIV,0,A,1,DIV,1,SPAN",
              "snippet": "<span class=\"rn-domainName\">央视网新闻</span>",
              "explanation": "Fix any of the following:\n  Element has insufficient color contrast of 2.84 (foreground color: #999999, background color: #ffffff, font size: 9.8pt, font weight: normal). Expected contrast ratio of 4.5:1",
              "nodeLabel": "央视网新闻"
            }
          },
          {
            "node": {
              "type": "node",
              "selector": "a[data-rid=\"\\39 206882742431007721\"] > .rn-footer > .rn-domainName",
              "path": "1,HTML,2,BODY,3,DIV,0,DIV,5,DIV,0,DIV,0,DIV,3,DIV,1,DIV,0,DIV,2,DIV,1,DIV,0,A,2,DIV,0,SPAN",
              "snippet": "<span class=\"rn-domainName\">福建交通广播FM1007</span>",
              "explanation": "Fix any of the following:\n  Element has insufficient color contrast of 2.84 (foreground color: #999999, background color: #ffffff, font size: 9.8pt, font weight: normal). Expected contrast ratio of 4.5:1",
              "nodeLabel": "福建交通广播FM1007"
            }
          },
          {
            "node": {
              "type": "node",
              "selector": "a[data-rid=\"\\38 891061882838560834\"] > .rn-text-content > .rn-footer > .rn-domainName",
              "path": "1,HTML,2,BODY,3,DIV,0,DIV,5,DIV,0,DIV,0,DIV,3,DIV,1,DIV,0,DIV,4,DIV,1,DIV,0,A,1,DIV,1,DIV,0,SPAN",
              "snippet": "<span class=\"rn-domainName\">环球时报</span>",
              "explanation": "Fix any of the following:\n  Element has insufficient color contrast of 2.84 (foreground color: #999999, background color: #ffffff, font size: 9.8pt, font weight: normal). Expected contrast ratio of 4.5:1",
              "nodeLabel": "环球时报"
            }
          },
          {
            "node": {
              "type": "node",
              "selector": "a[data-rid=\"\\39 814904671209466630\"] > .rn-footer > .rn-domainName",
              "path": "1,HTML,2,BODY,3,DIV,0,DIV,5,DIV,0,DIV,0,DIV,3,DIV,1,DIV,0,DIV,5,DIV,1,DIV,0,A,2,DIV,0,SPAN",
              "snippet": "<span class=\"rn-domainName\">都市热线</span>",
              "explanation": "Fix any of the following:\n  Element has insufficient color contrast of 2.84 (foreground color: #999999, background color: #ffffff, font size: 9.8pt, font weight: normal). Expected contrast ratio of 4.5:1",
              "nodeLabel": "都市热线"
            }
          },
          {
            "node": {
              "type": "node",
              "selector": "a[data-rid=\"\\39 868710183245807994\"] > .rn-footer > .rn-domainName",
              "path": "1,HTML,2,BODY,3,DIV,0,DIV,5,DIV,0,DIV,0,DIV,3,DIV,1,DIV,0,DIV,6,DIV,1,DIV,0,A,2,DIV,0,SPAN",
              "snippet": "<span class=\"rn-domainName\">育满园</span>",
              "explanation": "Fix any of the following:\n  Element has insufficient color contrast of 2.84 (foreground color: #999999, background color: #ffffff, font size: 9.8pt, font weight: normal). Expected contrast ratio of 4.5:1",
              "nodeLabel": "育满园"
            }
          },
          {
            "node": {
              "type": "node",
              "selector": ".rn-wise-text-content > .rn-footer > .rn-domainName",
              "path": "1,HTML,2,BODY,3,DIV,0,DIV,5,DIV,0,DIV,0,DIV,3,DIV,1,DIV,0,DIV,7,DIV,1,DIV,0,A,1,DIV,1,DIV,0,SPAN",
              "snippet": "<span class=\"rn-domainName\">看看新闻Knews</span>",
              "explanation": "Fix any of the following:\n  Element has insufficient color contrast of 2.84 (foreground color: #999999, background color: #ffffff, font size: 9.8pt, font weight: normal). Expected contrast ratio of 4.5:1",
              "nodeLabel": "看看新闻Knews"
            }
          },
          {
            "node": {
              "type": "node",
              "selector": "a[data-rid=\"\\39 713632387449458875\"] > .rn-text-content > .rn-footer > .rn-domainName",
              "path": "1,HTML,2,BODY,3,DIV,0,DIV,5,DIV,0,DIV,0,DIV,3,DIV,1,DIV,0,DIV,8,DIV,1,DIV,0,A,1,DIV,1,DIV,0,SPAN",
              "snippet": "<span class=\"rn-domainName\">封面新闻</span>",
              "explanation": "Fix any of the following:\n  Element has insufficient color contrast of 2.84 (foreground color: #999999, background color: #ffffff, font size: 9.8pt, font weight: normal). Expected contrast ratio of 4.5:1",
              "nodeLabel": "封面新闻"
            }
          },
          {
            "node": {
              "type": "node",
              "selector": "#index-copyright",
              "path": "1,HTML,2,BODY,3,DIV,0,DIV,8,DIV,0,DIV,1,A",
              "snippet": "<a id=\"index-copyright\" href=\"https://m.baidu.com/sf?pd=sd_privacy_terms&amp;ms=1&amp;ms=1&amp;word=%E5%85%8D%E8%B4%A3%E5%A3%B0%E6%98%8E&amp;title=%E5%85%8D%E8%B4%A3%E5%A3%B0%E6%98%8E&amp;openapi=1&amp;from_sf=1&amp;resource_id=37483&amp;dsp=iphone&amp;tn=wisexmlnew&amp;ext=%7B%22pid%22%3A%22mianze-shengming%22%7D&amp;lid=&amp;referlid=9224097818218589594&amp;frsrcid=37483&amp;frorder=1\" data-stats=\"10|2|foot|a2_l1\">",
              "explanation": "Fix any of the following:\n  Element has insufficient color contrast of 2.68 (foreground color: #999999, background color: #f8f8f8, font size: 9.0pt, font weight: normal). Expected contrast ratio of 4.5:1",
              "nodeLabel": "使用百度前必读 Baidu 京ICP证030173号"
            }
          },
          {
            "node": {
              "type": "node",
              "selector": ".recordcode",
              "path": "1,HTML,2,BODY,3,DIV,0,DIV,8,DIV,0,DIV,2,A",
              "snippet": "<a class=\"recordcode\" href=\"http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11000002000001\" target=\"_blank\"><i></i>京公网安备11000002000001号</a>",
              "explanation": "Fix any of the following:\n  Element has insufficient color contrast of 2.68 (foreground color: #999999, background color: #f8f8f8, font size: 9.0pt, font weight: normal). Expected contrast ratio of 4.5:1",
              "nodeLabel": "京公网安备11000002000001号"
            }
          }
        ],
        "debugData": {
          "type": "debugdata",
          "impact": "serious",
          "tags": [
            "cat.color",
            "wcag2aa",
            "wcag143"
          ]
        }
      }
    },
    "definition-list": {
      "id": "definition-list",
      "title": "`<dl>`'s contain only properly-ordered `<dt>` and `<dd>` groups, `<script>` or `<template>` elements.",
      "description": "When definition lists are not properly marked up, screen readers may produce confusing or inaccurate output. [Learn more](https://dequeuniversity.com/rules/axe/3.1/definition-list?application=lighthouse).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "dlitem": {
      "id": "dlitem",
      "title": "Definition list items are wrapped in `<dl>` elements",
      "description": "Definition list items (`<dt>` and `<dd>`) must be wrapped in a parent `<dl>` element to ensure that screen readers can properly announce them. [Learn more](https://dequeuniversity.com/rules/axe/3.1/dlitem?application=lighthouse).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "document-title": {
      "id": "document-title",
      "title": "Document has a `<title>` element",
      "description": "The title gives screen reader users an overview of the page, and search engine users rely on it heavily to determine if a page is relevant to their search. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/title).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "details": {
        "type": "table",
        "headings": [],
        "items": []
      }
    },
    "duplicate-id": {
      "id": "duplicate-id",
      "title": "`[id]` attributes on the page are unique",
      "description": "The value of an id attribute must be unique to prevent other instances from being overlooked by assistive technologies. [Learn more](https://dequeuniversity.com/rules/axe/3.1/duplicate-id?application=lighthouse).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "details": {
        "type": "table",
        "headings": [],
        "items": []
      }
    },
    "frame-title": {
      "id": "frame-title",
      "title": "`<frame>` or `<iframe>` elements have a title",
      "description": "Screen reader users rely on frame titles to describe the contents of frames. [Learn more](https://dequeuniversity.com/rules/axe/3.1/frame-title?application=lighthouse).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "html-has-lang": {
      "id": "html-has-lang",
      "title": "`<html>` element does not have a `[lang]` attribute",
      "description": "If a page doesn't specify a lang attribute, a screen reader assumes that the page is in the default language that the user chose when setting up the screen reader. If the page isn't actually in the default language, then the screen reader might not announce the page's text correctly. [Learn more](https://dequeuniversity.com/rules/axe/3.1/html-has-lang?application=lighthouse).",
      "score": 0,
      "scoreDisplayMode": "binary",
      "details": {
        "type": "table",
        "headings": [
          {
            "key": "node",
            "itemType": "node",
            "text": "Failing Elements"
          }
        ],
        "items": [
          {
            "node": {
              "type": "node",
              "selector": "html",
              "path": "1,HTML",
              "snippet": "<html class=\"\">",
              "explanation": "Fix any of the following:\n  The <html> element does not have a lang attribute",
              "nodeLabel": "html"
            }
          }
        ],
        "debugData": {
          "type": "debugdata",
          "impact": "serious",
          "tags": [
            "cat.language",
            "wcag2a",
            "wcag311"
          ]
        }
      }
    },
    "html-lang-valid": {
      "id": "html-lang-valid",
      "title": "`<html>` element has a valid value for its `[lang]` attribute",
      "description": "Specifying a valid [BCP 47 language](https://www.w3.org/International/questions/qa-choosing-language-tags#question) helps screen readers announce text properly. [Learn more](https://dequeuniversity.com/rules/axe/3.1/valid-lang?application=lighthouse).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "image-alt": {
      "id": "image-alt",
      "title": "Image elements do not have `[alt]` attributes",
      "description": "Informative elements should aim for short, descriptive alternate text. Decorative elements can be ignored with an empty alt attribute. [Learn more](https://dequeuniversity.com/rules/axe/3.1/image-alt?application=lighthouse).",
      "score": 0,
      "scoreDisplayMode": "binary",
      "details": {
        "type": "table",
        "headings": [
          {
            "key": "node",
            "itemType": "node",
            "text": "Failing Elements"
          }
        ],
        "items": [
          {
            "node": {
              "type": "node",
              "selector": "a[data-rid=\"\\39 206882742431007721\"] > .rn-three-pic-content > .rn-three-pic-wrap:nth-child(1) > img",
              "path": "1,HTML,2,BODY,3,DIV,0,DIV,5,DIV,0,DIV,0,DIV,3,DIV,1,DIV,0,DIV,2,DIV,1,DIV,0,A,1,DIV,0,DIV,0,IMG",
              "snippet": "<img src=\"https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3470253096,3046562130&amp;fm=173&amp;app=49&amp;f=JPEG?w=218&amp;h=146&amp;s=3AA87023B2E160A24ED445D60100C0A0\">",
              "explanation": "Fix any of the following:\n  Element does not have an alt attribute\n  aria-label attribute does not exist or is empty\n  aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty\n  Element has no title attribute or the title attribute is empty\n  Element's default semantics were not overridden with role=\"presentation\"\n  Element's default semantics were not overridden with role=\"none\"",
              "nodeLabel": "img"
            }
          },
          {
            "node": {
              "type": "node",
              "selector": "a[data-rid=\"\\39 206882742431007721\"] > .rn-three-pic-content > .rn-three-pic-wrap:nth-child(2) > img",
              "path": "1,HTML,2,BODY,3,DIV,0,DIV,5,DIV,0,DIV,0,DIV,3,DIV,1,DIV,0,DIV,2,DIV,1,DIV,0,A,1,DIV,1,DIV,0,IMG",
              "snippet": "<img src=\"https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=935178575,1994208433&amp;fm=173&amp;app=49&amp;f=JPEG?w=218&amp;h=146&amp;s=DB24D14ACCED8134073595B00300D016\">",
              "explanation": "Fix any of the following:\n  Element does not have an alt attribute\n  aria-label attribute does not exist or is empty\n  aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty\n  Element has no title attribute or the title attribute is empty\n  Element's default semantics were not overridden with role=\"presentation\"\n  Element's default semantics were not overridden with role=\"none\"",
              "nodeLabel": "img"
            }
          },
          {
            "node": {
              "type": "node",
              "selector": "a[data-rid=\"\\39 206882742431007721\"] > .rn-three-pic-content > .rn-three-pic-wrap:nth-child(3) > img",
              "path": "1,HTML,2,BODY,3,DIV,0,DIV,5,DIV,0,DIV,0,DIV,3,DIV,1,DIV,0,DIV,2,DIV,1,DIV,0,A,1,DIV,2,DIV,0,IMG",
              "snippet": "<img src=\"https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=1110421091,3197926947&amp;fm=173&amp;app=49&amp;f=JPEG?w=218&amp;h=146&amp;s=CAF004C248010B5538012C370300C040\">",
              "explanation": "Fix any of the following:\n  Element does not have an alt attribute\n  aria-label attribute does not exist or is empty\n  aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty\n  Element has no title attribute or the title attribute is empty\n  Element's default semantics were not overridden with role=\"presentation\"\n  Element's default semantics were not overridden with role=\"none\"",
              "nodeLabel": "img"
            }
          },
          {
            "node": {
              "type": "node",
              "selector": "a[data-rid=\"\\38 891061882838560834\"] > .rn-one-pic-wrap > img",
              "path": "1,HTML,2,BODY,3,DIV,0,DIV,5,DIV,0,DIV,0,DIV,3,DIV,1,DIV,0,DIV,4,DIV,1,DIV,0,A,0,DIV,0,IMG",
              "snippet": "<img src=\"https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2234553350,1922139704&amp;fm=173&amp;app=49&amp;f=JPEG?w=218&amp;h=146&amp;s=7D2C34729B8F404B5CDDF1CA0000E0B1\">",
              "explanation": "Fix any of the following:\n  Element does not have an alt attribute\n  aria-label attribute does not exist or is empty\n  aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty\n  Element has no title attribute or the title attribute is empty\n  Element's default semantics were not overridden with role=\"presentation\"\n  Element's default semantics were not overridden with role=\"none\"",
              "nodeLabel": "img"
            }
          },
          {
            "node": {
              "type": "node",
              "selector": "a[data-rid=\"\\39 814904671209466630\"] > .rn-three-pic-content > .rn-three-pic-wrap:nth-child(1) > img",
              "path": "1,HTML,2,BODY,3,DIV,0,DIV,5,DIV,0,DIV,0,DIV,3,DIV,1,DIV,0,DIV,5,DIV,1,DIV,0,A,1,DIV,0,DIV,0,IMG",
              "snippet": "<img src=\"https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2517986539,284342316&amp;fm=173&amp;app=49&amp;f=JPEG?w=218&amp;h=146&amp;s=ECA2D45BDEE1BB665AC95C3A0300E046\">",
              "explanation": "Fix any of the following:\n  Element does not have an alt attribute\n  aria-label attribute does not exist or is empty\n  aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty\n  Element has no title attribute or the title attribute is empty\n  Element's default semantics were not overridden with role=\"presentation\"\n  Element's default semantics were not overridden with role=\"none\"",
              "nodeLabel": "img"
            }
          },
          {
            "node": {
              "type": "node",
              "selector": "a[data-rid=\"\\39 814904671209466630\"] > .rn-three-pic-content > .rn-three-pic-wrap:nth-child(2) > img",
              "path": "1,HTML,2,BODY,3,DIV,0,DIV,5,DIV,0,DIV,0,DIV,3,DIV,1,DIV,0,DIV,5,DIV,1,DIV,0,A,1,DIV,1,DIV,0,IMG",
              "snippet": "<img src=\"https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=2177506017,114415560&amp;fm=173&amp;app=49&amp;f=JPEG?w=218&amp;h=146&amp;s=1098CB7D62386F36C4A7C4A00300E00A\">",
              "explanation": "Fix any of the following:\n  Element does not have an alt attribute\n  aria-label attribute does not exist or is empty\n  aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty\n  Element has no title attribute or the title attribute is empty\n  Element's default semantics were not overridden with role=\"presentation\"\n  Element's default semantics were not overridden with role=\"none\"",
              "nodeLabel": "img"
            }
          },
          {
            "node": {
              "type": "node",
              "selector": "a[data-rid=\"\\39 814904671209466630\"] > .rn-three-pic-content > .rn-three-pic-wrap:nth-child(3) > img",
              "path": "1,HTML,2,BODY,3,DIV,0,DIV,5,DIV,0,DIV,0,DIV,3,DIV,1,DIV,0,DIV,5,DIV,1,DIV,0,A,1,DIV,2,DIV,0,IMG",
              "snippet": "<img src=\"https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2943575840,3299669129&amp;fm=173&amp;app=49&amp;f=JPEG?w=218&amp;h=146&amp;s=A98AD55F38733C1B163901350300E062\">",
              "explanation": "Fix any of the following:\n  Element does not have an alt attribute\n  aria-label attribute does not exist or is empty\n  aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty\n  Element has no title attribute or the title attribute is empty\n  Element's default semantics were not overridden with role=\"presentation\"\n  Element's default semantics were not overridden with role=\"none\"",
              "nodeLabel": "img"
            }
          },
          {
            "node": {
              "type": "node",
              "selector": "a[data-rid=\"\\39 868710183245807994\"] > .rn-three-pic-content > .rn-three-pic-wrap:nth-child(1) > img",
              "path": "1,HTML,2,BODY,3,DIV,0,DIV,5,DIV,0,DIV,0,DIV,3,DIV,1,DIV,0,DIV,6,DIV,1,DIV,0,A,1,DIV,0,DIV,0,IMG",
              "snippet": "<img src=\"https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=2828194554,379760079&amp;fm=173&amp;app=49&amp;f=JPEG?w=218&amp;h=146&amp;s=15B74F3400A9CD1F831978C0030070A0\">",
              "explanation": "Fix any of the following:\n  Element does not have an alt attribute\n  aria-label attribute does not exist or is empty\n  aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty\n  Element has no title attribute or the title attribute is empty\n  Element's default semantics were not overridden with role=\"presentation\"\n  Element's default semantics were not overridden with role=\"none\"",
              "nodeLabel": "img"
            }
          },
          {
            "node": {
              "type": "node",
              "selector": "a[data-rid=\"\\39 868710183245807994\"] > .rn-three-pic-content > .rn-three-pic-wrap:nth-child(2) > img",
              "path": "1,HTML,2,BODY,3,DIV,0,DIV,5,DIV,0,DIV,0,DIV,3,DIV,1,DIV,0,DIV,6,DIV,1,DIV,0,A,1,DIV,1,DIV,0,IMG",
              "snippet": "<img src=\"https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=4200824156,235375465&amp;fm=173&amp;app=49&amp;f=JPEG?w=218&amp;h=146&amp;s=EB3220C50863011B04988CD50300E099\">",
              "explanation": "Fix any of the following:\n  Element does not have an alt attribute\n  aria-label attribute does not exist or is empty\n  aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty\n  Element has no title attribute or the title attribute is empty\n  Element's default semantics were not overridden with role=\"presentation\"\n  Element's default semantics were not overridden with role=\"none\"",
              "nodeLabel": "img"
            }
          },
          {
            "node": {
              "type": "node",
              "selector": "a[data-rid=\"\\39 868710183245807994\"] > .rn-three-pic-content > .rn-three-pic-wrap:nth-child(3) > img",
              "path": "1,HTML,2,BODY,3,DIV,0,DIV,5,DIV,0,DIV,0,DIV,3,DIV,1,DIV,0,DIV,6,DIV,1,DIV,0,A,1,DIV,2,DIV,0,IMG",
              "snippet": "<img src=\"https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=3135883046,2821928848&amp;fm=173&amp;app=49&amp;f=JPEG?w=218&amp;h=146&amp;s=475239C44C6A3D1F44A88C2103005093\">",
              "explanation": "Fix any of the following:\n  Element does not have an alt attribute\n  aria-label attribute does not exist or is empty\n  aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty\n  Element has no title attribute or the title attribute is empty\n  Element's default semantics were not overridden with role=\"presentation\"\n  Element's default semantics were not overridden with role=\"none\"",
              "nodeLabel": "img"
            }
          },
          {
            "node": {
              "type": "node",
              "selector": ".rn-small-video-wrap > img",
              "path": "1,HTML,2,BODY,3,DIV,0,DIV,5,DIV,0,DIV,0,DIV,3,DIV,1,DIV,0,DIV,7,DIV,1,DIV,0,A,0,DIV,0,IMG",
              "snippet": "<img src=\"https://ss0.bdstatic.com/9bA1vGfa2gU2pMbfm9GUKT-w/timg?searchbox_feed&amp;size=f218_146&amp;quality=80&amp;wh_rate=0&amp;imgtype=0&amp;ref=http%3A%2F%2Fwww.baidu.com&amp;sec=0&amp;di=d229e1096d214649a814ca8d3619ac10&amp;src=http%3A%2F%2Fpic.rmb.bdstatic.com%2F4b61e54d8331cfc17f0a5e3ed82505db6171.jpeg\">",
              "explanation": "Fix any of the following:\n  Element does not have an alt attribute\n  aria-label attribute does not exist or is empty\n  aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty\n  Element has no title attribute or the title attribute is empty\n  Element's default semantics were not overridden with role=\"presentation\"\n  Element's default semantics were not overridden with role=\"none\"",
              "nodeLabel": "img"
            }
          },
          {
            "node": {
              "type": "node",
              "selector": "a[data-rid=\"\\39 713632387449458875\"] > .rn-one-pic-wrap > img",
              "path": "1,HTML,2,BODY,3,DIV,0,DIV,5,DIV,0,DIV,0,DIV,3,DIV,1,DIV,0,DIV,8,DIV,1,DIV,0,A,0,DIV,0,IMG",
              "snippet": "<img src=\"https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2422364419,1664958894&amp;fm=173&amp;app=49&amp;f=JPEG?w=218&amp;h=146&amp;s=4E961BC594E241111A95E06A03000051\">",
              "explanation": "Fix any of the following:\n  Element does not have an alt attribute\n  aria-label attribute does not exist or is empty\n  aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty\n  Element has no title attribute or the title attribute is empty\n  Element's default semantics were not overridden with role=\"presentation\"\n  Element's default semantics were not overridden with role=\"none\"",
              "nodeLabel": "img"
            }
          }
        ],
        "debugData": {
          "type": "debugdata",
          "impact": "critical",
          "tags": [
            "cat.text-alternatives",
            "wcag2a",
            "wcag111",
            "section508",
            "section508.22.a"
          ]
        }
      }
    },
    "input-image-alt": {
      "id": "input-image-alt",
      "title": "`<input type=\"image\">` elements have `[alt]` text",
      "description": "When an image is being used as an `<input>` button, providing alternative text can help screen reader users understand the purpose of the button. [Learn more](https://dequeuniversity.com/rules/axe/3.1/input-image-alt?application=lighthouse).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "label": {
      "id": "label",
      "title": "Form elements do not have associated labels",
      "description": "Labels ensure that form controls are announced properly by assistive technologies, like screen readers. [Learn more](https://dequeuniversity.com/rules/axe/3.1/label?application=lighthouse).",
      "score": 0,
      "scoreDisplayMode": "binary",
      "details": {
        "type": "table",
        "headings": [
          {
            "key": "node",
            "itemType": "node",
            "text": "Failing Elements"
          }
        ],
        "items": [
          {
            "node": {
              "type": "node",
              "selector": "#index-kw",
              "path": "1,HTML,2,BODY,3,DIV,0,DIV,1,DIV,3,DIV,0,FORM,0,DIV,0,DIV,1,INPUT",
              "snippet": "<input type=\"search\" autocomplete=\"off\" autocorrect=\"off\" maxlength=\"64\" id=\"index-kw\" name=\"word\" class=\"se-input adjust-input\" data-placeholder=\"\" data-sa=\"\" data-sug=\"1\">",
              "explanation": "Fix any of the following:\n  aria-label attribute does not exist or is empty\n  aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty\n  Form element does not have an implicit (wrapped) <label>\n  Form element does not have an explicit <label>\n  Element has no title attribute or the title attribute is empty",
              "nodeLabel": "input"
            }
          }
        ],
        "debugData": {
          "type": "debugdata",
          "impact": "critical",
          "tags": [
            "cat.forms",
            "wcag2a",
            "wcag332",
            "wcag131",
            "section508",
            "section508.22.n"
          ]
        }
      }
    },
    "layout-table": {
      "id": "layout-table",
      "title": "Presentational `<table>` elements avoid using `<th>`, `<caption>` or the `[summary]` attribute.",
      "description": "A table being used for layout purposes should not include data elements, such as the th or caption elements or the summary attribute, because this can create a confusing experience for screen reader users. [Learn more](https://dequeuniversity.com/rules/axe/3.1/layout-table?application=lighthouse).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "link-name": {
      "id": "link-name",
      "title": "Links do not have a discernible name",
      "description": "Link text (and alternate text for images, when used as links) that is discernible, unique, and focusable improves the navigation experience for screen reader users. [Learn more](https://dequeuniversity.com/rules/axe/3.1/link-name?application=lighthouse).",
      "score": 0,
      "scoreDisplayMode": "binary",
      "details": {
        "type": "table",
        "headings": [
          {
            "key": "node",
            "itemType": "node",
            "text": "Failing Elements"
          }
        ],
        "items": [
          {
            "node": {
              "type": "node",
              "selector": ".square-enterance",
              "path": "1,HTML,2,BODY,3,DIV,0,DIV,1,DIV,0,DIV,2,A",
              "snippet": "<a class=\"square-enterance\" data-tclog=\"\" href=\"http://m.baidu.com/l=1/tc?logid=3336455358&amp;from=844b&amp;ref=index_iphone&amp;nsrc=IlPT2AEptyoA_yixCFOxCGZb8c3JV3T5ABfPNy6R2iv5nk_qva02FMNsUiH5Nn_KJoCa9m3BdMZObmGcWyNnn1E2e_&amp;bdenc=1&amp;ct=10&amp;cst=2&amp;logFrom=navs_square\">",
              "explanation": "Fix all of the following:\n  Element is in tab order and does not have accessible text\n\nFix any of the following:\n  Element does not have text that is visible to screen readers\n  aria-label attribute does not exist or is empty\n  aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty\n  Element's default semantics were not overridden with role=\"presentation\"\n  Element's default semantics were not overridden with role=\"none\"",
              "nodeLabel": "a"
            }
          }
        ],
        "debugData": {
          "type": "debugdata",
          "impact": "serious",
          "tags": [
            "cat.name-role-value",
            "wcag2a",
            "wcag412",
            "wcag244",
            "section508",
            "section508.22.a"
          ]
        }
      }
    },
    "list": {
      "id": "list",
      "title": "Lists contain only `<li>` elements and script supporting elements (`<script>` and `<template>`).",
      "description": "Screen readers have a specific way of announcing lists. Ensuring proper list structure aids screen reader output. [Learn more](https://dequeuniversity.com/rules/axe/3.1/list?application=lighthouse).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "details": {
        "type": "table",
        "headings": [],
        "items": []
      }
    },
    "listitem": {
      "id": "listitem",
      "title": "List items (`<li>`) are contained within `<ul>` or `<ol>` parent elements",
      "description": "Screen readers require list items (`<li>`) to be contained within a parent `<ul>` or `<ol>` to be announced properly. [Learn more](https://dequeuniversity.com/rules/axe/3.1/listitem?application=lighthouse).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "details": {
        "type": "table",
        "headings": [],
        "items": []
      }
    },
    "meta-refresh": {
      "id": "meta-refresh",
      "title": "The document does not use `<meta http-equiv=\"refresh\">`",
      "description": "Users do not expect a page to refresh automatically, and doing so will move focus back to the top of the page. This may create a frustrating or confusing experience. [Learn more](https://dequeuniversity.com/rules/axe/3.1/meta-refresh?application=lighthouse).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "meta-viewport": {
      "id": "meta-viewport",
      "title": "`[user-scalable=\"no\"]` is used in the `<meta name=\"viewport\">` element or the `[maximum-scale]` attribute is less than 5.",
      "description": "Disabling zooming is problematic for users with low vision who rely on screen magnification to properly see the contents of a web page. [Learn more](https://dequeuniversity.com/rules/axe/3.1/meta-viewport?application=lighthouse).",
      "score": 0,
      "scoreDisplayMode": "binary",
      "details": {
        "type": "table",
        "headings": [
          {
            "key": "node",
            "itemType": "node",
            "text": "Failing Elements"
          }
        ],
        "items": [
          {
            "node": {
              "type": "node",
              "selector": "meta[name=\"viewport\"]",
              "path": "1,HTML,1,HEAD,2,META",
              "snippet": "<meta name=\"viewport\" content=\"width=device-width,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no\">",
              "explanation": "Fix any of the following:\n  user-scalable=no on <meta> tag disables zooming on mobile devices",
              "nodeLabel": "meta"
            }
          }
        ],
        "debugData": {
          "type": "debugdata",
          "impact": "critical",
          "tags": [
            "cat.sensory-and-visual-cues",
            "wcag2aa",
            "wcag144"
          ]
        }
      }
    },
    "object-alt": {
      "id": "object-alt",
      "title": "`<object>` elements have `[alt]` text",
      "description": "Screen readers cannot translate non-text content. Adding alt text to `<object>` elements helps screen readers convey meaning to users. [Learn more](https://dequeuniversity.com/rules/axe/3.1/object-alt?application=lighthouse).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "tabindex": {
      "id": "tabindex",
      "title": "No element has a `[tabindex]` value greater than 0",
      "description": "A value greater than 0 implies an explicit navigation ordering. Although technically valid, this often creates frustrating experiences for users who rely on assistive technologies. [Learn more](https://dequeuniversity.com/rules/axe/3.1/tabindex?application=lighthouse).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "td-headers-attr": {
      "id": "td-headers-attr",
      "title": "Cells in a `<table>` element that use the `[headers]` attribute only refer to other cells of that same table.",
      "description": "Screen readers have features to make navigating tables easier. Ensuring `<td>` cells using the `[headers]` attribute only refer to other cells in the same table may improve the experience for screen reader users. [Learn more](https://dequeuniversity.com/rules/axe/3.1/td-headers-attr?application=lighthouse).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "th-has-data-cells": {
      "id": "th-has-data-cells",
      "title": "`<th>` elements and elements with `[role=\"columnheader\"/\"rowheader\"]` have data cells they describe.",
      "description": "Screen readers have features to make navigating tables easier. Ensuring table headers always refer to some set of cells may improve the experience for screen reader users. [Learn more](https://dequeuniversity.com/rules/axe/3.1/th-has-data-cells?application=lighthouse).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "valid-lang": {
      "id": "valid-lang",
      "title": "`[lang]` attributes have a valid value",
      "description": "Specifying a valid [BCP 47 language](https://www.w3.org/International/questions/qa-choosing-language-tags#question) on elements helps ensure that text is pronounced correctly by a screen reader. [Learn more](https://dequeuniversity.com/rules/axe/3.1/valid-lang?application=lighthouse).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "video-caption": {
      "id": "video-caption",
      "title": "`<video>` elements contain a `<track>` element with `[kind=\"captions\"]`",
      "description": "When a video provides a caption it is easier for deaf and hearing impaired users to access its information. [Learn more](https://dequeuniversity.com/rules/axe/3.1/video-caption?application=lighthouse).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "video-description": {
      "id": "video-description",
      "title": "`<video>` elements contain a `<track>` element with `[kind=\"description\"]`",
      "description": "Audio descriptions provide relevant information for videos that dialogue cannot, such as facial expressions and scenes. [Learn more](https://dequeuniversity.com/rules/axe/3.1/video-description?application=lighthouse).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "custom-controls-labels": {
      "id": "custom-controls-labels",
      "title": "Custom controls have associated labels",
      "description": "Custom interactive controls have associated labels, provided by aria-label or aria-labelledby. [Learn more](https://developers.google.com/web/fundamentals/accessibility/how-to-review#try_it_with_a_screen_reader).",
      "score": null,
      "scoreDisplayMode": "manual"
    },
    "custom-controls-roles": {
      "id": "custom-controls-roles",
      "title": "Custom controls have ARIA roles",
      "description": "Custom interactive controls have appropriate ARIA roles. [Learn more](https://developers.google.com/web/fundamentals/accessibility/how-to-review#try_it_with_a_screen_reader).",
      "score": null,
      "scoreDisplayMode": "manual"
    },
    "focus-traps": {
      "id": "focus-traps",
      "title": "User focus is not accidentally trapped in a region",
      "description": "A user can tab into and out of any control or region without accidentally trapping their focus. [Learn more](https://developers.google.com/web/fundamentals/accessibility/how-to-review#start_with_the_keyboard).",
      "score": null,
      "scoreDisplayMode": "manual"
    },
    "focusable-controls": {
      "id": "focusable-controls",
      "title": "Interactive controls are keyboard focusable",
      "description": "Custom interactive controls are keyboard focusable and display a focus indicator. [Learn more](https://developers.google.com/web/fundamentals/accessibility/how-to-review#start_with_the_keyboard).",
      "score": null,
      "scoreDisplayMode": "manual"
    },
    "heading-levels": {
      "id": "heading-levels",
      "title": "Headings don't skip levels",
      "description": "Headings are used to create an outline for the page and heading levels are not skipped. [Learn more](https://developers.google.com/web/fundamentals/accessibility/how-to-review#take_advantage_of_headings_and_landmarks).",
      "score": null,
      "scoreDisplayMode": "manual"
    },
    "interactive-element-affordance": {
      "id": "interactive-element-affordance",
      "title": "Interactive elements indicate their purpose and state",
      "description": "Interactive elements, such as links and buttons, should indicate their state and be distinguishable from non-interactive elements. [Learn more](https://developers.google.com/web/fundamentals/accessibility/how-to-review#interactive_elements_like_links_and_buttons_should_indicate_their_purpose_and_state).",
      "score": null,
      "scoreDisplayMode": "manual"
    },
    "logical-tab-order": {
      "id": "logical-tab-order",
      "title": "The page has a logical tab order",
      "description": "Tabbing through the page follows the visual layout. Users cannot focus elements that are offscreen. [Learn more](https://developers.google.com/web/fundamentals/accessibility/how-to-review#start_with_the_keyboard).",
      "score": null,
      "scoreDisplayMode": "manual"
    },
    "managed-focus": {
      "id": "managed-focus",
      "title": "The user's focus is directed to new content added to the page",
      "description": "If new content, such as a dialog, is added to the page, the user's focus is directed to it. [Learn more](https://developers.google.com/web/fundamentals/accessibility/how-to-review#start_with_the_keyboard).",
      "score": null,
      "scoreDisplayMode": "manual"
    },
    "offscreen-content-hidden": {
      "id": "offscreen-content-hidden",
      "title": "Offscreen content is hidden from assistive technology",
      "description": "Offscreen content is hidden with display: none or aria-hidden=true. [Learn more](https://developers.google.com/web/fundamentals/accessibility/how-to-review#try_it_with_a_screen_reader).",
      "score": null,
      "scoreDisplayMode": "manual"
    },
    "use-landmarks": {
      "id": "use-landmarks",
      "title": "HTML5 landmark elements are used to improve navigation",
      "description": "Landmark elements (<main>, <nav>, etc.) are used to improve the keyboard navigation of the page for assistive technology. [Learn more](https://developers.google.com/web/fundamentals/accessibility/how-to-review#take_advantage_of_headings_and_landmarks).",
      "score": null,
      "scoreDisplayMode": "manual"
    },
    "visual-order-follows-dom": {
      "id": "visual-order-follows-dom",
      "title": "Visual order on the page follows DOM order",
      "description": "DOM order matches the visual order, improving navigation for assistive technology. [Learn more](https://developers.google.com/web/fundamentals/accessibility/how-to-review#try_it_with_a_screen_reader).",
      "score": null,
      "scoreDisplayMode": "manual"
    },
    "uses-long-cache-ttl": {
      "id": "uses-long-cache-ttl",
      "title": "Serve static assets with an efficient cache policy",
      "description": "A long cache lifetime can speed up repeat visits to your page. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/cache-policy).",
      "score": 0.39,
      "scoreDisplayMode": "numeric",
      "numericValue": 181632.26511204228,
      "displayValue": "66 resources found",
      "details": {
        "type": "table",
        "headings": [
          {
            "key": "url",
            "itemType": "url",
            "text": "URL"
          },
          {
            "key": "cacheLifetimeMs",
            "itemType": "ms",
            "text": "Cache TTL",
            "displayUnit": "duration"
          },
          {
            "key": "totalBytes",
            "itemType": "bytes",
            "text": "Size",
            "displayUnit": "kb",
            "granularity": 1
          }
        ],
        "items": [
          {
            "url": "http://sm.bdimg.com/static/wiseindex/fonts/n-icons_7bcbf44.woff",
            "cacheLifetimeMs": 0,
            "cacheHitProbability": 0,
            "totalBytes": 43404,
            "wastedBytes": 43404
          },
          {
            "url": "https://feed.baidu.com/feed/api/wise/feedlist?sid=130611_126895_127759_132656_133282_114745_130511_131888_120138_132866_133017_132910_133044_131246_122157_132440_130763_132394_132378_132325_132213_131517_132260_118878_118873_131401_118856_118829_118797_131649_131577_132840_131533_131529_133158_132604_129565_107317_132590_132781_130128_122034_131874_132708_131196_133352_133479_129651_133164_131861_132558_132540_133290_133473_131905_128891_132293_132552_133067_132543_131423_132421_133414_110085_131770_127969_133153_123289_127316_133195_127417_131548_132725_133180_133341&ssid=0&from=844b&pu=sz%2540320_1001%252Cta%2540iphone_2_6.0_24_74.0&qid=3336455358&clickDownload=0&tabId=1&sync=1&_=1561312537866&callback=jsonp3",
            "cacheLifetimeMs": 0,
            "cacheHitProbability": 0,
            "totalBytes": 31545,
            "wastedBytes": 31545
          },
          {
            "url": "https://gss0.bdstatic.com/5bd1bjqh_Q23odCf/static/itemrep/base/uilib/iconfont/iconfont_fcd5aba.woff?",
            "cacheLifetimeMs": 0,
            "cacheHitProbability": 0,
            "totalBytes": 29718,
            "wastedBytes": 29718
          },
          {
            "url": "http://static.open.baidu.com/media/ch16/png/1.png",
            "cacheLifetimeMs": 0,
            "cacheHitProbability": 0,
            "totalBytes": 13433,
            "wastedBytes": 13433
          },
          {
            "url": "https://feed.baidu.com/feed/api/tab/gettabinfo?pd=wise&sid=130611_126895_127759_132656_133282_114745_130511_131888_120138_132866_133017_132910_133044_131246_122157_132440_130763_132394_132378_132325_132213_131517_132260_118878_118873_131401_118856_118829_118797_131649_131577_132840_131533_131529_133158_132604_129565_107317_132590_132781_130128_122034_131874_132708_131196_133352_133479_129651_133164_131861_132558_132540_133290_133473_131905_128891_132293_132552_133067_132543_131423_132421_133414_110085_131770_127969_133153_123289_127316_133195_127417_131548_132725_133180_133341&ssid=0&from=844b&pu=sz%2540320_1001%252Cta%2540iphone_2_6.0_24_74.0&qid=3336455358&ms=1&cb=indJsonp&current_data=%22%22&_=1561312537758&cb=jsonp2",
            "cacheLifetimeMs": 0,
            "cacheHitProbability": 0,
            "totalBytes": 3322,
            "wastedBytes": 3322
          },
          {
            "url": "http://m.baidu.com/sugrec?callback=jsonp1&type=3&prod=his&pic=1&from=wise_web&lid=3336455358&ishome=1&net=&islogin=0&hissid=130611,126895,127759,132656,133282,114745,130511,131888,120138,132866,133017,132910,133044,131246,122157,132440,130763,132394,132378,132325,132213,131517,132260,118878,118873,131401,118856,118829,118797,131649,131577,132840,131533,131529,133158,132604,129565,107317,132590,132781,130128,122034,131874,132708,131196,133352,133479,129651,133164,131861,132558,132540,133290,133473,131905,128891,132293,132552,133067,132543,131423,132421,133414,110085,131770,127969,133153,123289,127316,133195,127417,131548,132725,133180,133341&lid=3336455358&_=1561312537749",
            "cacheLifetimeMs": 0,
            "cacheHitProbability": 0,
            "totalBytes": 1159,
            "wastedBytes": 1159
          },
          {
            "url": "http://m.baidu.com/tc?tcreq4log=1&r=1561312537711&logid=3336455358&from=844b&pu=sz%2540320_1001%252Cta%2540iphone_2_6.0_24_74.0&ct=10&cst=1&ref=index_iphone&logFrom=index",
            "cacheLifetimeMs": 0,
            "cacheHitProbability": 0,
            "totalBytes": 336,
            "wastedBytes": 336
          },
          {
            "url": "http://hpd.baidu.com/v.gif?logid=3336455358&ssid=0&sid=130611_126895_127759_132656_133282_114745_130511_131888_120138_132866_133017_132910_133044_131246_122157_132440_130763_132394_132378_132325_132213_131517_132260_118878_118873_131401_118856_118829_118797_131649_131577_132840_131533_131529_133158_132604_129565_107317_132590_132781_130128_122034_131874_132708_131196_133352_133479_129651_133164_131861_132558_132540_133290_133473_131905_128891_132293_132552_133067_132543_131423_132421_133414_110085_131770_127969_133153_123289_127316_133195_127417_131548_132725_133180_133341&from=844b&pu=sz%2540320_1001%252Cta%2540iphone_2_6.0_24_74.0&ct=1&cst=1&logFrom=mid_news&logInfo=a2_l*&logExtra=%7B%22st%22%3A%22news%22%2C%22rid%22%3A%229096754004326685511%22%2C%22isBaijiahao%22%3A1%2C%22extra%22%3A%22%7B%5C%22rec_src%5C%22%3A%5B52%5D%2C%5C%22mark%5C%22%3A0%2C%5C%22mark_rec%5C%22%3A0%2C%5C%22round_loop_ids%5C%22%3A%5B100%2C200%5D%2C%5C%22top%5C%22%3A1%2C%5C%22ua%5C%22%3A%5C%220_0__0_240%5C%22%2C%5C%22ut%5C%22%3A%5C%22%5C%22%2C%5C%22province%5C%22%3A%5C%22%5C%5Cu5317%5C%5Cu4eac%5C%22%2C%5C%22city%5C%22%3A%5C%22%5C%5Cu5317%5C%5Cu4eac%5C%22%2C%5C%22district%5C%22%3A%5C%22%5C%22%2C%5C%22channel_id%5C%22%3A1%2C%5C%22session_id%5C%22%3A%5C%2215613125378738%5C%22%2C%5C%22refresh_index%5C%22%3A%5C%22%5C%22%2C%5C%22position%5C%22%3A0%2C%5C%22log_id%5C%22%3A3337869309%2C%5C%22refresh_state%5C%22%3A1%2C%5C%22city_code%5C%22%3A%5C%22131%5C%22%2C%5C%22local_city%5C%22%3A-1%2C%5C%22user_type%5C%22%3A2%2C%5C%22refresh_type%5C%22%3A1%2C%5C%22refresh_timestamp_ms%5C%22%3A1561312537892%2C%5C%22cs%5C%22%3A%5C%222824520757%203510552953%5C%22%2C%5C%22gr_policy_flag%5C%22%3A0%2C%5C%22final_score%5C%22%3A2%2C%5C%22author_authority_score_v1%5C%22%3A5%2C%5C%22audit_final_score%5C%22%3A3%2C%5C%22predictor_q_score%5C%22%3A0%2C%5C%22vertical_types%5C%22%3A%5B0%2C26%5D%2C%5C%22templates%5C%22%3A%7B%5C%22id%5C%22%3A%5B30%2C30%5D%7D%2C%5C%22wifiinfo%5C%22%3A%5C%22%5C%22%2C%5C%22gr_original_pos%5C%22%3A0%2C%5C%22gr_step_click%5C%22%3A0.0080885523930192%2C%5C%22gr_step_related_click%5C%22%3A8.11092713775e-5%2C%5C%22dispatch_time%5C%22%3A1561312537%2C%5C%22msrcid%5C%22%3A80001%2C%5C%22mthid%5C%22%3A%5C%221573407181922932%5C%22%2C%5C%22mrtype%5C%22%3A%5C%22text%5C%22%7D%22%2C%22title%22%3A%22%E4%B9%A0%E8%BF%91%E5%B9%B3%E4%BB%A5%E4%B8%89%E2%80%9C%E6%96%B0%E2%80%9D%E7%BB%AD%E5%86%99%E4%B8%AD%E6%9C%9D%E5%8F%8B%E8%B0%8A%E6%96%B0%E7%AF%87%E7%AB%A0%22%2C%22picNum%22%3A3%2C%22stype%22%3A0%2C%22itemType%22%3A%22newsTitle%22%2C%22pos%22%3A1%7D%2C%7B%22st%22%3A%22news%22%2C%22rid%22%3A%229011511856933223377%22%2C%22isBaijiahao%22%3A1%2C%22extra%22%3A%22%7B%5C%22rec_src%5C%22%3A%5B52%5D%2C%5C%22mark%5C%22%3A0%2C%5C%22mark_rec%5C%22%3A0%2C%5C%22sec_fixed%5C%22%3A1%2C%5C%22ua%5C%22%3A%5C%220_0__0_240%5C%22%2C%5C%22ut%5C%22%3A%5C%22%5C%22%2C%5C%22province%5C%22%3A%5C%22%5C%5Cu5317%5C%5Cu4eac%5C%22%2C%5C%22city%5C%22%3A%5C%22%5C%5Cu5317%5C%5Cu4eac%5C%22%2C%5C%22district%5C%22%3A%5C%22%5C%22%2C%5C%22channel_id%5C%22%3A1%2C%5C%22round_loop_ids%5C%22%3A%5B200%5D%2C%5C%22session_id%5C%22%3A%5C%2215613125378738%5C%22%2C%5C%22refresh_index%5C%22%3A%5C%22%5C%22%2C%5C%22position%5C%22%3A1%2C%5C%22log_id%5C%22%3A3337869309%2C%5C%22refresh_state%5C%22%3A1%2C%5C%22city_code%5C%22%3A%5C%22131%5C%22%2C%5C%22local_city%5C%22%3A-1%2C%5C%22user_type%5C%22%3A2%2C%5C%22refresh_type%5C%22%3A1%2C%5C%22refresh_timestamp_ms%5C%22%3A1561312537892%2C%5C%22cs%5C%22%3A%5C%221128252802%204037058600%5C%22%2C%5C%22gr_policy_flag%5C%22%3A0%2C%5C%22final_score%5C%22%3A2%2C%5C%22author_authority_score_v1%5C%22%3A5%2C%5C%22audit_final_score%5C%22%3A-1%2C%5C%22predictor_q_score%5C%22%3A0%2C%5C%22vertical_types%5C%22%3A%5B0%2C26%5D%2C%5C%22templates%5C%22%3A%7B%5C%22id%5C%22%3A%5B30%2C30%5D%7D%2C%5C%22wifiinfo%5C%22%3A%5C%22%5C%22%2C%5C%22gr_original_pos%5C%22%3A1%2C%5C%22gr_step_click%5C%22%3A0.04365961253643%2C%5C%22gr_step_related_click%5C%22%3A0.0001122939547713%2C%5C%22dispatch_time%5C%22%3A1561312537%2C%5C%22msrcid%5C%22%3A80001%2C%5C%22mthid%5C%22%3A%5C%221573407181922932%5C%22%2C%5C%22mrtype%5C%22%3A%5C%22text%5C%22%7D%22%2C%22title%22%3A%22%E8%BF%99%E7%A7%8D%E7%B2%BE%E7%A5%9E%EF%BC%8C%E4%B9%A0%E8%BF%91%E5%B9%B3%E8%A6%81%E6%B1%82%E7%BB%A7%E6%89%BF%E5%92%8C%E5%8F%91%E6%89%AC%22%2C%22picNum%22%3A3%2C%22stype%22%3A0%2C%22itemType%22%3A%22newsTitle%22%2C%22pos%22%3A2%7D&r=l1561312538830",
            "cacheLifetimeMs": 0,
            "cacheHitProbability": 0,
            "totalBytes": 311,
            "wastedBytes": 311
          },
          {
            "url": "http://hpd.baidu.com/v.gif?tid=13&ct=1&cst=1&logFrom=index&logInfo=index&ssid=0&from=844b&pu=sz%40320_1001%2Cta%40iphone_2_6.0_24_74.0&qid=3336455358&sid=130611_126895_127759_132656_133282_114745_130511_131888_120138_132866_133017_132910_133044_131246_122157_132440_130763_132394_132378_132325_132213_131517_132260_118878_118873_131401_118856_118829_118797_131649_131577_132840_131533_131529_133158_132604_129565_107317_132590_132781_130128_122034_131874_132708_131196_133352_133479_129651_133164_131861_132558_132540_133290_133473_131905_128891_132293_132552_133067_132543_131423_132421_133414_110085_131770_127969_133153_123289_127316_133195_127417_131548_132725_133180_133341&logid=3336455358&ref=index_iphone&r=l1561312537517",
            "cacheLifetimeMs": 0,
            "cacheHitProbability": 0,
            "totalBytes": 311,
            "wastedBytes": 311
          },
          {
            "url": "http://m.baidu.com/tc?tcreq4log=1&r=1561312538409&logid=3336455358&from=844b&pu=sz%2540320_1001%252Cta%2540iphone_2_6.0_24_74.0&ct=10&cst=1&ref=index_iphone&logFrom=baidulogo&logoInfo=%7B%22origin%22%3A%221023197w%22%2C%22from%22%3A%22844b%22%2C%22channel%22%3A%221023206g%22%2C%22browserid%22%3A%2224%22%2C%22qid%22%3A%223336455358%22%2C%22timestamp%22%3A1561312538409%7D",
            "cacheLifetimeMs": 0,
            "cacheHitProbability": 0,
            "totalBytes": 242,
            "wastedBytes": 242
          },
          {
            "url": "http://m.baidu.com/tc?tcreq4log=1&r=1561312538417&logid=3336455358&from=844b&pu=sz%2540320_1001%252Cta%2540iphone_2_6.0_24_74.0&ct=10&cst=1&ref=index_iphone&logFrom=A4&logInfo=%7B%22origin%22%3A%221023262j%22%2C%22from%22%3A%22844b%22%2C%22channel%22%3A%221023262o%22%2C%22browserid%22%3A%2224%22%2C%22qid%22%3A%223336455358%22%2C%22timestamp%22%3A1561312538410%2C%22action%22%3A%22show%22%7D",
            "cacheLifetimeMs": 0,
            "cacheHitProbability": 0,
            "totalBytes": 242,
            "wastedBytes": 242
          },
          {
            "url": "http://m.baidu.com/tc?tcreq4log=1&r=1561312538420&logid=3336455358&from=844b&pu=sz%2540320_1001%252Cta%2540iphone_2_6.0_24_74.0&ct=10&cst=2&ref=index_iphone&logFrom=callbaidu&logInfo=defaul_try",
            "cacheLifetimeMs": 0,
            "cacheHitProbability": 0,
            "totalBytes": 242,
            "wastedBytes": 242
          },
          {
            "url": "http://m.baidu.com/tc?tcreq4log=1&r=1561312539218&logid=3336455358&from=844b&pu=sz%2540320_1001%252Cta%2540iphone_2_6.0_24_74.0&ct=10&cst=1&ref=index_iphone&logFrom=callbaidush&logInfo=%7B%22pos%22%3A3%2C%22browserid%22%3A%2224%22%2C%22from%22%3A%22844b%22%2C%22channel%22%3A%221023262o%22%2C%22source%22%3A%221023262j%22%2C%22show%22%3A1%7D",
            "cacheLifetimeMs": 0,
            "cacheHitProbability": 0,
            "totalBytes": 242,
            "wastedBytes": 242
          },
          {
            "url": "http://m.baidu.com/tcbox?service=bdbox&action=pblog&ctv=2&cen=uid_ua_ut&data=%7B%22appid%22%3A%221%22%2C%22dataid%22%3A%222%22%2C%22actiontype%22%3A%221%22%2C%22actionid%22%3A%222%22%2C%22actiondata%22%3A%7B%22ref%22%3A%22%22%2C%22gmv%22%3A%22%22%2C%22source%22%3A%22%22%2C%22boxVersion%22%3A0%2C%22boxPlatform%22%3A%22android%22%2C%22evtName%22%3A%22openBox%22%2C%22evtType%22%3A%221021206d%22%2C%22evtTag%22%3A%7B%22source%22%3A%221021206d%22%2C%22from%22%3A%22openbox%22%2C%22page%22%3A%22chrome%22%2C%22type%22%3A%22%22%2C%22value%22%3A%22%22%2C%22channel%22%3A%221021206r%22%2C%22extlog%22%3A%22%22%2C%22baiduId%22%3A%226FBB856F371C7962D5DE018E359165E8%3AFG%3D1%22%2C%22app_now%22%3A%22chrome_1561312538422_8535240216%22%2C%22yyb_pkg%22%3A%22com.baidu.searchbox%22%2C%22idmData%22%3A%7B%22firstOpen%22%3A%22lite%22%2C%22secondOpen%22%3A%22main%22%2C%22status%22%3A%220%22%2C%22timeout%22%3A1561398937966%7D%2C%22matrix%22%3A%22lite%22%7D%7D%2C%22cateid%22%3A14%7D&_rnd=3217788",
            "cacheLifetimeMs": 0,
            "cacheHitProbability": 0,
            "totalBytes": 0,
            "wastedBytes": 0
          },
          {
            "url": "http://m.baidu.com/se/static/img/iphone/logo.png",
            "debugData": {
              "type": "debugdata",
              "max-age": 120
            },
            "cacheLifetimeMs": 120000,
            "cacheHitProbability": 0.016666666666666666,
            "totalBytes": 14131,
            "wastedBytes": 13895.483333333332
          },
          {
            "url": "http://m.baidu.com/se/static/img/iphone/tab_loading__bg_logo.png",
            "debugData": {
              "type": "debugdata",
              "max-age": 120
            },
            "cacheLifetimeMs": 120000,
            "cacheHitProbability": 0.016666666666666666,
            "totalBytes": 8594,
            "wastedBytes": 8450.766666666666
          },
          {
            "url": "http://s.bdstatic.com/common/openjs/openBox.js?_v=2019-06-24-1",
            "debugData": {
              "type": "debugdata",
              "max-age": 3600
            },
            "cacheLifetimeMs": 3600000,
            "cacheHitProbability": 0.2,
            "totalBytes": 12541,
            "wastedBytes": 10032.800000000001
          },
          {
            "url": "https://m.baidu.com/bdlogo/squareicon_e582f4c48e93901e747536ad982e030d.png",
            "debugData": {
              "type": "debugdata",
              "max-age": 86400
            },
            "cacheLifetimeMs": 86400000,
            "cacheHitProbability": 0.6,
            "totalBytes": 548,
            "wastedBytes": 219.20000000000002
          },
          {
            "url": "https://b.bdstatic.com/searchbox/icms/searchbox/img/APP-logo-120_.png",
            "cacheLifetimeMs": 117650000,
            "cacheHitProbability": 0.6361689814814815,
            "totalBytes": 8591,
            "wastedBytes": 3125.6722800925927
          },
          {
            "url": "https://b.bdstatic.com/searchbox/icms/searchbox/img/report.png",
            "cacheLifetimeMs": 132934000,
            "cacheHitProbability": 0.6538587962962963,
            "totalBytes": 1787,
            "wastedBytes": 618.5543310185185
          },
          {
            "url": "https://sv.bdstatic.com/static/fecommon/growth/release/core.js?_sv=2019062401",
            "debugData": {
              "type": "debugdata",
              "max-age": 1209600
            },
            "cacheLifetimeMs": 1209600000,
            "cacheHitProbability": 0.9019553072625699,
            "totalBytes": 25302,
            "wastedBytes": 2480.7268156424566
          },
          {
            "url": "http://sm.bdimg.com/static/wiseindex/js/package/newsActivity_f3a3935.js",
            "debugData": {
              "type": "debugdata",
              "max-age": 2592000
            },
            "cacheLifetimeMs": 2592000000,
            "cacheHitProbability": 0.9064245810055866,
            "totalBytes": 33178,
            "wastedBytes": 3104.645251396646
          },
          {
            "url": "http://sm.bdimg.com/static/wiseindex/js/lib/atomWrapper_6fc442d.js",
            "debugData": {
              "type": "debugdata",
              "max-age": 2592000
            },
            "cacheLifetimeMs": 2592000000,
            "cacheHitProbability": 0.9064245810055866,
            "totalBytes": 24017,
            "wastedBytes": 2247.4008379888255
          },
          {
            "url": "http://sm.bdimg.com/static/wiseindex/amd_modules/ralltiir_489d038.js",
            "debugData": {
              "type": "debugdata",
              "max-age": 2592000
            },
            "cacheLifetimeMs": 2592000000,
            "cacheHitProbability": 0.9064245810055866,
            "totalBytes": 11602,
            "wastedBytes": 1085.6620111731836
          },
          {
            "url": "http://sm.bdimg.com/static/wiseindex/amd_modules/@baidu/invoke-box_36cd511.js",
            "debugData": {
              "type": "debugdata",
              "max-age": 2592000
            },
            "cacheLifetimeMs": 2592000000,
            "cacheHitProbability": 0.9064245810055866,
            "totalBytes": 8253,
            "wastedBytes": 772.2779329608934
          },
          {
            "url": "http://sm.bdimg.com/static/wiseindex/js/lib/invoke/component/btmBanner_f91323e.js",
            "debugData": {
              "type": "debugdata",
              "max-age": 2592000
            },
            "cacheLifetimeMs": 2592000000,
            "cacheHitProbability": 0.9064245810055866,
            "totalBytes": 5374,
            "wastedBytes": 502.87430167597734
          },
          {
            "url": "https://s.bdstatic.com/common/openjs/amd/eslx.js",
            "debugData": {
              "type": "debugdata",
              "max-age": 2592000
            },
            "cacheLifetimeMs": 2592000000,
            "cacheHitProbability": 0.9064245810055866,
            "totalBytes": 4123,
            "wastedBytes": 385.81145251396623
          },
          {
            "url": "http://sm.bdimg.com/static/wiseindex/js/plugin/safariicon_6bd009a.js",
            "debugData": {
              "type": "debugdata",
              "max-age": 2592000
            },
            "cacheLifetimeMs": 2592000000,
            "cacheHitProbability": 0.9064245810055866,
            "totalBytes": 3851,
            "wastedBytes": 360.3589385474858
          },
          {
            "url": "http://sm.bdimg.com/static/wiseindex/js/package/superframe_5b7bdae.js",
            "debugData": {
              "type": "debugdata",
              "max-age": 2592000
            },
            "cacheLifetimeMs": 2592000000,
            "cacheHitProbability": 0.9064245810055866,
            "totalBytes": 3354,
            "wastedBytes": 313.85195530726236
          },
          {
            "url": "https://gss0.bdstatic.com/5bd1bjqh_Q23odCf/static/itemrep/BdrainswDislike/dist/index_f95793e.js",
            "debugData": {
              "type": "debugdata",
              "max-age": 2592000
            },
            "cacheLifetimeMs": 2592000000,
            "cacheHitProbability": 0.9064245810055866,
            "totalBytes": 3082,
            "wastedBytes": 288.39944134078195
          },
          {
            "url": "http://sm.bdimg.com/static/wiseindex/js/lib/invoke/invokeSecr_13c5fec.js",
            "debugData": {
              "type": "debugdata",
              "max-age": 2592000
            },
            "cacheLifetimeMs": 2592000000,
            "cacheHitProbability": 0.9064245810055866,
            "totalBytes": 2450,
            "wastedBytes": 229.2597765363127
          },
          {
            "url": "https://gss0.bdstatic.com/5bd1bjqh_Q23odCf/static/itemrep/channelMgr/index_c70dc69.js",
            "debugData": {
              "type": "debugdata",
              "max-age": 2592000
            },
            "cacheLifetimeMs": 2592000000,
            "cacheHitProbability": 0.9064245810055866,
            "totalBytes": 2420,
            "wastedBytes": 226.4525139664803
          },
          {
            "url": "http://sm.bdimg.com/static/wiseindex/amd_modules/@searchfe/underscore_23fe246.js",
            "debugData": {
              "type": "debugdata",
              "max-age": 2592000
            },
            "cacheLifetimeMs": 2592000000,
            "cacheHitProbability": 0.9064245810055866,
            "totalBytes": 2273,
            "wastedBytes": 212.69692737430154
          },
          {
            "url": "http://sm.bdimg.com/static/wiseindex/js/lib/transfer/a4/index_499c00c.js",
            "debugData": {
              "type": "debugdata",
              "max-age": 2592000
            },
            "cacheLifetimeMs": 2592000000,
            "cacheHitProbability": 0.9064245810055866,
            "totalBytes": 1741,
            "wastedBytes": 162.91480446927363
          },
          {
            "url": "http://sm.bdimg.com/static/wiseindex/js/lib/invoke/component/fullscreen_f01324e.js",
            "debugData": {
              "type": "debugdata",
              "max-age": 2592000
            },
            "cacheLifetimeMs": 2592000000,
            "cacheHitProbability": 0.9064245810055866,
            "totalBytes": 1693,
            "wastedBytes": 158.4231843575418
          },
          {
            "url": "http://sm.bdimg.com/static/wiseindex/js/lib/invoke/fnProvider_aeb4eed.js",
            "debugData": {
              "type": "debugdata",
              "max-age": 2592000
            },
            "cacheLifetimeMs": 2592000000,
            "cacheHitProbability": 0.9064245810055866,
            "totalBytes": 1621,
            "wastedBytes": 151.68575418994405
          },
          {
            "url": "http://sm.bdimg.com/static/wiseindex/js/lib/transfer/common/Core_426be15.js",
            "debugData": {
              "type": "debugdata",
              "max-age": 2592000
            },
            "cacheLifetimeMs": 2592000000,
            "cacheHitProbability": 0.9064245810055866,
            "totalBytes": 1350,
            "wastedBytes": 126.32681564245803
          },
          {
            "url": "http://sm.bdimg.com/static/wiseindex/img/fetch_ing_8_0.png",
            "debugData": {
              "type": "debugdata",
              "max-age": 2592000
            },
            "cacheLifetimeMs": 2592000000,
            "cacheHitProbability": 0.9064245810055866,
            "totalBytes": 1299,
            "wastedBytes": 121.55446927374294
          },
          {
            "url": "http://sm.bdimg.com/static/wiseindex/amd_modules/@searchfe/user-agent_24ce52d.js",
            "debugData": {
              "type": "debugdata",
              "max-age": 2592000
            },
            "cacheLifetimeMs": 2592000000,
            "cacheHitProbability": 0.9064245810055866,
            "totalBytes": 1296,
            "wastedBytes": 121.27374301675971
          },
          {
            "url": "https://gss0.bdstatic.com/5bd1bjqh_Q23odCf/static/wiseindex/img/baiduappAdClose2_530ee6b.png",
            "debugData": {
              "type": "debugdata",
              "max-age": 2592000
            },
            "cacheLifetimeMs": 2592000000,
            "cacheHitProbability": 0.9064245810055866,
            "totalBytes": 1274,
            "wastedBytes": 119.2150837988826
          },
          {
            "url": "http://sm.bdimg.com/static/wiseindex/js/lib/transfer/common/ShieldMonitor_b61052e.js",
            "debugData": {
              "type": "debugdata",
              "max-age": 2592000
            },
            "cacheLifetimeMs": 2592000000,
            "cacheHitProbability": 0.9064245810055866,
            "totalBytes": 1243,
            "wastedBytes": 116.3142458100558
          },
          {
            "url": "https://gss0.bdstatic.com/5bd1bjqh_Q23odCf/static/newtab/img/fetch_ing_8_0.png",
            "debugData": {
              "type": "debugdata",
              "max-age": 2592000
            },
            "cacheLifetimeMs": 2592000000,
            "cacheHitProbability": 0.9064245810055866,
            "totalBytes": 1162,
            "wastedBytes": 108.73463687150831
          },
          {
            "url": "http://sm.bdimg.com/static/wiseindex/js/lib/invoke/invokeBox_12354c1.js",
            "debugData": {
              "type": "debugdata",
              "max-age": 2592000
            },
            "cacheLifetimeMs": 2592000000,
            "cacheHitProbability": 0.9064245810055866,
            "totalBytes": 1134,
            "wastedBytes": 106.11452513966474
          },
          {
            "url": "http://sm.bdimg.com/static/wiseindex/js/lib/invoke/setFullScreenIvkCK_92b17a0.js",
            "debugData": {
              "type": "debugdata",
              "max-age": 2592000
            },
            "cacheLifetimeMs": 2592000000,
            "cacheHitProbability": 0.9064245810055866,
            "totalBytes": 1087,
            "wastedBytes": 101.7164804469273
          },
          {
            "url": "http://sm.bdimg.com/static/wiseindex/js/lib/invoke/serverDataFactory_53f7feb.js",
            "debugData": {
              "type": "debugdata",
              "max-age": 2592000
            },
            "cacheLifetimeMs": 2592000000,
            "cacheHitProbability": 0.9064245810055866,
            "totalBytes": 997,
            "wastedBytes": 93.29469273743011
          },
          {
            "url": "http://sm.bdimg.com/static/wiseindex/js/lib/transfer/common/StrategyDataProcess_787f12d.js",
            "debugData": {
              "type": "debugdata",
              "max-age": 2592000
            },
            "cacheLifetimeMs": 2592000000,
            "cacheHitProbability": 0.9064245810055866,
            "totalBytes": 874,
            "wastedBytes": 81.78491620111727
          },
          {
            "url": "http://sm.bdimg.com/static/wiseindex/js/lib/transfer/common/ivkBox_cd5790c.js",
            "debugData": {
              "type": "debugdata",
              "max-age": 2592000
            },
            "cacheLifetimeMs": 2592000000,
            "cacheHitProbability": 0.9064245810055866,
            "totalBytes": 870,
            "wastedBytes": 81.41061452513962
          },
          {
            "url": "http://sm.bdimg.com/static/wiseindex/js/lib/transfer/common/DataProcess_deb477f.js",
            "debugData": {
              "type": "debugdata",
              "max-age": 2592000
            },
            "cacheLifetimeMs": 2592000000,
            "cacheHitProbability": 0.9064245810055866,
            "totalBytes": 823,
            "wastedBytes": 77.01256983240219
          },
          {
            "url": "http://sm.bdimg.com/static/wiseindex/js/lib/invoke/log_8406fdd.js",
            "debugData": {
              "type": "debugdata",
              "max-age": 2592000
            },
            "cacheLifetimeMs": 2592000000,
            "cacheHitProbability": 0.9064245810055866,
            "totalBytes": 809,
            "wastedBytes": 75.7025139664804
          },
          {
            "url": "http://sm.bdimg.com/static/wiseindex/js/lib/invoke/setIvkCK_bdaf5e4.js",
            "debugData": {
              "type": "debugdata",
              "max-age": 2592000
            },
            "cacheLifetimeMs": 2592000000,
            "cacheHitProbability": 0.9064245810055866,
            "totalBytes": 771,
            "wastedBytes": 72.1466480446927
          },
          {
            "url": "http://sm.bdimg.com/static/wiseindex/js/lib/invoke/component/background_dbdb406.js",
            "debugData": {
              "type": "debugdata",
              "max-age": 2592000
            },
            "cacheLifetimeMs": 2592000000,
            "cacheHitProbability": 0.9064245810055866,
            "totalBytes": 757,
            "wastedBytes": 70.8365921787709
          },
          {
            "url": "http://sm.bdimg.com/static/wiseindex/js/lib/transfer/logo/logo_857fccc.js",
            "debugData": {
              "type": "debugdata",
              "max-age": 2592000
            },
            "cacheLifetimeMs": 2592000000,
            "cacheHitProbability": 0.9064245810055866,
            "totalBytes": 725,
            "wastedBytes": 67.84217877094967
          },
          {
            "url": "http://sm.bdimg.com/static/wiseindex/js/lib/transfer/bubble/bubble_99b5770.js",
            "debugData": {
              "type": "debugdata",
              "max-age": 2592000
            },
            "cacheLifetimeMs": 2592000000,
            "cacheHitProbability": 0.9064245810055866,
            "totalBytes": 715,
            "wastedBytes": 66.90642458100555
          },
          {
            "url": "http://sm.bdimg.com/static/wiseindex/js/lib/invoke/getInvokeLogData_fc32168.js",
            "debugData": {
              "type": "debugdata",
              "max-age": 2592000
            },
            "cacheLifetimeMs": 2592000000,
            "cacheHitProbability": 0.9064245810055866,
            "totalBytes": 673,
            "wastedBytes": 62.976256983240184
          },
          {
            "url": "http://sm.bdimg.com/static/wiseindex/amd_modules/@searchfe/assert_3ed54c3.js",
            "debugData": {
              "type": "debugdata",
              "max-age": 2592000
            },
            "cacheLifetimeMs": 2592000000,
            "cacheHitProbability": 0.9064245810055866,
            "totalBytes": 610,
            "wastedBytes": 57.08100558659214
          },
          {
            "url": "https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=3135883046,2821928848&fm=173&app=49&f=JPEG?w=218&h=146&s=475239C44C6A3D1F44A88C2103005093",
            "debugData": {
              "type": "debugdata",
              "max-age": 2628000
            },
            "cacheLifetimeMs": 2628000000,
            "cacheHitProbability": 0.9065409683426443,
            "totalBytes": 8111,
            "wastedBytes": 758.0462057728121
          },
          {
            "url": "https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=4200824156,235375465&fm=173&app=49&f=JPEG?w=218&h=146&s=EB3220C50863011B04988CD50300E099",
            "debugData": {
              "type": "debugdata",
              "max-age": 2628000
            },
            "cacheLifetimeMs": 2628000000,
            "cacheHitProbability": 0.9065409683426443,
            "totalBytes": 8009,
            "wastedBytes": 748.5133845437617
          },
          {
            "url": "https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=1110421091,3197926947&fm=173&app=49&f=JPEG?w=218&h=146&s=CAF004C248010B5538012C370300C040",
            "debugData": {
              "type": "debugdata",
              "max-age": 2628000
            },
            "cacheLifetimeMs": 2628000000,
            "cacheHitProbability": 0.9065409683426443,
            "totalBytes": 7910,
            "wastedBytes": 739.2609404096836
          },
          {
            "url": "https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=2828194554,379760079&fm=173&app=49&f=JPEG?w=218&h=146&s=15B74F3400A9CD1F831978C0030070A0",
            "debugData": {
              "type": "debugdata",
              "max-age": 2628000
            },
            "cacheLifetimeMs": 2628000000,
            "cacheHitProbability": 0.9065409683426443,
            "totalBytes": 7504,
            "wastedBytes": 701.3165735567972
          },
          {
            "url": "https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2422364419,1664958894&fm=173&app=49&f=JPEG?w=218&h=146&s=4E961BC594E241111A95E06A03000051",
            "debugData": {
              "type": "debugdata",
              "max-age": 2628000
            },
            "cacheLifetimeMs": 2628000000,
            "cacheHitProbability": 0.9065409683426443,
            "totalBytes": 6609,
            "wastedBytes": 617.6707402234638
          },
          {
            "url": "https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2234553350,1922139704&fm=173&app=49&f=JPEG?w=218&h=146&s=7D2C34729B8F404B5CDDF1CA0000E0B1",
            "debugData": {
              "type": "debugdata",
              "max-age": 2628000
            },
            "cacheLifetimeMs": 2628000000,
            "cacheHitProbability": 0.9065409683426443,
            "totalBytes": 6317,
            "wastedBytes": 590.380702979516
          },
          {
            "url": "https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3470253096,3046562130&fm=173&app=49&f=JPEG?w=218&h=146&s=3AA87023B2E160A24ED445D60100C0A0",
            "debugData": {
              "type": "debugdata",
              "max-age": 2628000
            },
            "cacheLifetimeMs": 2628000000,
            "cacheHitProbability": 0.9065409683426443,
            "totalBytes": 5184,
            "wastedBytes": 484.49162011173195
          },
          {
            "url": "https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2517986539,284342316&fm=173&app=49&f=JPEG?w=218&h=146&s=ECA2D45BDEE1BB665AC95C3A0300E046",
            "debugData": {
              "type": "debugdata",
              "max-age": 2628000
            },
            "cacheLifetimeMs": 2628000000,
            "cacheHitProbability": 0.9065409683426443,
            "totalBytes": 5057,
            "wastedBytes": 472.6223230912478
          },
          {
            "url": "https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=2177506017,114415560&fm=173&app=49&f=JPEG?w=218&h=146&s=1098CB7D62386F36C4A7C4A00300E00A",
            "debugData": {
              "type": "debugdata",
              "max-age": 2628000
            },
            "cacheLifetimeMs": 2628000000,
            "cacheHitProbability": 0.9065409683426443,
            "totalBytes": 4958,
            "wastedBytes": 463.36987895716953
          },
          {
            "url": "https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2943575840,3299669129&fm=173&app=49&f=JPEG?w=218&h=146&s=A98AD55F38733C1B163901350300E062",
            "debugData": {
              "type": "debugdata",
              "max-age": 2628000
            },
            "cacheLifetimeMs": 2628000000,
            "cacheHitProbability": 0.9065409683426443,
            "totalBytes": 4554,
            "wastedBytes": 425.61243016759784
          },
          {
            "url": "https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=935178575,1994208433&fm=173&app=49&f=JPEG?w=218&h=146&s=DB24D14ACCED8134073595B00300D016",
            "debugData": {
              "type": "debugdata",
              "max-age": 2628000
            },
            "cacheLifetimeMs": 2628000000,
            "cacheHitProbability": 0.9065409683426443,
            "totalBytes": 3957,
            "wastedBytes": 369.8173882681565
          }
        ],
        "summary": {
          "wastedBytes": 181632.26511204228
        }
      }
    },
    "total-byte-weight": {
      "id": "total-byte-weight",
      "title": "Avoids enormous network payloads",
      "description": "Large network payloads cost users real money and are highly correlated with long load times. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/network-payloads).",
      "score": 1,
      "scoreDisplayMode": "numeric",
      "numericValue": 774308,
      "displayValue": "Total size was 756 KB",
      "details": {
        "type": "table",
        "headings": [
          {
            "key": "url",
            "itemType": "url",
            "text": "URL"
          },
          {
            "key": "totalBytes",
            "itemType": "bytes",
            "text": "Size"
          }
        ],
        "items": [
          {
            "url": "http://www.baidu.com/?action=static&ms=1&version=css_page_2@0,css_callapp@0,css_weather@0,css_icon@0,css_plus@0,css_edit@0,css_modal@0,css_widget_sug@0,css_skin@0,js_esl@0,js_zepto@0,js_event@0,js_fastclick@0,js_utils@0,js_smartymonkey@0,js_index@0,js_banner_ctrl@0,js_inputlog@0,js_bdnow@0,js_nctips@0,js_widget_textinput@0,js_widget_sug@0,js_mp@0,js_hash_lib@0,js_skinRenderIndex@0,js_skinIphone@0,js_prefetch@0,js_sug@0,js_iscroll@0,js_superframe@0,js_init@0,js_geolocation@0,js_login@0,js_tab@0,js_md5@0,js_url@0,js_lswrite@0,js_modal@0,js_thirdparty@0,js_m_monitor@0,js_superstart@0,js_baiduloc@0,js_callbaiduapp_android@0&callback=B.getCode&r=433&sid=130611_126895_127759_132656_133282_114745_130511_131888_120138_132866_133017_132910_133044_131246_122157_132440_130763_132394_132378_132325_132213_131517_132260_118878_118873_131401_118856_118829_118797_131649_131577_132840_131533_131529_133158_132604_129565_107317_132590_132781_130128_122034_131874_132708_131196_133352_133479_129651_133164_131861_132558_132540_133290_133473_131905_128891_132293_132552_133067_132543_131423_132421_133414_110085_131770_127969_133153_123289_127316_133195_127417_131548_132725_133180_133341",
            "totalBytes": 150777
          },
          {
            "url": "http://www.baidu.com/",
            "totalBytes": 90192
          },
          {
            "url": "http://sm.bdimg.com/static/wiseindex/fonts/n-icons_7bcbf44.woff",
            "totalBytes": 43404
          },
          {
            "url": "http://sm.bdimg.com/static/wiseindex/js/package/newsActivity_f3a3935.js",
            "totalBytes": 33178
          },
          {
            "url": "https://feed.baidu.com/feed/api/wise/feedlist?sid=130611_126895_127759_132656_133282_114745_130511_131888_120138_132866_133017_132910_133044_131246_122157_132440_130763_132394_132378_132325_132213_131517_132260_118878_118873_131401_118856_118829_118797_131649_131577_132840_131533_131529_133158_132604_129565_107317_132590_132781_130128_122034_131874_132708_131196_133352_133479_129651_133164_131861_132558_132540_133290_133473_131905_128891_132293_132552_133067_132543_131423_132421_133414_110085_131770_127969_133153_123289_127316_133195_127417_131548_132725_133180_133341&ssid=0&from=844b&pu=sz%2540320_1001%252Cta%2540iphone_2_6.0_24_74.0&qid=3336455358&clickDownload=0&tabId=1&sync=1&_=1561312537866&callback=jsonp3",
            "totalBytes": 31545
          },
          {
            "url": "https://m.baidu.com/static/index/plus/plus_logo_web.png",
            "totalBytes": 29912
          },
          {
            "url": "https://gss0.bdstatic.com/5bd1bjqh_Q23odCf/static/itemrep/base/uilib/iconfont/iconfont_fcd5aba.woff?",
            "totalBytes": 29718
          },
          {
            "url": "http://m.baidu.com/se/static/wiseatom/personalcenter/assets/img/spritelist_71904c7.png",
            "totalBytes": 28705
          },
          {
            "url": "https://sv.bdstatic.com/static/fecommon/growth/release/core.js?_sv=2019062401",
            "totalBytes": 25302
          },
          {
            "url": "http://m.baidu.com/se/static/wiseatom/personalcenter/assets/img/default_icon_02f13d8.png",
            "totalBytes": 24695
          }
        ]
      }
    },
    "offscreen-images": {
      "id": "offscreen-images",
      "title": "Defer offscreen images",
      "description": "Consider lazy-loading offscreen and hidden images after all critical resources have finished loading to lower time to interactive. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/offscreen-images).",
      "score": 0.57,
      "scoreDisplayMode": "numeric",
      "numericValue": 620,
      "displayValue": "Potential savings of 103 KB",
      "warnings": [],
      "details": {
        "type": "opportunity",
        "headings": [
          {
            "key": "url",
            "valueType": "thumbnail",
            "label": ""
          },
          {
            "key": "url",
            "valueType": "url",
            "label": "URL"
          },
          {
            "key": "totalBytes",
            "valueType": "bytes",
            "label": "Size"
          },
          {
            "key": "wastedBytes",
            "valueType": "bytes",
            "label": "Potential Savings"
          }
        ],
        "items": [
          {
            "url": "http://m.baidu.com/se/static/wiseatom/personalcenter/assets/img/spritelist_71904c7.png",
            "requestStartTime": 41872.490191,
            "totalBytes": 28351,
            "wastedBytes": 28351,
            "wastedPercent": 100
          },
          {
            "url": "http://m.baidu.com/se/static/img/iphone/logo.png",
            "requestStartTime": 41872.09285,
            "totalBytes": 13750,
            "wastedBytes": 13750,
            "wastedPercent": 100
          },
          {
            "url": "http://m.baidu.com/se/static/img/iphone/tab_loading__bg_logo.png",
            "requestStartTime": 41872.093338,
            "totalBytes": 8214,
            "wastedBytes": 8214,
            "wastedPercent": 100
          },
          {
            "url": "https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=3135883046,2821928848&fm=173&app=49&f=JPEG?w=218&h=146&s=475239C44C6A3D1F44A88C2103005093",
            "requestStartTime": 41872.61981,
            "totalBytes": 7789,
            "wastedBytes": 7789,
            "wastedPercent": 100
          },
          {
            "url": "https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=4200824156,235375465&fm=173&app=49&f=JPEG?w=218&h=146&s=EB3220C50863011B04988CD50300E099",
            "requestStartTime": 41872.619685,
            "totalBytes": 7687,
            "wastedBytes": 7687,
            "wastedPercent": 100
          },
          {
            "url": "https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=2828194554,379760079&fm=173&app=49&f=JPEG?w=218&h=146&s=15B74F3400A9CD1F831978C0030070A0",
            "requestStartTime": 41872.619553,
            "totalBytes": 7182,
            "wastedBytes": 7182,
            "wastedPercent": 100
          },
          {
            "url": "https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2422364419,1664958894&fm=173&app=49&f=JPEG?w=218&h=146&s=4E961BC594E241111A95E06A03000051",
            "requestStartTime": 41872.619954,
            "totalBytes": 6288,
            "wastedBytes": 6288,
            "wastedPercent": 100
          },
          {
            "url": "https://ss0.bdstatic.com/9bA1vGfa2gU2pMbfm9GUKT-w/timg?searchbox_feed&size=f218_146&quality=80&wh_rate=0&imgtype=0&ref=http%3A%2F%2Fwww.baidu.com&sec=0&di=d229e1096d214649a814ca8d3619ac10&src=http%3A%2F%2Fpic.rmb.bdstatic.com%2F4b61e54d8331cfc17f0a5e3ed82505db6171.jpeg",
            "requestStartTime": 41872.619912,
            "totalBytes": 5337,
            "wastedBytes": 5337,
            "wastedPercent": 100
          },
          {
            "url": "https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2517986539,284342316&fm=173&app=49&f=JPEG?w=218&h=146&s=ECA2D45BDEE1BB665AC95C3A0300E046",
            "requestStartTime": 41872.575662,
            "totalBytes": 4734,
            "wastedBytes": 3664,
            "wastedPercent": 77.39884541598757
          },
          {
            "url": "https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=2177506017,114415560&fm=173&app=49&f=JPEG?w=218&h=146&s=1098CB7D62386F36C4A7C4A00300E00A",
            "requestStartTime": 41872.575952,
            "totalBytes": 4636,
            "wastedBytes": 3588,
            "wastedPercent": 77.39884541598757
          },
          {
            "url": "https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2943575840,3299669129&fm=173&app=49&f=JPEG?w=218&h=146&s=A98AD55F38733C1B163901350300E062",
            "requestStartTime": 41872.57655,
            "totalBytes": 4232,
            "wastedBytes": 3276,
            "wastedPercent": 77.39884541598757
          },
          {
            "url": "http://m.baidu.com/static/index/plus/public/icon_police.png",
            "requestStartTime": 41872.069856,
            "totalBytes": 2798,
            "wastedBytes": 2798,
            "wastedPercent": 100
          },
          {
            "url": "http://m.baidu.com/se/static/wiseatom/personalcenter/assets/img/fankui_cc44349.png",
            "requestStartTime": 41872.488072,
            "totalBytes": 2684,
            "wastedBytes": 2684,
            "wastedPercent": 100
          },
          {
            "url": "http://m.baidu.com/se/static/wiseatom/personalcenter/assets/img/shoucang_5ef89d6.png",
            "requestStartTime": 41872.483584,
            "totalBytes": 2374,
            "wastedBytes": 2374,
            "wastedPercent": 100
          },
          {
            "url": "http://m.baidu.com/static/index/plus/public/tab_news.png",
            "requestStartTime": 41872.41636,
            "totalBytes": 2259,
            "wastedBytes": 2259,
            "wastedPercent": 100
          }
        ],
        "overallSavingsMs": 620,
        "overallSavingsBytes": 105241
      }
    },
    "render-blocking-resources": {
      "id": "render-blocking-resources",
      "title": "Eliminate render-blocking resources",
      "description": "Resources are blocking the first paint of your page. Consider delivering critical JS/CSS inline and deferring all non-critical JS/styles. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/blocking-resources).",
      "score": 1,
      "scoreDisplayMode": "numeric",
      "numericValue": 0,
      "displayValue": "",
      "details": {
        "type": "opportunity",
        "headings": [],
        "items": [],
        "overallSavingsMs": 0
      }
    },
    "unminified-css": {
      "id": "unminified-css",
      "title": "Minify CSS",
      "description": "Minifying CSS files can reduce network payload sizes. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/minify-css).",
      "score": 1,
      "scoreDisplayMode": "numeric",
      "numericValue": 0,
      "displayValue": "",
      "details": {
        "type": "opportunity",
        "headings": [],
        "items": [],
        "overallSavingsMs": 0,
        "overallSavingsBytes": 0
      }
    },
    "unminified-javascript": {
      "id": "unminified-javascript",
      "title": "Minify JavaScript",
      "description": "Minifying JavaScript files can reduce payload sizes and script parse time. [Learn more](https://developers.google.com/speed/docs/insights/MinifyResources).",
      "score": 0.88,
      "scoreDisplayMode": "numeric",
      "numericValue": 150,
      "displayValue": "Potential savings of 12 KB",
      "warnings": [],
      "details": {
        "type": "opportunity",
        "headings": [
          {
            "key": "url",
            "valueType": "url",
            "label": "URL"
          },
          {
            "key": "totalBytes",
            "valueType": "bytes",
            "label": "Size"
          },
          {
            "key": "wastedBytes",
            "valueType": "bytes",
            "label": "Potential Savings"
          }
        ],
        "items": [
          {
            "url": "https://sv.bdstatic.com/static/fecommon/growth/release/core.js?_sv=2019062401",
            "totalBytes": 25302,
            "wastedBytes": 12093,
            "wastedPercent": 47.794030674604734
          }
        ],
        "overallSavingsMs": 150,
        "overallSavingsBytes": 12093
      }
    },
    "unused-css-rules": {
      "id": "unused-css-rules",
      "title": "Remove unused CSS",
      "description": "Remove dead rules from stylesheets and defer the loading of CSS not used for above-the-fold content to reduce unnecessary bytes consumed by network activity. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/unused-css).",
      "score": 1,
      "scoreDisplayMode": "numeric",
      "numericValue": 0,
      "displayValue": "Potential savings of 53 KB",
      "details": {
        "type": "opportunity",
        "headings": [
          {
            "key": "url",
            "valueType": "url",
            "label": "URL"
          },
          {
            "key": "totalBytes",
            "valueType": "bytes",
            "label": "Size"
          },
          {
            "key": "wastedBytes",
            "valueType": "bytes",
            "label": "Potential Savings"
          }
        ],
        "items": [
          {
            "url": "body,h1,h2,h3,p,div,ol,ul,input,button{margin:0;padding:0} ...",
            "wastedBytes": 24871,
            "wastedPercent": 85.18791673565225,
            "totalBytes": 29195
          },
          {
            "url": ".rn-channelMgr#channel_mgrview,.rn-channelMgr#channel_offline{width:100%;height:auto; ... } ...",
            "wastedBytes": 8652,
            "wastedPercent": 100,
            "totalBytes": 8652
          },
          {
            "url": "#index-kw.animate{-webkit-animation:ChangeColor 300ms linear} ...",
            "wastedBytes": 5996,
            "wastedPercent": 95.85291766586731,
            "totalBytes": 6255
          },
          {
            "url": ".tab_news{text-align:left;background:#fff} ...",
            "wastedBytes": 5195,
            "wastedPercent": 94.91085781090165,
            "totalBytes": 5474
          },
          {
            "url": "@font-face {font-family: 'n-icons';src: url('http://sm.bdimg.com/static/wiseindex/fonts/n-icons_ec9a...",
            "wastedBytes": 3490,
            "wastedPercent": 100,
            "totalBytes": 3490
          },
          {
            "url": "#index-view #skin-view{height:auto;min-height:100%;background-color:#fff} ...",
            "wastedBytes": 3345,
            "wastedPercent": 100,
            "totalBytes": 3345
          },
          {
            "url": ".rn-afd-tuji{position:fixed;z-index:0;top:0;right:0;bottom:0;left:0;z-index:19; ... } ...",
            "wastedBytes": 2550,
            "wastedPercent": 100,
            "totalBytes": 2550
          }
        ],
        "overallSavingsMs": 0,
        "overallSavingsBytes": 54099
      }
    },
    "uses-webp-images": {
      "id": "uses-webp-images",
      "title": "Serve images in next-gen formats",
      "description": "Image formats like JPEG 2000, JPEG XR, and WebP often provide better compression than PNG or JPEG, which means faster downloads and less data consumption. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/webp).",
      "score": 0.88,
      "scoreDisplayMode": "numeric",
      "numericValue": 150,
      "displayValue": "Potential savings of 67 KB",
      "warnings": [],
      "details": {
        "type": "opportunity",
        "headings": [
          {
            "key": "url",
            "valueType": "thumbnail",
            "label": ""
          },
          {
            "key": "url",
            "valueType": "url",
            "label": "URL"
          },
          {
            "key": "totalBytes",
            "valueType": "bytes",
            "label": "Size"
          },
          {
            "key": "wastedBytes",
            "valueType": "bytes",
            "label": "Potential Savings"
          }
        ],
        "items": [
          {
            "url": "http://m.baidu.com/se/static/wiseatom/personalcenter/assets/img/default_icon_02f13d8.png",
            "fromProtocol": true,
            "isCrossOrigin": true,
            "totalBytes": 24341,
            "wastedBytes": 20453
          },
          {
            "url": "http://m.baidu.com/se/static/wiseatom/personalcenter/assets/img/spritelist_71904c7.png",
            "fromProtocol": true,
            "isCrossOrigin": true,
            "totalBytes": 28351,
            "wastedBytes": 19319
          },
          {
            "url": "https://m.baidu.com/static/index/plus/plus_logo_web.png",
            "fromProtocol": true,
            "isCrossOrigin": true,
            "totalBytes": 29628,
            "wastedBytes": 18438
          },
          {
            "url": "http://static.open.baidu.com/media/ch16/png/1.png",
            "fromProtocol": true,
            "isCrossOrigin": true,
            "totalBytes": 13174,
            "wastedBytes": 10374
          }
        ],
        "overallSavingsMs": 150,
        "overallSavingsBytes": 68584
      }
    },
    "uses-optimized-images": {
      "id": "uses-optimized-images",
      "title": "Efficiently encode images",
      "description": "Optimized images load faster and consume less cellular data. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/optimize-images).",
      "score": 1,
      "scoreDisplayMode": "numeric",
      "numericValue": 0,
      "displayValue": "",
      "warnings": [],
      "details": {
        "type": "opportunity",
        "headings": [],
        "items": [],
        "overallSavingsMs": 0,
        "overallSavingsBytes": 0
      }
    },
    "uses-text-compression": {
      "id": "uses-text-compression",
      "title": "Enable text compression",
      "description": "Text-based resources should be served with compression (gzip, deflate or brotli) to minimize total network bytes. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/text-compression).",
      "score": 1,
      "scoreDisplayMode": "numeric",
      "numericValue": 0,
      "displayValue": "Potential savings of 3 KB",
      "details": {
        "type": "opportunity",
        "headings": [
          {
            "key": "url",
            "valueType": "url",
            "label": "URL"
          },
          {
            "key": "totalBytes",
            "valueType": "bytes",
            "label": "Size"
          },
          {
            "key": "wastedBytes",
            "valueType": "bytes",
            "label": "Potential Savings"
          }
        ],
        "items": [
          {
            "url": "https://feed.baidu.com/feed/api/tab/gettabinfo?pd=wise&sid=130611_126895_127759_132656_133282_114745_130511_131888_120138_132866_133017_132910_133044_131246_122157_132440_130763_132394_132378_132325_132213_131517_132260_118878_118873_131401_118856_118829_118797_131649_131577_132840_131533_131529_133158_132604_129565_107317_132590_132781_130128_122034_131874_132708_131196_133352_133479_129651_133164_131861_132558_132540_133290_133473_131905_128891_132293_132552_133067_132543_131423_132421_133414_110085_131770_127969_133153_123289_127316_133195_127417_131548_132725_133180_133341&ssid=0&from=844b&pu=sz%2540320_1001%252Cta%2540iphone_2_6.0_24_74.0&qid=3336455358&ms=1&cb=indJsonp&current_data=%22%22&_=1561312537758&cb=jsonp2",
            "totalBytes": 3122,
            "wastedBytes": 2754
          }
        ],
        "overallSavingsMs": 0,
        "overallSavingsBytes": 2754
      }
    },
    "uses-responsive-images": {
      "id": "uses-responsive-images",
      "title": "Properly size images",
      "description": "Serve images that are appropriately-sized to save cellular data and improve load time. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/oversized-images).",
      "score": 1,
      "scoreDisplayMode": "numeric",
      "numericValue": 0,
      "displayValue": "Potential savings of 16 KB",
      "warnings": [],
      "details": {
        "type": "opportunity",
        "headings": [
          {
            "key": "url",
            "valueType": "thumbnail",
            "label": ""
          },
          {
            "key": "url",
            "valueType": "url",
            "label": "URL"
          },
          {
            "key": "totalBytes",
            "valueType": "bytes",
            "label": "Size"
          },
          {
            "key": "wastedBytes",
            "valueType": "bytes",
            "label": "Potential Savings"
          }
        ],
        "items": [
          {
            "url": "https://m.baidu.com/static/index/plus/plus_logo_web.png",
            "totalBytes": 29628,
            "wastedBytes": 6985,
            "wastedPercent": 23.57670454545454
          },
          {
            "url": "http://m.baidu.com/se/static/wiseatom/personalcenter/assets/img/default_icon_02f13d8.png",
            "totalBytes": 24341,
            "wastedBytes": 5705,
            "wastedPercent": 23.4375
          },
          {
            "url": "http://m.baidu.com/se/static/img/iphone/logo.png",
            "totalBytes": 13750,
            "wastedBytes": 3512,
            "wastedPercent": 25.540821829163075
          }
        ],
        "overallSavingsMs": 0,
        "overallSavingsBytes": 16202
      }
    },
    "efficient-animated-content": {
      "id": "efficient-animated-content",
      "title": "Use video formats for animated content",
      "description": "Large GIFs are inefficient for delivering animated content. Consider using MPEG4/WebM videos for animations and PNG/WebP for static images instead of GIF to save network bytes. [Learn more](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/replace-animated-gifs-with-video/)",
      "score": 1,
      "scoreDisplayMode": "numeric",
      "numericValue": 0,
      "displayValue": "",
      "details": {
        "type": "opportunity",
        "headings": [],
        "items": [],
        "overallSavingsMs": 0,
        "overallSavingsBytes": 0
      }
    },
    "appcache-manifest": {
      "id": "appcache-manifest",
      "title": "Avoids Application Cache",
      "description": "Application Cache is deprecated. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/appcache).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "displayValue": ""
    },
    "doctype": {
      "id": "doctype",
      "title": "Page has the HTML doctype",
      "description": "Specifying a doctype prevents the browser from switching to quirks-mode.Read more on the [MDN Web Docs page](https://developer.mozilla.org/en-US/docs/Glossary/Doctype)",
      "score": 1,
      "scoreDisplayMode": "binary"
    },
    "dom-size": {
      "id": "dom-size",
      "title": "Avoids an excessive DOM size",
      "description": "Browser engineers recommend pages contain fewer than ~1,500 DOM elements. The sweet spot is a tree depth < 32 elements and fewer than 60 children/parent element. A large DOM can increase memory usage, cause longer [style calculations](https://developers.google.com/web/fundamentals/performance/rendering/reduce-the-scope-and-complexity-of-style-calculations), and produce costly [layout reflows](https://developers.google.com/speed/articles/reflow). [Learn more](https://developers.google.com/web/tools/lighthouse/audits/dom-size).",
      "score": 1,
      "scoreDisplayMode": "numeric",
      "numericValue": 463,
      "displayValue": "463 elements",
      "details": {
        "type": "table",
        "headings": [
          {
            "key": "statistic",
            "itemType": "text",
            "text": "Statistic"
          },
          {
            "key": "element",
            "itemType": "code",
            "text": "Element"
          },
          {
            "key": "value",
            "itemType": "numeric",
            "text": "Value"
          }
        ],
        "items": [
          {
            "statistic": "Total DOM Elements",
            "element": "",
            "value": "463"
          },
          {
            "statistic": "Maximum DOM Depth",
            "element": {
              "type": "code",
              "value": "<i>"
            },
            "value": "16"
          },
          {
            "statistic": "Maximum Child Elements",
            "element": {
              "type": "code",
              "value": "<body data-version=\"css_page_2@w-11296171,css_callapp@w-cfa28287,css_weather@w-025f53e0,css_icon@w-f168dca8,css_plus@w-c87478b7,css_edit@w-615a2d8c,css_modal@w-cdab584c,css_widget_sug@w-ec5ec8df,css_skin@w-27c43eae,js_esl@w-0affba88,js_zepto@w-012b12e3,js_event@w-df2ba148,js_fastclick@,js_utils@,js_smartymonkey@w-116ab7cb,js_index@w-d9375915,js_banner_ctrl@w-b194fb40,js_inputlog@w-228a5e0e,js_bdnow@w-2981c0e4,js_nctips@w-e32af532,js_widget_textinput@w-0f7bc28e,js_widget_sug@w-619a2cde,js_mp@w-8d93d84b,js_hash_lib@w-4598392e,js_skinRenderIndex@w-a467f3f8,js_skinIphone@w-d5b497c4,js_prefetch@w-453350c7,js_sug@w-40b09655,js_iscroll@w-c02b295e,js_superframe@w-5c254153,js_init@w-997152e8,js_geolocation@w-a8094a1f,js_login@w-473c448e,js_tab@w-0fba17ec,js_md5@w-d9ce29c6,js_url@w-39727df9,js_lswrite@w-29872e55,js_modal@w-bb611e58,js_thirdparty@w-431f7933,js_m_monitor@w-8456a19f,js_superstart@w-59005e4d,js_baiduloc@w-4c4858ee,js_callbaiduapp_android@w-aa5bfbc1\" data-cur-page=\"index\" class=\" switch-iphone \">"
            },
            "value": "53"
          }
        ]
      }
    },
    "external-anchors-use-rel-noopener": {
      "id": "external-anchors-use-rel-noopener",
      "title": "Links to cross-origin destinations are unsafe",
      "description": "Add `rel=\"noopener\"` or `rel=\"noreferrer\"` to any external links to improve performance and prevent security vulnerabilities. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/noopener).",
      "score": 0,
      "scoreDisplayMode": "binary",
      "warnings": [],
      "details": {
        "type": "table",
        "headings": [
          {
            "key": "href",
            "itemType": "url",
            "text": "URL"
          },
          {
            "key": "target",
            "itemType": "text",
            "text": "Target"
          },
          {
            "key": "rel",
            "itemType": "text",
            "text": "Rel"
          }
        ],
        "items": [
          {
            "href": "http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11000002000001",
            "target": "_blank",
            "rel": "",
            "outerHTML": "<a class=\"recordcode\" href=\"http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11000002000001\" target=\"_blank\">"
          }
        ]
      }
    },
    "geolocation-on-start": {
      "id": "geolocation-on-start",
      "title": "Avoids requesting the geolocation permission on page load",
      "description": "Users are mistrustful of or confused by sites that request their location without context. Consider tying the request to user gestures instead. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/geolocation-on-load).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "details": {
        "type": "table",
        "headings": [],
        "items": []
      }
    },
    "no-document-write": {
      "id": "no-document-write",
      "title": "Avoids `document.write()`",
      "description": "For users on slow connections, external scripts dynamically injected via `document.write()` can delay page load by tens of seconds. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/document-write).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "details": {
        "type": "table",
        "headings": [],
        "items": []
      }
    },
    "no-vulnerable-libraries": {
      "id": "no-vulnerable-libraries",
      "title": "Avoids front-end JavaScript libraries with known security vulnerabilities",
      "description": "Some third-party scripts may contain known security vulnerabilities that are easily identified and exploited by attackers. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/vulnerabilities).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "displayValue": "",
      "details": {
        "type": "table",
        "headings": [],
        "items": [],
        "summary": {}
      }
    },
    "js-libraries": {
      "id": "js-libraries",
      "title": "Detected JavaScript libraries",
      "description": "All front-end JavaScript libraries detected on the page.",
      "score": 1,
      "scoreDisplayMode": "binary",
      "details": {
        "type": "table",
        "headings": [
          {
            "key": "name",
            "itemType": "text",
            "text": "Name"
          },
          {
            "key": "version",
            "itemType": "text",
            "text": "Version"
          }
        ],
        "items": [
          {
            "name": "Zepto.js",
            "npm": "zepto"
          },
          {
            "name": "Vue",
            "npm": "vue"
          }
        ],
        "summary": {}
      }
    },
    "notification-on-start": {
      "id": "notification-on-start",
      "title": "Avoids requesting the notification permission on page load",
      "description": "Users are mistrustful of or confused by sites that request to send notifications without context. Consider tying the request to user gestures instead. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/notifications-on-load).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "details": {
        "type": "table",
        "headings": [],
        "items": []
      }
    },
    "password-inputs-can-be-pasted-into": {
      "id": "password-inputs-can-be-pasted-into",
      "title": "Allows users to paste into password fields",
      "description": "Preventing password pasting undermines good security policy. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/password-pasting).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "details": {
        "type": "table",
        "headings": [],
        "items": []
      }
    },
    "uses-http2": {
      "id": "uses-http2",
      "title": "Does not use HTTP/2 for all of its resources",
      "description": "HTTP/2 offers many benefits over HTTP/1.1, including binary headers, multiplexing, and server push. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/http2).",
      "score": 0,
      "scoreDisplayMode": "binary",
      "displayValue": "2 requests not served via HTTP/2",
      "details": {
        "type": "table",
        "headings": [
          {
            "key": "url",
            "itemType": "url",
            "text": "URL"
          },
          {
            "key": "protocol",
            "itemType": "text",
            "text": "Protocol"
          }
        ],
        "items": [
          {
            "protocol": "http/1.1",
            "url": "http://www.baidu.com/"
          },
          {
            "protocol": "http/1.1",
            "url": "http://www.baidu.com/?action=static&ms=1&version=css_page_2@0,css_callapp@0,css_weather@0,css_icon@0,css_plus@0,css_edit@0,css_modal@0,css_widget_sug@0,css_skin@0,js_esl@0,js_zepto@0,js_event@0,js_fastclick@0,js_utils@0,js_smartymonkey@0,js_index@0,js_banner_ctrl@0,js_inputlog@0,js_bdnow@0,js_nctips@0,js_widget_textinput@0,js_widget_sug@0,js_mp@0,js_hash_lib@0,js_skinRenderIndex@0,js_skinIphone@0,js_prefetch@0,js_sug@0,js_iscroll@0,js_superframe@0,js_init@0,js_geolocation@0,js_login@0,js_tab@0,js_md5@0,js_url@0,js_lswrite@0,js_modal@0,js_thirdparty@0,js_m_monitor@0,js_superstart@0,js_baiduloc@0,js_callbaiduapp_android@0&callback=B.getCode&r=433&sid=130611_126895_127759_132656_133282_114745_130511_131888_120138_132866_133017_132910_133044_131246_122157_132440_130763_132394_132378_132325_132213_131517_132260_118878_118873_131401_118856_118829_118797_131649_131577_132840_131533_131529_133158_132604_129565_107317_132590_132781_130128_122034_131874_132708_131196_133352_133479_129651_133164_131861_132558_132540_133290_133473_131905_128891_132293_132552_133067_132543_131423_132421_133414_110085_131770_127969_133153_123289_127316_133195_127417_131548_132725_133180_133341"
          }
        ]
      }
    },
    "uses-passive-event-listeners": {
      "id": "uses-passive-event-listeners",
      "title": "Uses passive listeners to improve scrolling performance",
      "description": "Consider marking your touch and wheel event listeners as `passive` to improve your page's scroll performance. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/passive-event-listeners).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "details": {
        "type": "table",
        "headings": [],
        "items": []
      }
    },
    "meta-description": {
      "id": "meta-description",
      "title": "Document does not have a meta description",
      "description": "Meta descriptions may be included in search results to concisely summarize page content. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/description).",
      "score": 0,
      "scoreDisplayMode": "binary"
    },
    "http-status-code": {
      "id": "http-status-code",
      "title": "Page has successful HTTP status code",
      "description": "Pages with unsuccessful HTTP status codes may not be indexed properly. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/successful-http-code).",
      "score": 1,
      "scoreDisplayMode": "binary"
    },
    "font-size": {
      "id": "font-size",
      "title": "Document uses legible font sizes",
      "description": "Font sizes less than 12px are too small to be legible and require mobile visitors to “pinch to zoom” in order to read. Strive to have >60% of page text ≥12px. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/font-sizes).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "displayValue": "100% legible text",
      "details": {
        "type": "table",
        "headings": [
          {
            "key": "source",
            "itemType": "url",
            "text": "Source"
          },
          {
            "key": "selector",
            "itemType": "code",
            "text": "Selector"
          },
          {
            "key": "coverage",
            "itemType": "text",
            "text": "% of Page Text"
          },
          {
            "key": "fontSize",
            "itemType": "text",
            "text": "Font Size"
          }
        ],
        "items": [
          {
            "source": "Legible text",
            "selector": "",
            "coverage": "100.00%",
            "fontSize": "≥ 12px"
          }
        ]
      }
    },
    "link-text": {
      "id": "link-text",
      "title": "Links have descriptive text",
      "description": "Descriptive link text helps search engines understand your content. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/descriptive-link-text).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "details": {
        "type": "table",
        "headings": [],
        "items": [],
        "summary": {}
      }
    },
    "is-crawlable": {
      "id": "is-crawlable",
      "title": "Page is blocked from indexing",
      "description": "Search engines are unable to include your pages in search results if they don't have permission to crawl them. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/indexing).",
      "score": 0,
      "scoreDisplayMode": "binary",
      "details": {
        "type": "table",
        "headings": [
          {
            "key": "source",
            "itemType": "code",
            "text": "Blocking Directive Source"
          }
        ],
        "items": [
          {
            "source": {
              "type": "url",
              "value": "http://www.baidu.com/robots.txt"
            }
          }
        ]
      }
    },
    "robots-txt": {
      "id": "robots-txt",
      "title": "robots.txt is valid",
      "description": "If your robots.txt file is malformed, crawlers may not be able to understand how you want your website to be crawled or indexed.",
      "score": 1,
      "scoreDisplayMode": "binary",
      "details": {
        "type": "table",
        "headings": [],
        "items": [],
        "summary": {}
      }
    },
    "tap-targets": {
      "id": "tap-targets",
      "title": "Tap targets are not sized appropriately",
      "description": "Interactive elements like buttons and links should be large enough (48x48px), and have enough space around them, to be easy enough to tap without overlapping onto other elements. [Learn more](https://developers.google.com/web/fundamentals/accessibility/accessible-styles#multi-device_responsive_design).",
      "score": 0.84,
      "scoreDisplayMode": "binary",
      "displayValue": "94% appropriately sized tap targets",
      "details": {
        "type": "table",
        "headings": [
          {
            "key": "tapTarget",
            "itemType": "node",
            "text": "Tap Target"
          },
          {
            "key": "size",
            "itemType": "text",
            "text": "Size"
          },
          {
            "key": "overlappingTarget",
            "itemType": "node",
            "text": "Overlapping Target"
          }
        ],
        "items": [
          {
            "tapTarget": {
              "type": "node",
              "snippet": "<a id=\"index-copyright\" href=\"https://m.baidu.com/sf?pd=sd_privacy_terms&amp;ms=1&amp;ms=1&amp;word=%E5%85%8D%E8%B4%A3%E5%A3%B0%E6%98%8E&amp;title=%E5%85%8D%E8%B4%A3%E5%A3%B0%E6%98%8E&amp;openapi=1&amp;from_sf=1&amp;resource_id=37483&amp;dsp=iphone&amp;tn=wisexmlnew&amp;ext=%7B%22pid%22%3A%22mianze…",
              "path": "1,HTML,2,BODY,3,DIV,0,DIV,8,DIV,0,DIV,1,A",
              "selector": "div#index-card > div#bottom > div#foot > a#index-copyright",
              "nodeLabel": "使用百度前必读 Baidu 京ICP证030173号"
            },
            "overlappingTarget": {
              "type": "node",
              "snippet": "<a href=\"http://ufosdk.baidu.com/?m=Client&amp;a=commonsubmit&amp;appid=517&amp;activityId=1&amp;needEmail=false&amp;bw=6FBB856F371C7962D5DE018E359165E8&amp;kw=&amp;tn=iphone&amp;pageid=6\" data-stats=\"10|2|foot|a1_b2\"><i class=\"icon-feedback\"></i>用户反馈</a>",
              "path": "1,HTML,2,BODY,3,DIV,0,DIV,8,DIV,0,DIV,0,DIV,0,A",
              "selector": "div#bottom > div#foot > div > a",
              "nodeLabel": "用户反馈"
            },
            "tapTargetScore": 1248,
            "overlappingTargetScore": 528,
            "overlapScoreRatio": 0.4230769230769231,
            "size": "356x26",
            "width": 356,
            "height": 26
          },
          {
            "tapTarget": {
              "type": "node",
              "snippet": "<a id=\"index-copyright\" href=\"https://m.baidu.com/sf?pd=sd_privacy_terms&amp;ms=1&amp;ms=1&amp;word=%E5%85%8D%E8%B4%A3%E5%A3%B0%E6%98%8E&amp;title=%E5%85%8D%E8%B4%A3%E5%A3%B0%E6%98%8E&amp;openapi=1&amp;from_sf=1&amp;resource_id=37483&amp;dsp=iphone&amp;tn=wisexmlnew&amp;ext=%7B%22pid%22%3A%22mianze…",
              "path": "1,HTML,2,BODY,3,DIV,0,DIV,8,DIV,0,DIV,1,A",
              "selector": "div#index-card > div#bottom > div#foot > a#index-copyright",
              "nodeLabel": "使用百度前必读 Baidu 京ICP证030173号"
            },
            "overlappingTarget": {
              "type": "node",
              "snippet": "<a class=\"recordcode\" href=\"http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11000002000001\" target=\"_blank\"><i></i>京公网安备11000002000001号</a>",
              "path": "1,HTML,2,BODY,3,DIV,0,DIV,8,DIV,0,DIV,2,A",
              "selector": "div#index-card > div#bottom > div#foot > a.recordcode",
              "nodeLabel": "京公网安备11000002000001号"
            },
            "tapTargetScore": 1248,
            "overlappingTargetScore": 528,
            "overlapScoreRatio": 0.4230769230769231,
            "size": "356x26",
            "width": 356,
            "height": 26
          }
        ]
      }
    },
    "hreflang": {
      "id": "hreflang",
      "title": "Document has a valid `hreflang`",
      "description": "hreflang links tell search engines what version of a page they should list in search results for a given language or region. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/hreflang).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "details": {
        "type": "table",
        "headings": [],
        "items": []
      }
    },
    "plugins": {
      "id": "plugins",
      "title": "Document avoids plugins",
      "description": "Search engines can't index plugin content, and many devices restrict plugins or don't support them. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/plugins).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "details": {
        "type": "table",
        "headings": [],
        "items": []
      }
    },
    "canonical": {
      "id": "canonical",
      "title": "Document has a valid `rel=canonical`",
      "description": "Canonical links suggest which URL to show in search results. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/canonical).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "structured-data": {
      "id": "structured-data",
      "title": "Structured data is valid",
      "description": "Run the [Structured Data Testing Tool](https://search.google.com/structured-data/testing-tool/) and the [Structured Data Linter](http://linter.structured-data.org/) to validate structured data. [Learn more](https://developers.google.com/search/docs/guides/mark-up-content).",
      "score": null,
      "scoreDisplayMode": "manual"
    }
  },
  "configSettings": {
    "output": [
      "json"
    ],
    "maxWaitForFcp": 15000,
    "maxWaitForLoad": 45000,
    "throttlingMethod": "simulate",
    "throttling": {
      "rttMs": 150,
      "throughputKbps": 1638.4,
      "requestLatencyMs": 562.5,
      "downloadThroughputKbps": 1474.5600000000002,
      "uploadThroughputKbps": 675,
      "cpuSlowdownMultiplier": 4
    },
    "auditMode": false,
    "gatherMode": false,
    "disableStorageReset": false,
    "emulatedFormFactor": "mobile",
    "channel": "cli",
    "budgets": null,
    "locale": "en-US",
    "blockedUrlPatterns": null,
    "additionalTraceCategories": null,
    "extraHeaders": null,
    "precomputedLanternData": null,
    "onlyAudits": null,
    "onlyCategories": null,
    "skipAudits": null
  },
  "categories": {
    "performance": {
      "title": "Performance",
      "auditRefs": [
        {
          "id": "first-contentful-paint",
          "weight": 3,
          "group": "metrics"
        },
        {
          "id": "first-meaningful-paint",
          "weight": 1,
          "group": "metrics"
        },
        {
          "id": "speed-index",
          "weight": 4,
          "group": "metrics"
        },
        {
          "id": "interactive",
          "weight": 5,
          "group": "metrics"
        },
        {
          "id": "first-cpu-idle",
          "weight": 2,
          "group": "metrics"
        },
        {
          "id": "max-potential-fid",
          "weight": 0,
          "group": "metrics"
        },
        {
          "id": "estimated-input-latency",
          "weight": 0
        },
        {
          "id": "render-blocking-resources",
          "weight": 0,
          "group": "load-opportunities"
        },
        {
          "id": "uses-responsive-images",
          "weight": 0,
          "group": "load-opportunities"
        },
        {
          "id": "offscreen-images",
          "weight": 0,
          "group": "load-opportunities"
        },
        {
          "id": "unminified-css",
          "weight": 0,
          "group": "load-opportunities"
        },
        {
          "id": "unminified-javascript",
          "weight": 0,
          "group": "load-opportunities"
        },
        {
          "id": "unused-css-rules",
          "weight": 0,
          "group": "load-opportunities"
        },
        {
          "id": "uses-optimized-images",
          "weight": 0,
          "group": "load-opportunities"
        },
        {
          "id": "uses-webp-images",
          "weight": 0,
          "group": "load-opportunities"
        },
        {
          "id": "uses-text-compression",
          "weight": 0,
          "group": "load-opportunities"
        },
        {
          "id": "uses-rel-preconnect",
          "weight": 0,
          "group": "load-opportunities"
        },
        {
          "id": "time-to-first-byte",
          "weight": 0,
          "group": "load-opportunities"
        },
        {
          "id": "redirects",
          "weight": 0,
          "group": "load-opportunities"
        },
        {
          "id": "uses-rel-preload",
          "weight": 0,
          "group": "load-opportunities"
        },
        {
          "id": "efficient-animated-content",
          "weight": 0,
          "group": "load-opportunities"
        },
        {
          "id": "total-byte-weight",
          "weight": 0,
          "group": "diagnostics"
        },
        {
          "id": "uses-long-cache-ttl",
          "weight": 0,
          "group": "diagnostics"
        },
        {
          "id": "dom-size",
          "weight": 0,
          "group": "diagnostics"
        },
        {
          "id": "critical-request-chains",
          "weight": 0,
          "group": "diagnostics"
        },
        {
          "id": "user-timings",
          "weight": 0,
          "group": "diagnostics"
        },
        {
          "id": "bootup-time",
          "weight": 0,
          "group": "diagnostics"
        },
        {
          "id": "mainthread-work-breakdown",
          "weight": 0,
          "group": "diagnostics"
        },
        {
          "id": "font-display",
          "weight": 0,
          "group": "diagnostics"
        },
        {
          "id": "performance-budget",
          "weight": 0,
          "group": "budgets"
        },
        {
          "id": "resource-summary",
          "weight": 0,
          "group": "diagnostics"
        },
        {
          "id": "network-requests",
          "weight": 0
        },
        {
          "id": "network-rtt",
          "weight": 0
        },
        {
          "id": "network-server-latency",
          "weight": 0
        },
        {
          "id": "main-thread-tasks",
          "weight": 0
        },
        {
          "id": "diagnostics",
          "weight": 0
        },
        {
          "id": "metrics",
          "weight": 0
        },
        {
          "id": "screenshot-thumbnails",
          "weight": 0
        },
        {
          "id": "final-screenshot",
          "weight": 0
        }
      ],
      "id": "performance",
      "score": 0.71
    },
    "accessibility": {
      "title": "Accessibility",
      "description": "These checks highlight opportunities to [improve the accessibility of your web app](https://developers.google.com/web/fundamentals/accessibility). Only a subset of accessibility issues can be automatically detected so manual testing is also encouraged.",
      "manualDescription": "These items address areas which an automated testing tool cannot cover. Learn more in our guide on [conducting an accessibility review](https://developers.google.com/web/fundamentals/accessibility/how-to-review).",
      "auditRefs": [
        {
          "id": "accesskeys",
          "weight": 0,
          "group": "a11y-navigation"
        },
        {
          "id": "aria-allowed-attr",
          "weight": 0,
          "group": "a11y-aria"
        },
        {
          "id": "aria-required-attr",
          "weight": 0,
          "group": "a11y-aria"
        },
        {
          "id": "aria-required-children",
          "weight": 0,
          "group": "a11y-aria"
        },
        {
          "id": "aria-required-parent",
          "weight": 0,
          "group": "a11y-aria"
        },
        {
          "id": "aria-roles",
          "weight": 0,
          "group": "a11y-aria"
        },
        {
          "id": "aria-valid-attr-value",
          "weight": 0,
          "group": "a11y-aria"
        },
        {
          "id": "aria-valid-attr",
          "weight": 0,
          "group": "a11y-aria"
        },
        {
          "id": "audio-caption",
          "weight": 0,
          "group": "a11y-audio-video"
        },
        {
          "id": "button-name",
          "weight": 10,
          "group": "a11y-names-labels"
        },
        {
          "id": "bypass",
          "weight": 3,
          "group": "a11y-navigation"
        },
        {
          "id": "color-contrast",
          "weight": 3,
          "group": "a11y-color-contrast"
        },
        {
          "id": "definition-list",
          "weight": 0,
          "group": "a11y-tables-lists"
        },
        {
          "id": "dlitem",
          "weight": 0,
          "group": "a11y-tables-lists"
        },
        {
          "id": "document-title",
          "weight": 3,
          "group": "a11y-names-labels"
        },
        {
          "id": "duplicate-id",
          "weight": 1,
          "group": "a11y-best-practices"
        },
        {
          "id": "frame-title",
          "weight": 0,
          "group": "a11y-names-labels"
        },
        {
          "id": "html-has-lang",
          "weight": 3,
          "group": "a11y-language"
        },
        {
          "id": "html-lang-valid",
          "weight": 0,
          "group": "a11y-language"
        },
        {
          "id": "image-alt",
          "weight": 10,
          "group": "a11y-names-labels"
        },
        {
          "id": "input-image-alt",
          "weight": 0,
          "group": "a11y-names-labels"
        },
        {
          "id": "label",
          "weight": 10,
          "group": "a11y-names-labels"
        },
        {
          "id": "layout-table",
          "weight": 0,
          "group": "a11y-tables-lists"
        },
        {
          "id": "link-name",
          "weight": 3,
          "group": "a11y-names-labels"
        },
        {
          "id": "list",
          "weight": 3,
          "group": "a11y-tables-lists"
        },
        {
          "id": "listitem",
          "weight": 3,
          "group": "a11y-tables-lists"
        },
        {
          "id": "meta-refresh",
          "weight": 0,
          "group": "a11y-best-practices"
        },
        {
          "id": "meta-viewport",
          "weight": 10,
          "group": "a11y-best-practices"
        },
        {
          "id": "object-alt",
          "weight": 0,
          "group": "a11y-names-labels"
        },
        {
          "id": "tabindex",
          "weight": 0,
          "group": "a11y-navigation"
        },
        {
          "id": "td-headers-attr",
          "weight": 0,
          "group": "a11y-tables-lists"
        },
        {
          "id": "th-has-data-cells",
          "weight": 0,
          "group": "a11y-tables-lists"
        },
        {
          "id": "valid-lang",
          "weight": 0,
          "group": "a11y-language"
        },
        {
          "id": "video-caption",
          "weight": 0,
          "group": "a11y-audio-video"
        },
        {
          "id": "video-description",
          "weight": 0,
          "group": "a11y-audio-video"
        },
        {
          "id": "logical-tab-order",
          "weight": 0
        },
        {
          "id": "focusable-controls",
          "weight": 0
        },
        {
          "id": "interactive-element-affordance",
          "weight": 0
        },
        {
          "id": "managed-focus",
          "weight": 0
        },
        {
          "id": "focus-traps",
          "weight": 0
        },
        {
          "id": "custom-controls-labels",
          "weight": 0
        },
        {
          "id": "custom-controls-roles",
          "weight": 0
        },
        {
          "id": "visual-order-follows-dom",
          "weight": 0
        },
        {
          "id": "offscreen-content-hidden",
          "weight": 0
        },
        {
          "id": "heading-levels",
          "weight": 0
        },
        {
          "id": "use-landmarks",
          "weight": 0
        }
      ],
      "id": "accessibility",
      "score": 0.32
    },
    "best-practices": {
      "title": "Best Practices",
      "auditRefs": [
        {
          "id": "appcache-manifest",
          "weight": 1
        },
        {
          "id": "is-on-https",
          "weight": 1
        },
        {
          "id": "uses-http2",
          "weight": 1
        },
        {
          "id": "uses-passive-event-listeners",
          "weight": 1
        },
        {
          "id": "no-document-write",
          "weight": 1
        },
        {
          "id": "external-anchors-use-rel-noopener",
          "weight": 1
        },
        {
          "id": "geolocation-on-start",
          "weight": 1
        },
        {
          "id": "doctype",
          "weight": 1
        },
        {
          "id": "no-vulnerable-libraries",
          "weight": 1
        },
        {
          "id": "js-libraries",
          "weight": 0
        },
        {
          "id": "notification-on-start",
          "weight": 1
        },
        {
          "id": "deprecations",
          "weight": 1
        },
        {
          "id": "password-inputs-can-be-pasted-into",
          "weight": 1
        },
        {
          "id": "errors-in-console",
          "weight": 1
        },
        {
          "id": "image-aspect-ratio",
          "weight": 1
        }
      ],
      "id": "best-practices",
      "score": 0.64
    },
    "seo": {
      "title": "SEO",
      "description": "These checks ensure that your page is optimized for search engine results ranking. There are additional factors Lighthouse does not check that may affect your search ranking. [Learn more](https://support.google.com/webmasters/answer/35769).",
      "manualDescription": "Run these additional validators on your site to check additional SEO best practices.",
      "auditRefs": [
        {
          "id": "viewport",
          "weight": 1,
          "group": "seo-mobile"
        },
        {
          "id": "document-title",
          "weight": 1,
          "group": "seo-content"
        },
        {
          "id": "meta-description",
          "weight": 1,
          "group": "seo-content"
        },
        {
          "id": "http-status-code",
          "weight": 1,
          "group": "seo-crawl"
        },
        {
          "id": "link-text",
          "weight": 1,
          "group": "seo-content"
        },
        {
          "id": "is-crawlable",
          "weight": 1,
          "group": "seo-crawl"
        },
        {
          "id": "robots-txt",
          "weight": 1,
          "group": "seo-crawl"
        },
        {
          "id": "image-alt",
          "weight": 1,
          "group": "seo-content"
        },
        {
          "id": "hreflang",
          "weight": 1,
          "group": "seo-content"
        },
        {
          "id": "canonical",
          "weight": 0,
          "group": "seo-content"
        },
        {
          "id": "font-size",
          "weight": 1,
          "group": "seo-mobile"
        },
        {
          "id": "plugins",
          "weight": 1,
          "group": "seo-content"
        },
        {
          "id": "tap-targets",
          "weight": 1,
          "group": "seo-mobile"
        },
        {
          "id": "structured-data",
          "weight": 0
        }
      ],
      "id": "seo",
      "score": 0.74
    },
    "pwa": {
      "title": "Progressive Web App",
      "description": "These checks validate the aspects of a Progressive Web App. [Learn more](https://developers.google.com/web/progressive-web-apps/checklist).",
      "manualDescription": "These checks are required by the baseline [PWA Checklist](https://developers.google.com/web/progressive-web-apps/checklist) but are not automatically checked by Lighthouse. They do not affect your score but it's important that you verify them manually.",
      "auditRefs": [
        {
          "id": "load-fast-enough-for-pwa",
          "weight": 7,
          "group": "pwa-fast-reliable"
        },
        {
          "id": "works-offline",
          "weight": 5,
          "group": "pwa-fast-reliable"
        },
        {
          "id": "offline-start-url",
          "weight": 1,
          "group": "pwa-fast-reliable"
        },
        {
          "id": "is-on-https",
          "weight": 2,
          "group": "pwa-installable"
        },
        {
          "id": "service-worker",
          "weight": 1,
          "group": "pwa-installable"
        },
        {
          "id": "installable-manifest",
          "weight": 2,
          "group": "pwa-installable"
        },
        {
          "id": "redirects-http",
          "weight": 2,
          "group": "pwa-optimized"
        },
        {
          "id": "splash-screen",
          "weight": 1,
          "group": "pwa-optimized"
        },
        {
          "id": "themed-omnibox",
          "weight": 1,
          "group": "pwa-optimized"
        },
        {
          "id": "content-width",
          "weight": 1,
          "group": "pwa-optimized"
        },
        {
          "id": "viewport",
          "weight": 2,
          "group": "pwa-optimized"
        },
        {
          "id": "without-javascript",
          "weight": 1,
          "group": "pwa-optimized"
        },
        {
          "id": "apple-touch-icon",
          "weight": 1,
          "group": "pwa-optimized"
        },
        {
          "id": "pwa-cross-browser",
          "weight": 0
        },
        {
          "id": "pwa-page-transitions",
          "weight": 0
        },
        {
          "id": "pwa-each-page-has-url",
          "weight": 0
        }
      ],
      "id": "pwa",
      "score": 0.44
    }
  },
  "categoryGroups": {
    "metrics": {
      "title": "Metrics"
    },
    "load-opportunities": {
      "title": "Opportunities",
      "description": "These optimizations can speed up your page load."
    },
    "budgets": {
      "title": "Budgets",
      "description": "Performance budgets set standards for the performance of your site."
    },
    "diagnostics": {
      "title": "Diagnostics",
      "description": "More information about the performance of your application."
    },
    "pwa-fast-reliable": {
      "title": "Fast and reliable"
    },
    "pwa-installable": {
      "title": "Installable"
    },
    "pwa-optimized": {
      "title": "PWA Optimized"
    },
    "a11y-best-practices": {
      "title": "Best practices",
      "description": "These items highlight common accessibility best practices."
    },
    "a11y-color-contrast": {
      "title": "Contrast",
      "description": "These are opportunities to improve the legibility of your content."
    },
    "a11y-names-labels": {
      "title": "Names and labels",
      "description": "These are opportunities to improve the semantics of the controls in your application. This may enhance the experience for users of assistive technology, like a screen reader."
    },
    "a11y-navigation": {
      "title": "Navigation",
      "description": "These are opportunities to improve keyboard navigation in your application."
    },
    "a11y-aria": {
      "title": "ARIA",
      "description": "These are opportunities to improve the usage of ARIA in your application which may enhance the experience for users of assistive technology, like a screen reader."
    },
    "a11y-language": {
      "title": "Internationalization and localization",
      "description": "These are opportunities to improve the interpretation of your content by users in different locales."
    },
    "a11y-audio-video": {
      "title": "Audio and video",
      "description": "These are opportunities to provide alternative content for audio and video. This may improve the experience for users with hearing or vision impairments."
    },
    "a11y-tables-lists": {
      "title": "Tables and lists",
      "description": "These are opportunities to to improve the experience of reading tabular or list data using assistive technology, like a screen reader."
    },
    "seo-mobile": {
      "title": "Mobile Friendly",
      "description": "Make sure your pages are mobile friendly so users don’t have to pinch or zoom in order to read the content pages. [Learn more](https://developers.google.com/search/mobile-sites/)."
    },
    "seo-content": {
      "title": "Content Best Practices",
      "description": "Format your HTML in a way that enables crawlers to better understand your app’s content."
    },
    "seo-crawl": {
      "title": "Crawling and Indexing",
      "description": "To appear in search results, crawlers need access to your app."
    }
  },
  "timing": {
    "entries": [
      {
        "startTime": 1256.53,
        "name": "lh:init:config",
        "duration": 205.62,
        "entryType": "measure"
      },
      {
        "startTime": 1259.04,
        "name": "lh:config:requireGatherers",
        "duration": 23.72,
        "entryType": "measure"
      },
      {
        "startTime": 1282.87,
        "name": "lh:config:requireAudits",
        "duration": 170,
        "entryType": "measure"
      },
      {
        "startTime": 1462.72,
        "name": "lh:runner:run",
        "duration": 8196.21,
        "entryType": "measure"
      },
      {
        "startTime": 1463.71,
        "name": "lh:init:connect",
        "duration": 248.82,
        "entryType": "measure"
      },
      {
        "startTime": 1712.63,
        "name": "lh:gather:loadBlank",
        "duration": 316.86,
        "entryType": "measure"
      },
      {
        "startTime": 2029.73,
        "name": "lh:gather:getVersion",
        "duration": 1.44,
        "entryType": "measure"
      },
      {
        "startTime": 2031.47,
        "name": "lh:gather:getBenchmarkIndex",
        "duration": 506.72,
        "entryType": "measure"
      },
      {
        "startTime": 2538.4,
        "name": "lh:gather:setupDriver",
        "duration": 20.44,
        "entryType": "measure"
      },
      {
        "startTime": 2559.02,
        "name": "lh:gather:loadBlank",
        "duration": 13.1,
        "entryType": "measure"
      },
      {
        "startTime": 2572.29,
        "name": "lh:gather:setupPassNetwork",
        "duration": 1.51,
        "entryType": "measure"
      },
      {
        "startTime": 2573.9,
        "name": "lh:driver:cleanBrowserCaches",
        "duration": 23.97,
        "entryType": "measure"
      },
      {
        "startTime": 2598.08,
        "name": "lh:gather:beforePass",
        "duration": 3.43,
        "entryType": "measure"
      },
      {
        "startTime": 2598.17,
        "name": "lh:gather:beforePass:CSSUsage",
        "duration": 0.14,
        "entryType": "measure"
      },
      {
        "startTime": 2598.33,
        "name": "lh:gather:beforePass:ViewportDimensions",
        "duration": 0.02,
        "entryType": "measure"
      },
      {
        "startTime": 2598.36,
        "name": "lh:gather:beforePass:RuntimeExceptions",
        "duration": 0.05,
        "entryType": "measure"
      },
      {
        "startTime": 2598.43,
        "name": "lh:gather:beforePass:ConsoleMessages",
        "duration": 2.02,
        "entryType": "measure"
      },
      {
        "startTime": 2600.47,
        "name": "lh:gather:beforePass:AnchorElements",
        "duration": 0.02,
        "entryType": "measure"
      },
      {
        "startTime": 2600.51,
        "name": "lh:gather:beforePass:ImageElements",
        "duration": 0.02,
        "entryType": "measure"
      },
      {
        "startTime": 2600.53,
        "name": "lh:gather:beforePass:LinkElements",
        "duration": 0.01,
        "entryType": "measure"
      },
      {
        "startTime": 2600.55,
        "name": "lh:gather:beforePass:MetaElements",
        "duration": 0.01,
        "entryType": "measure"
      },
      {
        "startTime": 2600.56,
        "name": "lh:gather:beforePass:ScriptElements",
        "duration": 0.01,
        "entryType": "measure"
      },
      {
        "startTime": 2600.58,
        "name": "lh:gather:beforePass:AppCacheManifest",
        "duration": 0.01,
        "entryType": "measure"
      },
      {
        "startTime": 2600.59,
        "name": "lh:gather:beforePass:Doctype",
        "duration": 0.01,
        "entryType": "measure"
      },
      {
        "startTime": 2600.6,
        "name": "lh:gather:beforePass:DOMStats",
        "duration": 0.01,
        "entryType": "measure"
      },
      {
        "startTime": 2600.61,
        "name": "lh:gather:beforePass:OptimizedImages",
        "duration": 0.01,
        "entryType": "measure"
      },
      {
        "startTime": 2600.62,
        "name": "lh:gather:beforePass:PasswordInputsWithPreventedPaste",
        "duration": 0.01,
        "entryType": "measure"
      },
      {
        "startTime": 2600.63,
        "name": "lh:gather:beforePass:ResponseCompression",
        "duration": 0.01,
        "entryType": "measure"
      },
      {
        "startTime": 2600.64,
        "name": "lh:gather:beforePass:TagsBlockingFirstPaint",
        "duration": 0.78,
        "entryType": "measure"
      },
      {
        "startTime": 2601.43,
        "name": "lh:gather:beforePass:FontSize",
        "duration": 0.02,
        "entryType": "measure"
      },
      {
        "startTime": 2601.46,
        "name": "lh:gather:beforePass:EmbeddedContent",
        "duration": 0.01,
        "entryType": "measure"
      },
      {
        "startTime": 2601.47,
        "name": "lh:gather:beforePass:RobotsTxt",
        "duration": 0.01,
        "entryType": "measure"
      },
      {
        "startTime": 2601.48,
        "name": "lh:gather:beforePass:TapTargets",
        "duration": 0.01,
        "entryType": "measure"
      },
      {
        "startTime": 2601.5,
        "name": "lh:gather:beforePass:Accessibility",
        "duration": 0.01,
        "entryType": "measure"
      },
      {
        "startTime": 2601.6,
        "name": "lh:gather:beginRecording",
        "duration": 56.38,
        "entryType": "measure"
      },
      {
        "startTime": 2601.86,
        "name": "lh:gather:getVersion",
        "duration": 0.42,
        "entryType": "measure"
      },
      {
        "startTime": 2658.27,
        "name": "lh:gather:loadPage-defaultPass",
        "duration": 3095.58,
        "entryType": "measure"
      },
      {
        "startTime": 5754.14,
        "name": "lh:gather:pass",
        "duration": 3.15,
        "entryType": "measure"
      },
      {
        "startTime": 5757.45,
        "name": "lh:gather:getTrace",
        "duration": 170.43,
        "entryType": "measure"
      },
      {
        "startTime": 5927.9,
        "name": "lh:gather:getDevtoolsLog",
        "duration": 17.3,
        "entryType": "measure"
      },
      {
        "startTime": 5946.48,
        "name": "lh:gather:afterPass",
        "duration": 1180.74,
        "entryType": "measure"
      },
      {
        "startTime": 5946.5,
        "name": "lh:gather:afterPass:CSSUsage",
        "duration": 53.69,
        "entryType": "measure"
      },
      {
        "startTime": 6000.2,
        "name": "lh:gather:afterPass:ViewportDimensions",
        "duration": 6.75,
        "entryType": "measure"
      },
      {
        "startTime": 6006.97,
        "name": "lh:gather:afterPass:RuntimeExceptions",
        "duration": 0.18,
        "entryType": "measure"
      },
      {
        "startTime": 6007.16,
        "name": "lh:gather:afterPass:ConsoleMessages",
        "duration": 1.17,
        "entryType": "measure"
      },
      {
        "startTime": 6008.39,
        "name": "lh:gather:afterPass:AnchorElements",
        "duration": 6.09,
        "entryType": "measure"
      },
      {
        "startTime": 6014.51,
        "name": "lh:gather:afterPass:ImageElements",
        "duration": 55.62,
        "entryType": "measure"
      },
      {
        "startTime": 6070.15,
        "name": "lh:gather:afterPass:LinkElements",
        "duration": 2.6,
        "entryType": "measure"
      },
      {
        "startTime": 6072.75,
        "name": "lh:gather:afterPass:MetaElements",
        "duration": 1.87,
        "entryType": "measure"
      },
      {
        "startTime": 6074.64,
        "name": "lh:gather:afterPass:ScriptElements",
        "duration": 89.36,
        "entryType": "measure"
      },
      {
        "startTime": 6164.01,
        "name": "lh:gather:afterPass:AppCacheManifest",
        "duration": 2.87,
        "entryType": "measure"
      },
      {
        "startTime": 6166.89,
        "name": "lh:gather:afterPass:Doctype",
        "duration": 1.98,
        "entryType": "measure"
      },
      {
        "startTime": 6168.88,
        "name": "lh:gather:afterPass:DOMStats",
        "duration": 6.58,
        "entryType": "measure"
      },
      {
        "startTime": 6175.48,
        "name": "lh:gather:afterPass:OptimizedImages",
        "duration": 187.73,
        "entryType": "measure"
      },
      {
        "startTime": 6363.22,
        "name": "lh:gather:afterPass:PasswordInputsWithPreventedPaste",
        "duration": 1.6,
        "entryType": "measure"
      },
      {
        "startTime": 6364.84,
        "name": "lh:gather:afterPass:ResponseCompression",
        "duration": 3.81,
        "entryType": "measure"
      },
      {
        "startTime": 6368.67,
        "name": "lh:gather:afterPass:TagsBlockingFirstPaint",
        "duration": 3.74,
        "entryType": "measure"
      },
      {
        "startTime": 6372.42,
        "name": "lh:gather:afterPass:FontSize",
        "duration": 147.31,
        "entryType": "measure"
      },
      {
        "startTime": 6519.75,
        "name": "lh:gather:afterPass:EmbeddedContent",
        "duration": 3.15,
        "entryType": "measure"
      },
      {
        "startTime": 6522.91,
        "name": "lh:gather:afterPass:RobotsTxt",
        "duration": 71.79,
        "entryType": "measure"
      },
      {
        "startTime": 6594.71,
        "name": "lh:gather:afterPass:TapTargets",
        "duration": 22.91,
        "entryType": "measure"
      },
      {
        "startTime": 6617.64,
        "name": "lh:gather:afterPass:Accessibility",
        "duration": 509.57,
        "entryType": "measure"
      },
      {
        "startTime": 7156.61,
        "name": "lh:gather:loadBlank",
        "duration": 36.76,
        "entryType": "measure"
      },
      {
        "startTime": 7193.39,
        "name": "lh:gather:setupPassNetwork",
        "duration": 1.8,
        "entryType": "measure"
      },
      {
        "startTime": 7195.21,
        "name": "lh:gather:beforePass",
        "duration": 2.75,
        "entryType": "measure"
      },
      {
        "startTime": 7195.24,
        "name": "lh:gather:beforePass:ServiceWorker",
        "duration": 1.8,
        "entryType": "measure"
      },
      {
        "startTime": 7197.06,
        "name": "lh:gather:beforePass:Offline",
        "duration": 0.87,
        "entryType": "measure"
      },
      {
        "startTime": 7197.95,
        "name": "lh:gather:beforePass:StartUrl",
        "duration": 0.01,
        "entryType": "measure"
      },
      {
        "startTime": 7197.98,
        "name": "lh:gather:beginRecording",
        "duration": 0.08,
        "entryType": "measure"
      },
      {
        "startTime": 7198.08,
        "name": "lh:gather:loadPage-offlinePass",
        "duration": 202.39,
        "entryType": "measure"
      },
      {
        "startTime": 7400.5,
        "name": "lh:gather:pass",
        "duration": 0.22,
        "entryType": "measure"
      },
      {
        "startTime": 7400.73,
        "name": "lh:gather:getDevtoolsLog",
        "duration": 0.51,
        "entryType": "measure"
      },
      {
        "startTime": 7461.92,
        "name": "lh:gather:afterPass",
        "duration": 447.4,
        "entryType": "measure"
      },
      {
        "startTime": 7461.94,
        "name": "lh:gather:afterPass:ServiceWorker",
        "duration": 0.12,
        "entryType": "measure"
      },
      {
        "startTime": 7462.07,
        "name": "lh:gather:afterPass:Offline",
        "duration": 446.81,
        "entryType": "measure"
      },
      {
        "startTime": 7908.91,
        "name": "lh:gather:afterPass:StartUrl",
        "duration": 0.41,
        "entryType": "measure"
      },
      {
        "startTime": 7909.39,
        "name": "lh:gather:loadBlank",
        "duration": 222.27,
        "entryType": "measure"
      },
      {
        "startTime": 8131.67,
        "name": "lh:gather:setupPassNetwork",
        "duration": 1.58,
        "entryType": "measure"
      },
      {
        "startTime": 8133.26,
        "name": "lh:gather:beforePass",
        "duration": 0.2,
        "entryType": "measure"
      },
      {
        "startTime": 8133.28,
        "name": "lh:gather:beforePass:HTTPRedirect",
        "duration": 0.14,
        "entryType": "measure"
      },
      {
        "startTime": 8133.43,
        "name": "lh:gather:beforePass:HTMLWithoutJavaScript",
        "duration": 0.03,
        "entryType": "measure"
      },
      {
        "startTime": 8133.47,
        "name": "lh:gather:beginRecording",
        "duration": 0.07,
        "entryType": "measure"
      },
      {
        "startTime": 8133.55,
        "name": "lh:gather:loadPage-redirectPass",
        "duration": 486.89,
        "entryType": "measure"
      },
      {
        "startTime": 8620.46,
        "name": "lh:gather:pass",
        "duration": 0.23,
        "entryType": "measure"
      },
      {
        "startTime": 8620.71,
        "name": "lh:gather:getDevtoolsLog",
        "duration": 1.87,
        "entryType": "measure"
      },
      {
        "startTime": 8746.9,
        "name": "lh:gather:afterPass",
        "duration": 20.27,
        "entryType": "measure"
      },
      {
        "startTime": 8746.91,
        "name": "lh:gather:afterPass:HTTPRedirect",
        "duration": 17.79,
        "entryType": "measure"
      },
      {
        "startTime": 8764.72,
        "name": "lh:gather:afterPass:HTMLWithoutJavaScript",
        "duration": 2.44,
        "entryType": "measure"
      },
      {
        "startTime": 8767.4,
        "name": "lh:gather:disconnect",
        "duration": 9.08,
        "entryType": "measure"
      },
      {
        "startTime": 8776.91,
        "name": "lh:runner:auditing",
        "duration": 880.98,
        "entryType": "measure"
      },
      {
        "startTime": 8779.22,
        "name": "lh:audit:is-on-https",
        "duration": 28.9,
        "entryType": "measure"
      },
      {
        "startTime": 8782.11,
        "name": "lh:computed:NetworkRecords",
        "duration": 24.58,
        "entryType": "measure"
      },
      {
        "startTime": 8808.16,
        "name": "lh:audit:redirects-http",
        "duration": 0.15,
        "entryType": "measure"
      },
      {
        "startTime": 8808.34,
        "name": "lh:audit:service-worker",
        "duration": 0.25,
        "entryType": "measure"
      },
      {
        "startTime": 8808.61,
        "name": "lh:audit:works-offline",
        "duration": 0.22,
        "entryType": "measure"
      },
      {
        "startTime": 8808.84,
        "name": "lh:audit:viewport",
        "duration": 0.75,
        "entryType": "measure"
      },
      {
        "startTime": 8809.03,
        "name": "lh:computed:ViewportMeta",
        "duration": 0.53,
        "entryType": "measure"
      },
      {
        "startTime": 8809.6,
        "name": "lh:audit:without-javascript",
        "duration": 0.17,
        "entryType": "measure"
      },
      {
        "startTime": 8812,
        "name": "lh:audit:first-contentful-paint",
        "duration": 61.55,
        "entryType": "measure"
      },
      {
        "startTime": 8813.01,
        "name": "lh:computed:FirstContentfulPaint",
        "duration": 60.16,
        "entryType": "measure"
      },
      {
        "startTime": 8814.12,
        "name": "lh:computed:TraceOfTab",
        "duration": 46.18,
        "entryType": "measure"
      },
      {
        "startTime": 8860.42,
        "name": "lh:computed:LanternFirstContentfulPaint",
        "duration": 12.74,
        "entryType": "measure"
      },
      {
        "startTime": 8860.61,
        "name": "lh:computed:PageDependencyGraph",
        "duration": 4.37,
        "entryType": "measure"
      },
      {
        "startTime": 8865.02,
        "name": "lh:computed:LoadSimulator",
        "duration": 3.21,
        "entryType": "measure"
      },
      {
        "startTime": 8865.17,
        "name": "lh:computed:NetworkAnalysis",
        "duration": 2.86,
        "entryType": "measure"
      },
      {
        "startTime": 8873.78,
        "name": "lh:audit:first-meaningful-paint",
        "duration": 3.94,
        "entryType": "measure"
      },
      {
        "startTime": 8874,
        "name": "lh:computed:FirstMeaningfulPaint",
        "duration": 3.46,
        "entryType": "measure"
      },
      {
        "startTime": 8874.05,
        "name": "lh:computed:LanternFirstMeaningfulPaint",
        "duration": 3.37,
        "entryType": "measure"
      },
      {
        "startTime": 8877.95,
        "name": "lh:audit:load-fast-enough-for-pwa",
        "duration": 17.6,
        "entryType": "measure"
      },
      {
        "startTime": 8878.32,
        "name": "lh:computed:Interactive",
        "duration": 16.86,
        "entryType": "measure"
      },
      {
        "startTime": 8878.39,
        "name": "lh:computed:LanternInteractive",
        "duration": 16.76,
        "entryType": "measure"
      },
      {
        "startTime": 8895.77,
        "name": "lh:audit:speed-index",
        "duration": 336.74,
        "entryType": "measure"
      },
      {
        "startTime": 8896.06,
        "name": "lh:computed:SpeedIndex",
        "duration": 336.21,
        "entryType": "measure"
      },
      {
        "startTime": 8896.12,
        "name": "lh:computed:LanternSpeedIndex",
        "duration": 336.15,
        "entryType": "measure"
      },
      {
        "startTime": 8896.19,
        "name": "lh:computed:Speedline",
        "duration": 313.46,
        "entryType": "measure"
      },
      {
        "startTime": 9232.53,
        "name": "lh:audit:screenshot-thumbnails",
        "duration": 170.38,
        "entryType": "measure"
      },
      {
        "startTime": 9402.92,
        "name": "lh:audit:final-screenshot",
        "duration": 1.18,
        "entryType": "measure"
      },
      {
        "startTime": 9403.2,
        "name": "lh:computed:Screenshots",
        "duration": 0.86,
        "entryType": "measure"
      },
      {
        "startTime": 9404.26,
        "name": "lh:audit:estimated-input-latency",
        "duration": 24.82,
        "entryType": "measure"
      },
      {
        "startTime": 9404.48,
        "name": "lh:computed:EstimatedInputLatency",
        "duration": 24.47,
        "entryType": "measure"
      },
      {
        "startTime": 9404.53,
        "name": "lh:computed:LanternEstimatedInputLatency",
        "duration": 24.41,
        "entryType": "measure"
      },
      {
        "startTime": 9429.22,
        "name": "lh:audit:max-potential-fid",
        "duration": 8.28,
        "entryType": "measure"
      },
      {
        "startTime": 9429.48,
        "name": "lh:computed:MaxPotentialFID",
        "duration": 7.86,
        "entryType": "measure"
      },
      {
        "startTime": 9429.53,
        "name": "lh:computed:LanternMaxPotentialFID",
        "duration": 7.8,
        "entryType": "measure"
      },
      {
        "startTime": 9437.51,
        "name": "lh:audit:errors-in-console",
        "duration": 0.36,
        "entryType": "measure"
      },
      {
        "startTime": 9438.07,
        "name": "lh:audit:time-to-first-byte",
        "duration": 0.98,
        "entryType": "measure"
      },
      {
        "startTime": 9438.51,
        "name": "lh:computed:MainResource",
        "duration": 0.25,
        "entryType": "measure"
      },
      {
        "startTime": 9439.21,
        "name": "lh:audit:first-cpu-idle",
        "duration": 5.19,
        "entryType": "measure"
      },
      {
        "startTime": 9439.53,
        "name": "lh:computed:FirstCPUIdle",
        "duration": 4.68,
        "entryType": "measure"
      },
      {
        "startTime": 9439.58,
        "name": "lh:computed:LanternFirstCPUIdle",
        "duration": 4.62,
        "entryType": "measure"
      },
      {
        "startTime": 9444.51,
        "name": "lh:audit:interactive",
        "duration": 0.56,
        "entryType": "measure"
      },
      {
        "startTime": 9445.23,
        "name": "lh:audit:user-timings",
        "duration": 1.66,
        "entryType": "measure"
      },
      {
        "startTime": 9445.56,
        "name": "lh:computed:UserTimings",
        "duration": 1.09,
        "entryType": "measure"
      },
      {
        "startTime": 9447,
        "name": "lh:audit:critical-request-chains",
        "duration": 1.29,
        "entryType": "measure"
      },
      {
        "startTime": 9447.2,
        "name": "lh:computed:CriticalRequestChains",
        "duration": 0.49,
        "entryType": "measure"
      },
      {
        "startTime": 9448.39,
        "name": "lh:audit:redirects",
        "duration": 0.62,
        "entryType": "measure"
      },
      {
        "startTime": 9449.02,
        "name": "lh:audit:installable-manifest",
        "duration": 0.45,
        "entryType": "measure"
      },
      {
        "startTime": 9449.21,
        "name": "lh:computed:ManifestValues",
        "duration": 0.08,
        "entryType": "measure"
      },
      {
        "startTime": 9449.6,
        "name": "lh:audit:apple-touch-icon",
        "duration": 0.33,
        "entryType": "measure"
      },
      {
        "startTime": 9449.94,
        "name": "lh:audit:splash-screen",
        "duration": 0.24,
        "entryType": "measure"
      },
      {
        "startTime": 9450.19,
        "name": "lh:audit:themed-omnibox",
        "duration": 0.28,
        "entryType": "measure"
      },
      {
        "startTime": 9450.48,
        "name": "lh:audit:content-width",
        "duration": 0.2,
        "entryType": "measure"
      },
      {
        "startTime": 9450.68,
        "name": "lh:audit:image-aspect-ratio",
        "duration": 0.53,
        "entryType": "measure"
      },
      {
        "startTime": 9451.23,
        "name": "lh:audit:deprecations",
        "duration": 0.25,
        "entryType": "measure"
      },
      {
        "startTime": 9451.61,
        "name": "lh:audit:mainthread-work-breakdown",
        "duration": 14.05,
        "entryType": "measure"
      },
      {
        "startTime": 9451.95,
        "name": "lh:computed:MainThreadTasks",
        "duration": 12.77,
        "entryType": "measure"
      },
      {
        "startTime": 9465.79,
        "name": "lh:audit:bootup-time",
        "duration": 2.06,
        "entryType": "measure"
      },
      {
        "startTime": 9467.96,
        "name": "lh:audit:uses-rel-preload",
        "duration": 1.39,
        "entryType": "measure"
      },
      {
        "startTime": 9468.29,
        "name": "lh:computed:LoadSimulator",
        "duration": 0.07,
        "entryType": "measure"
      },
      {
        "startTime": 9469.47,
        "name": "lh:audit:uses-rel-preconnect",
        "duration": 0.91,
        "entryType": "measure"
      },
      {
        "startTime": 9470.5,
        "name": "lh:audit:font-display",
        "duration": 1.98,
        "entryType": "measure"
      },
      {
        "startTime": 9472.49,
        "name": "lh:audit:diagnostics",
        "duration": 0.8,
        "entryType": "measure"
      },
      {
        "startTime": 9473.3,
        "name": "lh:audit:network-requests",
        "duration": 1.26,
        "entryType": "measure"
      },
      {
        "startTime": 9474.68,
        "name": "lh:audit:network-rtt",
        "duration": 0.51,
        "entryType": "measure"
      },
      {
        "startTime": 9475.29,
        "name": "lh:audit:network-server-latency",
        "duration": 0.44,
        "entryType": "measure"
      },
      {
        "startTime": 9475.74,
        "name": "lh:audit:main-thread-tasks",
        "duration": 0.34,
        "entryType": "measure"
      },
      {
        "startTime": 9476.1,
        "name": "lh:audit:metrics",
        "duration": 0.69,
        "entryType": "measure"
      },
      {
        "startTime": 9476.8,
        "name": "lh:audit:offline-start-url",
        "duration": 0.17,
        "entryType": "measure"
      },
      {
        "startTime": 9477.08,
        "name": "lh:audit:performance-budget",
        "duration": 2.26,
        "entryType": "measure"
      },
      {
        "startTime": 9477.28,
        "name": "lh:computed:ResourceSummary",
        "duration": 1.98,
        "entryType": "measure"
      },
      {
        "startTime": 9479.46,
        "name": "lh:audit:resource-summary",
        "duration": 0.52,
        "entryType": "measure"
      },
      {
        "startTime": 9480,
        "name": "lh:audit:pwa-cross-browser",
        "duration": 0.09,
        "entryType": "measure"
      },
      {
        "startTime": 9480.13,
        "name": "lh:audit:pwa-page-transitions",
        "duration": 0.09,
        "entryType": "measure"
      },
      {
        "startTime": 9480.26,
        "name": "lh:audit:pwa-each-page-has-url",
        "duration": 0.09,
        "entryType": "measure"
      },
      {
        "startTime": 9480.47,
        "name": "lh:audit:accesskeys",
        "duration": 0.36,
        "entryType": "measure"
      },
      {
        "startTime": 9480.95,
        "name": "lh:audit:aria-allowed-attr",
        "duration": 0.24,
        "entryType": "measure"
      },
      {
        "startTime": 9481.31,
        "name": "lh:audit:aria-required-attr",
        "duration": 0.27,
        "entryType": "measure"
      },
      {
        "startTime": 9481.73,
        "name": "lh:audit:aria-required-children",
        "duration": 0.26,
        "entryType": "measure"
      },
      {
        "startTime": 9482.12,
        "name": "lh:audit:aria-required-parent",
        "duration": 0.29,
        "entryType": "measure"
      },
      {
        "startTime": 9482.52,
        "name": "lh:audit:aria-roles",
        "duration": 0.29,
        "entryType": "measure"
      },
      {
        "startTime": 9482.93,
        "name": "lh:audit:aria-valid-attr-value",
        "duration": 0.31,
        "entryType": "measure"
      },
      {
        "startTime": 9483.36,
        "name": "lh:audit:aria-valid-attr",
        "duration": 0.3,
        "entryType": "measure"
      },
      {
        "startTime": 9483.8,
        "name": "lh:audit:audio-caption",
        "duration": 0.35,
        "entryType": "measure"
      },
      {
        "startTime": 9484.26,
        "name": "lh:audit:button-name",
        "duration": 0.94,
        "entryType": "measure"
      },
      {
        "startTime": 9485.34,
        "name": "lh:audit:bypass",
        "duration": 0.57,
        "entryType": "measure"
      },
      {
        "startTime": 9486.05,
        "name": "lh:audit:color-contrast",
        "duration": 0.59,
        "entryType": "measure"
      },
      {
        "startTime": 9486.79,
        "name": "lh:audit:definition-list",
        "duration": 0.36,
        "entryType": "measure"
      },
      {
        "startTime": 9487.28,
        "name": "lh:audit:dlitem",
        "duration": 0.31,
        "entryType": "measure"
      },
      {
        "startTime": 9487.7,
        "name": "lh:audit:document-title",
        "duration": 0.76,
        "entryType": "measure"
      },
      {
        "startTime": 9488.6,
        "name": "lh:audit:duplicate-id",
        "duration": 1.42,
        "entryType": "measure"
      },
      {
        "startTime": 9490.26,
        "name": "lh:audit:frame-title",
        "duration": 0.44,
        "entryType": "measure"
      },
      {
        "startTime": 9490.84,
        "name": "lh:audit:html-has-lang",
        "duration": 0.66,
        "entryType": "measure"
      },
      {
        "startTime": 9491.76,
        "name": "lh:audit:html-lang-valid",
        "duration": 0.4,
        "entryType": "measure"
      },
      {
        "startTime": 9492.28,
        "name": "lh:audit:image-alt",
        "duration": 0.61,
        "entryType": "measure"
      },
      {
        "startTime": 9493.04,
        "name": "lh:audit:input-image-alt",
        "duration": 0.34,
        "entryType": "measure"
      },
      {
        "startTime": 9493.49,
        "name": "lh:audit:label",
        "duration": 0.64,
        "entryType": "measure"
      },
      {
        "startTime": 9494.28,
        "name": "lh:audit:layout-table",
        "duration": 0.45,
        "entryType": "measure"
      },
      {
        "startTime": 9494.91,
        "name": "lh:audit:link-name",
        "duration": 0.62,
        "entryType": "measure"
      },
      {
        "startTime": 9495.69,
        "name": "lh:audit:list",
        "duration": 0.47,
        "entryType": "measure"
      },
      {
        "startTime": 9496.31,
        "name": "lh:audit:listitem",
        "duration": 0.5,
        "entryType": "measure"
      },
      {
        "startTime": 9496.93,
        "name": "lh:audit:meta-refresh",
        "duration": 0.33,
        "entryType": "measure"
      },
      {
        "startTime": 9497.44,
        "name": "lh:audit:meta-viewport",
        "duration": 0.76,
        "entryType": "measure"
      },
      {
        "startTime": 9498.35,
        "name": "lh:audit:object-alt",
        "duration": 0.35,
        "entryType": "measure"
      },
      {
        "startTime": 9498.82,
        "name": "lh:audit:tabindex",
        "duration": 0.37,
        "entryType": "measure"
      },
      {
        "startTime": 9499.36,
        "name": "lh:audit:td-headers-attr",
        "duration": 0.36,
        "entryType": "measure"
      },
      {
        "startTime": 9499.87,
        "name": "lh:audit:th-has-data-cells",
        "duration": 0.4,
        "entryType": "measure"
      },
      {
        "startTime": 9500.38,
        "name": "lh:audit:valid-lang",
        "duration": 0.38,
        "entryType": "measure"
      },
      {
        "startTime": 9500.9,
        "name": "lh:audit:video-caption",
        "duration": 2.16,
        "entryType": "measure"
      },
      {
        "startTime": 9503.22,
        "name": "lh:audit:video-description",
        "duration": 0.45,
        "entryType": "measure"
      },
      {
        "startTime": 9503.69,
        "name": "lh:audit:custom-controls-labels",
        "duration": 0.07,
        "entryType": "measure"
      },
      {
        "startTime": 9503.77,
        "name": "lh:audit:custom-controls-roles",
        "duration": 0.09,
        "entryType": "measure"
      },
      {
        "startTime": 9503.89,
        "name": "lh:audit:focus-traps",
        "duration": 0.07,
        "entryType": "measure"
      },
      {
        "startTime": 9503.97,
        "name": "lh:audit:focusable-controls",
        "duration": 0.06,
        "entryType": "measure"
      },
      {
        "startTime": 9504.05,
        "name": "lh:audit:heading-levels",
        "duration": 0.05,
        "entryType": "measure"
      },
      {
        "startTime": 9504.11,
        "name": "lh:audit:interactive-element-affordance",
        "duration": 0.09,
        "entryType": "measure"
      },
      {
        "startTime": 9504.22,
        "name": "lh:audit:logical-tab-order",
        "duration": 0.05,
        "entryType": "measure"
      },
      {
        "startTime": 9504.28,
        "name": "lh:audit:managed-focus",
        "duration": 0.07,
        "entryType": "measure"
      },
      {
        "startTime": 9504.36,
        "name": "lh:audit:offscreen-content-hidden",
        "duration": 0.06,
        "entryType": "measure"
      },
      {
        "startTime": 9504.44,
        "name": "lh:audit:use-landmarks",
        "duration": 0.07,
        "entryType": "measure"
      },
      {
        "startTime": 9504.52,
        "name": "lh:audit:visual-order-follows-dom",
        "duration": 0.06,
        "entryType": "measure"
      },
      {
        "startTime": 9504.74,
        "name": "lh:audit:uses-long-cache-ttl",
        "duration": 3.65,
        "entryType": "measure"
      },
      {
        "startTime": 9508.5,
        "name": "lh:audit:total-byte-weight",
        "duration": 0.55,
        "entryType": "measure"
      },
      {
        "startTime": 9509.15,
        "name": "lh:audit:offscreen-images",
        "duration": 5.41,
        "entryType": "measure"
      },
      {
        "startTime": 9514.67,
        "name": "lh:audit:render-blocking-resources",
        "duration": 7.85,
        "entryType": "measure"
      },
      {
        "startTime": 9520.4,
        "name": "lh:computed:FirstContentfulPaint",
        "duration": 1.84,
        "entryType": "measure"
      },
      {
        "startTime": 9520.44,
        "name": "lh:computed:LanternFirstContentfulPaint",
        "duration": 1.78,
        "entryType": "measure"
      },
      {
        "startTime": 9522.63,
        "name": "lh:audit:unminified-css",
        "duration": 28.87,
        "entryType": "measure"
      },
      {
        "startTime": 9551.61,
        "name": "lh:audit:unminified-javascript",
        "duration": 57.33,
        "entryType": "measure"
      },
      {
        "startTime": 9609.05,
        "name": "lh:audit:unused-css-rules",
        "duration": 6.53,
        "entryType": "measure"
      },
      {
        "startTime": 9616.46,
        "name": "lh:audit:uses-webp-images",
        "duration": 5.81,
        "entryType": "measure"
      },
      {
        "startTime": 9622.54,
        "name": "lh:audit:uses-optimized-images",
        "duration": 3.91,
        "entryType": "measure"
      },
      {
        "startTime": 9626.55,
        "name": "lh:audit:uses-text-compression",
        "duration": 5.33,
        "entryType": "measure"
      },
      {
        "startTime": 9632,
        "name": "lh:audit:uses-responsive-images",
        "duration": 3.72,
        "entryType": "measure"
      },
      {
        "startTime": 9635.85,
        "name": "lh:audit:efficient-animated-content",
        "duration": 3.92,
        "entryType": "measure"
      },
      {
        "startTime": 9639.79,
        "name": "lh:audit:appcache-manifest",
        "duration": 0.19,
        "entryType": "measure"
      },
      {
        "startTime": 9639.99,
        "name": "lh:audit:doctype",
        "duration": 0.15,
        "entryType": "measure"
      },
      {
        "startTime": 9640.27,
        "name": "lh:audit:dom-size",
        "duration": 0.76,
        "entryType": "measure"
      },
      {
        "startTime": 9641.04,
        "name": "lh:audit:external-anchors-use-rel-noopener",
        "duration": 0.43,
        "entryType": "measure"
      },
      {
        "startTime": 9641.48,
        "name": "lh:audit:geolocation-on-start",
        "duration": 0.27,
        "entryType": "measure"
      },
      {
        "startTime": 9641.76,
        "name": "lh:audit:no-document-write",
        "duration": 0.16,
        "entryType": "measure"
      },
      {
        "startTime": 9641.93,
        "name": "lh:audit:no-vulnerable-libraries",
        "duration": 2.77,
        "entryType": "measure"
      },
      {
        "startTime": 9644.72,
        "name": "lh:audit:js-libraries",
        "duration": 0.2,
        "entryType": "measure"
      },
      {
        "startTime": 9644.94,
        "name": "lh:audit:notification-on-start",
        "duration": 0.17,
        "entryType": "measure"
      },
      {
        "startTime": 9645.11,
        "name": "lh:audit:password-inputs-can-be-pasted-into",
        "duration": 0.17,
        "entryType": "measure"
      },
      {
        "startTime": 9645.29,
        "name": "lh:audit:uses-http2",
        "duration": 1.08,
        "entryType": "measure"
      },
      {
        "startTime": 9646.39,
        "name": "lh:audit:uses-passive-event-listeners",
        "duration": 0.18,
        "entryType": "measure"
      },
      {
        "startTime": 9646.69,
        "name": "lh:audit:meta-description",
        "duration": 0.29,
        "entryType": "measure"
      },
      {
        "startTime": 9647.09,
        "name": "lh:audit:http-status-code",
        "duration": 0.29,
        "entryType": "measure"
      },
      {
        "startTime": 9647.49,
        "name": "lh:audit:font-size",
        "duration": 0.49,
        "entryType": "measure"
      },
      {
        "startTime": 9648.08,
        "name": "lh:audit:link-text",
        "duration": 2.54,
        "entryType": "measure"
      },
      {
        "startTime": 9650.87,
        "name": "lh:audit:is-crawlable",
        "duration": 1.86,
        "entryType": "measure"
      },
      {
        "startTime": 9652.84,
        "name": "lh:audit:robots-txt",
        "duration": 0.66,
        "entryType": "measure"
      },
      {
        "startTime": 9653.62,
        "name": "lh:audit:tap-targets",
        "duration": 2.26,
        "entryType": "measure"
      },
      {
        "startTime": 9656.04,
        "name": "lh:audit:hreflang",
        "duration": 0.38,
        "entryType": "measure"
      },
      {
        "startTime": 9656.53,
        "name": "lh:audit:plugins",
        "duration": 0.33,
        "entryType": "measure"
      },
      {
        "startTime": 9656.98,
        "name": "lh:audit:canonical",
        "duration": 0.62,
        "entryType": "measure"
      },
      {
        "startTime": 9657.72,
        "name": "lh:audit:structured-data",
        "duration": 0.17,
        "entryType": "measure"
      },
      {
        "startTime": 9657.91,
        "name": "lh:runner:generate",
        "duration": 1,
        "entryType": "measure"
      }
    ],
    "total": 8196.21
  },
  "i18n": {
    "rendererFormattedStrings": {
      "auditGroupExpandTooltip": "Show audits",
      "crcInitialNavigation": "Initial Navigation",
      "crcLongestDurationLabel": "Maximum critical path latency:",
      "errorLabel": "Error!",
      "errorMissingAuditInfo": "Report error: no audit information",
      "labDataTitle": "Lab Data",
      "lsPerformanceCategoryDescription": "[Lighthouse](https://developers.google.com/web/tools/lighthouse/) analysis of the current page on an emulated mobile network. Values are estimated and may vary.",
      "manualAuditsGroupTitle": "Additional items to manually check",
      "notApplicableAuditsGroupTitle": "Not applicable",
      "opportunityResourceColumnLabel": "Opportunity",
      "opportunitySavingsColumnLabel": "Estimated Savings",
      "passedAuditsGroupTitle": "Passed audits",
      "snippetCollapseButtonLabel": "Collapse snippet",
      "snippetExpandButtonLabel": "Expand snippet",
      "thirdPartyResourcesLabel": "Show 3rd-party resources",
      "toplevelWarningsMessage": "There were issues affecting this run of Lighthouse:",
      "varianceDisclaimer": "Values are estimated and may vary.",
      "warningAuditsGroupTitle": "Passed audits but with warnings",
      "warningHeader": "Warnings: "
    },
    "icuMessagePaths": {
      "lighthouse-core/audits/metrics/first-contentful-paint.js | title": [
        "audits[first-contentful-paint].title"
      ],
      "lighthouse-core/audits/metrics/first-contentful-paint.js | description": [
        "audits[first-contentful-paint].description"
      ],
      "lighthouse-core/lib/i18n/i18n.js | seconds": [
        {
          "values": {
            "timeInMs": 1292.75
          },
          "path": "audits[first-contentful-paint].displayValue"
        },
        {
          "values": {
            "timeInMs": 2672.7135000000003
          },
          "path": "audits[first-meaningful-paint].displayValue"
        },
        {
          "values": {
            "timeInMs": 4482.27466304704
          },
          "path": "audits[speed-index].displayValue"
        },
        {
          "values": {
            "timeInMs": 5929.424000000001
          },
          "path": "audits[first-cpu-idle].displayValue"
        },
        {
          "values": {
            "timeInMs": 6916.872000000001
          },
          "path": "audits.interactive.displayValue"
        },
        {
          "values": {
            "timeInMs": 3149.5999999999985
          },
          "path": "audits[mainthread-work-breakdown].displayValue"
        },
        {
          "values": {
            "timeInMs": 1223.9720000000002
          },
          "path": "audits[bootup-time].displayValue"
        }
      ],
      "lighthouse-core/audits/metrics/first-meaningful-paint.js | title": [
        "audits[first-meaningful-paint].title"
      ],
      "lighthouse-core/audits/metrics/first-meaningful-paint.js | description": [
        "audits[first-meaningful-paint].description"
      ],
      "lighthouse-core/audits/load-fast-enough-for-pwa.js | title": [
        "audits[load-fast-enough-for-pwa].title"
      ],
      "lighthouse-core/audits/load-fast-enough-for-pwa.js | description": [
        "audits[load-fast-enough-for-pwa].description"
      ],
      "lighthouse-core/audits/metrics/speed-index.js | title": [
        "audits[speed-index].title"
      ],
      "lighthouse-core/audits/metrics/speed-index.js | description": [
        "audits[speed-index].description"
      ],
      "lighthouse-core/audits/metrics/estimated-input-latency.js | title": [
        "audits[estimated-input-latency].title"
      ],
      "lighthouse-core/audits/metrics/estimated-input-latency.js | description": [
        "audits[estimated-input-latency].description"
      ],
      "lighthouse-core/lib/i18n/i18n.js | ms": [
        {
          "values": {
            "timeInMs": 31.535714285714285
          },
          "path": "audits[estimated-input-latency].displayValue"
        },
        {
          "values": {
            "timeInMs": 208
          },
          "path": "audits[max-potential-fid].displayValue"
        },
        {
          "values": {
            "timeInMs": 11.89
          },
          "path": "audits[network-rtt].displayValue"
        },
        {
          "values": {
            "timeInMs": 141.36299999999997
          },
          "path": "audits[network-server-latency].displayValue"
        }
      ],
      "lighthouse-core/audits/metrics/max-potential-fid.js | title": [
        "audits[max-potential-fid].title"
      ],
      "lighthouse-core/audits/metrics/max-potential-fid.js | description": [
        "audits[max-potential-fid].description"
      ],
      "lighthouse-core/audits/time-to-first-byte.js | title": [
        "audits[time-to-first-byte].title"
      ],
      "lighthouse-core/audits/time-to-first-byte.js | description": [
        "audits[time-to-first-byte].description"
      ],
      "lighthouse-core/audits/time-to-first-byte.js | displayValue": [
        {
          "values": {
            "timeInMs": 366.971
          },
          "path": "audits[time-to-first-byte].displayValue"
        }
      ],
      "lighthouse-core/audits/metrics/first-cpu-idle.js | title": [
        "audits[first-cpu-idle].title"
      ],
      "lighthouse-core/audits/metrics/first-cpu-idle.js | description": [
        "audits[first-cpu-idle].description"
      ],
      "lighthouse-core/audits/metrics/interactive.js | title": [
        "audits.interactive.title"
      ],
      "lighthouse-core/audits/metrics/interactive.js | description": [
        "audits.interactive.description"
      ],
      "lighthouse-core/audits/user-timings.js | title": [
        "audits[user-timings].title"
      ],
      "lighthouse-core/audits/user-timings.js | description": [
        "audits[user-timings].description"
      ],
      "lighthouse-core/audits/critical-request-chains.js | title": [
        "audits[critical-request-chains].title"
      ],
      "lighthouse-core/audits/critical-request-chains.js | description": [
        "audits[critical-request-chains].description"
      ],
      "lighthouse-core/audits/critical-request-chains.js | displayValue": [
        {
          "values": {
            "itemCount": 2
          },
          "path": "audits[critical-request-chains].displayValue"
        }
      ],
      "lighthouse-core/audits/redirects.js | title": [
        "audits.redirects.title"
      ],
      "lighthouse-core/audits/redirects.js | description": [
        "audits.redirects.description"
      ],
      "lighthouse-core/audits/apple-touch-icon.js | title": [
        "audits[apple-touch-icon].title"
      ],
      "lighthouse-core/audits/apple-touch-icon.js | description": [
        "audits[apple-touch-icon].description"
      ],
      "lighthouse-core/audits/apple-touch-icon.js | precomposedWarning": [
        "audits[apple-touch-icon].warnings[0]"
      ],
      "lighthouse-core/audits/mainthread-work-breakdown.js | failureTitle": [
        "audits[mainthread-work-breakdown].title"
      ],
      "lighthouse-core/audits/mainthread-work-breakdown.js | description": [
        "audits[mainthread-work-breakdown].description"
      ],
      "lighthouse-core/audits/mainthread-work-breakdown.js | columnCategory": [
        "audits[mainthread-work-breakdown].details.headings[0].text"
      ],
      "lighthouse-core/lib/i18n/i18n.js | columnTimeSpent": [
        "audits[mainthread-work-breakdown].details.headings[1].text",
        "audits[network-rtt].details.headings[1].text",
        "audits[network-server-latency].details.headings[1].text"
      ],
      "lighthouse-core/audits/bootup-time.js | title": [
        "audits[bootup-time].title"
      ],
      "lighthouse-core/audits/bootup-time.js | description": [
        "audits[bootup-time].description"
      ],
      "lighthouse-core/lib/i18n/i18n.js | columnURL": [
        "audits[bootup-time].details.headings[0].text",
        "audits[uses-rel-preconnect].details.headings[0].label",
        "audits[font-display].details.headings[0].text",
        "audits[network-rtt].details.headings[0].text",
        "audits[network-server-latency].details.headings[0].text",
        "audits[uses-long-cache-ttl].details.headings[0].text",
        "audits[total-byte-weight].details.headings[0].text",
        "audits[offscreen-images].details.headings[1].label",
        "audits[unminified-javascript].details.headings[0].label",
        "audits[unused-css-rules].details.headings[0].label",
        "audits[uses-webp-images].details.headings[1].label",
        "audits[uses-text-compression].details.headings[0].label",
        "audits[uses-responsive-images].details.headings[1].label"
      ],
      "lighthouse-core/audits/bootup-time.js | columnTotal": [
        "audits[bootup-time].details.headings[1].text"
      ],
      "lighthouse-core/audits/bootup-time.js | columnScriptEval": [
        "audits[bootup-time].details.headings[2].text"
      ],
      "lighthouse-core/audits/bootup-time.js | columnScriptParse": [
        "audits[bootup-time].details.headings[3].text"
      ],
      "lighthouse-core/audits/uses-rel-preload.js | title": [
        "audits[uses-rel-preload].title"
      ],
      "lighthouse-core/audits/uses-rel-preload.js | description": [
        "audits[uses-rel-preload].description"
      ],
      "lighthouse-core/audits/uses-rel-preconnect.js | title": [
        "audits[uses-rel-preconnect].title"
      ],
      "lighthouse-core/audits/uses-rel-preconnect.js | description": [
        "audits[uses-rel-preconnect].description"
      ],
      "lighthouse-core/lib/i18n/i18n.js | displayValueMsSavings": [
        {
          "values": {
            "wastedMs": 313.584
          },
          "path": "audits[uses-rel-preconnect].displayValue"
        }
      ],
      "lighthouse-core/lib/i18n/i18n.js | columnWastedBytes": [
        "audits[uses-rel-preconnect].details.headings[1].label",
        "audits[font-display].details.headings[1].text",
        "audits[offscreen-images].details.headings[3].label",
        "audits[unminified-javascript].details.headings[2].label",
        "audits[unused-css-rules].details.headings[2].label",
        "audits[uses-webp-images].details.headings[3].label",
        "audits[uses-text-compression].details.headings[2].label",
        "audits[uses-responsive-images].details.headings[3].label"
      ],
      "lighthouse-core/audits/font-display.js | failureTitle": [
        "audits[font-display].title"
      ],
      "lighthouse-core/audits/font-display.js | description": [
        "audits[font-display].description"
      ],
      "lighthouse-core/audits/network-rtt.js | title": [
        "audits[network-rtt].title"
      ],
      "lighthouse-core/audits/network-rtt.js | description": [
        "audits[network-rtt].description"
      ],
      "lighthouse-core/audits/network-server-latency.js | title": [
        "audits[network-server-latency].title"
      ],
      "lighthouse-core/audits/network-server-latency.js | description": [
        "audits[network-server-latency].description"
      ],
      "lighthouse-core/audits/performance-budget.js | title": [
        "audits[performance-budget].title"
      ],
      "lighthouse-core/audits/performance-budget.js | description": [
        "audits[performance-budget].description"
      ],
      "lighthouse-core/audits/resource-summary.js | title": [
        "audits[resource-summary].title"
      ],
      "lighthouse-core/audits/resource-summary.js | description": [
        "audits[resource-summary].description"
      ],
      "lighthouse-core/audits/resource-summary.js | displayValue": [
        {
          "values": {
            "requestCount": 94,
            "byteCount": 774308
          },
          "path": "audits[resource-summary].displayValue"
        }
      ],
      "lighthouse-core/lib/i18n/i18n.js | totalResourceType": [
        "audits[resource-summary].details.items[0].label"
      ],
      "lighthouse-core/lib/i18n/i18n.js | scriptResourceType": [
        "audits[resource-summary].details.items[1].label"
      ],
      "lighthouse-core/lib/i18n/i18n.js | imageResourceType": [
        "audits[resource-summary].details.items[2].label"
      ],
      "lighthouse-core/lib/i18n/i18n.js | documentResourceType": [
        "audits[resource-summary].details.items[3].label"
      ],
      "lighthouse-core/lib/i18n/i18n.js | fontResourceType": [
        "audits[resource-summary].details.items[4].label"
      ],
      "lighthouse-core/lib/i18n/i18n.js | otherResourceType": [
        "audits[resource-summary].details.items[5].label"
      ],
      "lighthouse-core/lib/i18n/i18n.js | stylesheetResourceType": [
        "audits[resource-summary].details.items[6].label"
      ],
      "lighthouse-core/lib/i18n/i18n.js | mediaResourceType": [
        "audits[resource-summary].details.items[7].label"
      ],
      "lighthouse-core/lib/i18n/i18n.js | thirdPartyResourceType": [
        "audits[resource-summary].details.items[8].label"
      ],
      "lighthouse-core/audits/accessibility/accesskeys.js | title": [
        "audits.accesskeys.title"
      ],
      "lighthouse-core/audits/accessibility/accesskeys.js | description": [
        "audits.accesskeys.description"
      ],
      "lighthouse-core/audits/accessibility/aria-allowed-attr.js | title": [
        "audits[aria-allowed-attr].title"
      ],
      "lighthouse-core/audits/accessibility/aria-allowed-attr.js | description": [
        "audits[aria-allowed-attr].description"
      ],
      "lighthouse-core/audits/accessibility/aria-required-attr.js | title": [
        "audits[aria-required-attr].title"
      ],
      "lighthouse-core/audits/accessibility/aria-required-attr.js | description": [
        "audits[aria-required-attr].description"
      ],
      "lighthouse-core/audits/accessibility/aria-required-children.js | title": [
        "audits[aria-required-children].title"
      ],
      "lighthouse-core/audits/accessibility/aria-required-children.js | description": [
        "audits[aria-required-children].description"
      ],
      "lighthouse-core/audits/accessibility/aria-required-parent.js | title": [
        "audits[aria-required-parent].title"
      ],
      "lighthouse-core/audits/accessibility/aria-required-parent.js | description": [
        "audits[aria-required-parent].description"
      ],
      "lighthouse-core/audits/accessibility/aria-roles.js | title": [
        "audits[aria-roles].title"
      ],
      "lighthouse-core/audits/accessibility/aria-roles.js | description": [
        "audits[aria-roles].description"
      ],
      "lighthouse-core/audits/accessibility/aria-valid-attr-value.js | title": [
        "audits[aria-valid-attr-value].title"
      ],
      "lighthouse-core/audits/accessibility/aria-valid-attr-value.js | description": [
        "audits[aria-valid-attr-value].description"
      ],
      "lighthouse-core/audits/accessibility/aria-valid-attr.js | title": [
        "audits[aria-valid-attr].title"
      ],
      "lighthouse-core/audits/accessibility/aria-valid-attr.js | description": [
        "audits[aria-valid-attr].description"
      ],
      "lighthouse-core/audits/accessibility/audio-caption.js | title": [
        "audits[audio-caption].title"
      ],
      "lighthouse-core/audits/accessibility/audio-caption.js | description": [
        "audits[audio-caption].description"
      ],
      "lighthouse-core/audits/accessibility/button-name.js | title": [
        "audits[button-name].title"
      ],
      "lighthouse-core/audits/accessibility/button-name.js | description": [
        "audits[button-name].description"
      ],
      "lighthouse-core/audits/accessibility/bypass.js | failureTitle": [
        "audits.bypass.title"
      ],
      "lighthouse-core/audits/accessibility/bypass.js | description": [
        "audits.bypass.description"
      ],
      "lighthouse-core/audits/accessibility/axe-audit.js | failingElementsHeader": [
        "audits.bypass.details.headings[0].text",
        "audits[color-contrast].details.headings[0].text",
        "audits[html-has-lang].details.headings[0].text",
        "audits[image-alt].details.headings[0].text",
        "audits.label.details.headings[0].text",
        "audits[link-name].details.headings[0].text",
        "audits[meta-viewport].details.headings[0].text"
      ],
      "lighthouse-core/audits/accessibility/color-contrast.js | failureTitle": [
        "audits[color-contrast].title"
      ],
      "lighthouse-core/audits/accessibility/color-contrast.js | description": [
        "audits[color-contrast].description"
      ],
      "lighthouse-core/audits/accessibility/definition-list.js | title": [
        "audits[definition-list].title"
      ],
      "lighthouse-core/audits/accessibility/definition-list.js | description": [
        "audits[definition-list].description"
      ],
      "lighthouse-core/audits/accessibility/dlitem.js | title": [
        "audits.dlitem.title"
      ],
      "lighthouse-core/audits/accessibility/dlitem.js | description": [
        "audits.dlitem.description"
      ],
      "lighthouse-core/audits/accessibility/document-title.js | title": [
        "audits[document-title].title"
      ],
      "lighthouse-core/audits/accessibility/document-title.js | description": [
        "audits[document-title].description"
      ],
      "lighthouse-core/audits/accessibility/duplicate-id.js | title": [
        "audits[duplicate-id].title"
      ],
      "lighthouse-core/audits/accessibility/duplicate-id.js | description": [
        "audits[duplicate-id].description"
      ],
      "lighthouse-core/audits/accessibility/frame-title.js | title": [
        "audits[frame-title].title"
      ],
      "lighthouse-core/audits/accessibility/frame-title.js | description": [
        "audits[frame-title].description"
      ],
      "lighthouse-core/audits/accessibility/html-has-lang.js | failureTitle": [
        "audits[html-has-lang].title"
      ],
      "lighthouse-core/audits/accessibility/html-has-lang.js | description": [
        "audits[html-has-lang].description"
      ],
      "lighthouse-core/audits/accessibility/html-lang-valid.js | title": [
        "audits[html-lang-valid].title"
      ],
      "lighthouse-core/audits/accessibility/html-lang-valid.js | description": [
        "audits[html-lang-valid].description"
      ],
      "lighthouse-core/audits/accessibility/image-alt.js | failureTitle": [
        "audits[image-alt].title"
      ],
      "lighthouse-core/audits/accessibility/image-alt.js | description": [
        "audits[image-alt].description"
      ],
      "lighthouse-core/audits/accessibility/input-image-alt.js | title": [
        "audits[input-image-alt].title"
      ],
      "lighthouse-core/audits/accessibility/input-image-alt.js | description": [
        "audits[input-image-alt].description"
      ],
      "lighthouse-core/audits/accessibility/label.js | failureTitle": [
        "audits.label.title"
      ],
      "lighthouse-core/audits/accessibility/label.js | description": [
        "audits.label.description"
      ],
      "lighthouse-core/audits/accessibility/layout-table.js | title": [
        "audits[layout-table].title"
      ],
      "lighthouse-core/audits/accessibility/layout-table.js | description": [
        "audits[layout-table].description"
      ],
      "lighthouse-core/audits/accessibility/link-name.js | failureTitle": [
        "audits[link-name].title"
      ],
      "lighthouse-core/audits/accessibility/link-name.js | description": [
        "audits[link-name].description"
      ],
      "lighthouse-core/audits/accessibility/list.js | title": [
        "audits.list.title"
      ],
      "lighthouse-core/audits/accessibility/list.js | description": [
        "audits.list.description"
      ],
      "lighthouse-core/audits/accessibility/listitem.js | title": [
        "audits.listitem.title"
      ],
      "lighthouse-core/audits/accessibility/listitem.js | description": [
        "audits.listitem.description"
      ],
      "lighthouse-core/audits/accessibility/meta-refresh.js | title": [
        "audits[meta-refresh].title"
      ],
      "lighthouse-core/audits/accessibility/meta-refresh.js | description": [
        "audits[meta-refresh].description"
      ],
      "lighthouse-core/audits/accessibility/meta-viewport.js | failureTitle": [
        "audits[meta-viewport].title"
      ],
      "lighthouse-core/audits/accessibility/meta-viewport.js | description": [
        "audits[meta-viewport].description"
      ],
      "lighthouse-core/audits/accessibility/object-alt.js | title": [
        "audits[object-alt].title"
      ],
      "lighthouse-core/audits/accessibility/object-alt.js | description": [
        "audits[object-alt].description"
      ],
      "lighthouse-core/audits/accessibility/tabindex.js | title": [
        "audits.tabindex.title"
      ],
      "lighthouse-core/audits/accessibility/tabindex.js | description": [
        "audits.tabindex.description"
      ],
      "lighthouse-core/audits/accessibility/td-headers-attr.js | title": [
        "audits[td-headers-attr].title"
      ],
      "lighthouse-core/audits/accessibility/td-headers-attr.js | description": [
        "audits[td-headers-attr].description"
      ],
      "lighthouse-core/audits/accessibility/th-has-data-cells.js | title": [
        "audits[th-has-data-cells].title"
      ],
      "lighthouse-core/audits/accessibility/th-has-data-cells.js | description": [
        "audits[th-has-data-cells].description"
      ],
      "lighthouse-core/audits/accessibility/valid-lang.js | title": [
        "audits[valid-lang].title"
      ],
      "lighthouse-core/audits/accessibility/valid-lang.js | description": [
        "audits[valid-lang].description"
      ],
      "lighthouse-core/audits/accessibility/video-caption.js | title": [
        "audits[video-caption].title"
      ],
      "lighthouse-core/audits/accessibility/video-caption.js | description": [
        "audits[video-caption].description"
      ],
      "lighthouse-core/audits/accessibility/video-description.js | title": [
        "audits[video-description].title"
      ],
      "lighthouse-core/audits/accessibility/video-description.js | description": [
        "audits[video-description].description"
      ],
      "lighthouse-core/audits/byte-efficiency/uses-long-cache-ttl.js | failureTitle": [
        "audits[uses-long-cache-ttl].title"
      ],
      "lighthouse-core/audits/byte-efficiency/uses-long-cache-ttl.js | description": [
        "audits[uses-long-cache-ttl].description"
      ],
      "lighthouse-core/audits/byte-efficiency/uses-long-cache-ttl.js | displayValue": [
        {
          "values": {
            "itemCount": 66
          },
          "path": "audits[uses-long-cache-ttl].displayValue"
        }
      ],
      "lighthouse-core/lib/i18n/i18n.js | columnCacheTTL": [
        "audits[uses-long-cache-ttl].details.headings[1].text"
      ],
      "lighthouse-core/lib/i18n/i18n.js | columnSize": [
        "audits[uses-long-cache-ttl].details.headings[2].text",
        "audits[total-byte-weight].details.headings[1].text",
        "audits[offscreen-images].details.headings[2].label",
        "audits[unminified-javascript].details.headings[1].label",
        "audits[unused-css-rules].details.headings[1].label",
        "audits[uses-webp-images].details.headings[2].label",
        "audits[uses-text-compression].details.headings[1].label",
        "audits[uses-responsive-images].details.headings[2].label",
        "audits[tap-targets].details.headings[1].text"
      ],
      "lighthouse-core/audits/byte-efficiency/total-byte-weight.js | title": [
        "audits[total-byte-weight].title"
      ],
      "lighthouse-core/audits/byte-efficiency/total-byte-weight.js | description": [
        "audits[total-byte-weight].description"
      ],
      "lighthouse-core/audits/byte-efficiency/total-byte-weight.js | displayValue": [
        {
          "values": {
            "totalBytes": 774308
          },
          "path": "audits[total-byte-weight].displayValue"
        }
      ],
      "lighthouse-core/audits/byte-efficiency/offscreen-images.js | title": [
        "audits[offscreen-images].title"
      ],
      "lighthouse-core/audits/byte-efficiency/offscreen-images.js | description": [
        "audits[offscreen-images].description"
      ],
      "lighthouse-core/lib/i18n/i18n.js | displayValueByteSavings": [
        {
          "values": {
            "wastedBytes": 105241
          },
          "path": "audits[offscreen-images].displayValue"
        },
        {
          "values": {
            "wastedBytes": 12093
          },
          "path": "audits[unminified-javascript].displayValue"
        },
        {
          "values": {
            "wastedBytes": 54099
          },
          "path": "audits[unused-css-rules].displayValue"
        },
        {
          "values": {
            "wastedBytes": 68584
          },
          "path": "audits[uses-webp-images].displayValue"
        },
        {
          "values": {
            "wastedBytes": 2754
          },
          "path": "audits[uses-text-compression].displayValue"
        },
        {
          "values": {
            "wastedBytes": 16202
          },
          "path": "audits[uses-responsive-images].displayValue"
        }
      ],
      "lighthouse-core/audits/byte-efficiency/render-blocking-resources.js | title": [
        "audits[render-blocking-resources].title"
      ],
      "lighthouse-core/audits/byte-efficiency/render-blocking-resources.js | description": [
        "audits[render-blocking-resources].description"
      ],
      "lighthouse-core/audits/byte-efficiency/unminified-css.js | title": [
        "audits[unminified-css].title"
      ],
      "lighthouse-core/audits/byte-efficiency/unminified-css.js | description": [
        "audits[unminified-css].description"
      ],
      "lighthouse-core/audits/byte-efficiency/unminified-javascript.js | title": [
        "audits[unminified-javascript].title"
      ],
      "lighthouse-core/audits/byte-efficiency/unminified-javascript.js | description": [
        "audits[unminified-javascript].description"
      ],
      "lighthouse-core/audits/byte-efficiency/unused-css-rules.js | title": [
        "audits[unused-css-rules].title"
      ],
      "lighthouse-core/audits/byte-efficiency/unused-css-rules.js | description": [
        "audits[unused-css-rules].description"
      ],
      "lighthouse-core/audits/byte-efficiency/uses-webp-images.js | title": [
        "audits[uses-webp-images].title"
      ],
      "lighthouse-core/audits/byte-efficiency/uses-webp-images.js | description": [
        "audits[uses-webp-images].description"
      ],
      "lighthouse-core/audits/byte-efficiency/uses-optimized-images.js | title": [
        "audits[uses-optimized-images].title"
      ],
      "lighthouse-core/audits/byte-efficiency/uses-optimized-images.js | description": [
        "audits[uses-optimized-images].description"
      ],
      "lighthouse-core/audits/byte-efficiency/uses-text-compression.js | title": [
        "audits[uses-text-compression].title"
      ],
      "lighthouse-core/audits/byte-efficiency/uses-text-compression.js | description": [
        "audits[uses-text-compression].description"
      ],
      "lighthouse-core/audits/byte-efficiency/uses-responsive-images.js | title": [
        "audits[uses-responsive-images].title"
      ],
      "lighthouse-core/audits/byte-efficiency/uses-responsive-images.js | description": [
        "audits[uses-responsive-images].description"
      ],
      "lighthouse-core/audits/byte-efficiency/efficient-animated-content.js | title": [
        "audits[efficient-animated-content].title"
      ],
      "lighthouse-core/audits/byte-efficiency/efficient-animated-content.js | description": [
        "audits[efficient-animated-content].description"
      ],
      "lighthouse-core/audits/dobetterweb/dom-size.js | title": [
        "audits[dom-size].title"
      ],
      "lighthouse-core/audits/dobetterweb/dom-size.js | description": [
        "audits[dom-size].description"
      ],
      "lighthouse-core/audits/dobetterweb/dom-size.js | displayValue": [
        {
          "values": {
            "itemCount": 463
          },
          "path": "audits[dom-size].displayValue"
        }
      ],
      "lighthouse-core/audits/dobetterweb/dom-size.js | columnStatistic": [
        "audits[dom-size].details.headings[0].text"
      ],
      "lighthouse-core/audits/dobetterweb/dom-size.js | columnElement": [
        "audits[dom-size].details.headings[1].text"
      ],
      "lighthouse-core/audits/dobetterweb/dom-size.js | columnValue": [
        "audits[dom-size].details.headings[2].text"
      ],
      "lighthouse-core/audits/dobetterweb/dom-size.js | statisticDOMElements": [
        "audits[dom-size].details.items[0].statistic"
      ],
      "lighthouse-core/audits/dobetterweb/dom-size.js | statisticDOMDepth": [
        "audits[dom-size].details.items[1].statistic"
      ],
      "lighthouse-core/audits/dobetterweb/dom-size.js | statisticDOMWidth": [
        "audits[dom-size].details.items[2].statistic"
      ],
      "lighthouse-core/audits/seo/meta-description.js | failureTitle": [
        "audits[meta-description].title"
      ],
      "lighthouse-core/audits/seo/meta-description.js | description": [
        "audits[meta-description].description"
      ],
      "lighthouse-core/audits/seo/http-status-code.js | title": [
        "audits[http-status-code].title"
      ],
      "lighthouse-core/audits/seo/http-status-code.js | description": [
        "audits[http-status-code].description"
      ],
      "lighthouse-core/audits/seo/font-size.js | title": [
        "audits[font-size].title"
      ],
      "lighthouse-core/audits/seo/font-size.js | description": [
        "audits[font-size].description"
      ],
      "lighthouse-core/audits/seo/font-size.js | displayValue": [
        {
          "values": {
            "decimalProportion": 1
          },
          "path": "audits[font-size].displayValue"
        }
      ],
      "lighthouse-core/audits/seo/link-text.js | title": [
        "audits[link-text].title"
      ],
      "lighthouse-core/audits/seo/link-text.js | description": [
        "audits[link-text].description"
      ],
      "lighthouse-core/audits/seo/is-crawlable.js | failureTitle": [
        "audits[is-crawlable].title"
      ],
      "lighthouse-core/audits/seo/is-crawlable.js | description": [
        "audits[is-crawlable].description"
      ],
      "lighthouse-core/audits/seo/robots-txt.js | title": [
        "audits[robots-txt].title"
      ],
      "lighthouse-core/audits/seo/robots-txt.js | description": [
        "audits[robots-txt].description"
      ],
      "lighthouse-core/audits/seo/tap-targets.js | failureTitle": [
        "audits[tap-targets].title"
      ],
      "lighthouse-core/audits/seo/tap-targets.js | description": [
        "audits[tap-targets].description"
      ],
      "lighthouse-core/audits/seo/tap-targets.js | displayValue": [
        {
          "values": {
            "decimalProportion": 0.9411764705882353
          },
          "path": "audits[tap-targets].displayValue"
        }
      ],
      "lighthouse-core/audits/seo/tap-targets.js | tapTargetHeader": [
        "audits[tap-targets].details.headings[0].text"
      ],
      "lighthouse-core/audits/seo/tap-targets.js | overlappingTargetHeader": [
        "audits[tap-targets].details.headings[2].text"
      ],
      "lighthouse-core/audits/seo/hreflang.js | title": [
        "audits.hreflang.title"
      ],
      "lighthouse-core/audits/seo/hreflang.js | description": [
        "audits.hreflang.description"
      ],
      "lighthouse-core/audits/seo/plugins.js | title": [
        "audits.plugins.title"
      ],
      "lighthouse-core/audits/seo/plugins.js | description": [
        "audits.plugins.description"
      ],
      "lighthouse-core/audits/seo/canonical.js | title": [
        "audits.canonical.title"
      ],
      "lighthouse-core/audits/seo/canonical.js | description": [
        "audits.canonical.description"
      ],
      "lighthouse-core/audits/seo/manual/structured-data.js | title": [
        "audits[structured-data].title"
      ],
      "lighthouse-core/audits/seo/manual/structured-data.js | description": [
        "audits[structured-data].description"
      ],
      "lighthouse-core/config/default-config.js | performanceCategoryTitle": [
        "categories.performance.title"
      ],
      "lighthouse-core/config/default-config.js | a11yCategoryTitle": [
        "categories.accessibility.title"
      ],
      "lighthouse-core/config/default-config.js | a11yCategoryDescription": [
        "categories.accessibility.description"
      ],
      "lighthouse-core/config/default-config.js | a11yCategoryManualDescription": [
        "categories.accessibility.manualDescription"
      ],
      "lighthouse-core/config/default-config.js | seoCategoryTitle": [
        "categories.seo.title"
      ],
      "lighthouse-core/config/default-config.js | seoCategoryDescription": [
        "categories.seo.description"
      ],
      "lighthouse-core/config/default-config.js | seoCategoryManualDescription": [
        "categories.seo.manualDescription"
      ],
      "lighthouse-core/config/default-config.js | metricGroupTitle": [
        "categoryGroups.metrics.title"
      ],
      "lighthouse-core/config/default-config.js | loadOpportunitiesGroupTitle": [
        "categoryGroups[load-opportunities].title"
      ],
      "lighthouse-core/config/default-config.js | loadOpportunitiesGroupDescription": [
        "categoryGroups[load-opportunities].description"
      ],
      "lighthouse-core/config/default-config.js | budgetsGroupTitle": [
        "categoryGroups.budgets.title"
      ],
      "lighthouse-core/config/default-config.js | budgetsGroupDescription": [
        "categoryGroups.budgets.description"
      ],
      "lighthouse-core/config/default-config.js | diagnosticsGroupTitle": [
        "categoryGroups.diagnostics.title"
      ],
      "lighthouse-core/config/default-config.js | diagnosticsGroupDescription": [
        "categoryGroups.diagnostics.description"
      ],
      "lighthouse-core/config/default-config.js | pwaFastReliableGroupTitle": [
        "categoryGroups[pwa-fast-reliable].title"
      ],
      "lighthouse-core/config/default-config.js | pwaInstallableGroupTitle": [
        "categoryGroups[pwa-installable].title"
      ],
      "lighthouse-core/config/default-config.js | pwaOptimizedGroupTitle": [
        "categoryGroups[pwa-optimized].title"
      ],
      "lighthouse-core/config/default-config.js | a11yBestPracticesGroupTitle": [
        "categoryGroups[a11y-best-practices].title"
      ],
      "lighthouse-core/config/default-config.js | a11yBestPracticesGroupDescription": [
        "categoryGroups[a11y-best-practices].description"
      ],
      "lighthouse-core/config/default-config.js | a11yColorContrastGroupTitle": [
        "categoryGroups[a11y-color-contrast].title"
      ],
      "lighthouse-core/config/default-config.js | a11yColorContrastGroupDescription": [
        "categoryGroups[a11y-color-contrast].description"
      ],
      "lighthouse-core/config/default-config.js | a11yNamesLabelsGroupTitle": [
        "categoryGroups[a11y-names-labels].title"
      ],
      "lighthouse-core/config/default-config.js | a11yNamesLabelsGroupDescription": [
        "categoryGroups[a11y-names-labels].description"
      ],
      "lighthouse-core/config/default-config.js | a11yNavigationGroupTitle": [
        "categoryGroups[a11y-navigation].title"
      ],
      "lighthouse-core/config/default-config.js | a11yNavigationGroupDescription": [
        "categoryGroups[a11y-navigation].description"
      ],
      "lighthouse-core/config/default-config.js | a11yAriaGroupTitle": [
        "categoryGroups[a11y-aria].title"
      ],
      "lighthouse-core/config/default-config.js | a11yAriaGroupDescription": [
        "categoryGroups[a11y-aria].description"
      ],
      "lighthouse-core/config/default-config.js | a11yLanguageGroupTitle": [
        "categoryGroups[a11y-language].title"
      ],
      "lighthouse-core/config/default-config.js | a11yLanguageGroupDescription": [
        "categoryGroups[a11y-language].description"
      ],
      "lighthouse-core/config/default-config.js | a11yAudioVideoGroupTitle": [
        "categoryGroups[a11y-audio-video].title"
      ],
      "lighthouse-core/config/default-config.js | a11yAudioVideoGroupDescription": [
        "categoryGroups[a11y-audio-video].description"
      ],
      "lighthouse-core/config/default-config.js | a11yTablesListsVideoGroupTitle": [
        "categoryGroups[a11y-tables-lists].title"
      ],
      "lighthouse-core/config/default-config.js | a11yTablesListsVideoGroupDescription": [
        "categoryGroups[a11y-tables-lists].description"
      ],
      "lighthouse-core/config/default-config.js | seoMobileGroupTitle": [
        "categoryGroups[seo-mobile].title"
      ],
      "lighthouse-core/config/default-config.js | seoMobileGroupDescription": [
        "categoryGroups[seo-mobile].description"
      ],
      "lighthouse-core/config/default-config.js | seoContentGroupTitle": [
        "categoryGroups[seo-content].title"
      ],
      "lighthouse-core/config/default-config.js | seoContentGroupDescription": [
        "categoryGroups[seo-content].description"
      ],
      "lighthouse-core/config/default-config.js | seoCrawlingGroupTitle": [
        "categoryGroups[seo-crawl].title"
      ],
      "lighthouse-core/config/default-config.js | seoCrawlingGroupDescription": [
        "categoryGroups[seo-crawl].description"
      ]
    }
  },
  "stackPacks": []
}
