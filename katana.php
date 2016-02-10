<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta name="viewport" content="width=device-width,
                               maximum-scale=1.0" />
<html>
<head>
    <!-- import jquery library -->
    <title></title>
	<script>
		console.log("<?php echo '/'; ?>")
	</script>
	<?php 
		// Config
		$template_uri = get_template_directory_uri().'/page-templates/keynote/';
	?>
    <script src="<?php echo $template_uri; ?>jquery-2.1.4.min.js"></script>
    <script src="<?php echo $template_uri; ?>jquery.rotate.js"></script>
    <script src="<?php echo $template_uri; ?>jquery-ui-1.11.4/jquery-ui.min.js"></script>
    <script src="<?php echo $template_uri; ?>jquery.mousewheel.min.js"></script>
    <script src="<?php echo $template_uri; ?>jquery.touchSwipe.min.js"></script>
    <script src="<?php echo $template_uri; ?>library.js"></script>
    <script src="<?php echo $template_uri; ?>meta.js"></script>
    <script src="<?php echo $template_uri; ?>configurator.js"></script>
    <script src="<?php echo $template_uri; ?>inspector.js"></script>
    <script src="<?php echo $template_uri; ?>manager.js"></script>
    <script src="<?php echo $template_uri; ?>page.js"></script>
    <script src="<?php echo $template_uri; ?>slider.js"></script>
    <script src="<?php echo $template_uri; ?>object.js"></script>
    <link href="<?php echo $template_uri; ?>jquery-ui-1.11.4/jquery-ui.min.css" rel="stylesheet" type="text/css">
    <link href="<?php echo $template_uri; ?>katana.css" rel="stylesheet" type="text/css">
    <link href="<?php echo $template_uri; ?>keynote.css" rel="stylesheet" type="text/css">
    <link href="<?php echo $template_uri; ?>object.css" rel="stylesheet" type="text/css">
    <link href="<?php echo $template_uri; ?>inspector.css" rel="stylesheet" type="text/css">
    <script src="<?php echo $template_uri; ?>katana.js"></script>
</head>
<body>
	<div id="page_frame">
		<!-- UI -->
		<div class="contain arrowui" id="arrowup"></div>
		<div class="contain arrowui" id="arrowdown"></div>
		<!-- HOME -->
		<div class="cover" id="homebg"></div>
		<div class="contain" id="homelogoa"></div>
		<div class="homelogolight" id="homelogolighta"></div>
		<div class="homelogolight" id="homelogolightb"></div>
		<div class="contain" id="homesakuraa"></div>
		<div class="contain" id="homesakurab"></div>
		<div class="contain" id="homesakurac"></div>
		<div class="top-align contain" id="homekatana"></div>
		
		<div class="cover" id="homebgb"></div>
		<div class="contain" id="homelogob"></div>
		<div class="preview_container black" id="hometext">
			<div class="title_container">
				<span class="title">
					Welcome to <br>
					Studio KATANA
				</span>
			</div>
			<hr class="title_divider">
			<div class="context_container">
				<p class="context">
					<?php echo get_post_meta($post->ID, "Home Text Compact", true) ?>
					<span class="mhhide">
					<?php echo get_post_meta($post->ID, "Home Text Extension", true) ?>
					</span>
				</p>
			</div>
		</div>
		<div class="contain" id="homesakurad"></div>
		<div class="contain right-align" id="homesakurae"></div>
		<div class="contain" id="homesakuraf"></div>
		
		<!-- WEBSITE 1-->
		<div class="cover" id="websitebg"></div>
		<div id="websitewbg">
			<span class="middle title">
				<?php echo get_post_meta($post->ID, "Business Title", true) ?>
			</span>
		</div>
		
		<div id="websiteslider1" class="preview_container center black">
			<div class="slider_showcase">
				<div class="slider_icon" id="slider_icon_1"></div>
			</div>
			<div class="title_container">
				<span class="title second">
					<?php echo get_post_meta($post->ID, "Business Slider Item 1 Title", true) ?>
				</span>
			</div>
			<hr class="title_divider">
			<div class="context_container">
				<p class="context">
					<?php echo get_post_meta($post->ID, "Business Slider Item 1 Content", true) ?>
				</p>
			</div>
			<div class="tag_container">
				<span class="tag orange">
					Website
				</span>
				<span class="tag green">
					Interactive
				</span>
				<span class="tag purple">
					Video
				</span>
			</div>
		</div>
		
		<div id="websiteslider2" class="preview_container center black">
			<div class="slider_showcase">
				<div class="slider_icon" id="slider_icon_2"></div>
			</div>
			<div class="title_container">
				<span class="title second">
					<?php echo get_post_meta($post->ID, "Business Slider Item 2 Title", true) ?>
				</span>
			</div>
			<hr class="title_divider">
			<div class="context_container">
				<p class="context">
					<?php echo get_post_meta($post->ID, "Business Slider Item 2 Content", true) ?>
				</p>
			</div>
			<div class="tag_container">
				<span class="tag orange">
					Website
				</span>
				<span class="tag green">
					Interactive
				</span>
				<span class="tag purple">
					Video
				</span>
			</div>
		</div>
		
		<div id="websiteslider3" class="preview_container center black">
			<div class="slider_showcase">
				<div class="slider_icon" id="slider_icon_3"></div>
			</div>
			<div class="title_container">
				<span class="title second">
					<?php echo get_post_meta($post->ID, "Business Slider Item 3 Title", true) ?>
				</span>
			</div>
			<hr class="title_divider">
			<div class="context_container">
				<p class="context">
					<?php echo get_post_meta($post->ID, "Business Slider Item 3 Content", true) ?>
				</p>
			</div>
			<div class="tag_container">
				<span class="tag orange">
					Website
				</span>
				<span class="tag green">
					Interactive
				</span>
				<span class="tag purple">
					Video
				</span>
			</div>
		</div>
		
		<div id="websiteslider4" class="preview_container center black">
			<div class="slider_showcase">
				<div class="slider_icon" id="slider_icon_4"></div>
			</div>
			<div class="title_container">
				<span class="title second">
					<?php echo get_post_meta($post->ID, "Business Slider Item 4 Title", true) ?>
				</span>
			</div>
			<hr class="title_divider">
			<div class="context_container">
				<p class="context">
					<?php echo get_post_meta($post->ID, "Business Slider Item 4 Content", true) ?>
				</p>
			</div>
			<div class="tag_container">
				<span class="tag orange">
					Website
				</span>
				<span class="tag green">
					Interactive
				</span>
				<span class="tag purple">
					Video
				</span>
			</div>
		</div>
		
		<div id="websitesliderindicator">
			<div class="indicator" id="slider_0"></div>
			<div class="indicator" id="slider_1"></div>
			<div class="indicator" id="slider_2"></div>
			<div class="indicator" id="slider_3"></div>
		</div>
		
		<!-- WEBSITE 2 -->
		<div class="contain" id="websiteleafa"></div>
		<div class="contain" id="websiteleafb"></div>
		<div class="contain" id="websiteleafc"></div>
		<div class="contain" id="websiteleafd"></div>
		<div class="contain" id="websitedevices"></div>
		<div class="preview_container" id="websitetext">
			<div class="tag_container">
				<span class="tag orange">
					Website
				</span>
			</div>
			<div class="title_container">
				<span class="title">
					<?php echo get_post_meta($post->ID, "Website Title", true) ?>
				</span>
			</div>
			<hr class="title_divider">
			<div class="context_container">
				<p class="context">
					<?php echo get_post_meta($post->ID, "Website Content", true) ?>
				</p>
			</div>
			<div class="button_container">
				<div class="more_button">
					<div class="vertical_align">
						<span class="button_label">
							<span class="button_icon more_info"><img src="<?php echo $template_uri; ?>katana/moreinfo.png" /></span>
							More Information
						</span>
					</div>
				</div>
			</div>
		</div>
		
		<!-- INTERECTIVE -->
		<div class="cover" id="interbg"></div>
		<div class="interactive circle" id="interinfoa">
		</div>
		<div class="interactive circle" id="interinfob">
		</div>
		<div class="interactive circle" id="interinfoc">
		</div>
		<div class="preview_container black" id="intertext">
			<div class="tag_container">
				<span class="tag green">
					Interactive
				</span>
			</div>
			<div class="title_container">
				<span class="title">
					<?php echo get_post_meta($post->ID, "Interactive Title", true) ?>
				</span>
			</div>
			<hr class="title_divider">
			<div class="context_container">
				<p class="context">
					<?php echo get_post_meta($post->ID, "Interactive Content Compact", true) ?>
				</p>
				<ul class="context mhhide">
					<?php echo get_post_meta($post->ID, "Interactive Content Extension", true) ?>
				</ul>
			</div>
			<div class="button_container black_button">
				<div class="more_button reverse">
					<div class="vertical_align">
						<span class="button_label">
							<span class="button_icon more_info"><img src="<?php echo $template_uri; ?>katana/moreinfo.png" /></span>
							More Information
						</span>
					</div>
				</div>
			</div>
		</div>
		
		<!-- BRAND -->
		<div class="contain" id="brandcarda"></div>
		<div class="contain" id="brandcardb"></div>
		<div class="contain" id="brandcardc"></div>
		<div class="contain bottom-align" id="brandcardd"></div>
		<div class="contain" id="brandclip"></div>
		<div class="contain bottom-align" id="brandpen"></div>
		<div class="preview_container black" id="brandtext">
			<div class="title_container">
				<span class="title">
					<?php echo get_post_meta($post->ID, "Brand Title", true) ?>
				</span>
			</div>
			<hr class="title_divider">
			<div class="context_container">
				<p class="context">
					<?php echo get_post_meta($post->ID, "Brand Content Compact", true) ?>
				</p>
				<ul class="context mhhide">
					<?php echo get_post_meta($post->ID, "Brand Content Extension", true) ?>
				</ul>
			</div>
			<div class="button_container black_button">
				<div class="more_button reverse">
					<div class="vertical_align">
						<span class="button_label">
							<span class="button_icon more_info"><img src="<?php echo $template_uri; ?>katana/moreinfo.png" /></span>
							More Information
						</span>
					</div>
				</div>
			</div>
		</div>
		
		<!-- VIDEO -->
		<div class="cover" id="videobg"></div>
		<div class="contain" id="videoclipa"></div>
		<div class="contain" id="videoclipb"></div>
		<div class="contain" id="videoclipc"></div>
		<div class="contain" id="videoclipd"></div>
		<div class="preview_container" id="videotext">
			<div class="tag_container">
				<span class="tag purple">
					Video
				</span>
			</div>
			<div class="title_container">
				<span class="title">
					<?php echo get_post_meta($post->ID, "Video Title", true) ?>
				</span>
			</div>
			<hr class="title_divider">
			<div class="context_container">
				<p class="context">
					<?php echo get_post_meta($post->ID, "Video Content", true) ?>
				</p>
			</div>
			<div class="thumb_display mhhide">
				<div class="thumb_box">
					<div class="thumb_img">
						<img class="thumb" src="<?php echo $template_uri; ?>katana/videosample1.jpg">
					</div>
					<div class="thumb_title">
						<?php echo get_post_meta($post->ID, "Video Thumb 1 Title", true) ?>
					</div>
				</div>
				<div class="thumb_box">
					<div class="thumb_img">
						<img class="thumb" src="<?php echo $template_uri; ?>katana/videosample2.jpg">
					</div>
					<div class="thumb_title">
						<?php echo get_post_meta($post->ID, "Video Thumb 2 Title", true) ?>
					</div>
				</div>
			</div>
			<div class="button_container">
				<div class="more_button">
					<div class="vertical_align">
						<span class="button_label">
							<span class="button_icon more_info"><img src="<?php echo $template_uri; ?>katana/moreinfo.png" /></span>
							More Information
						</span>
					</div>
				</div>
			</div>
		</div>
		
		<!-- SUPPORT -->
		<div class="cover" id="supportbg"></div>
		<div id="supportwbg"></div>
		<div class="title" id="supporttitle">
			<?php echo get_post_meta($post->ID, "Support Title", true) ?>
		</div>
		<div class="supporttext" id="supporttexta">
			<div class="image_container">
				<img src="<?php echo $template_uri; ?>katana/supporttexta.png">
			</div>
			<p class="context small">
				<?php echo get_post_meta($post->ID, "Support Content 1 Compact", true) ?>
				<span class="mhhide">
					<?php echo get_post_meta($post->ID, "Support Content 1 Extension", true) ?>
				</span>
			</p>
		</div>
		<div class="supporttext" id="supporttextb">
			<div class="image_container">
				<img src="<?php echo $template_uri; ?>katana/supporttextb.png">
			</div>
			<p class="context small">
				<?php echo get_post_meta($post->ID, "Support Content 2 Compact", true) ?>
				<span class="mhhide">
					<?php echo get_post_meta($post->ID, "Support Content 2 Extension", true) ?>
				</span>
			</p>
		</div>
		<div class="supporttext" id="supporttextc">
			<div class="image_container">
				<img src="<?php echo $template_uri; ?>katana/supporttextc.png">
			</div>
			<p class="context small">
				<?php echo get_post_meta($post->ID, "Support Content 3 Compact", true) ?>
				<span class="mhhide">
					<?php echo get_post_meta($post->ID, "Support Content 3 Extension", true) ?>
				</span>
			</p>
		</div>
		<div class="supporttext" id="supporttextd">
			<div class="image_container">
				<img src="<?php echo $template_uri; ?>katana/supporttextd.png">
			</div>
			<p class="context small">
				<?php echo get_post_meta($post->ID, "Support Content 4 Compact", true) ?>
				<span class="mhhide">
					<?php echo get_post_meta($post->ID, "Support Content 4 Extension", true) ?>
				</span>
			  
			</p>
		</div>
		
		<!-- CONTACT -->
		<div class="contain" id="contactlogo"></div>
		<div class="contain" id="contactform"></div>
	</div>
</body>
</html>