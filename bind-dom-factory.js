try{ var base = window; }catch( error ){ base = exports; }
( function module( base ){
	define( "bindDOMFactory",
		[
			"angular",
			"jquery",
			"safeApply"
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
									safeApply( scope );
									scope.element = $( element );
									scope.attributes = attributes;
									scope.safeApply( );
								} );
							}
						] );
			};
			base.bindDOMFactory =  bindDOMFactory;
			return bindDOMFactory;
		} );
} )( base );