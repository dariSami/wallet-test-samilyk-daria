LavaPack.loadBundle([[7235,{"@ethersproject/contracts":819,"@ethersproject/providers":857,"@metamask/metamask-eth-abis":2772},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.fetchERC1155Balance=async function(e,t,n,s){if(!t||!n)return null;const a=new i.Web3Provider(s),c=new o.Contract(e,r.abiERC1155,a),l=c?c.balanceOf(t,n):Promise.resolve();return await l},n.fetchTokenBalance=async function(e,t,n){const s=new i.Web3Provider(n),a=new o.Contract(e,r.abiERC20,s),c=a?a.balanceOf(t):Promise.resolve();return await c},n.getTokenIdParam=function(e={}){return e?.args?._tokenId?.toString()??e?.args?.id?.toString()};var r=e("@metamask/metamask-eth-abis"),o=e("@ethersproject/contracts"),i=e("@ethersproject/providers")}}},{package:"$root$",file:"shared/lib/token-util.ts"}],[7245,{},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.sanitizeMessageRecursively=function e(t,n,r){const o={},i=n[r];if(!i)return t;for(const r of i){const{name:i,type:s}=r;t[i]!==undefined&&(n[s]?o[i]=e(t[i],n,s):o[i]=t[i])}return o}}}},{package:"$root$",file:"shared/lib/typed-signature.ts"}],[7248,{"../constants/metametrics":7070,"@metamask/utils":3770},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.hasNonZeroTokenBalance=n.hasNonZeroMultichainBalance=n.getWalletFundsObtainedEventProperties=n.getMidnightISOTimestamp=n.getAmountBucket=n.AmountBucket=void 0;var r=e("@metamask/utils"),o=e("../constants/metametrics");const i=n.AmountBucket={Low:"<$100",Medium:"$100-1000",High:">$1000"},s=e=>{const t=Number(e);return t<100?i.Low:t<=1e3?i.Medium:i.High};n.getAmountBucket=s;const a=()=>{const e=new Date;return e.setHours(0,0,0,0),e.toISOString()};n.getMidnightISOTimestamp=a;n.hasNonZeroTokenBalance=(e={})=>{for(const t of Object.values(e))for(const e of Object.values(t||{}))for(const t of Object.values(e||{}))if((0,r.hexToNumber)(t||"0x0")>0)return!0;return!1};n.hasNonZeroMultichainBalance=(e={})=>{for(const t of Object.values(e))for(const e of Object.values(t||{}))if(e?.amount&&"0"!==e.amount)return!0;return!1};n.getWalletFundsObtainedEventProperties=({chainId:e,amountUsd:t})=>({event:o.MetaMetricsEventName.WalletFundsObtained,timestamp:a(),properties:{chain_id_caip:(0,r.toCaipChainId)(r.KnownCaipNamespace.Eip155,e.toString()),funding_amount_usd:s(t)}})}}},{package:"$root$",file:"shared/lib/wallet-funds-obtained-metric.ts"}],[7249,{},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.UI_NOTIFICATIONS=void 0;n.UI_NOTIFICATIONS={}}}},{package:"$root$",file:"shared/notifications/index.ts"}],[73,{"@metamask/messenger":2767},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.getAddressBookControllerMessenger=function(e){return new r.Messenger({namespace:"AddressBookController",parent:e})};var r=e("@metamask/messenger")}}},{package:"$root$",file:"app/scripts/controller-init/messengers/address-book-controller-messenger.ts"}],[74,{"@metamask/messenger":2767},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.getAlertControllerMessenger=function(e){const t=new r.Messenger({namespace:"AlertController",parent:e});return e.delegate({messenger:t,actions:["AccountsController:getSelectedAccount"],events:["AccountsController:selectedAccountChange"]}),t};var r=e("@metamask/messenger")}}},{package:"$root$",file:"app/scripts/controller-init/messengers/alert-controller-messenger.ts"}],[75,{"@metamask/messenger":2767},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.getAnnouncementControllerMessenger=function(e){return new r.Messenger({namespace:"AnnouncementController",parent:e})};var r=e("@metamask/messenger")}}},{package:"$root$",file:"app/scripts/controller-init/messengers/announcement-controller-messenger.ts"}],[76,{"@metamask/messenger":2767},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.getAppMetadataControllerMessenger=function(e){return new r.Messenger({namespace:"AppMetadataController",parent:e})};var r=e("@metamask/messenger")}}},{package:"$root$",file:"app/scripts/controller-init/messengers/app-metadata-controller-messenger.ts"}],[77,{"@metamask/messenger":2767},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.getAppStateControllerMessenger=function(e){const t=new r.Messenger({namespace:"AppStateController",parent:e});return e.delegate({messenger:t,actions:["ApprovalController:addRequest","ApprovalController:acceptRequest","KeyringController:getState","PreferencesController:getState","ProfileMetricsController:skipInitialDelay"],events:["KeyringController:unlock","PreferencesController:stateChange"]}),t};var r=e("@metamask/messenger")}}},{package:"$root$",file:"app/scripts/controller-init/messengers/app-state-controller-messenger.ts"}],[78,{"@metamask/messenger":2767},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.getApprovalControllerMessenger=function(e){return new r.Messenger({namespace:"ApprovalController",parent:e})};var r=e("@metamask/messenger")}}},{package:"$root$",file:"app/scripts/controller-init/messengers/approval-controller-messenger.ts"}],[79,{"@metamask/messenger":2767},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.getAssetsContractControllerInitMessenger=function(e){const t=new r.Messenger({namespace:"AssetsContractControllerInit",parent:e});return e.delegate({messenger:t,actions:["NetworkController:getNetworkClientById","NetworkController:getState"],events:[]}),t},n.getAssetsContractControllerMessenger=function(e){const t=new r.Messenger({namespace:"AssetsContractController",parent:e});return e.delegate({messenger:t,actions:["NetworkController:getNetworkClientById","NetworkController:getNetworkConfigurationByNetworkClientId","NetworkController:getSelectedNetworkClient","NetworkController:getState"],events:["PreferencesController:stateChange","NetworkController:networkDidChange"]}),t};var r=e("@metamask/messenger")}}},{package:"$root$",file:"app/scripts/controller-init/messengers/assets/assets-contract-controller-messenger.ts"}],[80,{"@metamask/messenger":2767},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.getAssetsControllerInitMessenger=function(e){const t=new r.Messenger({namespace:"AssetsControllerInit",parent:e});return e.delegate({messenger:t,actions:["AuthenticationController:getBearerToken","SnapController:handleRequest","PreferencesController:getState"]}),t},n.getAssetsControllerMessenger=function(e){const t=new r.Messenger({namespace:"AssetsController",parent:e});return e.delegate({messenger:t,actions:["AccountTreeController:getAccountsFromSelectedAccountGroup","NetworkEnablementController:getState","NetworkController:getState","NetworkController:getNetworkClientById","TokenListController:getState","BackendWebSocketService:subscribe","BackendWebSocketService:getConnectionInfo","BackendWebSocketService:findSubscriptionsByChannelPrefix","SnapController:handleRequest","SnapController:getRunnableSnaps","PermissionController:getPermissions"],events:["AccountTreeController:selectedAccountGroupChange","ClientController:stateChange","NetworkEnablementController:stateChange","KeyringController:lock","KeyringController:unlock","NetworkController:stateChange","BackendWebSocketService:connectionStateChanged","AccountsController:accountBalancesUpdated","PermissionController:stateChange","PreferencesController:stateChange"]}),t};var r=e("@metamask/messenger")}}},{package:"$root$",file:"app/scripts/controller-init/messengers/assets/assets-controller-messenger.ts"}],[81,{"@metamask/messenger":2767},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.getClientControllerMessenger=function(e){return new r.Messenger({namespace:"ClientController",parent:e})};var r=e("@metamask/messenger")}}},{package:"$root$",file:"app/scripts/controller-init/messengers/assets/client-controller-messenger.ts"}],[82,{"./assets-contract-controller-messenger":79,"./assets-controller-messenger":80,"./client-controller-messenger":81,"./network-enablement-controller-messenger":83,"./network-order-controller-messenger":84,"./nft-controller-messenger":85,"./nft-detection-controller-messenger":86,"./token-rates-controller-messenger":87},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"getAssetsContractControllerInitMessenger",{enumerable:!0,get:function(){return s.getAssetsContractControllerInitMessenger}}),Object.defineProperty(n,"getAssetsContractControllerMessenger",{enumerable:!0,get:function(){return s.getAssetsContractControllerMessenger}}),Object.defineProperty(n,"getAssetsControllerInitMessenger",{enumerable:!0,get:function(){return l.getAssetsControllerInitMessenger}}),Object.defineProperty(n,"getAssetsControllerMessenger",{enumerable:!0,get:function(){return l.getAssetsControllerMessenger}}),Object.defineProperty(n,"getClientControllerMessenger",{enumerable:!0,get:function(){return u.getClientControllerMessenger}}),Object.defineProperty(n,"getNetworkEnablementControllerInitMessenger",{enumerable:!0,get:function(){return c.getNetworkEnablementControllerInitMessenger}}),Object.defineProperty(n,"getNetworkEnablementControllerMessenger",{enumerable:!0,get:function(){return c.getNetworkEnablementControllerMessenger}}),Object.defineProperty(n,"getNetworkOrderControllerMessenger",{enumerable:!0,get:function(){return a.getNetworkOrderControllerMessenger}}),Object.defineProperty(n,"getNftControllerInitMessenger",{enumerable:!0,get:function(){return o.getNftControllerInitMessenger}}),Object.defineProperty(n,"getNftControllerMessenger",{enumerable:!0,get:function(){return o.getNftControllerMessenger}}),Object.defineProperty(n,"getNftDetectionControllerMessenger",{enumerable:!0,get:function(){return i.getNftDetectionControllerMessenger}}),Object.defineProperty(n,"getTokenRatesControllerInitMessenger",{enumerable:!0,get:function(){return r.getTokenRatesControllerInitMessenger}}),Object.defineProperty(n,"getTokenRatesControllerMessenger",{enumerable:!0,get:function(){return r.getTokenRatesControllerMessenger}});var r=e("./token-rates-controller-messenger"),o=e("./nft-controller-messenger"),i=e("./nft-detection-controller-messenger"),s=e("./assets-contract-controller-messenger"),a=e("./network-order-controller-messenger"),c=e("./network-enablement-controller-messenger"),l=e("./assets-controller-messenger"),u=e("./client-controller-messenger")}}},{package:"$root$",file:"app/scripts/controller-init/messengers/assets/index.ts"}],[83,{"@metamask/messenger":2767},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.getNetworkEnablementControllerInitMessenger=function(e){const t=new r.Messenger({namespace:"NetworkEnablementControllerInit",parent:e});return e.delegate({messenger:t,actions:["AccountTreeController:getAccountsFromSelectedAccountGroup"],events:["AccountsController:selectedAccountChange","AccountTreeController:selectedAccountGroupChange"]}),t},n.getNetworkEnablementControllerMessenger=function(e){const t=new r.Messenger({namespace:"NetworkEnablementController",parent:e});return e.delegate({messenger:t,actions:["NetworkController:getState","MultichainNetworkController:getState"],events:["NetworkController:networkAdded","NetworkController:networkRemoved","NetworkController:stateChange","TransactionController:transactionSubmitted"]}),t};var r=e("@metamask/messenger")}}},{package:"$root$",file:"app/scripts/controller-init/messengers/assets/network-enablement-controller-messenger.ts"}],[84,{"@metamask/messenger":2767},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.getNetworkOrderControllerMessenger=function(e){const t=new r.Messenger({namespace:"NetworkOrderController",parent:e});return e.delegate({messenger:t,events:["NetworkController:stateChange","NetworkController:networkRemoved"],actions:["NetworkController:getState","NetworkController:setActiveNetwork"]}),t};var r=e("@metamask/messenger")}}},{package:"$root$",file:"app/scripts/controller-init/messengers/assets/network-order-controller-messenger.ts"}],[85,{"@metamask/messenger":2767},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.getNftControllerInitMessenger=function(e){const t=new r.Messenger({namespace:"NftControllerInit",parent:e});return e.delegate({messenger:t,actions:["MetaMetricsController:trackEvent"]}),t},n.getNftControllerMessenger=function(e){const t=new r.Messenger({namespace:"NftController",parent:e});return e.delegate({messenger:t,events:["PreferencesController:stateChange","AccountsController:selectedEvmAccountChange"],actions:["ApprovalController:addRequest","NetworkController:getNetworkClientById","AccountsController:getSelectedAccount","AccountsController:getAccount","AssetsContractController:getERC721AssetName","AssetsContractController:getERC721AssetSymbol","AssetsContractController:getERC721TokenURI","AssetsContractController:getERC721OwnerOf","AssetsContractController:getERC1155BalanceOf","AssetsContractController:getERC1155TokenURI","NetworkController:findNetworkClientIdByChainId","PhishingController:bulkScanUrls"]}),t};var r=e("@metamask/messenger")}}},{package:"$root$",file:"app/scripts/controller-init/messengers/assets/nft-controller-messenger.ts"}],[86,{"@metamask/messenger":2767},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.getNftDetectionControllerMessenger=function(e){const t=new r.Messenger({namespace:"NftDetectionController",parent:e});return e.delegate({messenger:t,events:["NetworkController:stateChange","PreferencesController:stateChange"],actions:["ApprovalController:addRequest","NetworkController:getState","NetworkController:getNetworkClientById","AccountsController:getSelectedAccount","NetworkController:findNetworkClientIdByChainId","PhishingController:bulkScanUrls"]}),t};var r=e("@metamask/messenger")}}},{package:"$root$",file:"app/scripts/controller-init/messengers/assets/nft-detection-controller-messenger.ts"}],[87,{"@metamask/messenger":2767},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.getTokenRatesControllerInitMessenger=function(e){const t=new r.Messenger({namespace:"TokenRatesControllerInit",parent:e});return e.delegate({messenger:t,actions:["PreferencesController:getState"],events:["PreferencesController:stateChange"]}),t},n.getTokenRatesControllerMessenger=function(e){const t=new r.Messenger({namespace:"TokenRatesController",parent:e});return e.delegate({messenger:t,actions:["TokensController:getState","NetworkController:getState","NetworkEnablementController:getState"],events:["TokensController:stateChange","NetworkController:stateChange"]}),t};var r=e("@metamask/messenger")}}},{package:"$root$",file:"app/scripts/controller-init/messengers/assets/token-rates-controller-messenger.ts"}],[88,{"@metamask/messenger":2767},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.getBridgeControllerInitMessenger=function(e){const t=new r.Messenger({namespace:"BridgeControllerInit",parent:e});return e.delegate({messenger:t,actions:["MetaMetricsController:trackEvent"]}),t},n.getBridgeControllerMessenger=function(e){const t=new r.Messenger({namespace:"BridgeController",parent:e});return e.delegate({messenger:t,actions:["AccountsController:getAccountByAddress","SnapController:handleRequest","NetworkController:getNetworkClientById","NetworkController:findNetworkClientIdByChainId","TokenRatesController:getState","MultichainAssetsRatesController:getState","RemoteFeatureFlagController:getState","CurrencyRateController:getState","AuthenticationController:getBearerToken"]}),t};var r=e("@metamask/messenger")}}},{package:"$root$",file:"app/scripts/controller-init/messengers/bridge-controller-messenger.ts"}],[89,{"@metamask/messenger":2767},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.getBridgeStatusControllerMessenger=function(e){const t=new r.Messenger({namespace:"BridgeStatusController",parent:e});return e.delegate({messenger:t,actions:["AccountsController:getAccountByAddress","AuthenticationController:getBearerToken","NetworkController:getNetworkClientById","NetworkController:findNetworkClientIdByChainId","NetworkController:getState","KeyringController:signTypedMessage","BridgeController:trackUnifiedSwapBridgeEvent","BridgeController:stopPollingForQuotes","GasFeeController:getState","SnapController:handleRequest","TransactionController:getState","TransactionController:isAtomicBatchSupported","TransactionController:addTransaction","TransactionController:estimateGasFee","TransactionController:updateTransaction"],events:["TransactionController:transactionFailed","TransactionController:transactionConfirmed"]}),t};var r=e("@metamask/messenger")}}},{package:"$root$",file:"app/scripts/controller-init/messengers/bridge-status-controller-messenger.ts"}],[90,{"@metamask/messenger":2767},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.getClaimsControllerInitMessenger=function(e){const t=new r.Messenger({namespace:"ClaimsControllerInit",parent:e});return e.delegate({messenger:t,events:[],actions:[]}),t},n.getClaimsControllerMessenger=function(e){const t=new r.Messenger({namespace:"ClaimsController",parent:e});return e.delegate({messenger:t,actions:["ClaimsService:fetchClaimsConfigurations","ClaimsService:getClaimsApiUrl","ClaimsService:getRequestHeaders","ClaimsService:generateMessageForClaimSignature","ClaimsService:getClaims","KeyringController:signPersonalMessage"],events:[]}),t};var r=e("@metamask/messenger")}}},{package:"$root$",file:"app/scripts/controller-init/messengers/claims/claims-controller-messenger.ts"}],[909,{"@firebase/component":910,"@firebase/logger":912,"@firebase/util":915,idb:5444},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"FirebaseError",{enumerable:!0,get:function(){return i.FirebaseError}}),n._DEFAULT_ENTRY_NAME=n.SDK_VERSION=void 0,n._addComponent=K,n._addOrOverwriteComponent=function(e,t){e.container.addOrOverwriteComponent(t)},n._apps=void 0,n._clearComponents=function(){U.clear()}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */,n._components=void 0,n._getProvider=H,n._isFirebaseApp=W,n._isFirebaseServerApp=function(e){return e.settings!==undefined},n._registerComponent=V,n._removeServiceInstance=function(e,t,n=$){H(e,t).clearInstance(n)},n._serverApps=void 0,n.deleteApp=Q,n.getApp=function(e=$){const t=x.get(e);if(!t&&e===$&&(0,i.getDefaultAppConfig)())return Y();if(!t)throw q.create("no-app",{appName:e});return t},n.getApps=function(){return Array.from(x.values())},n.initializeApp=Y,n.initializeServerApp=function(e,t){if((0,i.isBrowser)()&&!(0,i.isWebWorker)())throw q.create("invalid-server-app-environment");t.automaticDataCollectionEnabled===undefined&&(t.automaticDataCollectionEnabled=!1);let n;n=W(e)?e.options:e;const o=Object.assign(Object.assign({},t),n);o.releaseOnDeref!==undefined&&delete o.releaseOnDeref;if(t.releaseOnDeref!==undefined&&"undefined"==typeof FinalizationRegistry)throw q.create("finalization-registry-not-supported",{});const s=""+(c=JSON.stringify(o),[...c].reduce((e,t)=>Math.imul(31,e)+t.charCodeAt(0)|0,0)),a=F.get(s);var c;if(a)return a.incRefCount(t.releaseOnDeref),a;const l=new r.ComponentContainer(s);for(const e of U.values())l.addComponent(e);const u=new J(n,t,s,l);return F.set(s,u),u},n.onLog=function(e,t){if(null!==e&&"function"!=typeof e)throw q.create("invalid-log-argument");(0,o.setUserLogHandler)(e,t)},n.registerVersion=Z,n.setLogLevel=function(e){(0,o.setLogLevel)(e)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */;var r=e("@firebase/component"),o=e("@firebase/logger"),i=e("@firebase/util"),s=e("idb");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class a{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null}).filter(e=>e).join(" ")}}const c="@firebase/app",l="0.10.18",u=new o.Logger("@firebase/app"),d="@firebase/app-compat",f="@firebase/analytics-compat",p="@firebase/analytics",g="@firebase/app-check-compat",h="@firebase/app-check",m="@firebase/auth",b="@firebase/auth-compat",v="@firebase/database",w="@firebase/data-connect",y="@firebase/database-compat",C="@firebase/functions",k="@firebase/functions-compat",S="@firebase/installations",_="@firebase/installations-compat",E="@firebase/messaging",M="@firebase/messaging-compat",T="@firebase/performance",I="@firebase/performance-compat",O="@firebase/remote-config",A="@firebase/remote-config-compat",N="@firebase/storage",P="@firebase/storage-compat",j="@firebase/firestore",D="@firebase/vertexai",R="@firebase/firestore-compat",L="firebase",$=n._DEFAULT_ENTRY_NAME="[DEFAULT]",B={[c]:"fire-core",[d]:"fire-core-compat",[p]:"fire-analytics",[f]:"fire-analytics-compat",[h]:"fire-app-check",[g]:"fire-app-check-compat",[m]:"fire-auth",[b]:"fire-auth-compat",[v]:"fire-rtdb",[w]:"fire-data-connect",[y]:"fire-rtdb-compat",[C]:"fire-fn",[k]:"fire-fn-compat",[S]:"fire-iid",[_]:"fire-iid-compat",[E]:"fire-fcm",[M]:"fire-fcm-compat",[T]:"fire-perf",[I]:"fire-perf-compat",[O]:"fire-rc",[A]:"fire-rc-compat",[N]:"fire-gcs",[P]:"fire-gcs-compat",[j]:"fire-fst",[R]:"fire-fst-compat",[D]:"fire-vertex","fire-js":"fire-js",[L]:"fire-js-all"},x=n._apps=new Map,F=n._serverApps=new Map,U=n._components=new Map;function K(e,t){try{e.container.addComponent(t)}catch(n){u.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function V(e){const t=e.name;if(U.has(t))return u.debug(`There were multiple attempts to register component ${t}.`),!1;U.set(t,e);for(const t of x.values())K(t,e);for(const t of F.values())K(t,e);return!0}function H(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function W(e){return e.options!==undefined}const z={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},q=new i.ErrorFactory("app","Firebase",z);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class G{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.Component("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw q.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J extends G{constructor(e,t,n,r){const o=t.automaticDataCollectionEnabled!==undefined&&t.automaticDataCollectionEnabled,i={name:n,automaticDataCollectionEnabled:o};if(e.apiKey!==undefined)super(e,i,r);else{super(e.options,i,r)}this._serverConfig=Object.assign({automaticDataCollectionEnabled:o},t),this._finalizationRegistry=null,"undefined"!=typeof FinalizationRegistry&&(this._finalizationRegistry=new FinalizationRegistry(()=>{this.automaticCleanup()})),this._refCount=0,this.incRefCount(this._serverConfig.releaseOnDeref),this._serverConfig.releaseOnDeref=undefined,t.releaseOnDeref=undefined,Z(c,l,"serverapp")}toJSON(){return undefined}get refCount(){return this._refCount}incRefCount(e){this.isDeleted||(this._refCount++,e!==undefined&&null!==this._finalizationRegistry&&this._finalizationRegistry.register(e,this))}decRefCount(){return this.isDeleted?0:--this._refCount}automaticCleanup(){Q(this)}get settings(){return this.checkDestroyed(),this._serverConfig}checkDestroyed(){if(this.isDeleted)throw q.create("server-app-deleted")}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */n.SDK_VERSION="11.2.0";function Y(e,t={}){let n=e;if("object"!=typeof t){t={name:t}}const o=Object.assign({name:$,automaticDataCollectionEnabled:!1},t),s=o.name;if("string"!=typeof s||!s)throw q.create("bad-app-name",{appName:String(s)});if(n||(n=(0,i.getDefaultAppConfig)()),!n)throw q.create("no-options");const a=x.get(s);if(a){if((0,i.deepEqual)(n,a.options)&&(0,i.deepEqual)(o,a.config))return a;throw q.create("duplicate-app",{appName:s})}const c=new r.ComponentContainer(s);for(const e of U.values())c.addComponent(e);const l=new G(n,o,c);return x.set(s,l),l}async function Q(e){let t=!1;const n=e.name;if(x.has(n))t=!0,x.delete(n);else if(F.has(n)){e.decRefCount()<=0&&(F.delete(n),t=!0)}t&&(await Promise.all(e.container.getProviders().map(e=>e.delete())),e.isDeleted=!0)}function Z(e,t,n){var o;let i=null!==(o=B[e])&&void 0!==o?o:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),a=t.match(/\s|\//);if(s||a){const e=[`Unable to register library "${i}" with version "${t}":`];return s&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void u.warn(e.join(" "))}V(new r.Component(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}const X="firebase-heartbeat-store";let ee=null;function te(){return ee||(ee=(0,s.openDB)("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)try{e.createObjectStore(X)}catch(e){console.warn(e)}}}).catch(e=>{throw q.create("idb-open",{originalErrorMessage:e.message})})),ee}async function ne(e,t){try{const n=(await te()).transaction(X,"readwrite"),r=n.objectStore(X);await r.put(t,re(e)),await n.done}catch(e){if(e instanceof i.FirebaseError)u.warn(e.message);else{const t=q.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});u.warn(t.message)}}}function re(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new se(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){var e,t;try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=ie();if(null==(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)&&(this._heartbeatsCache=await this._heartbeatsCachePromise,null==(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)))return;if(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(e=>e.date===r))return;return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6}),this._storage.overwrite(this._heartbeatsCache)}catch(e){u.warn(e)}}async getHeartbeatsHeader(){var e;try{if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)||0===this._heartbeatsCache.heartbeats.length)return"";const t=ie(),{heartbeatsToSend:n,unsentEntries:r}=function(e,t=1024){const n=[];let r=e.slice();for(const o of e){const e=n.find(e=>e.agent===o.agent);if(e){if(e.dates.push(o.date),ae(n)>t){e.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),ae(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),o=(0,i.base64urlEncodeWithoutPadding)(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return u.warn(e),""}}}function ie(){return(new Date).toISOString().substring(0,10)}class se{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,i.isIndexedDBAvailable)()&&(0,i.validateIndexedDBOpenable)().then(()=>!0).catch(()=>!1)}async read(){if(await this._canUseIndexedDBPromise){const e=await async function(e){try{const t=(await te()).transaction(X),n=await t.objectStore(X).get(re(e));return await t.done,n}catch(e){if(e instanceof i.FirebaseError)u.warn(e.message);else{const t=q.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});u.warn(t.message)}}}(this.app);return(null==e?void 0:e.heartbeats)?e:{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return ne(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return ne(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function ae(e){return(0,i.base64urlEncodeWithoutPadding)(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ce;ce="",V(new r.Component("platform-logger",e=>new a(e),"PRIVATE")),V(new r.Component("heartbeat",e=>new oe(e),"PRIVATE")),Z(c,l,ce),Z(c,l,"esm2017"),Z("fire-js","")}}},{package:"@metamask/notification-services-controller>firebase>@firebase/app",file:"node_modules/@firebase/app/dist/esm/index.esm2017.js"}],[91,{"@metamask/messenger":2767},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.getClaimsServiceInitMessenger=function(e){return new r.Messenger({namespace:"ClaimsServiceInit",parent:e})},n.getClaimsServiceMessenger=function(e){const t=new r.Messenger({namespace:"ClaimsService",parent:e});return e.delegate({messenger:t,actions:["AuthenticationController:getBearerToken"],events:[]}),t};var r=e("@metamask/messenger")}}},{package:"$root$",file:"app/scripts/controller-init/messengers/claims/claims-service-messenger.ts"}],[910,{"@firebase/util":915},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.Provider=n.ComponentContainer=n.Component=void 0;var r=e("@firebase/util");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
n.Component=class{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}};const o="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new r.Deferred;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e))try{this.getOrInitializeService({instanceIdentifier:o})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e=o){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=o){return this.instances.has(e)}getOptions(e=o){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),o=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;o.add(e),this.onInitCallbacks.set(r,o);const i=this.instances.get(r);return i&&e(i,r),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=e,r===o?undefined:r),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var r;return n||null}normalizeInstanceIdentifier(e=o){return this.component?this.component.multipleInstances?e:o:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}n.Provider=i;n.ComponentContainer=class{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new i(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}}}},{package:"@metamask/notification-services-controller>firebase>@firebase/app>@firebase/component",file:"node_modules/@firebase/component/dist/esm/index.esm2017.js"}],[911,{"@firebase/app":909,"@firebase/component":910,"@firebase/util":915,idb:5444},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.deleteInstallations=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(e){const{appConfig:t}=e,n=await U(t,e=>e&&0===e.registrationStatus?undefined:e);if(n){if(1===n.registrationStatus)throw h.create("delete-pending-registration");if(2===n.registrationStatus){if(!navigator.onLine)throw h.create("app-offline");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
await async function(e,t){const n=function(e,{fid:t}){return`${b(e)}/${t}`}(e,t),r=C(e,t),o={method:"DELETE",headers:r},i=await k(()=>fetch(n,o));if(!i.ok)throw await w("Delete Installation",i)}(t,n),await F(t)}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */,n.getId=Y,n.getInstallations=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e=(0,r.getApp)()){return(0,r._getProvider)(e,"installations").getImmediate()}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */,n.getToken=Q,n.onIdChange=function(e,t){const{appConfig:n}=e;return function(e,t){P();const n=T(e);let r=I.get(n);r||(r=new Set,I.set(n,r));r.add(t)}(n,t),()=>{!function(e,t){const n=T(e),r=I.get(n);if(!r)return;r.delete(t),0===r.size&&I.delete(n);j()}(n,t)}};var r=e("@firebase/app"),o=e("@firebase/component"),i=e("@firebase/util"),s=e("idb");const a="@firebase/installations",c="0.6.12",l=1e4,u=`w:${c}`,d="FIS_v2",f="https://firebaseinstallations.googleapis.com/v1",p=36e5,g={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},h=new i.ErrorFactory("installations","Installations",g);function m(e){return e instanceof i.FirebaseError&&e.code.includes("request-failed")}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b({projectId:e}){return`${f}/projects/${e}/installations`}function v(e){return{token:e.token,requestStatus:2,expiresIn:(t=e.expiresIn,Number(t.replace("s","000"))),creationTime:Date.now()};var t}async function w(e,t){const n=(await t.json()).error;return h.create("request-failed",{requestName:e,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function y({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function C(e,{refreshToken:t}){const n=y(e);return n.append("Authorization",function(e){return`${d} ${e}`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)),n}async function k(e){const t=await e();return t.status>=500&&t.status<600?e():t}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function S(e){return new Promise(t=>{setTimeout(t,e)})}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const _=/^[cdef][\w-]{21}$/,E="";function M(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const t=function(e){const t=(n=e,btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_"));var n;return t.substr(0,22)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e);return _.test(t)?t:E}catch(e){return E}}function T(e){return`${e.appName}!${e.appId}`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I=new Map;function O(e,t){const n=T(e);A(n,t),function(e,t){const n=P();n&&n.postMessage({key:e,fid:t});j()}(n,t)}function A(e,t){const n=I.get(e);if(n)for(const e of n)e(t)}let N=null;function P(){return!N&&"BroadcastChannel"in self&&(N=new BroadcastChannel("[Firebase] FID Change"),N.onmessage=e=>{A(e.data.key,e.data.fid)}),N}function j(){0===I.size&&N&&(N.close(),N=null)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D="firebase-installations-database",R=1,L="firebase-installations-store";let $=null;function B(){return $||($=(0,s.openDB)(D,R,{upgrade:(e,t)=>{if(0===t)e.createObjectStore(L)}})),$}async function x(e,t){const n=T(e),r=(await B()).transaction(L,"readwrite"),o=r.objectStore(L),i=await o.get(n);return await o.put(t,n),await r.done,i&&i.fid===t.fid||O(e,t.fid),t}async function F(e){const t=T(e),n=(await B()).transaction(L,"readwrite");await n.objectStore(L).delete(t),await n.done}async function U(e,t){const n=T(e),r=(await B()).transaction(L,"readwrite"),o=r.objectStore(L),i=await o.get(n),s=t(i);return s===undefined?await o.delete(n):await o.put(s,n),await r.done,!s||i&&i.fid===s.fid||O(e,s.fid),s}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function K(e){let t;const n=await U(e.appConfig,n=>{const r=function(e){const t=e||{fid:M(),registrationStatus:0};return W(t)}(n),o=function(e,t){if(0===t.registrationStatus){if(!navigator.onLine){return{installationEntry:t,registrationPromise:Promise.reject(h.create("app-offline"))}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=async function(e,t){try{const n=await async function({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=b(e),o=y(e),i=t.getImmediate({optional:!0});if(i){const e=await i.getHeartbeatsHeader();e&&o.append("x-firebase-client",e)}const s={fid:n,authVersion:d,appId:e.appId,sdkVersion:u},a={method:"POST",headers:o,body:JSON.stringify(s)},c=await k(()=>fetch(r,a));if(c.ok){const e=await c.json();return{fid:e.fid||n,registrationStatus:2,refreshToken:e.refreshToken,authToken:v(e.authToken)}}throw await w("Create Installation",c)}(e,t);return x(e.appConfig,n)}catch(n){throw m(n)&&409===n.customData.serverCode?await F(e.appConfig):await x(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}(e,n);return{installationEntry:n,registrationPromise:r}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:V(e)}:{installationEntry:t}}(e,r);return t=o.registrationPromise,o.installationEntry});return n.fid===E?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}async function V(e){let t=await H(e.appConfig);for(;1===t.registrationStatus;)await S(100),t=await H(e.appConfig);if(0===t.registrationStatus){const{installationEntry:t,registrationPromise:n}=await K(e);return n||t}return t}function H(e){return U(e,e=>{if(!e)throw h.create("installation-not-found");return W(e)})}function W(e){return 1===(t=e).registrationStatus&&t.registrationTime+l<Date.now()?{fid:e.fid,registrationStatus:0}:e;var t;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}async function z({appConfig:e,heartbeatServiceProvider:t},n){const r=function(e,{fid:t}){return`${b(e)}/${t}/authTokens:generate`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,n),o=C(e,n),i=t.getImmediate({optional:!0});if(i){const e=await i.getHeartbeatsHeader();e&&o.append("x-firebase-client",e)}const s={installation:{sdkVersion:u,appId:e.appId}},a={method:"POST",headers:o,body:JSON.stringify(s)},c=await k(()=>fetch(r,a));if(c.ok){return v(await c.json())}throw await w("Generate Auth Token",c)}async function q(e,t=!1){let n;const r=await U(e.appConfig,r=>{if(!J(r))throw h.create("not-registered");const o=r.authToken;if(!t&&function(e){return 2===e.requestStatus&&!function(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+p}(e)}(o))return r;if(1===o.requestStatus)return n=async function(e,t){let n=await G(e.appConfig);for(;1===n.authToken.requestStatus;)await S(100),n=await G(e.appConfig);const r=n.authToken;return 0===r.requestStatus?q(e,t):r}(e,t),r;{if(!navigator.onLine)throw h.create("app-offline");const t=function(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}(r);return n=async function(e,t){try{const n=await z(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await x(e.appConfig,r),n}catch(n){if(!m(n)||401!==n.customData.serverCode&&404!==n.customData.serverCode){const n=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await x(e.appConfig,n)}else await F(e.appConfig);throw n}}(e,t),t}});return n?await n:r.authToken}function G(e){return U(e,e=>{if(!J(e))throw h.create("not-registered");const t=e.authToken;return 1===(n=t).requestStatus&&n.requestTime+l<Date.now()?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e;var n;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */})}function J(e){return e!==undefined&&2===e.registrationStatus}async function Y(e){const t=e,{installationEntry:n,registrationPromise:r}=await K(t);return r?r.catch(console.error):q(t).catch(console.error),n.fid}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Q(e,t=!1){const n=e;await async function(e){const{registrationPromise:t}=await K(e);t&&await t}(n);return(await q(n,t)).token}function Z(e){return h.create("missing-app-config-values",{valueName:e})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X="installations",ee=e=>{const t=e.getProvider("app").getImmediate(),n=function(e){if(!e||!e.options)throw Z("App Configuration");if(!e.name)throw Z("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw Z(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}(t);return{app:t,appConfig:n,heartbeatServiceProvider:(0,r._getProvider)(t,"heartbeat"),_delete:()=>Promise.resolve()}},te=e=>{const t=e.getProvider("app").getImmediate(),n=(0,r._getProvider)(t,X).getImmediate();return{getId:()=>Y(n),getToken:e=>Q(n,e)}};(0,r._registerComponent)(new o.Component(X,ee,"PUBLIC")),(0,r._registerComponent)(new o.Component("installations-internal",te,"PRIVATE")),(0,r.registerVersion)(a,c),(0,r.registerVersion)(a,c,"esm2017")}}},{package:"@metamask/notification-services-controller>firebase>@firebase/installations",file:"node_modules/@firebase/installations/dist/esm/index.esm2017.js"}],[912,{},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0});
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=[];var o;n.LogLevel=void 0,(o=n.LogLevel||(n.LogLevel={}))[o.DEBUG=0]="DEBUG",o[o.VERBOSE=1]="VERBOSE",o[o.INFO=2]="INFO",o[o.WARN=3]="WARN",o[o.ERROR=4]="ERROR",o[o.SILENT=5]="SILENT";const i={debug:n.LogLevel.DEBUG,verbose:n.LogLevel.VERBOSE,info:n.LogLevel.INFO,warn:n.LogLevel.WARN,error:n.LogLevel.ERROR,silent:n.LogLevel.SILENT},s=n.LogLevel.INFO,a={[n.LogLevel.DEBUG]:"log",[n.LogLevel.VERBOSE]:"log",[n.LogLevel.INFO]:"info",[n.LogLevel.WARN]:"warn",[n.LogLevel.ERROR]:"error"},c=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),o=a[t];if(!o)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[o](`[${r}]  ${e.name}:`,...n)};n.Logger=class{constructor(e){this.name=e,this._logLevel=s,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in n.LogLevel))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?i[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,n.LogLevel.DEBUG,...e),this._logHandler(this,n.LogLevel.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,n.LogLevel.VERBOSE,...e),this._logHandler(this,n.LogLevel.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,n.LogLevel.INFO,...e),this._logHandler(this,n.LogLevel.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,n.LogLevel.WARN,...e),this._logHandler(this,n.LogLevel.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,n.LogLevel.ERROR,...e),this._logHandler(this,n.LogLevel.ERROR,...e)}},n.setLogLevel=function(e){r.forEach(t=>{t.setLogLevel(e)})},n.setUserLogHandler=function(e,t){for(const o of r){let r=null;t&&t.level&&(r=i[t.level]),o.userLogHandler=null===e?null:(t,o,...i)=>{const s=i.map(e=>{if(null==e)return null;if("string"==typeof e)return e;if("number"==typeof e||"boolean"==typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(e){return null}}).filter(e=>e).join(" ");o>=(null!=r?r:t.logLevel)&&e({level:n.LogLevel[o].toLowerCase(),message:s,args:i,type:t.name})}}}}}},{package:"@metamask/notification-services-controller>firebase>@firebase/app>@firebase/logger",file:"node_modules/@firebase/logger/dist/index.cjs.js"}],[913,{"@firebase/app":909,"@firebase/component":910,"@firebase/installations":911,"@firebase/util":915,idb:5444},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.deleteToken=function(e){
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e){if(!navigator)throw O.create("only-available-in-window");e.swRegistration||await F(e);return async function(e){const t=await E(e.firebaseDependencies);t&&(await A(e.firebaseDependencies,t.token),await async function(e){const t=T(e),n=(await _()).transaction(k,"readwrite");await n.objectStore(k).delete(t),await n.done}(e.firebaseDependencies));const n=await e.swRegistration.pushManager.getSubscription();if(n)return n.unsubscribe();return!0}(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e=(0,i.getModularInstance)(e))},n.getMessaging=
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e=(0,s.getApp)()){return G().then(e=>{if(!e)throw O.create("unsupported-browser")},e=>{throw O.create("indexed-db-unsupported")}),(0,s._getProvider)((0,i.getModularInstance)(e),"messaging").getImmediate()},n.getToken=async function(e,t){return U(e=(0,i.getModularInstance)(e),t)},n.isSupported=G,n.onMessage=function(e,t){return function(e,t){if(!navigator)throw O.create("only-available-in-window");return e.onMessageHandler=t,()=>{e.onMessageHandler=null}}(e=(0,i.getModularInstance)(e),t)},e("@firebase/installations");var r=e("@firebase/component"),o=e("idb"),i=e("@firebase/util"),s=e("@firebase/app");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const a="/firebase-messaging-sw.js",c="/firebase-cloud-messaging-push-scope",l="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",u="https://fcmregistrations.googleapis.com/v1",d="google.c.a.c_id",f=1e4;var p,g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function h(e){const t=new Uint8Array(e);return btoa(String.fromCharCode(...t)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function m(e){const t=(e+"=".repeat((4-e.length%4)%4)).replace(/\-/g,"+").replace(/_/g,"/"),n=atob(t),r=new Uint8Array(n.length);for(let e=0;e<n.length;++e)r[e]=n.charCodeAt(e);return r}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(e){e[e.DATA_MESSAGE=1]="DATA_MESSAGE",e[e.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"}(p||(p={})),function(e){e.PUSH_RECEIVED="push-received",e.NOTIFICATION_CLICKED="notification-clicked"}(g||(g={}));const b="fcm_token_details_db",v=5,w="fcm_token_object_Store";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const y="firebase-messaging-database",C=1,k="firebase-messaging-store";let S=null;function _(){return S||(S=(0,o.openDB)(y,C,{upgrade:(e,t)=>{if(0===t)e.createObjectStore(k)}})),S}async function E(e){const t=T(e),n=await _(),r=await n.transaction(k).objectStore(k).get(t);if(r)return r;{const t=await async function(e){if("databases"in indexedDB){const e=(await indexedDB.databases()).map(e=>e.name);if(!e.includes(b))return null}let t=null;return(await(0,o.openDB)(b,v,{upgrade:async(n,r,o,i)=>{var s;if(r<2)return;if(!n.objectStoreNames.contains(w))return;const a=i.objectStore(w),c=await a.index("fcmSenderId").get(e);if(await a.clear(),c)if(2===r){const e=c;if(!e.auth||!e.p256dh||!e.endpoint)return;t={token:e.fcmToken,createTime:null!==(s=e.createTime)&&void 0!==s?s:Date.now(),subscriptionOptions:{auth:e.auth,p256dh:e.p256dh,endpoint:e.endpoint,swScope:e.swScope,vapidKey:"string"==typeof e.vapidKey?e.vapidKey:h(e.vapidKey)}}}else if(3===r){const e=c;t={token:e.fcmToken,createTime:e.createTime,subscriptionOptions:{auth:h(e.auth),p256dh:h(e.p256dh),endpoint:e.endpoint,swScope:e.swScope,vapidKey:h(e.vapidKey)}}}else if(4===r){const e=c;t={token:e.fcmToken,createTime:e.createTime,subscriptionOptions:{auth:h(e.auth),p256dh:h(e.p256dh),endpoint:e.endpoint,swScope:e.swScope,vapidKey:h(e.vapidKey)}}}}})).close(),await(0,o.deleteDB)(b),await(0,o.deleteDB)("fcm_vapid_details_db"),await(0,o.deleteDB)("undefined"),function(e){if(!e||!e.subscriptionOptions)return!1;const{subscriptionOptions:t}=e;return"number"==typeof e.createTime&&e.createTime>0&&"string"==typeof e.token&&e.token.length>0&&"string"==typeof t.auth&&t.auth.length>0&&"string"==typeof t.p256dh&&t.p256dh.length>0&&"string"==typeof t.endpoint&&t.endpoint.length>0&&"string"==typeof t.swScope&&t.swScope.length>0&&"string"==typeof t.vapidKey&&t.vapidKey.length>0}(t)?t:null}(e.appConfig.senderId);if(t)return await M(e,t),t}}async function M(e,t){const n=T(e),r=(await _()).transaction(k,"readwrite");return await r.objectStore(k).put(t,n),await r.done,t}function T({appConfig:e}){return e.appId}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},O=new i.ErrorFactory("messaging","Messaging",I);async function A(e,t){const n={method:"DELETE",headers:await P(e)};try{const r=await fetch(`${N(e.appConfig)}/${t}`,n),o=await r.json();if(o.error){const e=o.error.message;throw O.create("token-unsubscribe-failed",{errorInfo:e})}}catch(e){throw O.create("token-unsubscribe-failed",{errorInfo:null==e?void 0:e.toString()})}}function N({projectId:e}){return`${u}/projects/${e}/registrations`}async function P({appConfig:e,installations:t}){const n=await t.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function j({p256dh:e,auth:t,endpoint:n,vapidKey:r}){const o={web:{endpoint:n,auth:t,p256dh:e}};return r!==l&&(o.web.applicationPubKey=r),o}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D=6048e5;async function R(e){const t=await async function(e,t){const n=await e.pushManager.getSubscription();if(n)return n;return e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:m(t)})}(e.swRegistration,e.vapidKey),n={vapidKey:e.vapidKey,swScope:e.swRegistration.scope,endpoint:t.endpoint,auth:h(t.getKey("auth")),p256dh:h(t.getKey("p256dh"))},r=await E(e.firebaseDependencies);if(r){if(function(e,t){const n=t.vapidKey===e.vapidKey,r=t.endpoint===e.endpoint,o=t.auth===e.auth,i=t.p256dh===e.p256dh;return n&&r&&o&&i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(r.subscriptionOptions,n))return Date.now()>=r.createTime+D?async function(e,t){try{const n=await async function(e,t){const n=await P(e),r=j(t.subscriptionOptions),o={method:"PATCH",headers:n,body:JSON.stringify(r)};let i;try{const n=await fetch(`${N(e.appConfig)}/${t.token}`,o);i=await n.json()}catch(e){throw O.create("token-update-failed",{errorInfo:null==e?void 0:e.toString()})}if(i.error){const e=i.error.message;throw O.create("token-update-failed",{errorInfo:e})}if(!i.token)throw O.create("token-update-no-token");return i.token}(e.firebaseDependencies,t),r=Object.assign(Object.assign({},t),{token:n,createTime:Date.now()});return await M(e.firebaseDependencies,r),n}catch(e){throw e}}(e,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await A(e.firebaseDependencies,r.token)}catch(e){console.warn(e)}return L(e.firebaseDependencies,n)}return L(e.firebaseDependencies,n)}async function L(e,t){const n=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */await async function(e,t){const n=await P(e),r=j(t),o={method:"POST",headers:n,body:JSON.stringify(r)};let i;try{const t=await fetch(N(e.appConfig),o);i=await t.json()}catch(e){throw O.create("token-subscribe-failed",{errorInfo:null==e?void 0:e.toString()})}if(i.error){const e=i.error.message;throw O.create("token-subscribe-failed",{errorInfo:e})}if(!i.token)throw O.create("token-subscribe-no-token");return i.token}(e,t),r={token:n,createTime:Date.now(),subscriptionOptions:t};return await M(e,r),r.token}function $(e){const t={from:e.from,collapseKey:e.collapse_key,messageId:e.fcmMessageId};return function(e,t){if(!t.notification)return;e.notification={};const n=t.notification.title;n&&(e.notification.title=n);const r=t.notification.body;r&&(e.notification.body=r);const o=t.notification.image;o&&(e.notification.image=o);const i=t.notification.icon;i&&(e.notification.icon=i)}(t,e),function(e,t){if(!t.data)return;e.data=t.data}(t,e),function(e,t){var n,r,o,i,s;if(!t.fcmOptions&&!(null===(n=t.notification)||void 0===n?void 0:n.click_action))return;e.fcmOptions={};const a=null!==(o=null===(r=t.fcmOptions)||void 0===r?void 0:r.link)&&void 0!==o?o:null===(i=t.notification)||void 0===i?void 0:i.click_action;a&&(e.fcmOptions.link=a);const c=null===(s=t.fcmOptions)||void 0===s?void 0:s.analytics_label;c&&(e.fcmOptions.analyticsLabel=c)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t,e),t}function B(e){return O.create("missing-app-config-values",{valueName:e})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!function(e,t){const n=[];for(let r=0;r<e.length;r++)n.push(e.charAt(r)),r<t.length&&n.push(t.charAt(r));n.join("")}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");class x{constructor(e,t,n){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const r=function(e){if(!e||!e.options)throw B("App Configuration Object");if(!e.name)throw B("App Name");const t=["projectId","apiKey","appId","messagingSenderId"],{options:n}=e;for(const e of t)if(!n[e])throw B(e);return{appName:e.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}(e);this.firebaseDependencies={app:e,appConfig:r,installations:t,analyticsProvider:n}}_delete(){return Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function F(e){try{e.swRegistration=await navigator.serviceWorker.register(a,{scope:c}),e.swRegistration.update().catch(()=>{}),await async function(e){return new Promise((t,n)=>{const r=setTimeout(()=>n(new Error(`Service worker not registered after ${f} ms`)),f),o=e.installing||e.waiting;e.active?(clearTimeout(r),t()):o?o.onstatechange=e=>{var n;"activated"===(null===(n=e.target)||void 0===n?void 0:n.state)&&(o.onstatechange=null,clearTimeout(r),t())}:(clearTimeout(r),n(new Error("No incoming service worker found.")))})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e.swRegistration)}catch(e){throw O.create("failed-service-worker-registration",{browserErrorMessage:null==e?void 0:e.message})}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function U(e,t){if(!navigator)throw O.create("only-available-in-window");if("default"===Notification.permission&&await Notification.requestPermission(),"granted"!==Notification.permission)throw O.create("permission-blocked");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return await async function(e,t){t?e.vapidKey=t:e.vapidKey||(e.vapidKey=l)}(e,null==t?void 0:t.vapidKey),await async function(e,t){if(t||e.swRegistration||await F(e),t||!e.swRegistration){if(!(t instanceof ServiceWorkerRegistration))throw O.create("invalid-sw-registration");e.swRegistration=t}}(e,null==t?void 0:t.serviceWorkerRegistration),R(e)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function K(e,t,n){const r=function(e){switch(e){case g.NOTIFICATION_CLICKED:return"notification_open";case g.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t);(await e.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:n[d],message_name:n["google.c.a.c_l"],message_time:n["google.c.a.ts"],message_device_time:Math.floor(Date.now()/1e3)})}async function V(e,t){const n=t.data;if(!n.isFirebaseMessaging)return;e.onMessageHandler&&n.messageType===g.PUSH_RECEIVED&&("function"==typeof e.onMessageHandler?e.onMessageHandler($(n)):e.onMessageHandler.next($(n)));const r=n.data;var o;"object"==typeof(o=r)&&o&&d in o&&"1"===r["google.c.a.e"]&&await K(e,n.messageType,r)}const H="@firebase/messaging",W="0.12.16",z=e=>{const t=new x(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),e.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",e=>V(t,e)),t},q=e=>{const t=e.getProvider("messaging").getImmediate();return{getToken:e=>U(t,e)}};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function G(){try{await(0,i.validateIndexedDBOpenable)()}catch(e){return!1}return"undefined"!=typeof window&&(0,i.isIndexedDBAvailable)()&&(0,i.areCookiesEnabled)()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}(0,s._registerComponent)(new r.Component("messaging",z,"PUBLIC")),(0,s._registerComponent)(new r.Component("messaging-internal",q,"PRIVATE")),(0,s.registerVersion)(H,W),(0,s.registerVersion)(H,W,"esm2017")}}},{package:"@metamask/notification-services-controller>firebase>@firebase/messaging",file:"node_modules/@firebase/messaging/dist/esm/index.esm2017.js"}],[914,{"@firebase/app":909,"@firebase/component":910,"@firebase/installations":911,"@firebase/util":915,idb:5444},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),e("@firebase/installations");var r=e("@firebase/component"),o=e("idb"),i=e("@firebase/util"),s=e("@firebase/app");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const a="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",c="FCM_MSG";var l,u;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function d(e){const t=new Uint8Array(e);return btoa(String.fromCharCode(...t)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function f(e){const t=(e+"=".repeat((4-e.length%4)%4)).replace(/\-/g,"+").replace(/_/g,"/"),n=atob(t),r=new Uint8Array(n.length);for(let e=0;e<n.length;++e)r[e]=n.charCodeAt(e);return r}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(e){e[e.DATA_MESSAGE=1]="DATA_MESSAGE",e[e.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"}(l||(l={})),function(e){e.PUSH_RECEIVED="push-received",e.NOTIFICATION_CLICKED="notification-clicked"}(u||(u={}));const p="fcm_token_details_db",g="fcm_token_object_Store";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const h="firebase-messaging-store";let m=null;function b(){return m||(m=o.openDB("firebase-messaging-database",1,{upgrade:(e,t)=>{if(0===t)e.createObjectStore(h)}})),m}async function v(e){const t=y(e),n=await b(),r=await n.transaction(h).objectStore(h).get(t);if(r)return r;{const t=await async function(e){if("databases"in indexedDB){const e=(await indexedDB.databases()).map(e=>e.name);if(!e.includes(p))return null}let t=null;return(await o.openDB(p,5,{upgrade:async(n,r,o,i)=>{var s;if(r<2)return;if(!n.objectStoreNames.contains(g))return;const a=i.objectStore(g),c=await a.index("fcmSenderId").get(e);if(await a.clear(),c)if(2===r){const e=c;if(!e.auth||!e.p256dh||!e.endpoint)return;t={token:e.fcmToken,createTime:null!==(s=e.createTime)&&void 0!==s?s:Date.now(),subscriptionOptions:{auth:e.auth,p256dh:e.p256dh,endpoint:e.endpoint,swScope:e.swScope,vapidKey:"string"==typeof e.vapidKey?e.vapidKey:d(e.vapidKey)}}}else if(3===r){const e=c;t={token:e.fcmToken,createTime:e.createTime,subscriptionOptions:{auth:d(e.auth),p256dh:d(e.p256dh),endpoint:e.endpoint,swScope:e.swScope,vapidKey:d(e.vapidKey)}}}else if(4===r){const e=c;t={token:e.fcmToken,createTime:e.createTime,subscriptionOptions:{auth:d(e.auth),p256dh:d(e.p256dh),endpoint:e.endpoint,swScope:e.swScope,vapidKey:d(e.vapidKey)}}}}})).close(),await o.deleteDB(p),await o.deleteDB("fcm_vapid_details_db"),await o.deleteDB("undefined"),function(e){if(!e||!e.subscriptionOptions)return!1;const{subscriptionOptions:t}=e;return"number"==typeof e.createTime&&e.createTime>0&&"string"==typeof e.token&&e.token.length>0&&"string"==typeof t.auth&&t.auth.length>0&&"string"==typeof t.p256dh&&t.p256dh.length>0&&"string"==typeof t.endpoint&&t.endpoint.length>0&&"string"==typeof t.swScope&&t.swScope.length>0&&"string"==typeof t.vapidKey&&t.vapidKey.length>0}(t)?t:null}(e.appConfig.senderId);if(t)return await w(e,t),t}}async function w(e,t){const n=y(e),r=(await b()).transaction(h,"readwrite");return await r.objectStore(h).put(t,n),await r.done,t}function y({appConfig:e}){return e.appId}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},k=new i.ErrorFactory("messaging","Messaging",C);async function S(e,t){const n={method:"DELETE",headers:await E(e)};try{const r=await fetch(`${_(e.appConfig)}/${t}`,n),o=await r.json();if(o.error){const e=o.error.message;throw k.create("token-unsubscribe-failed",{errorInfo:e})}}catch(e){throw k.create("token-unsubscribe-failed",{errorInfo:null==e?void 0:e.toString()})}}function _({projectId:e}){return`https://fcmregistrations.googleapis.com/v1/projects/${e}/registrations`}async function E({appConfig:e,installations:t}){const n=await t.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function M({p256dh:e,auth:t,endpoint:n,vapidKey:r}){const o={web:{endpoint:n,auth:t,p256dh:e}};return r!==a&&(o.web.applicationPubKey=r),o}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function T(e){const t=await async function(e,t){const n=await e.pushManager.getSubscription();if(n)return n;return e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:f(t)})}(e.swRegistration,e.vapidKey),n={vapidKey:e.vapidKey,swScope:e.swRegistration.scope,endpoint:t.endpoint,auth:d(t.getKey("auth")),p256dh:d(t.getKey("p256dh"))},r=await v(e.firebaseDependencies);if(r){if(function(e,t){const n=t.vapidKey===e.vapidKey,r=t.endpoint===e.endpoint,o=t.auth===e.auth,i=t.p256dh===e.p256dh;return n&&r&&o&&i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(r.subscriptionOptions,n))return Date.now()>=r.createTime+6048e5?async function(e,t){try{const n=await async function(e,t){const n=await E(e),r=M(t.subscriptionOptions),o={method:"PATCH",headers:n,body:JSON.stringify(r)};let i;try{const n=await fetch(`${_(e.appConfig)}/${t.token}`,o);i=await n.json()}catch(e){throw k.create("token-update-failed",{errorInfo:null==e?void 0:e.toString()})}if(i.error){const e=i.error.message;throw k.create("token-update-failed",{errorInfo:e})}if(!i.token)throw k.create("token-update-no-token");return i.token}(e.firebaseDependencies,t),r=Object.assign(Object.assign({},t),{token:n,createTime:Date.now()});return await w(e.firebaseDependencies,r),n}catch(e){throw e}}(e,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await S(e.firebaseDependencies,r.token)}catch(e){console.warn(e)}return O(e.firebaseDependencies,n)}return O(e.firebaseDependencies,n)}async function I(e){const t=await v(e.firebaseDependencies);t&&(await S(e.firebaseDependencies,t.token),await async function(e){const t=y(e),n=(await b()).transaction(h,"readwrite");await n.objectStore(h).delete(t),await n.done}(e.firebaseDependencies));const n=await e.swRegistration.pushManager.getSubscription();return!n||n.unsubscribe()}async function O(e,t){const n=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */await async function(e,t){const n=await E(e),r=M(t),o={method:"POST",headers:n,body:JSON.stringify(r)};let i;try{const t=await fetch(_(e.appConfig),o);i=await t.json()}catch(e){throw k.create("token-subscribe-failed",{errorInfo:null==e?void 0:e.toString()})}if(i.error){const e=i.error.message;throw k.create("token-subscribe-failed",{errorInfo:e})}if(!i.token)throw k.create("token-subscribe-no-token");return i.token}(e,t),r={token:n,createTime:Date.now(),subscriptionOptions:t};return await w(e,r),r.token}async function A(e,t){const n=function(e,t){var n,r;const o={};e.from&&(o.project_number=e.from);e.fcmMessageId&&(o.message_id=e.fcmMessageId);o.instance_id=t,e.notification?o.message_type=l.DISPLAY_NOTIFICATION.toString():o.message_type=l.DATA_MESSAGE.toString();o.sdk_platform=3..toString(),o.package_name=self.origin.replace(/(^\w+:|^)\/\//,""),!e.collapse_key||(o.collapse_key=e.collapse_key);o.event=1..toString(),!(null===(n=e.fcmOptions)||void 0===n?void 0:n.analytics_label)||(o.analytics_label=null===(r=e.fcmOptions)||void 0===r?void 0:r.analytics_label);return o}(t,await e.firebaseDependencies.installations.getId());!function(e,t,n){const r={};r.event_time_ms=Math.floor(Date.now()).toString(),r.source_extension_json_proto3=JSON.stringify({messaging_client_event:t}),!n||(r.compliance_data=function(e){const t={privacy_context:{prequest:{origin_associated_product_id:e}}};return t}(n));e.logEvents.push(r)}(e,n,t.productId)}async function N(e,t){const n=function({data:e}){if(!e)return null;try{return e.json()}catch(e){return null}}(e);if(!n)return;t.deliveryMetricsExportedToBigQueryEnabled&&await A(t,n);const r=await j();if(function(e){return e.some(e=>"visible"===e.visibilityState&&!e.url.startsWith("chrome-extension://"))}(r))return function(e,t){t.isFirebaseMessaging=!0,t.messageType=u.PUSH_RECEIVED;for(const n of e)n.postMessage(t)}(r,n);if(n.notification&&await function(e){var t;const{actions:n}=e,{maxActions:r}=Notification;n&&r&&n.length>r&&console.warn(`This browser only supports ${r} actions. The remaining actions will not be displayed.`);return self.registration.showNotification(null!==(t=e.title)&&void 0!==t?t:"",e)}(function(e){const t=Object.assign({},e.notification);return t.data={[c]:e},t}(n)),t&&t.onBackgroundMessageHandler){const e=function(e){const t={from:e.from,collapseKey:e.collapse_key,messageId:e.fcmMessageId};return function(e,t){if(!t.notification)return;e.notification={};const n=t.notification.title;n&&(e.notification.title=n);const r=t.notification.body;r&&(e.notification.body=r);const o=t.notification.image;o&&(e.notification.image=o);const i=t.notification.icon;i&&(e.notification.icon=i)}(t,e),function(e,t){t.data&&(e.data=t.data)}(t,e),function(e,t){var n,r,o,i,s;if(!t.fcmOptions&&!(null===(n=t.notification)||void 0===n?void 0:n.click_action))return;e.fcmOptions={};const a=null!==(o=null===(r=t.fcmOptions)||void 0===r?void 0:r.link)&&void 0!==o?o:null===(i=t.notification)||void 0===i?void 0:i.click_action;a&&(e.fcmOptions.link=a);const c=null===(s=t.fcmOptions)||void 0===s?void 0:s.analytics_label;c&&(e.fcmOptions.analyticsLabel=c)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t,e),t}(n);"function"==typeof t.onBackgroundMessageHandler?await t.onBackgroundMessageHandler(e):t.onBackgroundMessageHandler.next(e)}}async function P(e){var t,n;const r=null===(n=null===(t=e.notification)||void 0===t?void 0:t.data)||void 0===n?void 0:n[c];if(!r)return;if(e.action)return;e.stopImmediatePropagation(),e.notification.close();const o=function(e){var t,n,r;const o=null!==(n=null===(t=e.fcmOptions)||void 0===t?void 0:t.link)&&void 0!==n?n:null===(r=e.notification)||void 0===r?void 0:r.click_action;if(o)return o;return i=e.data,"object"==typeof i&&i&&"google.c.a.c_id"in i?self.location.origin:null;var i;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(r);if(!o)return;const i=new URL(o,self.location.href),s=new URL(self.location.origin);if(i.host!==s.host)return;let a=await async function(e){const t=await j();for(const n of t){const t=new URL(n.url,self.location.href);if(e.host===t.host)return n}return null}(i);var l;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */return a?a=await a.focus():(a=await self.clients.openWindow(o),await(l=3e3,new Promise(e=>{setTimeout(e,l)}))),a?(r.messageType=u.NOTIFICATION_CLICKED,r.isFirebaseMessaging=!0,a.postMessage(r)):void 0}function j(){return self.clients.matchAll({type:"window",includeUncontrolled:!0})}function D(e){return k.create("missing-app-config-values",{valueName:e})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(e,t){const n=[];for(let r=0;r<e.length;r++)n.push(e.charAt(r)),r<t.length&&n.push(t.charAt(r));n.join("")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");class R{constructor(e,t,n){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const r=function(e){if(!e||!e.options)throw D("App Configuration Object");if(!e.name)throw D("App Name");const t=["projectId","apiKey","appId","messagingSenderId"],{options:n}=e;for(const e of t)if(!n[e])throw D(e);return{appName:e.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}(e);this.firebaseDependencies={app:e,appConfig:r,installations:t,analyticsProvider:n}}_delete(){return Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L=e=>{const t=new R(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),e.getProvider("analytics-internal"));return self.addEventListener("push",e=>{e.waitUntil(N(e,t))}),self.addEventListener("pushsubscriptionchange",e=>{e.waitUntil(async function(e,t){var n,r;const{newSubscription:o}=e;if(!o)return void await I(t);const i=await v(t.firebaseDependencies);await I(t),t.vapidKey=null!==(r=null===(n=null==i?void 0:i.subscriptionOptions)||void 0===n?void 0:n.vapidKey)&&void 0!==r?r:a,await T(t)}(e,t))}),self.addEventListener("notificationclick",e=>{e.waitUntil(P(e))}),t};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function $(){return i.isIndexedDBAvailable()&&await i.validateIndexedDBOpenable()&&"PushManager"in self&&"Notification"in self&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */s._registerComponent(new r.Component("messaging-sw",L,"PUBLIC")),n.experimentalSetDeliveryMetricsExportedToBigQueryEnabled=function(e,t){
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return function(e,t){e.deliveryMetricsExportedToBigQueryEnabled=t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e=i.getModularInstance(e),t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */,n.getMessaging=function(e=s.getApp()){return $().then(e=>{if(!e)throw k.create("unsupported-browser")},e=>{throw k.create("indexed-db-unsupported")}),s._getProvider(i.getModularInstance(e),"messaging-sw").getImmediate()},n.isSupported=$,n.onBackgroundMessage=function(e,t){return function(e,t){if(self.document!==undefined)throw k.create("only-available-in-sw");return e.onBackgroundMessageHandler=t,()=>{e.onBackgroundMessageHandler=null}}(e=i.getModularInstance(e),t)}}}},{package:"@metamask/notification-services-controller>firebase>@firebase/messaging",file:"node_modules/@firebase/messaging/dist/index.sw.cjs"}],[915,{_process:5986},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){(function(e){(function(){Object.defineProperty(n,"__esModule",{value:!0}),n.Sha1=n.RANDOM_FACTOR=n.MAX_VALUE_MILLIS=n.FirebaseError=n.ErrorFactory=n.Deferred=n.DecodeBase64StringError=n.CONSTANTS=void 0,n.areCookiesEnabled=function(){if("undefined"==typeof navigator||!navigator.cookieEnabled)return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */,n.assertionError=n.assert=void 0,n.async=function(e,t){return(...n)=>{Promise.resolve(!0).then(()=>{e(...n)}).catch(e=>{t&&t(e)})}},n.base64urlEncodeWithoutPadding=n.base64Encode=n.base64Decode=n.base64=void 0,n.calculateBackoffMillis=function(e,t=O,n=A){const r=t*Math.pow(n,e),o=Math.round(P*r*(Math.random()-.5)*2);return Math.min(N,r+o)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */,n.contains=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.createMockUserToken=function(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=t||"demo-project",r=e.iat||0,o=e.sub||e.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const i=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:r,exp:r+3600,auth_time:r,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},e);return[l(JSON.stringify({alg:"none",type:"JWT"})),l(JSON.stringify(i)),""].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */,n.createSubscribe=function(e,t){const n=new M(e,t);return n.subscribe.bind(n)},n.decode=void 0,n.deepCopy=function(e){return d(undefined,e)},n.deepEqual=function e(t,n){if(t===n)return!0;const r=Object.keys(t),o=Object.keys(n);for(const i of r){if(!o.includes(i))return!1;const r=t[i],s=n[i];if(E(r)&&E(s)){if(!e(r,s))return!1}else if(r!==s)return!1}for(const e of o)if(!r.includes(e))return!1;return!0},n.deepExtend=d,n.errorPrefix=I,n.extractQuerystring=function(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:undefined)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */,n.getExperimentalSetting=n.getDefaults=n.getDefaultEmulatorHostnameAndPort=n.getDefaultEmulatorHost=n.getDefaultAppConfig=void 0,n.getGlobal=p,n.getModularInstance=
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){return e&&e._delegate?e._delegate:e},n.getUA=b,n.isAdmin=void 0,n.isBrowser=function(){return"undefined"!=typeof window||w()},n.isBrowserExtension=function(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:undefined;return"object"==typeof e&&e.id!==undefined},n.isCloudflareWorker=function(){return"undefined"!=typeof navigator&&"Cloudflare-Workers"===navigator.userAgent},n.isElectron=function(){return b().indexOf("Electron/")>=0},n.isEmpty=function(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0},n.isIE=function(){const e=b();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0},n.isIndexedDBAvailable=function(){try{return"object"==typeof indexedDB}catch(e){return!1}},n.isMobileCordova=function(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(b())},n.isNode=v,n.isNodeSdk=function(){return!0===t.NODE_CLIENT||!0===t.NODE_ADMIN},n.isReactNative=function(){return"object"==typeof navigator&&"ReactNative"===navigator.product},n.isSafari=function(){return!v()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")},n.isUWP=function(){return b().indexOf("MSAppHost/")>=0},n.isValidTimestamp=n.isValidFormat=void 0,n.isWebWorker=w,n.issuedAtTime=void 0,n.jsonEval=S,n.map=function(e,t,n){const r={};for(const o in e)Object.prototype.hasOwnProperty.call(e,o)&&(r[o]=t.call(n,e[o],o,e));return r},n.ordinal=function(e){if(!Number.isFinite(e))return`${e}`;return e+function(e){e=Math.abs(e);const t=e%100;if(t>=10&&t<=20)return"th";const n=e%10;if(1===n)return"st";if(2===n)return"nd";if(3===n)return"rd";return"th"}(e)},n.promiseWithTimeout=
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e,t=2e3){const n=new m;return setTimeout(()=>n.reject("timeout!"),t),e.then(n.resolve,n.reject),n.promise}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */,n.querystring=function(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""},n.querystringDecode=function(e){const t={},n=e.replace(/^\?/,"").split("&");return n.forEach(e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}}),t},n.safeGet=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:undefined},n.stringToByteArray=n.stringLength=void 0,n.stringify=function(e){return JSON.stringify(e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */,n.validateArgCount=void 0,n.validateCallback=function(e,t,n,r){if(r&&!n)return;if("function"!=typeof n)throw new Error(I(e,t)+"must be a valid function.")},n.validateContextObject=function(e,t,n,r){if(r&&!n)return;if("object"!=typeof n||null===n)throw new Error(I(e,t)+"must be a valid context object.")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */,n.validateIndexedDBOpenable=function(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(r);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{var e;t((null===(e=o.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})},n.validateNamespace=function(e,t,n){if(n&&!t)return;if("string"!=typeof t)throw new Error(I(e,"namespace")+"must be a valid firebase namespace.")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const t=n.CONSTANTS={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"},r=function(e,t){if(!e)throw o(t)};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */n.assert=r;const o=function(e){return new Error("Firebase Database ("+t.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */n.assertionError=o;const i=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let o=e.charCodeAt(r);o<128?t[n++]=o:o<2048?(t[n++]=o>>6|192,t[n++]=63&o|128):55296==(64512&o)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(o=65536+((1023&o)<<10)+(1023&e.charCodeAt(++r)),t[n++]=o>>18|240,t[n++]=o>>12&63|128,t[n++]=o>>6&63|128,t[n++]=63&o|128):(t[n++]=o>>12|224,t[n++]=o>>6&63|128,t[n++]=63&o|128)}return t},s=n.base64={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let t=0;t<e.length;t+=3){const o=e[t],i=t+1<e.length,s=i?e[t+1]:0,a=t+2<e.length,c=a?e[t+2]:0,l=o>>2,u=(3&o)<<4|s>>4;let d=(15&s)<<2|c>>6,f=63&c;a||(f=64,i||(d=64)),r.push(n[l],n[u],n[d],n[f])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(i(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,r=0;for(;n<e.length;){const o=e[n++];if(o<128)t[r++]=String.fromCharCode(o);else if(o>191&&o<224){const i=e[n++];t[r++]=String.fromCharCode((31&o)<<6|63&i)}else if(o>239&&o<365){const i=((7&o)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(i>>10)),t[r++]=String.fromCharCode(56320+(1023&i))}else{const i=e[n++],s=e[n++];t[r++]=String.fromCharCode((15&o)<<12|(63&i)<<6|63&s)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let t=0;t<e.length;){const o=n[e.charAt(t++)],i=t<e.length?n[e.charAt(t)]:0;++t;const s=t<e.length?n[e.charAt(t)]:64;++t;const c=t<e.length?n[e.charAt(t)]:64;if(++t,null==o||null==i||null==s||null==c)throw new a;const l=o<<2|i>>4;if(r.push(l),64!==s){const e=i<<4&240|s>>2;if(r.push(e),64!==c){const e=s<<6&192|c;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class a extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}n.DecodeBase64StringError=a;const c=function(e){const t=i(e);return s.encodeByteArray(t,!0)};n.base64Encode=c;const l=function(e){return c(e).replace(/\./g,"")};n.base64urlEncodeWithoutPadding=l;const u=function(e){try{return s.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:e===undefined&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&f(n)&&(e[n]=d(e[n],t[n]));return e}function f(e){return"__proto__"!==e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if("undefined"!=typeof global)return global;throw new Error("Unable to locate global object.")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */n.base64Decode=u;const g=()=>{try{return p().__FIREBASE_DEFAULTS__||(()=>{if(void 0===e||void 0===e.env)return})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}const t=e&&u(e[1]);return t&&JSON.parse(t)})()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}};n.getDefaults=g;const h=e=>{var t,n;return null===(n=null===(t=g())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]};n.getDefaultEmulatorHost=h;n.getDefaultEmulatorHostnameAndPort=e=>{const t=h(e);if(!t)return undefined;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),r]:[t.substring(0,n),r]};n.getDefaultAppConfig=()=>{var e;return null===(e=g())||void 0===e?void 0:e.config};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
n.getExperimentalSetting=e=>{var t;return null===(t=g())||void 0===t?void 0:t[`_${e}`]};class m{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function v(){var e;const t=null===(e=g())||void 0===e?void 0:e.forceEnvironment;if("node"===t)return!0;if("browser"===t)return!1;try{return"[object process]"===Object.prototype.toString.call(global.process)}catch(e){return!1}}function w(){return"undefined"!=typeof WorkerGlobalScope&&"undefined"!=typeof self&&self instanceof WorkerGlobalScope}n.Deferred=m;class y extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,y.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,C.prototype.create)}}n.FirebaseError=y;class C{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,o=this.errors[e],i=o?function(e,t){return e.replace(k,(e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`})}(o,n):"Error",s=`${this.serviceName}: ${i} (${r}).`;return new y(r,s,n)}}n.ErrorFactory=C;const k=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S(e){return JSON.parse(e)}const _=function(e){let t={},n={},r={},o="";try{const i=e.split(".");t=S(u(i[0])||""),n=S(u(i[1])||""),o=i[2],r=n.d||{},delete n.d}catch(e){}return{header:t,claims:n,data:r,signature:o}};n.decode=_;n.isValidTimestamp=function(e){const t=_(e).claims,n=Math.floor((new Date).getTime()/1e3);let r=0,o=0;return"object"==typeof t&&(t.hasOwnProperty("nbf")?r=t.nbf:t.hasOwnProperty("iat")&&(r=t.iat),o=t.hasOwnProperty("exp")?t.exp:r+86400),!!n&&!!r&&!!o&&n>=r&&n<=o};n.issuedAtTime=function(e){const t=_(e).claims;return"object"==typeof t&&t.hasOwnProperty("iat")?t.iat:null};n.isValidFormat=function(e){const t=_(e).claims;return!!t&&"object"==typeof t&&t.hasOwnProperty("iat")};function E(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
n.isAdmin=function(e){const t=_(e).claims;return"object"==typeof t&&!0===t.admin};n.Sha1=class{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const n=this.W_;if("string"==typeof e)for(let r=0;r<16;r++)n[r]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let r=0;r<16;r++)n[r]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let e=16;e<80;e++){const t=n[e-3]^n[e-8]^n[e-14]^n[e-16];n[e]=4294967295&(t<<1|t>>>31)}let r,o,i=this.chain_[0],s=this.chain_[1],a=this.chain_[2],c=this.chain_[3],l=this.chain_[4];for(let e=0;e<80;e++){e<40?e<20?(r=c^s&(a^c),o=1518500249):(r=s^a^c,o=1859775393):e<60?(r=s&a|c&(s|a),o=2400959708):(r=s^a^c,o=3395469782);const t=(i<<5|i>>>27)+r+l+o+n[e]&4294967295;l=c,c=a,a=4294967295&(s<<30|s>>>2),s=i,i=t}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+c&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(null==e)return;t===undefined&&(t=e.length);const n=t-this.blockSize;let r=0;const o=this.buf_;let i=this.inbuf_;for(;r<t;){if(0===i)for(;r<=n;)this.compress_(e,r),r+=this.blockSize;if("string"==typeof e){for(;r<t;)if(o[i]=e.charCodeAt(r),++i,++r,i===this.blockSize){this.compress_(o),i=0;break}}else for(;r<t;)if(o[i]=e[r],++i,++r,i===this.blockSize){this.compress_(o),i=0;break}}this.inbuf_=i,this.total_+=t}digest(){const e=[];let t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let e=this.blockSize-1;e>=56;e--)this.buf_[e]=255&t,t/=256;this.compress_(this.buf_);let n=0;for(let t=0;t<5;t++)for(let r=24;r>=0;r-=8)e[n]=this.chain_[t]>>r&255,++n;return e}};class M{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let r;if(e===undefined&&t===undefined&&n===undefined)throw new Error("Missing Observer.");r=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},r.next===undefined&&(r.next=T),r.error===undefined&&(r.error=T),r.complete===undefined&&(r.complete=T);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}}),this.observers.push(r),o}unsubscribeOne(e){this.observers!==undefined&&this.observers[e]!==undefined&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&this.onNoObservers!==undefined&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==undefined&&this.observers[e]!==undefined)try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}})}close(e){this.finalized||(this.finalized=!0,e!==undefined&&(this.finalError=e),this.task.then(()=>{this.observers=undefined,this.onNoObservers=undefined}))}}function T(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I(e,t){return`${e} failed: ${t} argument `}n.validateArgCount=function(e,t,n,r){let o;if(r<t?o="at least "+t:r>n&&(o=0===n?"none":"no more than "+n),o){throw new Error(e+" failed: Was called with "+r+(1===r?" argument.":" arguments.")+" Expects "+o+".")}};n.stringToByteArray=function(e){const t=[];let n=0;for(let o=0;o<e.length;o++){let i=e.charCodeAt(o);if(i>=55296&&i<=56319){const t=i-55296;o++,r(o<e.length,"Surrogate pair missing trail surrogate.");i=65536+(t<<10)+(e.charCodeAt(o)-56320)}i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):i<65536?(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t};
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
n.stringLength=function(e){let t=0;for(let n=0;n<e.length;n++){const r=e.charCodeAt(n);r<128?t++:r<2048?t+=2:r>=55296&&r<=56319?(t+=4,n++):t+=3}return t};const O=1e3,A=2,N=n.MAX_VALUE_MILLIS=144e5,P=n.RANDOM_FACTOR=.5}).call(this)}).call(this,e("_process"))}}},{package:"@metamask/notification-services-controller>firebase>@firebase/util",file:"node_modules/@firebase/util/dist/index.esm2017.js"}],[916,{},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0});class r{static parse(e){if(""===e)return new r([]);if(!e.startsWith("/"))throw new o(e);const[,...t]=e.split("/");return new r(t.map(e=>e.replace(/~1/g,"/").replace(/~0/g,"~")))}constructor(e){this.tokens=e}toString(){if(0===this.tokens.length)return"";return`/${this.tokens.map(e=>e.replace(/~/g,"~0").replace(/\//g,"~1")).join("/")}`}shmeval(e){for(const t of this.tokens){if(!e.hasOwnProperty(t))throw new i(e,t);e=e[t]}return e}}n.default=r;class o extends Error{constructor(e){super(`Invalid JSON Pointer: ${e}`),this.ptr=e}}n.InvalidPtrError=o;class i extends Error{constructor(e,t){super(`Error evaluating JSON Pointer: no attribute ${t} on ${e}`),this.instance=e,this.token=t}}n.EvalError=i}}},{package:"@open-rpc/schema-utils-js>@json-schema-tools/reference-resolver>@json-schema-spec/json-pointer",file:"node_modules/@json-schema-spec/json-pointer/lib/index.js"}],[917,{"@json-schema-tools/reference-resolver":922,"@json-schema-tools/traverse":925,"fast-safe-stringify":5253},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},r.apply(this,arguments)},o=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(o,i){function s(e){try{c(r.next(e))}catch(e){i(e)}}function a(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(s,a)}c((r=r.apply(e,t||[])).next())})},i=this&&this.__generator||function(e,t){var n,r,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(a){return function(c){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i&&(i=0,a[0]&&(s=0)),s;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return s.label++,{value:a[1],done:!1};case 5:s.label++,r=a[1],a=[0];continue;case 7:a=s.ops.pop(),s.trys.pop();continue;default:if(!(o=s.trys,(o=o.length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){s=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){s.label=a[1];break}if(6===a[0]&&s.label<o[1]){s.label=o[1],o=a;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(a);break}o[2]&&s.ops.pop(),s.trys.pop();continue}a=t.call(e,s)}catch(e){a=[6,e],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}},s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0}),n.NonStringRefError=void 0;var a=s(e("@json-schema-tools/traverse")),c=s(e("@json-schema-tools/reference-resolver")),l=s(e("fast-safe-stringify")),u=function(e){this.name="NonStringRefError",this.message=["NonStringRefError","Found an improperly formatted $ref in schema. $ref must be a string","schema in question: ".concat((0,l.default)(e))].join("\n")};n.NonStringRefError=u;var d=function(e,t){if(e.$ref!==undefined&&Object.keys(e).length>1&&!0!==t&&!1!==t){var n=r(r({},t),e);return delete n.$ref,n}return t},f=function(){function e(e,t){var n;if(void 0===t&&(t={}),this.options=t,this.refCache={},n=!0===this.options.mutate||!0===e||!1===e?e:r({},e),this.options.recursive===undefined&&(this.options.recursive=!0),this.options.rootSchema===undefined&&(this.options.rootSchema=n),!0!==e&&!1!==e&&e.$id&&(this.options.rootSchema=n),this.options.refCache&&(this.refCache=this.options.refCache),this.options.protocolHandlerMap)for(var o=0,i=Object.keys(this.options.protocolHandlerMap);o<i.length;o++){var s=i[o];c.default.protocolHandlerMap[s]=this.options.protocolHandlerMap[s]}this.schema=n,this.refs=this.collectRefs()}return e.prototype.resolve=function(){return o(this,void 0,void 0,function(){return i(this,function(e){switch(e.label){case 0:return[4,this._resolve()];case 1:return e.sent(),delete this.schema.definitions,delete this.schema.components,[2,this.schema]}})})},e.prototype._resolve=function(){return o(this,void 0,void 0,function(){var t,n,o,s,l,u,f,p,g,h,m,b=this;return i(this,function(i){switch(i.label){case 0:if(!0===this.schema||!1===this.schema)return[2,Promise.resolve(this.schema)];if(0===this.refs.length)return[2,Promise.resolve(this.schema)];t=this.refs.filter(function(e){return b.refCache[e]===undefined}),n=[],o=0,s=t,i.label=1;case 1:return o<s.length?(l=s[o],u=void 0,this.refCache[l]===undefined?[3,2]:(u=this.refCache[l],[3,5])):[3,11];case 2:if("#"!==l)return[3,3];if(this.options.rootSchema===undefined)throw new Error("options.rootSchema was not provided, but one of the schemas references '#'");return u=this.options.rootSchema,[3,5];case 3:return f=c.default.resolve(l,this.options.rootSchema),n.push(f),[4,f];case 4:u=i.sent(),i.label=5;case 5:return!0!==this.options.recursive||!0===u||!1===u||"#"===l?[3,9]:(p=r(r({},this.options),{refCache:this.refCache}),0===(g=new e(u,p)).refs.length?[3,7]:(h=g._resolve(),n.push(h),[4,h]));case 6:return m=i.sent(),this.refCache[l]=d(u,m),[3,8];case 7:this.refCache[l]=u,i.label=8;case 8:return[3,10];case 9:this.refCache[l]=u,i.label=10;case 10:return o++,[3,1];case 11:return this.schema.$ref!==undefined?this.schema=d(this.schema,this.refCache[this.schema.$ref]):(0,a.default)(this.schema,function(e){if(!0===e||!1===e)return e;if(e.$ref!==undefined){var t=b.refCache[e.$ref];return d(e,t)}return e},{mutable:!0}),[4,Promise.all(n)];case 12:return i.sent(),[2,this.schema]}})})},e.prototype.collectRefs=function(){var e=[];return(0,a.default)(this.schema,function(t){if(!0===t||!1===t)return t;if(t.$ref&&-1===e.indexOf(t.$ref)){if("string"!=typeof t.$ref)throw new u(t);e.push(t.$ref)}return t}),e},e}();n.default=f}}},{package:"@open-rpc/schema-utils-js>@json-schema-tools/dereferencer",file:"node_modules/@json-schema-tools/dereferencer/build/dereferencer.js"}],[918,{"./dereferencer":917},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0}),n.NonStringRefError=void 0;var o=r(e("./dereferencer")),i=e("./dereferencer");Object.defineProperty(n,"NonStringRefError",{enumerable:!0,get:function(){return i.NonStringRefError}}),n.default=o.default}}},{package:"@open-rpc/schema-utils-js>@json-schema-tools/dereferencer",file:"node_modules/@json-schema-tools/dereferencer/build/index.js"}],[919,{},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.jsonSchema=void 0,n.jsonSchema={$schema:"https://meta.json-schema.tools/",$id:"https://meta.json-schema.tools/",title:"JSONSchema",default:{},oneOf:[{$ref:"#/definitions/JSONSchemaObject"},{$ref:"#/definitions/JSONSchemaBoolean"}],definitions:{JSONSchemaBoolean:{title:"JSONSchemaBoolean",description:"Always valid if true. Never valid if false. Is constant.",type:"boolean"},JSONSchemaObject:{title:"JSONSchemaObject",type:"object",properties:{$id:{title:"$id",type:"string",format:"uri-reference"},$schema:{title:"$schema",type:"string",format:"uri"},$ref:{title:"$ref",type:"string",format:"uri-reference"},$comment:{title:"$comment",type:"string"},title:{title:"title",type:"string"},description:{title:"description",type:"string"},default:!0,readOnly:{title:"readOnly",type:"boolean",default:!1},examples:{title:"examples",type:"array",items:!0},multipleOf:{title:"multipleOf",type:"number",exclusiveMinimum:0},maximum:{title:"maximum",type:"number"},exclusiveMaximum:{title:"exclusiveMaximum",type:"number"},minimum:{title:"minimum",type:"number"},exclusiveMinimum:{title:"exclusiveMinimum",type:"number"},maxLength:{$ref:"#/definitions/nonNegativeInteger"},minLength:{$ref:"#/definitions/nonNegativeIntegerDefault0"},pattern:{title:"pattern",type:"string",format:"regex"},additionalItems:{$ref:"#"},items:{title:"items",anyOf:[{$ref:"#"},{$ref:"#/definitions/schemaArray"}],default:!0},maxItems:{$ref:"#/definitions/nonNegativeInteger"},minItems:{$ref:"#/definitions/nonNegativeIntegerDefault0"},uniqueItems:{title:"uniqueItems",type:"boolean",default:!1},contains:{$ref:"#"},maxProperties:{$ref:"#/definitions/nonNegativeInteger"},minProperties:{$ref:"#/definitions/nonNegativeIntegerDefault0"},required:{$ref:"#/definitions/stringArray"},additionalProperties:{$ref:"#"},definitions:{title:"definitions",type:"object",additionalProperties:{$ref:"#"},default:{}},properties:{title:"properties",type:"object",additionalProperties:{$ref:"#"},default:{}},patternProperties:{title:"patternProperties",type:"object",additionalProperties:{$ref:"#"},propertyNames:{title:"propertyNames",format:"regex"},default:{}},dependencies:{title:"dependencies",type:"object",additionalProperties:{title:"dependenciesSet",anyOf:[{$ref:"#"},{$ref:"#/definitions/stringArray"}]}},propertyNames:{$ref:"#"},const:!0,enum:{title:"enum",type:"array",items:!0,minItems:1,uniqueItems:!0},type:{title:"type",anyOf:[{$ref:"#/definitions/simpleTypes"},{title:"arrayOfSimpleTypes",type:"array",items:{$ref:"#/definitions/simpleTypes"},minItems:1,uniqueItems:!0}]},format:{title:"format",type:"string"},contentMediaType:{title:"contentMediaType",type:"string"},contentEncoding:{title:"contentEncoding",type:"string"},if:{$ref:"#"},then:{$ref:"#"},else:{$ref:"#"},allOf:{$ref:"#/definitions/schemaArray"},anyOf:{$ref:"#/definitions/schemaArray"},oneOf:{$ref:"#/definitions/schemaArray"},not:{$ref:"#"}}},schemaArray:{title:"schemaArray",type:"array",minItems:1,items:{$ref:"#"}},nonNegativeInteger:{title:"nonNegativeInteger",type:"integer",minimum:0},nonNegativeIntegerDefault0:{title:"nonNegativeIntegerDefaultZero",type:"integer",minimum:0,default:0},simpleTypes:{title:"simpleTypes",type:"string",enum:["array","boolean","integer","null","number","object","string"]},stringArray:{title:"stringArray",type:"array",items:{type:"string"},uniqueItems:!0,default:[]}}},n.default=n.jsonSchema}}},{package:"@open-rpc/schema-utils-js>@json-schema-tools/meta-schema",file:"node_modules/@json-schema-tools/meta-schema/index.js"}],[92,{"@metamask/messenger":2767},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.getConnectivityControllerMessenger=function(e){return new r.Messenger({namespace:"ConnectivityController",parent:e})};var r=e("@metamask/messenger")}}},{package:"$root$",file:"app/scripts/controller-init/messengers/connectivity/connectivity-controller-messenger.ts"}],[920,{"./errors":921,"isomorphic-fetch":5482},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(o,i){function s(e){try{c(r.next(e))}catch(e){i(e)}}function a(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(s,a)}c((r=r.apply(e,t||[])).next())})},o=this&&this.__generator||function(e,t){var n,r,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(a){return function(c){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i&&(i=0,a[0]&&(s=0)),s;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return s.label++,{value:a[1],done:!1};case 5:s.label++,r=a[1],a=[0];continue;case 7:a=s.ops.pop(),s.trys.pop();continue;default:if(!(o=s.trys,(o=o.length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){s=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){s.label=a[1];break}if(6===a[0]&&s.label<o[1]){s.label=o[1],o=a;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(a);break}o[2]&&s.ops.pop(),s.trys.pop();continue}a=t.call(e,s)}catch(e){a=[6,e],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0});var s=e("./errors"),a=i(e("isomorphic-fetch")),c=function(e){return r(void 0,void 0,void 0,function(){var t,n;return o(this,function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),[4,(0,a.default)(e)];case 1:return t=r.sent(),[3,3];case 2:throw r.sent(),new s.InvalidRemoteURLError(e);case 3:return r.trys.push([3,5,,6]),[4,t.json()];case 4:return[2,r.sent()];case 5:throw n=r.sent(),new s.NonJsonRefError({$ref:e},n.message);case 6:return[2]}})})};n.default={https:c,http:c}}}},{package:"@open-rpc/schema-utils-js>@json-schema-tools/reference-resolver",file:"node_modules/@json-schema-tools/reference-resolver/build/default-protocol-handler-map.js"}],[921,{},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.InvalidFileSystemPathError=n.InvalidRemoteURLError=n.NotResolvableError=n.NonJsonRefError=void 0;var r=function(e,t){this.name="NonJsonRefError",this.message=["NonJsonRefError","The resolved value at the reference: ".concat(e.$ref," was not JSON.parse 'able"),"The non-json content in question: ".concat(t)].join("\n")};n.NonJsonRefError=r;var o=function(e){this.name="NotResolvableError",this.message=["NotResolvableError","Could not resolve the reference: ".concat(e),"No protocol handler was found, and it was not found to be an internal reference"].join("\n")};n.NotResolvableError=o;var i=function(e){this.name="InvalidRemoteURLError",this.message=["InvalidRemoteURLError","The url was not resolvable: ".concat(e)].join("\n")};n.InvalidRemoteURLError=i;var s=function(e){this.name="InvalidFileSystemPathError",this.message=["InvalidFileSystemPathError","The path was not resolvable: ".concat(e)].join("\n")};n.InvalidFileSystemPathError=s}}},{package:"@open-rpc/schema-utils-js>@json-schema-tools/reference-resolver",file:"node_modules/@json-schema-tools/reference-resolver/build/errors.js"}],[922,{"./default-protocol-handler-map":920,"./reference-resolver":923},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},r.apply(this,arguments)},o=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(o,i){function s(e){try{c(r.next(e))}catch(e){i(e)}}function a(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(s,a)}c((r=r.apply(e,t||[])).next())})},i=this&&this.__generator||function(e,t){var n,r,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(a){return function(c){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i&&(i=0,a[0]&&(s=0)),s;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return s.label++,{value:a[1],done:!1};case 5:s.label++,r=a[1],a=[0];continue;case 7:a=s.ops.pop(),s.trys.pop();continue;default:if(!(o=s.trys,(o=o.length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){s=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){s.label=a[1];break}if(6===a[0]&&s.label<o[1]){s.label=o[1],o=a;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(a);break}o[2]&&s.ops.pop(),s.trys.pop();continue}a=t.call(e,s)}catch(e){a=[6,e],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}},s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0});var a=s(e("./default-protocol-handler-map")),c=s(e("./reference-resolver")),l=r(r({},a.default),{file:function(){return o(void 0,void 0,void 0,function(){return i(this,function(e){return[2,undefined]})})}});n.default=new c.default(l)}}},{package:"@open-rpc/schema-utils-js>@json-schema-tools/reference-resolver",file:"node_modules/@json-schema-tools/reference-resolver/build/index-web.js"}],[923,{"./errors":921,"./resolve-pointer":924},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(o,i){function s(e){try{c(r.next(e))}catch(e){i(e)}}function a(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(s,a)}c((r=r.apply(e,t||[])).next())})},o=this&&this.__generator||function(e,t){var n,r,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(a){return function(c){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i&&(i=0,a[0]&&(s=0)),s;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return s.label++,{value:a[1],done:!1};case 5:s.label++,r=a[1],a=[0];continue;case 7:a=s.ops.pop(),s.trys.pop();continue;default:if(!(o=s.trys,(o=o.length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){s=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){s.label=a[1];break}if(6===a[0]&&s.label<o[1]){s.label=o[1],o=a;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(a);break}o[2]&&s.ops.pop(),s.trys.pop();continue}a=t.call(e,s)}catch(e){a=[6,e],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0});var s=e("./errors"),a=i(e("./resolve-pointer")),c=function(){function e(e){this.protocolHandlerMap=e}return e.prototype.resolve=function(e){return r(this,arguments,void 0,function(e,t){var n,r,i,c,l,u,d,f,p,g;return void 0===t&&(t={}),o(this,function(o){switch(o.label){case 0:if("#"===e[0])return[2,Promise.resolve((0,a.default)(e,t))];(n=e.split("#")).length>1&&(r=n[n.length-1]),i=n[0],o.label=1;case 1:return o.trys.push([1,3,,4]),[4,this.protocolHandlerMap.file(i,t)];case 2:return c=o.sent(),[3,4];case 3:throw l=o.sent(),new s.NonJsonRefError({$ref:e},l.message);case 4:if(c!==undefined)return g=c,r&&(g=(0,a.default)(r,g)),[2,g];if(!1===e.includes("://"))throw new s.InvalidFileSystemPathError(e);u=0,d=Object.keys(this.protocolHandlerMap),o.label=5;case 5:return u<d.length?(f=d[u],i.startsWith(f)?[4,this.protocolHandlerMap[f](i,t)]:[3,7]):[3,8];case 6:if((p=o.sent())!==undefined)return g=p,r&&(g=(0,a.default)(r,g)),[2,g];o.label=7;case 7:return u++,[3,5];case 8:throw new s.NotResolvableError(e)}})})},e}();n.default=c}}},{package:"@open-rpc/schema-utils-js>@json-schema-tools/reference-resolver",file:"node_modules/@json-schema-tools/reference-resolver/build/reference-resolver.js"}],[924,{"@json-schema-spec/json-pointer":916},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0}),n.InvalidJsonPointerRefError=void 0;var o=r(e("@json-schema-spec/json-pointer")),i=function(e,t){this.name="InvalidJsonPointerRefError",this.message=["InvalidJsonPointerRefError","The provided RFC6901 JSON Pointer is invalid: ".concat(e),"","addition info: ",t].join("\n")};n.InvalidJsonPointerRefError=i,n.default=function(e,t){try{var n=e.replace("#","");return o.default.parse(n).shmeval(t)}catch(t){throw new i(e,t.message)}}}}},{package:"@open-rpc/schema-utils-js>@json-schema-tools/reference-resolver",file:"node_modules/@json-schema-tools/reference-resolver/build/resolve-pointer.js"}],[925,{},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},r.apply(this,arguments)},o=this&&this.__spreadArray||function(e,t,n){if(n||2===arguments.length)for(var r,o=0,i=t.length;o<i;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))};Object.defineProperty(n,"__esModule",{value:!0}),n.defaultOptions=void 0,n.defaultOptions={skipFirstMutation:!1,mutable:!1,bfs:!1};var i=function(e){return e.map(function(e){return""===e?"$":".".concat(e)}).join("")},s=function(e,t){var n=t.find(function(t){return t===e});return n||!1},a=function(e,t){return void 0===t&&(t=1),e[e.length-t]};n.default=function e(t,c,l,u,d,f,p,g,h){void 0===l&&(l=n.defaultOptions),void 0===u&&(u=0),void 0===d&&(d=[]),void 0===f&&(f=[]),void 0===p&&(p=[]),void 0===g&&(g=[]),void 0===h&&(h=[]);var m=r(r({},n.defaultOptions),l);if(0===u&&(p=[""]),"boolean"==typeof t||t instanceof Boolean)return!0===m.skipFirstMutation&&0===u?t:c(t,!1,i(p),a(f));var b=t;!1===m.mutable&&(b=r({},t)),f.push(b),!0===m.bfs&&(!1!==m.skipFirstMutation&&0===u||(b=c(b,!1,i(p),a(f,2)))),d.push(t),g.push([t,b]);var v=function(t,n){var r=s(t,d);return r?(h.push(r),!0===m.skipFirstMutation&&r===d[0]?c(t,!0,i(n),a(f)):g.find(function(e){var t=e[0];return r===t})[1]):e(t,c,l,u+1,d,f,n,g,h)};if(t.anyOf)b.anyOf=t.anyOf.map(function(e,t){return v(e,o(o([],p,!0),["anyOf[".concat(t,"]")],!1))});else if(t.allOf)b.allOf=t.allOf.map(function(e,t){return v(e,o(o([],p,!0),["allOf[".concat(t,"]")],!1))});else if(t.oneOf)b.oneOf=t.oneOf.map(function(e,t){return v(e,o(o([],p,!0),["oneOf[".concat(t,"]")],!1))});else{if(t.items)if(t.items instanceof Array)b.items=t.items.map(function(e,t){return v(e,o(o([],p,!0),["items[".concat(t,"]")],!1))});else{var w=s(t.items,d);if(w)if(h.push(w),!0===m.skipFirstMutation&&w===d[0])b.items=c(t.items,!0,i(p),a(f));else{var y=g.find(function(e){var t=e[0];return w===t})[1];b.items=y}else b.items=e(t.items,c,l,u+1,d,f,o(o([],p,!0),["items"],!1),g,h)}if(t.additionalItems!==undefined&&(b.additionalItems=v(t.additionalItems,o(o([],p,!0),["additionalItems"],!1))),t.properties!==undefined){var C=t.properties,k={};Object.keys(t.properties).forEach(function(e){k[e]=v(C[e],o(o([],p,!0),["properties",e.toString()],!1))}),b.properties=k}if(t.patternProperties!==undefined){var S=t.patternProperties,_={};Object.keys(t.patternProperties).forEach(function(e){_[e]=v(S[e],o(o([],p,!0),["patternProperties",e.toString()],!1))}),b.patternProperties=_}t.additionalProperties!==undefined&&!0==!!t.additionalProperties&&(b.additionalProperties=v(t.additionalProperties,o(o([],p,!0),["additionalProperties"],!1)))}if(!0===m.skipFirstMutation&&0===u)return b;if(!0===m.bfs)return f.pop(),b;var E=-1!==h.indexOf(t);return f.pop(),c(b,E,i(p),a(f))}}}},{package:"@open-rpc/schema-utils-js>@json-schema-tools/dereferencer>@json-schema-tools/traverse",file:"node_modules/@json-schema-tools/traverse/build/index.js"}],[93,{"./connectivity-controller-messenger":92},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"getConnectivityControllerMessenger",{enumerable:!0,get:function(){return r.getConnectivityControllerMessenger}});var r=e("./connectivity-controller-messenger")}}},{package:"$root$",file:"app/scripts/controller-init/messengers/connectivity/index.ts"}],[94,{"@metamask/messenger":2767},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.getAccountActivityServiceMessenger=function(e){const t=new r.Messenger({namespace:"AccountActivityService",parent:e});return e.delegate({messenger:t,actions:["AccountsController:getSelectedAccount","BackendWebSocketService:connect","BackendWebSocketService:forceReconnection","BackendWebSocketService:subscribe","BackendWebSocketService:getConnectionInfo","BackendWebSocketService:channelHasSubscription","BackendWebSocketService:getSubscriptionsByChannel","BackendWebSocketService:findSubscriptionsByChannelPrefix","BackendWebSocketService:addChannelCallback","BackendWebSocketService:removeChannelCallback"],events:["AccountsController:selectedAccountChange","BackendWebSocketService:connectionStateChanged"]}),t};var r=e("@metamask/messenger")}}},{package:"$root$",file:"app/scripts/controller-init/messengers/core-backend/account-activity-service-messenger.ts"}],[95,{"@metamask/messenger":2767},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.getBackendWebSocketServiceInitMessenger=function(e){const t=new r.Messenger({namespace:"BackendWebSocketServiceInit",parent:e});return e.delegate({messenger:t,actions:["RemoteFeatureFlagController:getState","AuthenticationController:getBearerToken"]}),t},n.getBackendWebSocketServiceMessenger=function(e){const t=new r.Messenger({namespace:"BackendWebSocketService",parent:e});return e.delegate({messenger:t,actions:["AuthenticationController:getBearerToken"],events:["AuthenticationController:stateChange","KeyringController:lock","KeyringController:unlock"]}),t};var r=e("@metamask/messenger")}}},{package:"$root$",file:"app/scripts/controller-init/messengers/core-backend/backend-websocket-service-messenger.ts"}],[96,{"./account-activity-service-messenger":94,"./backend-websocket-service-messenger":95},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"getAccountActivityServiceMessenger",{enumerable:!0,get:function(){return o.getAccountActivityServiceMessenger}}),Object.defineProperty(n,"getBackendWebSocketServiceInitMessenger",{enumerable:!0,get:function(){return r.getBackendWebSocketServiceInitMessenger}}),Object.defineProperty(n,"getBackendWebSocketServiceMessenger",{enumerable:!0,get:function(){return r.getBackendWebSocketServiceMessenger}});var r=e("./backend-websocket-service-messenger"),o=e("./account-activity-service-messenger")}}},{package:"$root$",file:"app/scripts/controller-init/messengers/core-backend/index.ts"}],[97,{"@metamask/messenger":2767},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.getCurrencyRateControllerInitMessenger=function(e){const t=new r.Messenger({namespace:"CurrencyRateControllerInit",parent:e});return e.delegate({messenger:t,actions:["PreferencesController:getState"]}),t},n.getCurrencyRateControllerMessenger=function(e){const t=new r.Messenger({namespace:"CurrencyRateController",parent:e});return e.delegate({messenger:t,actions:["NetworkController:getNetworkClientById","NetworkController:getState"]}),t};var r=e("@metamask/messenger")}}},{package:"$root$",file:"app/scripts/controller-init/messengers/currency-rate-controller-messenger.ts"}],[98,{"@metamask/messenger":2767},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.getDecryptMessageControllerInitMessenger=function(e){const t=new r.Messenger({namespace:"DecryptMessageControllerInit",parent:e});return e.delegate({messenger:t,actions:["MetaMetricsController:trackEvent"]}),t},n.getDecryptMessageControllerMessenger=function(e){const t=new r.Messenger({namespace:"DecryptMessageController",parent:e});return e.delegate({messenger:t,actions:["ApprovalController:addRequest","ApprovalController:acceptRequest","ApprovalController:rejectRequest","KeyringController:decryptMessage"],events:["DecryptMessageManager:stateChange","DecryptMessageManager:unapprovedMessage"]}),t};var r=e("@metamask/messenger")}}},{package:"$root$",file:"app/scripts/controller-init/messengers/decrypt-message-controller-messenger.ts"}],[99,{"@metamask/messenger":2767},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.getDecryptMessageManagerMessenger=function(e){return new r.Messenger({namespace:"DecryptMessageManager",parent:e})};var r=e("@metamask/messenger")}}},{package:"$root$",file:"app/scripts/controller-init/messengers/decrypt-message-manager-messenger.ts"}],[9,{"../../shared/constants/app":7053,"../../shared/constants/defi-referrals":7059,"../../shared/constants/errors":7060,"../../shared/constants/infura-project-id":7065,"../../shared/constants/messages":7069,"../../shared/constants/metametrics":7070,"../../shared/constants/offscreen-communication":7076,"../../shared/constants/onboarding":7077,"../../shared/constants/start-up-errors":7087,"../../shared/constants/ui-initialization":7095,"../../shared/lib/browser-runtime.utils":7112,"../../shared/lib/caip-stream":7114,"../../shared/lib/deep-links/utils":7149,"../../shared/lib/fetch-with-timeout":7180,"../../shared/lib/get-first-preferred-lang-code":7187,"../../shared/lib/manifestFlags":7192,"../../shared/lib/mv3.utils":7201,"../../shared/lib/object.utils":7204,"../../shared/lib/promise-with-resolvers":7207,"../../shared/lib/selectors/networks":7216,"../../shared/lib/sentry":7221,"./constants/marketing-site-whitelist":10,"./constants/sentry-state":11,"./constants/snaps":12,"./constants/stream":13,"./first-time-state":262,"./lib/CronjobControllerStorageManager":266,"./lib/createDefiReferralMiddleware":275,"./lib/deep-links/deep-link-router":290,"./lib/deep-links/metrics":291,"./lib/ens-ipfs/setup":297,"./lib/extension-lazy-listener/extension-lazy-listener":298,"./lib/getObjStructure":300,"./lib/migrator":306,"./lib/notification-manager":310,"./lib/safe-reload":339,"./lib/setup-initial-state-hooks":343,"./lib/start-up-errors/start-up-errors":355,"./lib/state-corruption/state-corruption-recovery":356,"./lib/stores/persistence-manager":363,"./lib/stream-utils":365,"./lib/update-remote-feature-flags":399,"./lib/use-split-state-storage":400,"./lib/util":401,"./metamask-controller":402,"./migrations":637,"./offscreen":638,"./on-update":639,"./platforms/extension":640,"@metamask/base-controller":1568,"@metamask/design-tokens":2074,"@metamask/utils":3770,"extension-port-stream":5238,loglevel:5680,"readable-stream":6144,"webextension-polyfill":6964},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.loadStateFromPersistence=ze,n.setupController=Qe;var r=e("./lib/setup-initial-state-hooks");e("../../shared/constants/infura-project-id");var o=e("@metamask/design-tokens"),i=e("readable-stream"),s=oe(e("loglevel")),a=oe(e("webextension-polyfill")),c=e("@metamask/utils"),l=e("@metamask/base-controller"),u=e("extension-port-stream"),d=e("../../shared/lib/promise-with-resolvers"),f=e("../../shared/constants/onboarding"),p=e("../../shared/constants/app"),g=e("../../shared/constants/messages"),h=e("../../shared/constants/ui-initialization"),m=e("../../shared/constants/metametrics"),b=e("../../shared/lib/browser-runtime.utils"),v=e("../../shared/lib/mv3.utils"),w=e("../../shared/lib/object.utils"),y=(e("../../shared/constants/offscreen-communication"),e("../../shared/lib/sentry")),C=e("../../shared/lib/selectors/networks"),k=e("../../shared/lib/caip-stream"),S=oe(e("../../shared/lib/fetch-with-timeout")),_=e("../../shared/constants/errors"),E=oe(e("../../shared/lib/get-first-preferred-lang-code")),M=(e("../../shared/lib/manifestFlags"),e("../../shared/constants/start-up-errors")),T=e("../../shared/constants/defi-referrals"),I=e("../../shared/lib/deep-links/utils"),O=e("./lib/state-corruption/state-corruption-recovery"),A=e("./lib/stores/persistence-manager"),N=e("./lib/use-split-state-storage"),P=oe(e("./migrations")),j=oe(e("./lib/migrator")),D=e("./lib/update-remote-feature-flags"),R=oe(e("./platforms/extension")),L=e("./constants/sentry-state"),$=re(e("./lib/notification-manager")),B=re(e("./metamask-controller")),x=oe(e("./lib/getObjStructure")),F=oe(e("./lib/ens-ipfs/setup")),U=e("./lib/util"),K=e("./offscreen"),V=e("./lib/stream-utils"),H=oe(e("./first-time-state")),W=e("./on-update"),z=e("./constants/marketing-site-whitelist"),q=e("./constants/stream"),G=e("./constants/snaps"),J=e("./lib/extension-lazy-listener/extension-lazy-listener"),Y=e("./lib/deep-links/deep-link-router"),Q=e("./lib/deep-links/metrics"),Z=e("./lib/safe-reload"),X=e("./lib/start-up-errors/start-up-errors"),ee=e("./lib/CronjobControllerStorageManager"),te=e("./lib/createDefiReferralMiddleware");function ne(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(ne=function(e){return e?n:t})(e)}function re(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=ne(t);if(n&&n.has(e))return n.get(e);var r={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&{}.hasOwnProperty.call(e,i)){var s=o?Object.getOwnPropertyDescriptor(e,i):null;s&&(s.get||s.set)?Object.defineProperty(r,i,s):r[i]=e[i]}return r.default=e,n&&n.set(e,r),r}function oe(e){return e&&e.__esModule?e:{default:e}}const ie=globalThis.stateHooks.lazyListener??new J.ExtensionLazyListener(a.default),se="#0376C9",ae=o.lightTheme.colors.error.default,ce=9,{safePersist:le,requestSafeReload:ue,evacuate:de}=(0,Z.getRequestSafeReload)(r.persistenceManager);global.stateHooks.getMostRecentPersistedState=()=>r.persistenceManager.mostRecentRetrievedState,global.stateHooks.getStorageKind=()=>r.persistenceManager.storageKind,global.logEncryptedVault=()=>{r.persistenceManager.logEncryptedVault()};const{sentry:fe}=global;let pe={...H.default};const ge={[p.ENVIRONMENT_TYPE_POPUP]:!0,[p.ENVIRONMENT_TYPE_NOTIFICATION]:!0,[p.ENVIRONMENT_TYPE_FULLSCREEN]:!0},he=["trezor-connect"];s.default.setLevel("info",!1);const me=new R.default,be=new $.default,ve=(0,U.getPlatform)()===p.PLATFORM_FIREFOX;function we(e){const t=e.name,n=e.sender?.url?new URL(e.sender.url):null;let r;return r=ve?Boolean(ge[t]):n?.origin===`chrome-extension://${a.default.runtime.id}`,{processName:t,senderUrl:n,isMetaMaskUIPort:r}}let ye=0,Ce=!1,ke=!1,Se=0,_e=0;const Ee={},Me={};let Te;const Ie={},Oe={};const Ae=new URL("https://metamask.github.io/phishing-warning/v5.1.0/"),Ne=Ae.toString();let Pe,je,De;function Re(){const e=(0,d.withResolvers)();Pe=e.promise,je=e.resolve,De=e.reject}ie.once("runtime","onInstalled").then(e=>{!async function([e]){if("install"===e.reason)await async function(){s.default.debug("First install detected"),me.openExtensionInBrowser();await Xe()}();else if("update"===e.reason){const{previousVersion:t}=e;if(!t||t===me.getVersion())return;await Pe,(0,W.onUpdate)(Te,me,t,ue)}}(e)}),Re();let Le,$e,Be,xe;const Fe=new O.CorruptionHandler,Ue=async e=>{try{e.postMessage({data:{method:h.BACKGROUND_LIVENESS_METHOD},name:"background-liveness"})}catch(e){return void s.default.error("MetaMask - background-liveness check: Failed to message to port",e)}try{await Pe,Le(e)}catch(t){if(fe?.captureException(t),we(e).isMetaMaskUIPort)if((0,_.isStateCorruptionError)(t))await Fe.handleStateCorruptionError({port:e,error:t,database:r.persistenceManager,repairCallback:async e=>{Re(),(0,O.hasVault)(e)?(await et(e),Te.onboardingController.setFirstTimeFlowType(f.FirstTimeFlowType.restore)):(await r.persistenceManager.reset(),await et(null))}});else{const n=(0,c.isObject)(t)?{message:t.message??"Unknown error",name:t.name??"UnknownError",stack:t.stack,...t.sentryTags&&{sentryTags:t.sentryTags}}:{message:String(t),name:"UnknownError",stack:""};(0,X.tryPostMessage)(e,M.DISPLAY_GENERAL_STARTUP_ERROR,{error:n,currentLocale:Te?.preferencesController?.state?.currentLocale})}}},Ke=()=>{ie.addListener("runtime","onConnect",Ue)};function Ve(){const e=(new Date).toISOString();a.default.storage.session.set({timestamp:e})}async function He(e){(0,U.initInstallType)();const t=v.isManifestV3?(0,K.createOffscreen)():null;let n=null,o=!1;v.isManifestV3&&(0,K.addOffscreenConnectivityListener)(e=>{if(o&&Te.controllerApi.setConnectivityStatus){const t=e?"online":"offline";Te.controllerApi.setConnectivityStatus(t)}else n=e});const i=await ze(e),s=i.data,c=await(0,E.default)();let l;if(v.isManifestV3){if(!1!==s.PreferencesController?.enableMV3TimestampSave){const e=2e3;Ve(),setInterval(Ve,e)}const e=await a.default.storage.session.get(["isFirstMetaMaskControllerSetup"]);l=e?.isFirstMetaMaskControllerSetup===undefined,await a.default.storage.session.set({isFirstMetaMaskControllerSetup:l})}const u={},d=await async function(){const e=(0,S.default)(),t=G.PREINSTALLED_SNAPS_URLS.map(async t=>{const n=await e(t);if(t.pathname.endsWith(".json.gz")){const e=new DecompressionStream("gzip"),t=n.body.pipeThrough(e);return await new Response(t).json()}return await n.json()});return Promise.all(t)}(),f=new ee.CronjobControllerStorageManager;if(await f.init(),Qe(s,c,u,l,i.meta,t,d,f),Te.metaMetricsController.updateTraits({[m.MetaMetricsUserTrait.StorageKind]:r.persistenceManager.storageKind}),function(e){async function t(e,t){try{const n=await a.default.tabs.get(e);return!(n.url&&n.url.startsWith("https://www.google.com/search")||(await a.default.tabs.update(e,{url:t}),0))}catch(e){return fe?.captureException(e),!1}}const n=!v.isManifestV3;a.default.webRequest.onBeforeRequest.addListener(r=>{if(r.tabId===a.default.tabs.TAB_ID_NONE)return{};const{completedOnboarding:o}=e.onboardingController.state;if(!o)return{};if(!e.preferencesController.state.usePhishDetect)return{};if(r.initiator&&"null"!==r.initiator&&new URL(r.initiator).host===Ae.host)return{};const{hostname:i,href:s,searchParams:c}=new URL(r.url);e.phishingController.maybeUpdateState();const l=e.phishingController.isBlockedRequest(r.url);let u,d;if("main_frame"!==r.type&&"sub_frame"!==r.type||(u=e.phishingController.test(r.url)),!u?.result&&!l.result)return{};let f,p=s;u?.result&&l.result?d=`${u.type} and ${l.type}`:u?.result?d=u.type:(d=l.type,p=r.initiator);try{f=new URL(p).hostname}catch{f=i,p=s}const g=new URLSearchParams({hostname:f,href:p}),h=new URL(Ne);h.hash=g.toString();const b=h.toString(),v=()=>{ve||e.metaMetricsController.trackEvent({event:m.MetaMetricsEventName.PhishingPageDisplayed,category:m.MetaMetricsEventCategory.Phishing,properties:{url:p,referrer:{url:p},reason:d,requestDomain:l.result?i:undefined}},{excludeMetaMetricsId:!0})};return n?"main_frame"===r.type?(v(),{redirectUrl:b}):(t(r.tabId,b).then(e=>{e&&v()}),{cancel:!0}):(t(r.tabId,b).then(e=>{e&&v()}),{})},{urls:["http://*/*","https://*/*","ws://*/*","wss://*/*"]},n?["blocking"]:[])}(Te),v.isManifestV3){if(o=!0,null!==n){const e=n?"online":"offline";Te.controllerApi.setConnectivityStatus(e)}}else{const e=e=>{const t=e?"online":"offline";Te.controllerApi.setConnectivityStatus(t)};e(globalThis.navigator.onLine),globalThis.addEventListener("online",()=>e(!0)),globalThis.addEventListener("offline",()=>e(!1))}v.isManifestV3||await async function(){let e;try{const t=new URL(Ne);let n,r;t.hash="#extensionStartup",e=window.document.createElement("iframe"),e.setAttribute("src",t.href),e.setAttribute("sandbox","allow-scripts allow-same-origin");const o=new Promise((e,t)=>{n=e,r=t});e.addEventListener("load",n),window.document.body.appendChild(e),setTimeout(()=>r(new We),1e3),await o}catch(e){e instanceof We?console.warn("Phishing warning page timeout; page not guaranteed to work offline."):console.error("Failed to initialize phishing warning page",e)}finally{e&&e.remove()}}(),await(async()=>{const e=await a.default.tabs.query({url:"<all_urls>",windowType:"normal"}).then(e=>((0,b.checkForLastErrorAndLog)(),e)).catch(()=>{(0,b.checkForLastErrorAndLog)()});for(const t of e)a.default.tabs.sendMessage(t.id,{name:g.EXTENSION_MESSAGES.READY}).then(()=>{(0,b.checkForLastErrorAndLog)()}).catch(()=>{(0,b.checkForLastErrorAndLog)()})})(),new Y.DeepLinkRouter({getExtensionURL:me.getExtensionURL,getState:Te.getState.bind(Te)}).on("navigate",async({url:e,parsed:t})=>{"redirectTo"in t||await Te.metaMetricsController.trackEvent((0,Q.createEvent)({signature:t.signature,url:e}))}).on("error",e=>fe?.captureException(e)).install()}Ke(),a.default.runtime.onConnectExternal.addListener(async(...e)=>{await Pe,$e(...e)});class We extends Error{constructor(){super("Timeout failed")}}async function ze(e){let t;if(e){t={data:{},meta:{}};for(const n of A.backedUpStateKeys)(0,c.hasProperty)(e,n)&&(t.data[n]=e[n]);(0,c.hasProperty)(e,"meta")&&(0,c.isObject)(e.meta)&&(t.meta=e.meta,"split"===e.meta.storageKind||"data"===e.meta.storageKind?r.persistenceManager.storageKind=e.meta.storageKind:r.persistenceManager.storageKind="data"),"number"!=typeof t.meta.version&&(s.default.error("The `backup`'s `meta.version` property was missing during backup restore."),t.meta.version=155)}else{const e=!0;t=await r.persistenceManager.get({validateVault:e})}const n=new j.default({migrations:P.default,defaultVersion:null});n.on("error",e=>{console.warn(e);const n=(0,x.default)(t);fe?.captureException(e,{extra:{vaultStructure:n}})});let o=!1;t?.data||t?.meta||(o=!0,t=n.generateInitialState(pe));const{state:i,changedKeys:a}=await n.migrateData(t),l=async n=>{const o=t?.meta?.version,s="number"==typeof o&&o>=157;let a=e?.AppMetadataController?.firstTimeInfo??i?.data?.AppMetadataController?.firstTimeInfo??i?.data?.firstTimeInfo??t?.data?.AppMetadataController?.firstTimeInfo??t?.data?.firstTimeInfo;if(!a)try{const e=await r.persistenceManager.getBackup();a=e?.AppMetadataController?.firstTimeInfo}catch{}const c=new Error(n);return c.sentryTags={"corruption.preMigrationVersion":String(o??"unknown"),"corruption.backupShouldExist":String(s),"corruption.installVersion":String(a?.version??"unknown"),"corruption.installDate":String(a?.date??"unknown")},c};if(!i)throw await l("MetaMask - migrator returned undefined");if(!(0,c.isObject)(i.meta))throw await l(`MetaMask - migrator metadata has invalid type '${typeof i.meta}'`);if("number"!=typeof i.meta.version)throw await l(`MetaMask - migrator metadata version has invalid type '${typeof i.meta.version}'`);if(!["data","split",undefined].includes(i.meta.storageKind))throw await l(`MetaMask - migrator metadata storageKind has invalid value '${i.meta.storageKind}'`);if(!(0,c.isObject)(i.data))throw await l(`MetaMask - migrator data has invalid type '${typeof i.data}'`);if(r.persistenceManager.setMetadata(i.meta),s.default.debug("[Split State]: Loaded data from persistence with storageKind '%s'",r.persistenceManager.storageKind),"data"===r.persistenceManager.storageKind){const e=!0===i.meta.platformSplitStateGradualRolloutAttempted,t=!e&&await(0,N.useSplitStateStorage)(i.data);s.default.debug("[Split State]: shouldUseSplitStateStorage: %s (alreadyTried: %s)",t,e),t&&(i.meta.platformSplitStateGradualRolloutAttempted=!0,r.persistenceManager.setMetadata(i.meta)),s.default.debug("[Split State]: Writing data to persistence with storageKind 'data'"),await r.persistenceManager.set(i.data),t&&(await r.persistenceManager.migrateToSplitState(i.data),i.meta=r.persistenceManager.getMetaData(),i.meta!==undefined&&(delete i.meta.platformSplitStateGradualRolloutAttempted,r.persistenceManager.setMetadata(i.meta)),await r.persistenceManager.persist())}else{if("split"!==r.persistenceManager.storageKind)throw new Error(`MetaMask - persistenceManager has invalid storageKind '${r.persistenceManager.storageKind}'`);if(o)for(const[e,t]of Object.entries(i.data))r.persistenceManager.update(e,t);else for(const e of a)r.persistenceManager.update(e,i.data[e]);await r.persistenceManager.persist()}return s.default.debug("[Split State]: Load complete."),i}function qe(e){const{metaMetricsId:t}=Te.metaMetricsController.state;if(!(0,U.shouldEmitDappViewedEvent)(t))return;const n=Te.getPermittedAccounts(e).length;if(0===n)return;const r=Te.controllerMessenger.call("AccountsController:getState"),o=Object.keys(r.internalAccounts.accounts).length;Te.metaMetricsController.trackEvent({event:m.MetaMetricsEventName.DappViewed,category:m.MetaMetricsEventCategory.InpageProvider,referrer:{url:e},properties:{is_first_visit:!1,number_of_accounts:o,number_of_accounts_connected:n}},{excludeMetaMetricsId:!0})}function Ge(e){if(!e.sender?.tab||!e.sender?.url||!e.sender?.tab?.url)return;const t=e.sender.tab.id,n=new URL(e.sender.url),{origin:r}=n,o=new URL(e.sender.tab.url),{origin:i}=o;Object.keys(Ie).includes(t)||(Ie[t]=r),t in Oe||(Oe[t]=i);const s=Te.controllerMessenger.call("PermissionController:hasPermissions",r),a="New Tab"!==e.sender.tab.title;s&&a&&qe(r)}function Je(e){const t=[p.ENVIRONMENT_TYPE_POPUP,p.ENVIRONMENT_TYPE_NOTIFICATION,p.ENVIRONMENT_TYPE_FULLSCREEN];!(Object.values(Ee).some(Boolean)||Ce||ye>0||Se>0)&&t.includes(e)&&function(){const{metaMetricsId:e,participateInMetaMetrics:t}=Te.metaMetricsController.state;(null!==e||t)&&Te.metaMetricsController.trackEvent({event:m.MetaMetricsEventName.AppOpened,category:m.MetaMetricsEventCategory.App})}()}const Ye=async()=>{if(await Pe,Te)try{const e=await a.default.tabs.query({active:!0,currentWindow:!0});if(!e||0===e.length)return;const t=e[0],{id:n,title:r,url:o,favIconUrl:i}=t;if(!o)return void Te.appStateController.clearAppActiveTab();const{origin:s,protocol:c,host:l,href:u}=new URL(o);if(!(0,U.isWebOrigin)(s))return void Te.appStateController.clearAppActiveTab();Te.appStateController.setAppActiveTab({id:n,title:r,origin:s,protocol:c,url:o,host:l,href:u,favIconUrl:i}),Te.subjectMetadataController.addSubjectMetadata({origin:s,name:r||l||s,iconUrl:i||null,subjectType:"website"})}catch(e){console.log("Error refreshing appActiveTab:",e.message)}};function Qe(e,t,n,o,c,d,f,g){Te=new B.default({infuraProjectId:globalThis.INFURA_PROJECT_ID,showUserConfirmation:Ze,initState:e,initLangCode:t,platform:me,notificationManager:be,browser:a.default,getRequestAccountTabIds:()=>Me,getOpenMetamaskTabsIds:()=>Ee,overrides:n,isFirstMetaMaskControllerSetup:o,currentMigrationVersion:c.version,featureFlags:{},offscreenPromise:d,preinstalledSnaps:f,requestSafeReload:ue,cronjobControllerStorageManager:g}),r.persistenceManager.setOnSetFailed(e=>{Te.appStateController.setStorageWriteErrorType(e)});const h=[],b=Te.store.getState();for(const t of Object.keys(b)){const n=e[t]||{},r=b[t];if(null===r||"object"!=typeof r){(0,y.captureException)(new Error(`Invalid controller state for '${t}' of type '${null===r?"null":typeof r}'`));continue}const o=Object.keys(r);if(o.length===Object.keys(n).length){for(const e of o)if(r[e]!==n[e]){h.push(t);break}}else h.push(t)}var S;"split"===r.persistenceManager.storageKind?(h.length>0&&(s.default.info(`MetaMaskController state changed during configuration for controllers: ${h.join(", ")}. Persisting updated state.`),h.forEach(e=>{r.persistenceManager.update(e,b[e])}),le().catch(e=>{s.default.error("Error persisting updated state:",e),fe?.captureException(e)})),Te.store.on("stateChange",async({controllerKey:e,newState:t,_oldState:n,_patches:o})=>{r.persistenceManager.update(e,t),A.backedUpStateKeys.includes(e)&&A.backedUpStateKeys.forEach(t=>{if(t===e)return;const n=Te.store.config[t];if(!n?.metadata)throw new Error(`Cannot backup ${t}: controller metadata is required but not found. All controllers in backedUpStateKeys must extend BaseController and define metadata.`);const o=Te.controllerMessenger.call(`${t}:getState`),i=(0,l.deriveStateFromMetadata)(o,n.metadata,"persist");r.persistenceManager.update(t,i)});try{await le()}catch(e){s.default.error("Error persisting state change:",e),fe?.captureException(e)}})):(h.length>0&&(s.default.info(`MetaMaskController state changed during configuration for controllers: ${h.join(", ")}. Persisting updated state.`),le(b).catch(e=>{s.default.error("Error persisting updated controller state:",e),fe?.captureException(e)})),Te.store.on("update",le)),Te.store.on("error",e=>{s.default.error("MetaMask controller.store error:",e),fe?.captureException(e)}),(0,F.default)({getCurrentChainId:()=>(0,C.getCurrentChainId)({metamask:Te.networkController.state}),getIpfsGateway:Te.preferencesController.getIpfsGateway.bind(Te.preferencesController),getUseAddressBarEnsResolution:()=>Te.preferencesController.state.useAddressBarEnsResolution,provider:Te.provider}),S=Te,global.stateHooks.getSentryAppState=function(){const e=S.memStore.getState();return(0,w.maskObject)(e,L.SENTRY_BACKGROUND_STATE)};const _=()=>ye>0||Boolean(Object.keys(Ee).length)||Ce||Se>0||!1,E=(e,t)=>{if(!1===e)Te.onClientClosed();else{if(t===p.ENVIRONMENT_TYPE_FULLSCREEN&&Boolean(Object.keys(Ee).length)||t===p.ENVIRONMENT_TYPE_SIDEPANEL&&Se>0)return;Te.onEnvironmentTypeClosed(t)}};function M(){_e+=1;const e=ve?"popup.html":"popup-init.html";try{v.isManifestV3?a.default.action.setPopup({popup:`${e}?tab=activity`}):a.default.browserAction.setPopup({popup:`${e}?tab=activity`})}catch(e){console.error("Error setting failed tx badge popup:",e)}O()}function T(){if(!_e)return;_e=0;const e=ve?"popup.html":"popup-init.html";try{v.isManifestV3?a.default.action.setPopup({popup:e}):a.default.browserAction.setPopup({popup:e})}catch(e){console.error("Error clearing failed tx badge popup:",e)}O()}function I(e,t){return e>t?`${t}+`:String(e)}function O(){const e=N();let t="",n=se;e?t=I(e,ce):_e&&(t=I(_e,ce),n=ae);try{const e={text:t},r={color:n};v.isManifestV3?(a.default.action.setBadgeText(e),a.default.action.setBadgeBackgroundColor(r)):(a.default.browserAction.setBadgeText(e),a.default.browserAction.setBadgeBackgroundColor(r))}catch(e){console.error("Error updating browser badge:",e)}}function N(){try{return Te.appStateController.waitingForUnlock.length+Te.approvalController.getTotalApprovalCount()}catch(e){return console.error("Failed to get pending approval count:",e),0}}Le=e=>{if(he.includes(e.name))return;const{processName:t,senderUrl:r,isMetaMaskUIPort:o}=we(e);if(o){const r=n?.getPortStream?.(e)||new u.ExtensionPortStream(e),o=function({chunkSize:e}){Te.metaMetricsController.trackEvent({event:m.MetaMetricsEventName.PortStreamChunked,category:m.MetaMetricsEventCategory.PortStream,properties:{chunkSize:e}})};if(e.onDisconnect.addListener(()=>r.off("message-too-large",o)),r.on("message-too-large",o),Te.isClientOpen=!0,Te.setupTrustedCommunication(r,e.sender),Je(t),(0,D.updateRemoteFeatureFlags)(Te),t===p.ENVIRONMENT_TYPE_POPUP&&(T(),ye+=1,(0,i.finished)(r,()=>{ye-=1;const e=_();Te.isClientOpen=e,E(e,p.ENVIRONMENT_TYPE_POPUP)})),t===p.ENVIRONMENT_TYPE_SIDEPANEL&&(T(),Se+=1,Ye(),(0,i.finished)(r,()=>{Se=Math.max(Se-1,0);const e=_();Te.isClientOpen=e,E(e,p.ENVIRONMENT_TYPE_SIDEPANEL)})),t===p.ENVIRONMENT_TYPE_NOTIFICATION&&(Ce=!0,(0,i.finished)(r,()=>{Ce=!1;const e=_();Te.isClientOpen=e,E(e,p.ENVIRONMENT_TYPE_NOTIFICATION)})),t===p.ENVIRONMENT_TYPE_FULLSCREEN){const t=e.sender.tab.id;Ee[t]=!0,(0,i.finished)(r,()=>{delete Ee[t];const e=_();Te.isClientOpen=e,E(e,p.ENVIRONMENT_TYPE_FULLSCREEN)})}}else if(r&&r.origin===Ae.origin&&r.pathname===Ae.pathname){const t=n?.getPortStream?.(e)||new u.ExtensionPortStream(e,{chunkSize:0});Te.setupPhishingCommunication({connectionStream:t})}else{if(e.sender&&e.sender.tab&&e.sender.url){const t=e.sender.tab.id,n=new URL(e.sender.url),{origin:r}=n;Ge(e),e.onMessage.addListener(e=>{e.data&&e.data.method===p.MESSAGE_TYPE.ETH_REQUEST_ACCOUNTS&&(Me[r]=t)})}if(r&&z.COOKIE_ID_MARKETING_WHITELIST_ORIGINS.some(e=>e===r.origin)){const t=n?.getPortStream?.(e)||new u.ExtensionPortStream(e,{chunkSize:0});Te.setUpCookieHandlerCommunication({connectionStream:t})}const t=n?.getPortStream?.(e)||new u.ExtensionPortStream(e,{chunkSize:0});if(Be(t,e.sender),ve||!v.isManifestV3){const n=(0,V.setupMultiplex)(t);n.ignoreStream(q.METAMASK_EIP_1193_PROVIDER),xe(n.createStream(q.METAMASK_CAIP_MULTICHAIN_PROVIDER),e.sender)}}},$e=e=>{const t=n?.getPortStream?.(e)||new u.ExtensionPortStream(e,{chunkSize:0});if(!e.sender.id){if(he.includes(e.name))return;Ge(e),xe((0,k.createCaipStream)(t),e.sender)}else Be(t,e.sender)},Be=(e,t)=>{Te.setupUntrustedCommunicationEip1193({connectionStream:e,sender:t})},xe=(e,t)=>{Te.setupUntrustedCommunicationCaip({connectionStream:e,sender:t})},n?.registerConnectListeners&&n.registerConnectListeners(Le,Be),O(),Te.controllerMessenger.subscribe(B.METAMASK_CONTROLLER_EVENTS.DECRYPT_MESSAGE_MANAGER_UPDATE_BADGE,O),Te.controllerMessenger.subscribe(B.METAMASK_CONTROLLER_EVENTS.ENCRYPTION_PUBLIC_KEY_MANAGER_UPDATE_BADGE,O),Te.signatureController.hub.on(B.METAMASK_CONTROLLER_EVENTS.UPDATE_BADGE,O),Te.controllerMessenger.subscribe(B.METAMASK_CONTROLLER_EVENTS.APP_STATE_UNLOCK_CHANGE,O),Te.controllerMessenger.subscribe(B.METAMASK_CONTROLLER_EVENTS.APPROVAL_STATE_CHANGE,O),Te.controllerMessenger.subscribe(B.METAMASK_CONTROLLER_EVENTS.METAMASK_NOTIFICATIONS_LIST_UPDATED,O),Te.controllerMessenger.subscribe(B.METAMASK_CONTROLLER_EVENTS.METAMASK_NOTIFICATIONS_MARK_AS_READ,O),Te.controllerMessenger.subscribe("TransactionController:transactionFailed",M),Te.controllerMessenger.subscribe("TransactionController:transactionDropped",M),be.on($.NOTIFICATION_MANAGER_EVENTS.POPUP_CLOSED,({automaticallyClosed:e})=>{e?N()>0&&Ze():(Te.signatureController.rejectUnapproved(m.REJECT_NOTIFICATION_CLOSE_SIG),Te.decryptMessageController.rejectUnapproved(m.REJECT_NOTIFICATION_CLOSE),Te.encryptionPublicKeyController.rejectUnapproved(m.REJECT_NOTIFICATION_CLOSE),Te.rejectAllPendingApprovals()),O()})}async function Ze(){const e=await me.getActiveTabs(),t=Boolean(e.find(e=>Ee[e.id])),n=e.length>0&&e[0].extData&&e[0].extData.indexOf("vivaldi_tab")>-1;if(!ke&&(n||0===ye)&&!t&&0===Se){ke=!0;try{const e=Te.appStateController.getCurrentPopupId();await be.showPopup(e=>Te.appStateController.setCurrentPopupId(e),e)}finally{ke=!1}}}const Xe=async()=>{if(Te){Te.metaMetricsController.updateTraits({[m.MetaMetricsUserTrait.InstallDateExt]:(new Date).toISOString().split("T")[0]});const e=await(0,I.getDeferredDeepLinkFromCookie)(),t={};return e&&(Te.appStateController.setDeferredDeepLink(e),t.install_source="deeplink",t.deeplink_path=e.referringLink),void Te.metaMetricsController.addEventBeforeMetricsOptIn({category:m.MetaMetricsEventCategory.App,event:m.MetaMetricsEventName.AppInstalled,properties:t})}setTimeout(async()=>{await Xe()},500)};a.default.runtime.onUpdateAvailable.addListener(async function(e){await Pe,s.default.info("An update is available",e?.version),Te.appStateController.setPendingExtensionVersion(e?.version??null)});(async()=>{if(a.default?.sidePanel)try{await Pe;const e=Te?.preferencesController?.state?.preferences?.useSidePanelAsDefault??!1;a.default?.sidePanel?.setPanelBehavior&&await a.default.sidePanel.setPanelBehavior({openPanelOnActionClick:e})}catch(e){console.error("Error setting side panel behavior:",e)}})();(async()=>{if(a.default?.sidePanel)try{await Pe,Te?.controllerMessenger?.subscribe("PreferencesController:stateChange",e=>{const t=e?.preferences?.useSidePanelAsDefault??!1;a.default?.sidePanel?.setPanelBehavior&&a.default.sidePanel.setPanelBehavior({openPanelOnActionClick:t}).catch(e=>console.error("Error updating panel behavior:",e))})}catch(e){console.error("Error setting up preference listener:",e)}})();async function et(e){a.default.tabs.onActivated.addListener(e=>{if(Te){const{tabId:t}=e,n=Ie[t],r=Oe[t];n&&Te.permissionController.state.subjects[n]!==undefined&&qe(n);const o=(0,T.getPartnerByOrigin)(r);o&&Te.permissionController.state.subjects[r]!==undefined&&Te.handleDefiReferral(o,t,te.ReferralTriggerType.OnNavigateConnectedTab).catch(e=>{s.default.error(`Failed to handle ${o.name} referral after navigation to connected tab: `,e)})}});try{await He(e),r.persistenceManager.cleanUpMostRecentRetrievedState(),s.default.info("MetaMask initialization complete."),je()}catch(e){s.default.error(e),De(e)}}(async()=>{await Ye()})(),a.default.tabs.onActivated.addListener(async({tabId:e})=>{if(await Pe,!Te)return{};try{const t=await a.default.tabs.get(e),{id:n,title:r,url:o,favIconUrl:i}=t;if(!o)return Te.appStateController.clearAppActiveTab(),{};const{origin:s,protocol:c,host:l,href:u}=new URL(o);if(!(0,U.isWebOrigin)(s))return Te.appStateController.clearAppActiveTab(),{};Te.appStateController.setAppActiveTab({id:n,title:r,origin:s,protocol:c,url:o,host:l,href:u,favIconUrl:i}),Te.subjectMetadataController.addSubjectMetadata({origin:s,name:r||l||s,iconUrl:i||null,subjectType:"website"})}catch(e){console.log("Error in tabs.onActivated listener:",e.message)}return{}}),a.default.tabs.onUpdated.addListener(async(e,t,n)=>{if(await Pe,!Te)return{};const r=t.url!==undefined,o="complete"===t.status;if(!r&&!o)return{};try{const t=n||await a.default.tabs.get(e),{id:i,title:s,url:c,favIconUrl:l}=t,u=Te.appStateController.state.appActiveTab,d=u?.id===i;if(!c)return d&&Te.appStateController.clearAppActiveTab(),{};const{origin:f,protocol:p,host:g,href:h}=new URL(c);if(!f||"null"===f||f.startsWith("chrome-extension://")||f.startsWith("moz-extension://"))return d&&Te.appStateController.clearAppActiveTab(),{};let m=!1;try{m=(await a.default.tabs.query({active:!0,currentWindow:!0})).some(e=>e.id===i)}catch(e){m=d}(r||o)&&m&&(Te.appStateController.setAppActiveTab({id:i,title:s,origin:f,protocol:p,url:c,host:g,href:h,favIconUrl:l}),Te.subjectMetadataController.addSubjectMetadata({origin:f,name:s||g||f,iconUrl:l||null,subjectType:"website"}))}catch(e){console.log("Error in tabs.onUpdated listener:",e.message)}return{}}),et(null)}}},{package:"$root$",file:"app/scripts/background.js"}]],[9],{});