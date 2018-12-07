var bidderPatterns = {
  'AppNexus': [
    '.adnxs.com/jpt',
    '.adnxs.com/ut*/prebid'
  ],
  'Openx': [
    '.servedbyopenx.com/w/1.0/acj',
    '.openx.net/w/1.0/acj',
    '.openx.net/w/1.0/arj'
  ],
  'Pubmatic': [
    '.pubmatic.com/AdServer/AdCallAggregator',
    '.pubmatic.com/AdServer/AdServerServlet',
    '.pubmatic.com/translator'
  ],
  'Rubicon': [
    '.rubiconproject.com/a/api/fastlane.json',
    '.rubiconproject.com/a/api/ads.json'
  ],
  'Criteo': [
    '.criteo.com/delivery/rta/rta.js',
    'bidder.criteo.com/'
  ],
  'Conversant': [
    'web.hb.ad.cpe.dotomi.com/s2s/header',
    'media.msg.dotomi.com/s2s/header'
  ],
  'Amazon': [
    '.amazon-adsystem.com/e/dtb/bid'
  ],
  'AOL': [
    '.adtechus.com/pubapi*cmd=bid',
    '.adtech.advertising.com/pubapi*cmd=bid',
    '.adtech.de/pubapi*cmd=bid',
    '.adtechjp.com/pubapi*cmd=bid'
  ],
  'Sovrn': [
    '.lijit.com/rtb/bid'
  ],
  'Yieldbot': [
    '.yldbt.com/m/'
  ],
  'Sonobi': [
    '.sonobi.com/trinity.js'
  ],
  'Index': [
    '.casalemedia.com/cygnus',
    '.casalemedia.com/headertag'
  ],
  'Proximic': [
    '.zqtk.net/'
  ],
  'AudienceS': [
    '.revsci.net/pql'
  ],
  'Adform': [
    'adx.adform.net/adx/?rp=4'
  ],
  'WideOrbit': [
    '.atemda.com/JSAdservingMP.ashx'
  ],
  'PulsePoint': [
    'bid.contextweb.com/header'
  ],
  'Roxot': [
    'r.rxthdr.com/'
  ],
  'Komoona': [
    's.komoona.com/',
    'bidder.komoona.com/v1/GetSBids'
  ],
  'Widespace': [
    'engine.widespace.com/'
  ],
  'Mantis': [
    'mantodea.mantisadnetwork.com/'
  ],
  'Smart': [
    '.smartadserver.com/prebid'
  ],
  'RhythmOne': [
    'tag.1rx.io/rmp/*/*/mvo'
  ],
  'DFP': [
    '.doubleclick.net/gampad/ads'
  ],
  'Aardvark': [
    'thor.rtk.io/*/*/aardvark',
    'bidder.rtk.io/'
  ],
  'Adblade': [
    'rtb.adblade.com/prebidjs/bid'
  ],
  'AdBund': [
    'us-east-engine.adbund.xyz/prebid/ad/get',
    'us-west-engine.adbund.xyz/prebid/ad/get'
  ],
  'AdButler': [
    'servedbyadbutler.com/adserve/;type=hbr;'
  ],
  'Adequant': [
    'rex.adequant.com/rex/c2s_prebid?'
  ],
  'AdKernel': [
    'cpm.metaadserving.com/rtbg'
  ],
  'AdMedia': [
    'b.admedia.com/banner/prebid/bidder/?'
  ],
  'Admixer': [
    'inv-nets.admixer.net/prebid.aspx'
  ],
  'Bidfluence': [
    'bidfluence.azureedge.net/forge.js'
  ],
  'Brightcom': [
    'hb.iselephant.com/auc/ortb'
  ],
  'Centro': [
    '.brand-server.com/hb'
  ],
  'DistrictM': [
    'prebid.districtm.ca/lib.js'
  ],
  'Fidelity': [
    'x.fidelity-media.com/delivery/hb.php?'
  ],
  'GetIntent': [
    'cdn.adhigh.net/adserver/hb.js'
  ],
  'GumGum': [
    'g2.gumgum.com/hbid/imp'
  ],
  'HIRO Media': [
    'hb-rtb.ktdpublishers.com/bid/get'
  ],
  'JCM': [
    'media.adfrontiers.com/pq?t=hb&bids='
  ],
  'Komoona': [
    'bidder.komoona.com/v1/GetSBids'
  ],
  'Lifestreet': [
    'ads.lfstmedia.com/getad?'
  ],
  'Meme Global': [
    'stinger.memeglobal.com/api/v1/services/prebid'
  ],
  'NginAd': [
    'server.nginad.com/bid/rtb?'
  ],
  'Piximedia': [
    'static.adserver.pm/prebid'
  ],
  'Sekindo': [
    'hb.sekindo.com/live/liveView.php?'
  ],
  'ServerBid': [
    'e.serverbid.com/api/v2'
  ],
  'Sharethrough': [
    'btlr.sharethrough.com/header-bid/v1?'
  ],
  'SmartyAds': [
    'ssp-nj.webtradehub.com/?'
  ],
  'SpringServe': [
    'bidder.springserve.com/display/hbid?'
  ],
  'StickyAdsTV': [
    'cdn.stickyadstv.com/mustang/mustang.min.js',
    'cdn.stickyadstv.com/prime-time/intext-roll.min.js',
    'cdn.stickyadstv.com/prime-time/screen-roll.min.js'
  ],
  'TapSense': [
    'ads04.tapsense.com/ads/headerad'
  ],
  'ThoughtLeadr': [
    'cdn.thoughtleadr.com/v4'
  ],
  'TripleLift': [
    'tlx.3lift.com/header/auction?'
  ],
  'Twenga': [
    'rtb.t.c4tw.net/Bid?'
  ],
  'Underdog Media': [
    'udmserve.net/udm/img.fetch?tid=1;dt=9;'
  ],
  'Vertamedia': [
    'rtb.vertamedia.com/hb'
  ],
  'Vertoz': [
    'banner.vrtzads.com/vzhbidder/bid?'
  ],
  'Xhb': [
    'ib.adnxs.com/jpt?'
  ],
  'Atomx': [
    'p.ato.mx/placement'
  ],
  'Facebook': [
    'an.facebook.com/v2/placementbid.json'
  ],
  'Inneractive': [
    'ad-tag.inner-active.mobi/simpleM2M/requestJsonAd'
  ],
  'Innity': [
    'as.innity.com/synd/?cb='
  ],
  'Beachfront': [
    'reachms.bfmio.com/bid.json?exchange_id='
  ],
  'HuddledMasses': [
    'huddledmassessupply.com/?banner_id='
  ],
  'Trion': [
    'in-appadvertising.com/api/bidRequest?'
  ],
  'Pubgears': [
    'b.pubgears.com/nucleus/request'
  ],
  'AdSupply': [
    'engine.4dsply.com/banner.engine?id='
  ],
  'Quantcast': [
    'global.qc.rtb.quantserve.com/qchb'
  ],
  'Adyoulike': [
    'hb-api.omnitagjs.com/hb-api/prebid'
  ],
  'Carambola': [
    'hb.carambo.la/hb'
  ],
  'Cox': [
    'ad.afy11.net/ad'
  ],
  'EPlanning': [
    '.e-planning.net/layers/t_pbjs_'
  ],
  'Unruly': [
    'targeting.unrulymedia.com/prebid'
  ],
  'Spotx': [
    'search.spotxchange.com/openrtb'
  ],
  'ucfunnel': [
    'agent.aralego.com/header?'
  ],
  'Kargo': [
    'krk.kargo.com/api/v1/bid'
  ],
  'C1X': [
    'ht-integration.c1exchange.com/ht',
    'ht.c1exchange.com/ht'
  ],
  'MobFox': [
    'my.mobfox.com/request.php'
  ],
  'imonomy': [
    'b.imonomy.com/openrtb/hb'
  ],
  'Justpremium': [
    'cdn-cf.justpremium.com/js'
  ],
  'Marsmedia': [
    'bid306.rtbsrv.com/bidder/?bid=3mhdom'
  ],
  'Essens': [
    'bid.essrtb.com/bid/prebid_call'
  ],
  'Platform.io': [
    'js.adx1.com/pb_ortb.js?cb='
  ],
  'Pollux': [
    'adn.plxnt.com/prebid'
  ],
  'FeatureForward': [
    'prmbdr.featureforward.com/newbidder/bidder1_prm.php?'
  ],
  'Prebid Server': [
    'prebid.adnxs.com/pbs/v1/auction'
  ],
  'ImproveDigital': [
    'ad.360yield.com/hb'
  ],
  'AerServ': [
    '.aerserv.com/as'
  ],
  'Adxcg': [
    '.adxcg.net/get/adi'
  ],
  'Yieldmo': [
    'bid.yieldmo.com/exchange/prebid'
  ],
  'Tremor': [
    '.ads.tremorhub.com/ad/tag'
  ],
  'Orbitsoft': [
    'adserver.com/ads/show/hb'
  ],
  'Kumma': [
    'hb.kumma.com/'
  ],
  'Trustx': [
    'sofia.trustx.org/hb'
  ],
  'Realvu': [
    'ac.realvu.net/realvu_boost.js'
  ],
  'NanoInteractive': [
    'tmp.audiencemanager.de/hb'
  ],
  'AdOcean': [
    '.adocean.pl/ad.json'
  ],
  'Ad4Game': [
    '.ad4game.com/v1/bid'
  ],
  'AdKernelAdn': [
    'tag.adkernel.com/',
    'dsp-staging.adkernel.com/'
  ],
  '33Across': [
    'ssc.33across.com/api/v1/hb'
  ],
  'Bridgewell': [
    'rec.scupio.com/recweb/prebid.aspx'
  ],
  'SomoAudience': [
    'publisher-east.mobileadtrading.com/rtb/bid?s='
  ],
  'Optimatic': [
    'mg-bid.optimatic.com/adrequest/'
  ],
  'Rtbdemand': [
    'bidding.rtbdemand.com/hb'
  ],
  'Arteebee': [
    'bidder.mamrtb.com/rtb/bid/arteebee?type=json&register=0'
  ],
  'Undertone': [
    'hb.undertone.com/hb'
  ],
  'RTB House': [
    '.creativecdn.com/bidder/prebid/bids'
  ],
  'Readpeak': [
    'app.readpeak.com/header/prebid'
  ],
  'Yieldone': [
    'y.one.impact-ad.jp/h_bid'
  ],
  'FreeWheel': [
    'ads.stickyadstv.com/www/delivery/swfIndex.php'
  ],
  'IQM': [
    'pbd.bids.iqm.com/'
  ],
  'Rxrtb': [
    'bid.rxrtb.bid/'
  ],
  'ServerBid Server': [
    'e.serverbid.com/api/v2'
  ],
  'Gjirafa': [
    'gjc.gjirafa.com/Home/GetBid'
  ],
  'Nasmedia Admixer': [
    'adn.admixer.co.kr/prebid'
  ],
  'Media.net': [
    'prebid.media.net/rtb/prebid'
  ],
  'Vi': [
    'pb.vi-serve.com/prebid/bid'
  ],
  'InSkin': [
    'mfad.inskinad.com/api/v2'
  ],
  'Colossus SSP': [
    'colossusssp.com/?c=o&m=multi'
  ],
  'Optimera': [
    's3.amazonaws.com/elasticbeanstalk-us-east-1-397719490216/json/client/'
  ],
  'RockYou': [
    'tas.rockyou.net/servlet/rotator/'
  ],
  'Vidazoo': [
    'prebid.cliipa.com/'
  ],
  'Yieldlab': [
    'ad.yieldlab.net/'
  ],
  'Adgeneration': [
    'd.socdm.com/adsv/v1',
    'api-test.scaleout.jp/adsv/v1'
  ],
  'Dentsu Aegis Network Marketplace': [
    'ads.danmarketplace.com/hb'
  ],
  'Xendiz': [
    'prebid.xendiz.com/'
  ],
  'Peak226': [
    'a.ad216.com/header_bid'
  ],
  'IAS': [
    'pixel.adsafeprotected.com/services/pub'
  ],
  'Gamma SSP': [
    'hb.gammaplatform.com/'
  ],
  'E-Planning': [
    'ads.us.e-planning.net/hb'
  ],
  'Quantum': [
    's.sspqns.com/hb'
  ],
  'FairTrade': [
    'pool.fair-trademedia.com/hb'
  ],
  'Vuble': [
    'player.mediabong.net/prebid/request'
  ],
  'Invibes': [
    'bid.videostep.com/Bid/VideoAdContent'
  ],
  'Content Ignite': [
    'serve.connectignite.com/adserve'
  ],
  'Oneplanetonly': [
    'show.oneplanetonly.com/prebid'
  ],
  'Adtelligent': [
    'hb.adtelligent.com/auction/'
  ],
  'EngageBDR': [
    'dsp.bnmla.com/hb'
  ],
  'Clickforce': [
    'ad.doublemax.net/adserver/prebid.json'
  ],
  'Madvertise': [
    'mobile.mng-ads.com/'
  ],
  'LKQD': [
    'ssp.lkqd.net/ad'
  ],
  'SARA': [
    'ad.sara.media/hb'
  ],
  'RTBdemandADK': [
    'cpm.metaadserving.com/'
  ],
  'VIS.X': [
    't.visx.net/hb'
  ],
  'DigitalGarageAds': [
    'ads-tr.bigmining.com/ad/p/bid'
  ],
  'Consumable': [
    'adserver-us.adtech.advertising.com/'
  ],
  'AdMatic': [
    'ads4.admatic.com.tr/prebid/v3/bidrequest'
  ],
  'OneTag': [
    'onetag-sys.com/prebid-request'
  ],
  'Brainy': [
    'proparm.co.jp/ssp/p/pbjs'
  ],
  'GXOne': [
    'ads.gx1as.com/hb'
  ],
  'Clickonometrics': [
    'delivery.clickonometrics.pl/ortb/prebid/bid'
  ],
  'Gamoshi Gambid': [
    'rtb.gambid.io/r/*/bidr'
  ],
  'Papyrus': [
    'prebid.papyrus.global/'
  ],
  'Andbeyond': [
    'cpm.metaadserving.com/'
  ],
  'AdSpirit': [
    'n1test.adspirit.de/rtb/getbid.php',
    'connected-by.connectad.io/rtb/getbid.php',
    'dsp.xapads.com/rtb/getbid.php'
  ],
  'PlaygroundXYZ': [
    'ads.playground.xyz/host-config/prebid'
  ],
  'Fyber': [
    'ad-tag.inner-active.mobi/simpleM2M/requestJsonAd'
  ],
  'Polymorph': [
    'api.adsnative.com/v1/ad-template.json'
  ],
  'DistrictmDMX': [
    'dmx.districtm.io/b/v1'
  ],
  'My6Sense': [
    'papi.mynativeplatform.com/pub2/web/v1.15.0/hbwidget.json'
  ],
  'Sortable': [
    'c.deployads.com/openrtb2/auction'
  ],
  'AdUpTech': [
    'rtb.d.adup-tech.com/prebid'
  ],
  'UOL': [
    'prebid.adilligo.com/v1/prebid.json'
  ],
  'Zedo': [
   'z2.zedo.com/asw/fmb.json'
  ],
  'InteractiveOffers': [
    'connect.interactiveoffers.com/api/endpoint.php'
  ],
  'AJA': [
    'ad.as.amanad.adtdp.com/v2/prebid'
  ]
};
