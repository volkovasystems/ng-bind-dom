try{ var base = window; }catch( error ){ base = exports; }
( function module( base ){
	define( "bindDOMFactory",
		[
			"requirejs",
			"angular",
			"jquery",
			"safeApplyFactory"
		],
		function construct( ){
			var bindDOMFactory = function bindDOMFactory( moduleNamespace ){
				safeApplyFactory( moduleNamespace );
				angular.module( moduleNamespace )
					.factory( "bindDOM",
						[
							"safeApply",
							function construct( safeApply ){
								return ( function bindDOM( scope, element, attributes ){
									if( "DOMBound" in scope ){
										return;
									}
									safeApply( scope );
									scope.element = $( element );
									scope.attributes = attributes;
									scope.DOMBound = true;
									scope.safeApply( );
								} );
							}
						] );
			};
			base.bindDOMFactory =  bindDOMFactory;
			return bindDOMFactory;
		} );
} )( base );