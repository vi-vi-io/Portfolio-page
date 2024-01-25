<!DOCTYPE html>
<html lang="en" class="js">
	<head>

<?php include("https://voyadelivers.com/voya_assets/php_includes/pagehead.php"); ?>

		<title>Page not found | Voya Financial&reg;</title>

		<link href="https://voyadelivers.com/voya_assets/css/bootstrap.min.css" rel="stylesheet">
		<link href="https://voyadelivers.com/voya_assets/css/layout.css" rel="stylesheet" type="text/css">
		<link href="https://voyadelivers.com/voya_assets/css/main.css" rel="stylesheet" type="text/css">

		<link href="https://voyadelivers.com/voya_assets/404_assets/css/layout.css" rel="stylesheet" type="text/css">
		<link href="https://voyadelivers.com/voya_assets/404_assets/css/main.css" rel="stylesheet" type="text/css">

		<link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">



	</head>
	<body>

		<div id="preloader">
		    <div class="loader-container">
		        <img src="https://voyadelivers.com/voya_assets/images/preloader/spinner.gif" />
		        <img src="https://voyadelivers.com/voya_assets/images/preloader/pl-voya-logo.png" />
		    </div>
		</div>
		<div id="hover-preload">
		    <!-- call :hover state images here to avoid lag on first hover -->
		</div>

		<div class="header">
			<div class="container">
				<div class="row">
					<div class="col-xs-6 hdr-left">
						<a class="headlogo" href="http://voya.com/"></a>
					</div>
					<div class="col-xs-6 hdr-right"></div>
				</div>
			</div>
		</div><!--END header-->

		<div id="content-wrapper">

			<div class="container">

				<div class="row">
					<div class="col-md-5 col-sm-5 cta-content">
						<div class="page-title"><span class="bold-black">404:</span> page not found.</div>
						<div class="page-sub">Looks like you've taken a wrong turn...</div>
						<p class="subpara">The page you're trying to reach does not exist. Please check your URL and hit the refresh button on your browser.</p>
						<p class="subpara">If you're still having trouble, try the search form below, and we'll get you back on the right path.</p>
						<form class="input-group" id="voya-search">
				            <input type="text" class="form-control voya-field" placeholder="Search" id="search-field">
				            <div class="input-group-btn">
				                <button class="btn btn-default voya-btn" type="submit"><span class="fa fa-search"></span></button>
				            </div>
				        </form>
				        <script type="text/javascript">
				        	var a = document.getElementById('voya-search');
						    a.addEventListener('submit',function(e) {
						        e.preventDefault();
						        var b = document.getElementById('search-field').value;
						        window.location.href = 'https://www.voya.com/search?search_api_views_fulltext='+b;

						    });
				        </script>
					</div>
				</div><!--END .row .cta-content -->

				<div class="spacer50"></div>

			</div><!-- END .container -->

		</div><!-- END #content-wrapper -->

<?php include("https://voyadelivers.com/voya_assets/php_includes/footer.php"); ?>

<!-- Bootstrap core JavaScript ================================================== -->
<!-- Placed at the end of the document so the pages load faster -->
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
		<script src="https://voyadelivers.com/voya_assets/js/bootstrap.min.js"></script>
		<script src="https://voyadelivers.com/voya_assets/js/respond.min.js"></script>
		<script src="https://voyadelivers.com/voya_assets/js/main.js"></script>
		<script src="https://voyadelivers.com/local_assets/js/main.js"></script><!-- CUSTOM SCRIPTS -->
	</body>
</html>