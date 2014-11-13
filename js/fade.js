<script type="text/javascript">
$(function(){
  $('#switch').click(function(){
	$(this).hide(); 
	$(fuzz).hide();
	$(switch2).delay(1000).fadeOut(800);
	$(content).delay(1800).fadeIn(800);