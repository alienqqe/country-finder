(() => {
var exports = {};
exports.id = 931;
exports.ids = [931];
exports.modules = {

/***/ 8038:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react");

/***/ }),

/***/ 8704:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react-dom/server-rendering-stub");

/***/ }),

/***/ 7897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react-server-dom-webpack/client");

/***/ }),

/***/ 6786:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react/jsx-runtime");

/***/ }),

/***/ 5868:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/app-render");

/***/ }),

/***/ 1844:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/get-segment-param");

/***/ }),

/***/ 6624:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/future/helpers/interception-routes");

/***/ }),

/***/ 5281:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/future/route-modules/route-module");

/***/ }),

/***/ 7085:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context");

/***/ }),

/***/ 199:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/hash");

/***/ }),

/***/ 9569:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/hooks-client-context");

/***/ }),

/***/ 893:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix");

/***/ }),

/***/ 7887:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/handle-smooth-scroll");

/***/ }),

/***/ 8735:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot");

/***/ }),

/***/ 8231:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path");

/***/ }),

/***/ 4614:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix");

/***/ }),

/***/ 3750:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash");

/***/ }),

/***/ 1695:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/server-inserted-html");

/***/ }),

/***/ 1017:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ 7310:
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ 492:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GlobalError: () => (/* reexport default from dynamic */ next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2___default.a),
/* harmony export */   __next_app__: () => (/* binding */ __next_app__),
/* harmony export */   originalPathname: () => (/* binding */ originalPathname),
/* harmony export */   pages: () => (/* binding */ pages),
/* harmony export */   routeModule: () => (/* binding */ routeModule),
/* harmony export */   tree: () => (/* binding */ tree)
/* harmony export */ });
/* harmony import */ var next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7262);
/* harmony import */ var next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9513);
/* harmony import */ var next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1823);
/* harmony import */ var next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2502);
/* harmony import */ var next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__) if(["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
// @ts-ignore this need to be imported from next/dist to be external


const AppPageRouteModule = next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0__.AppPageRouteModule;
// We inject the tree and pages here so that we can use them in the route
// module.
const tree = {
        children: [
        '',
        {
        children: ['__PAGE__', {}, {
          page: [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 2838)), "C:\\Users\\Yevhenii\\Desktop\\react projects\\country-finder\\app\\page.tsx"],
          metadata: {
    icon: [(async (props) => (await Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 7481))).default(props))],
    apple: [],
    openGraph: [],
    twitter: [],
    manifest: undefined
  }
        }]
      },
        {
        'layout': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 1921)), "C:\\Users\\Yevhenii\\Desktop\\react projects\\country-finder\\app\\layout.tsx"],
'not-found': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 5493, 23)), "next/dist/client/components/not-found-error"],
        metadata: {
    icon: [(async (props) => (await Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 7481))).default(props))],
    apple: [],
    openGraph: [],
    twitter: [],
    manifest: undefined
  }
      }
      ]
      }.children;
const pages = ["C:\\Users\\Yevhenii\\Desktop\\react projects\\country-finder\\app\\page.tsx"];

// @ts-expect-error - replaced by webpack/turbopack loader

const __next_app_require__ = __webpack_require__
const __next_app_load_chunk__ = () => Promise.resolve()
const originalPathname = "/page";
const __next_app__ = {
    require: __next_app_require__,
    loadChunk: __next_app_load_chunk__
};

// Create and export the route module that will be consumed.
const routeModule = new AppPageRouteModule({
    definition: {
        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_PAGE,
        page: "/page",
        pathname: "/",
        // The following aren't used in production.
        bundlePath: "",
        filename: "",
        appPaths: []
    },
    userland: {
        loaderTree: tree
    }
});

//# sourceMappingURL=app-page.js.map

/***/ }),

/***/ 1972:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 9618))

/***/ }),

/***/ 8029:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 3847))

/***/ }),

/***/ 6673:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 1232, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 2987, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 831, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6926, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 4282, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6505, 23))

/***/ }),

/***/ 9618:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"app\\layout.tsx","import":"Inter","arguments":[{"subsets":["latin"]}],"variableName":"inter"}
var target_path_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_ = __webpack_require__(2224);
var target_path_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_default = /*#__PURE__*/__webpack_require__.n(target_path_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_);
// EXTERNAL MODULE: ./node_modules/bootstrap/dist/css/bootstrap.min.css
var bootstrap_min = __webpack_require__(9973);
// EXTERNAL MODULE: ./app/globals.scss
var globals = __webpack_require__(6435);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./redux/store.ts
var store = __webpack_require__(6728);
// EXTERNAL MODULE: ./node_modules/react-redux/lib/index.js
var lib = __webpack_require__(8250);
;// CONCATENATED MODULE: ./redux/provider.tsx
/* __next_internal_client_entry_do_not_use__ ReduxProvider auto */ 


function ReduxProvider({ children }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(lib.Provider, {
        store: store/* store */.h,
        children: children
    });
}

;// CONCATENATED MODULE: ./app/layout.tsx
/* __next_internal_client_entry_do_not_use__ metadata,default auto */ 





const metadata = {
    title: "Create Next App",
    description: "Generated by create next app"
};
function RootLayout({ children }) {
    (0,react_.useEffect)(()=>{
        __webpack_require__(6867);
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx("html", {
        lang: "en",
        children: /*#__PURE__*/ jsx_runtime_.jsx("body", {
            className: (target_path_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_default()).className,
            children: /*#__PURE__*/ jsx_runtime_.jsx(ReduxProvider, {
                children: children
            })
        })
    });
}


/***/ }),

/***/ 3847:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/@apollo/client/main.cjs
var main = __webpack_require__(5325);
// EXTERNAL MODULE: ./node_modules/@apollo/client/link/error/error.cjs
var error = __webpack_require__(4073);
// EXTERNAL MODULE: ./node_modules/react-icons/fa/index.mjs + 4 modules
var fa = __webpack_require__(858);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
;// CONCATENATED MODULE: ./app/GraphQL/Queries.tsx

const MainQuery = main.gql`
  query getCountries($code: ID!) {
    country(code: $code) {
      code
      capital
      currency
      continent {
        name
      }
      name
      emoji
      native
      phone
      languages {
        name
      }
    }
  }
`;
const getAllCountries = main.gql`
  query getAll {
    countries {
      name
      code
      emoji
    }
  }
`;

// EXTERNAL MODULE: ./redux/store.ts
var store = __webpack_require__(6728);
// EXTERNAL MODULE: ./node_modules/react-redux/lib/index.js
var lib = __webpack_require__(8250);
// EXTERNAL MODULE: ./node_modules/trie-search/index.js
var trie_search = __webpack_require__(9648);
var trie_search_default = /*#__PURE__*/__webpack_require__.n(trie_search);
// EXTERNAL MODULE: ./redux/features/country-slice.ts
var country_slice = __webpack_require__(5268);
;// CONCATENATED MODULE: ./app/components/MainComponent.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 









const MainComponent = ()=>{
    const trie = new (trie_search_default())("name");
    const [historyArr, setHistoryArr] = (0,react_.useState)(localStorage.getItem("history") ? localStorage.getItem("history").split(" ") : []);
    const [screenWidth, setWidth] = (0,react_.useState)(window.innerWidth);
    const [isHovered, setIsHovered] = (0,react_.useState)(false);
    const [isFocused, setIsFocused] = (0,react_.useState)(false);
    const [inputValue, setInputValue] = (0,react_.useState)("");
    const [countryData, setCountryData] = (0,react_.useState)([]);
    const [searchValues, setSearchValues] = (0,react_.useState)([]);
    // Get viewport width
    const updateWidth = ()=>{
        setWidth(window.innerWidth);
    };
    (0,react_.useEffect)(()=>{
        window.addEventListener("resize", updateWidth);
        return ()=>window.removeEventListener("resize", updateWidth);
    }, []);
    // /Get viewport width
    const countryCode = (0,store/* useAppSelector */.C)((state)=>state.countryReducer.value.code);
    const gqlVariables = {
        variables: {
            code: countryCode
        }
    };
    const { data, error } = (0,main.useQuery)(MainQuery, gqlVariables);
    const countries = (0,main.useQuery)(getAllCountries);
    const dispatch = (0,lib.useDispatch)();
    (0,react_.useEffect)(()=>{
        if (countries?.data?.countries?.map((item)=>item)) {
            trie.addAll(countries?.data?.countries?.map((item)=>item));
            setSearchValues(trie.search(inputValue));
        }
    }, [
        countries,
        inputValue
    ]);
    const handleSubmit = (e)=>{
        e.preventDefault();
        searchValues[0] && countries?.data?.countries.filter((item)=>item?.code === inputValue).length === 0 ? dispatch((0,country_slice/* handleFormSubmit */.xz)(searchValues[0].code)) : dispatch((0,country_slice/* handleFormSubmit */.xz)(inputValue)) ? localStorage.getItem("history") : "";
        setHistoryArr([
            ...historyArr,
            inputValue
        ]);
        localStorage.setItem("history", historyArr.join(" "));
    };
    const onDelete = (index)=>{
        setHistoryArr(historyArr.filter((item, id)=>id !== index));
    };
    (0,react_.useEffect)(()=>{
        localStorage.setItem("history", historyArr.join(" "));
    }, [
        historyArr
    ]);
    (0,react_.useEffect)(()=>{
        if (data) {
            setCountryData([
                data.country
            ]);
        }
    }, [
        data
    ]);
    const fetchData = countryData.map((item)=>item?.languages);
    const languages = fetchData[0]?.map((item)=>item);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                className: "navbar",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container-fluid d-flex align-items-center justify-content-center position-relative",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "d-flex ",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "d-flex flex-column align-items-center justify-content-center",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "input-group  flex-row dropdown",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                className: screenWidth <= 576 ? "btn btn-secondary btn-sm dropdown-toggle input-group-text" : "btn btn-secondary btn dropdown-toggle input-group-text",
                                                id: "basic-addon1",
                                                role: "button",
                                                "data-bs-toggle": "dropdown",
                                                "aria-expanded": "false",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(fa/* FaHistory */.ceS, {})
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                                className: historyArr[0] ? "dropdown-menu" : "d-none",
                                                children: historyArr[0] ? historyArr.map((item, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                        className: "d-flex align-items-center justify-content-between",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                className: "dropdown-item",
                                                                onClick: ()=>setInputValue(item),
                                                                href: "#",
                                                                children: item
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                onClick: ()=>onDelete(index),
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(fa/* FaTimes */.aHS, {})
                                                            })
                                                        ]
                                                    }, index)) : ""
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("form", {
                                                onSubmit: handleSubmit,
                                                role: "search",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                    onFocus: ()=>setIsFocused(true),
                                                    onBlur: ()=>setIsFocused(false),
                                                    className: "search-input form-control me-2",
                                                    type: "search",
                                                    placeholder: "Enter country name",
                                                    "aria-label": "Search",
                                                    value: inputValue,
                                                    onChange: (e)=>setInputValue(e.target.value)
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "overlay w-100 me-2 text-white flex-column ",
                                        onMouseEnter: ()=>setIsHovered(true),
                                        onMouseLeave: ()=>setIsHovered(false),
                                        children: searchValues[0] && (isFocused || isHovered) ? searchValues.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: " mt-1 d-inline",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                    className: "ms-2 fs-5 text-white",
                                                    onClick: ()=>setInputValue(item.code),
                                                    children: [
                                                        item.emoji,
                                                        " ",
                                                        item.code
                                                    ]
                                                })
                                            }, item.name)) : ""
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("form", {
                                onSubmit: handleSubmit,
                                role: "search",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        className: "btn btn-outline-success",
                                        onSubmit: handleSubmit,
                                        type: "submit",
                                        children: "Search"
                                    })
                                })
                            })
                        ]
                    })
                })
            }),
            countryData[0] ? countryData?.map((item)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "country text-light position-absolute",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "mt-5 me-5 d-flex align-items-center justify-content-center flex-column",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "me-3",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                                        className: "py-4",
                                        children: [
                                            item?.name,
                                            " ",
                                            item?.emoji
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "me-5",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                        className: "",
                                        children: item?.continent.name
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: " ms-3 mt-5",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                    children: "Overview:"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: "py-2",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h5", {
                                                    children: [
                                                        "Capital: ",
                                                        item?.capital
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: "py-2",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h5", {
                                                    children: [
                                                        "Currency: ",
                                                        item?.currency
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: "py-2",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h5", {
                                                    children: [
                                                        "Languages:",
                                                        " ",
                                                        languages?.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                className: "d-inline px-1 ",
                                                                children: item?.name
                                                            })),
                                                        " "
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: "py-2",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h5", {
                                                    children: [
                                                        "Phone Number: +",
                                                        item?.phone
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: "py-2",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h5", {
                                                    children: [
                                                        "Native naming: ",
                                                        item?.native
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    ]
                }, item?.code)) : ""
        ]
    });
};
/* harmony default export */ const components_MainComponent = (MainComponent);

;// CONCATENATED MODULE: ./app/page.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 



const errorLink = (0,error/* onError */.qQ)(({ graphQLErrors, networkError })=>{
    if (graphQLErrors) graphQLErrors.forEach(({ message, locations, path })=>console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`));
    if (networkError) console.log(`[Network error]: ${networkError}`);
});
const page_link = (0,main.from)([
    errorLink,
    new main.HttpLink({
        uri: "https://countries.trevorblades.com/graphql"
    })
]);
const client = new main.ApolloClient({
    cache: new main.InMemoryCache(),
    link: page_link
});
function Home() {
    return /*#__PURE__*/ jsx_runtime_.jsx(main.ApolloProvider, {
        client: client,
        children: /*#__PURE__*/ jsx_runtime_.jsx(components_MainComponent, {})
    });
}


/***/ }),

/***/ 5268:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   xz: () => (/* binding */ handleFormSubmit)
/* harmony export */ });
/* unused harmony export country */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1388);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    value: {
        code: "",
        countryData: []
    }
};
const country = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "country",
    initialState: initialState,
    reducers: {
        handleFormSubmit: (state, action)=>{
            state.value.code = action.payload;
        }
    }
});
const { handleFormSubmit } = country.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (country.reducer);


/***/ }),

/***/ 6728:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ useAppSelector),
/* harmony export */   h: () => (/* binding */ store)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1388);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _features_country_slice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5268);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8250);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);



const store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.configureStore)({
    reducer: {
        countryReducer: _features_country_slice__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP
    }
});
const useAppSelector = react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector;


/***/ }),

/***/ 1921:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$typeof: () => (/* binding */ $$typeof),
/* harmony export */   __esModule: () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   metadata: () => (/* binding */ e0)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1363);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`C:\Users\Yevhenii\Desktop\react projects\country-finder\app\layout.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = proxy["metadata"];


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ 2838:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$typeof: () => (/* binding */ $$typeof),
/* harmony export */   __esModule: () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1363);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`C:\Users\Yevhenii\Desktop\react projects\country-finder\app\page.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ 7481:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"16x16"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 6435:
/***/ (() => {



/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [587,411], () => (__webpack_exec__(492)));
module.exports = __webpack_exports__;

})();