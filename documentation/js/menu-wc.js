'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">crud-clients documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AppModule-126fca6751a794c6c04444e91313420c8f11f0f176a49d988a43ae139bfc915aa764ca7303fb5748f4c0e74e1601f159d437735eb810e3829abdf5028f8f6687"' : 'data-bs-target="#xs-components-links-module-AppModule-126fca6751a794c6c04444e91313420c8f11f0f176a49d988a43ae139bfc915aa764ca7303fb5748f4c0e74e1601f159d437735eb810e3829abdf5028f8f6687"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-126fca6751a794c6c04444e91313420c8f11f0f176a49d988a43ae139bfc915aa764ca7303fb5748f4c0e74e1601f159d437735eb810e3829abdf5028f8f6687"' :
                                            'id="xs-components-links-module-AppModule-126fca6751a794c6c04444e91313420c8f11f0f176a49d988a43ae139bfc915aa764ca7303fb5748f4c0e74e1601f159d437735eb810e3829abdf5028f8f6687"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AppMainComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppMainComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AtomicDesignModule.html" data-type="entity-link" >AtomicDesignModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AtomicDesignModule-f49181ccf84e3103a68f1c8c24d706339f8ccc35f55f12c92fb6df685c1bec403d4f1e96a105bf48af5c87f436c8477264d585a20ede80fdb8ebab926fb2f6eb"' : 'data-bs-target="#xs-components-links-module-AtomicDesignModule-f49181ccf84e3103a68f1c8c24d706339f8ccc35f55f12c92fb6df685c1bec403d4f1e96a105bf48af5c87f436c8477264d585a20ede80fdb8ebab926fb2f6eb"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AtomicDesignModule-f49181ccf84e3103a68f1c8c24d706339f8ccc35f55f12c92fb6df685c1bec403d4f1e96a105bf48af5c87f436c8477264d585a20ede80fdb8ebab926fb2f6eb"' :
                                            'id="xs-components-links-module-AtomicDesignModule-f49181ccf84e3103a68f1c8c24d706339f8ccc35f55f12c92fb6df685c1bec403d4f1e96a105bf48af5c87f436c8477264d585a20ede80fdb8ebab926fb2f6eb"' }>
                                            <li class="link">
                                                <a href="components/FormAdvancedSearchComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FormAdvancedSearchComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ModalNewModifiedComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ModalNewModifiedComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SideBarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SideBarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TableCrudComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TableCrudComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TopBarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TopBarComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#pipes-links-module-AtomicDesignModule-f49181ccf84e3103a68f1c8c24d706339f8ccc35f55f12c92fb6df685c1bec403d4f1e96a105bf48af5c87f436c8477264d585a20ede80fdb8ebab926fb2f6eb"' : 'data-bs-target="#xs-pipes-links-module-AtomicDesignModule-f49181ccf84e3103a68f1c8c24d706339f8ccc35f55f12c92fb6df685c1bec403d4f1e96a105bf48af5c87f436c8477264d585a20ede80fdb8ebab926fb2f6eb"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-AtomicDesignModule-f49181ccf84e3103a68f1c8c24d706339f8ccc35f55f12c92fb6df685c1bec403d4f1e96a105bf48af5c87f436c8477264d585a20ede80fdb8ebab926fb2f6eb"' :
                                            'id="xs-pipes-links-module-AtomicDesignModule-f49181ccf84e3103a68f1c8c24d706339f8ccc35f55f12c92fb6df685c1bec403d4f1e96a105bf48af5c87f436c8477264d585a20ede80fdb8ebab926fb2f6eb"' }>
                                            <li class="link">
                                                <a href="pipes/DatePipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DatePipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/PhonePipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PhonePipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PagesModule.html" data-type="entity-link" >PagesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-PagesModule-8bdfd65eb10b551227ee8c68a2add37e88576f128eeaf1cb877e1f92e0bf6d0f589f8fe58ad6eb821e590d3a026caa44c35252cb8cdab9adfb22c4b9d0eb3f2a"' : 'data-bs-target="#xs-components-links-module-PagesModule-8bdfd65eb10b551227ee8c68a2add37e88576f128eeaf1cb877e1f92e0bf6d0f589f8fe58ad6eb821e590d3a026caa44c35252cb8cdab9adfb22c4b9d0eb3f2a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PagesModule-8bdfd65eb10b551227ee8c68a2add37e88576f128eeaf1cb877e1f92e0bf6d0f589f8fe58ad6eb821e590d3a026caa44c35252cb8cdab9adfb22c4b9d0eb3f2a"' :
                                            'id="xs-components-links-module-PagesModule-8bdfd65eb10b551227ee8c68a2add37e88576f128eeaf1cb877e1f92e0bf6d0f589f8fe58ad6eb821e590d3a026caa44c35252cb8cdab9adfb22c4b9d0eb3f2a"' }>
                                            <li class="link">
                                                <a href="components/CrudComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CrudComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PagesRoutingModule.html" data-type="entity-link" >PagesRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link" >SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#pipes-links-module-SharedModule-36ff8307abe21c64325bd37eb3bff68710542f1aa554268a72a06e03f127d4bb768e41d9520ffa51e5c981779e17be431f4e6135bdbf78d6f60314234f82f0a3"' : 'data-bs-target="#xs-pipes-links-module-SharedModule-36ff8307abe21c64325bd37eb3bff68710542f1aa554268a72a06e03f127d4bb768e41d9520ffa51e5c981779e17be431f4e6135bdbf78d6f60314234f82f0a3"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-SharedModule-36ff8307abe21c64325bd37eb3bff68710542f1aa554268a72a06e03f127d4bb768e41d9520ffa51e5c981779e17be431f4e6135bdbf78d6f60314234f82f0a3"' :
                                            'id="xs-pipes-links-module-SharedModule-36ff8307abe21c64325bd37eb3bff68710542f1aa554268a72a06e03f127d4bb768e41d9520ffa51e5c981779e17be431f4e6135bdbf78d6f60314234f82f0a3"' }>
                                            <li class="link">
                                                <a href="pipes/DatePipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DatePipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/ClientsService.html" data-type="entity-link" >ClientsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LoaderService.html" data-type="entity-link" >LoaderService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UsersService.html" data-type="entity-link" >UsersService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interceptors-links"' :
                            'data-bs-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/RequestInterceptor.html" data-type="entity-link" >RequestInterceptor</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#guards-links"' :
                            'data-bs-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/AdvancedSearch.html" data-type="entity-link" >AdvancedSearch</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Clients.html" data-type="entity-link" >Clients</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Login.html" data-type="entity-link" >Login</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Token.html" data-type="entity-link" >Token</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#pipes-links"' :
                                'data-bs-target="#xs-pipes-links"' }>
                                <span class="icon ion-md-add"></span>
                                <span>Pipes</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="pipes-links"' : 'id="xs-pipes-links"' }>
                                <li class="link">
                                    <a href="pipes/DatePipe.html" data-type="entity-link" >DatePipe</a>
                                </li>
                                <li class="link">
                                    <a href="pipes/PhonePipe.html" data-type="entity-link" >PhonePipe</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});