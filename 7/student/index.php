<!doctype html>
<html>
<head>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
	<script src="https://kit.fontawesome.com/1cdafbf699.js" crossorigin="anonymous"></script>
	<link rel="stylesheet" href="https://use.typekit.net/vyc3wtt.css">
	<meta charset="utf-8">
	<title>Portfolio</title>
	<link href="style/style.css" rel="stylesheet" type="text/css">
</head>
	
<header>
	<nav>
		<img src="img/logo.png"/>
		<div class="buffer"></div>
		<a href=""><p class="header">Home</p></a>
		<a href=""><p class="header">Contact</p></a>
		<a href=""><p class="header">Portfolio</p></a>
		<a href=""><p class="header">About Me</p></a>
  </nav>
	
	<div class="topimage">
		
		<h1>Portfolio</h1>
		<img src="img/Portfolio.jpg" width="1920" height="1280" alt=""/>

	</div>
	
</header>

<body>
	
	<div class="portfolio">
	<?php
function clean($string) {
		$string = str_replace('_', ' ', $string); // Replaces underline with space -> IMPORTANT: Foldername cant contain spaces, use underline instead
	 return preg_replace('/[^A-Za-z\-]/', ' ', $string); // Removes special chars and numbers -> Allows for custom file order
}
		
		$mainDir = 'portfolio';
		$subDirectories = scandir($mainDir);
		
		//removes the first two indexes in the directories array that are just dots
			unset($subDirectories[0]);
			unset($subDirectories[1]);
	?>
		
		<?php
foreach($subDirectories as $subDirectory){
    echo '<h6>'.clean($subDirectory).'</h6>'; //create h6 element with folder name
	?>
		
		<div class="bilderport">
			
			<?php
    // ... and then loop through all pictures in each sub directory
    foreach(glob($mainDir.'/'.$subDirectory.'/*') as $curimg) { //safe img src in varaible
	echo "<img src=".$curimg." class='img'>\n"; //echo a HTML img element
    }
	?>
			
			<?php
	
	echo "</div>"; //close the bilderport div after each section
} 
	?>
		</div>
</body>
</html>
