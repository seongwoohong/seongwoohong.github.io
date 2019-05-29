//MathJax.Hub.Config({tex2jax: {inlineMath: [['$','$'], ['\\(','\\)']]}});

document.documentElement.className = document.documentElement.className.replace(/\bno-js\b/g, '') + ' js ';

if (window.location.protocol != "https:" && location.hostname == "swh.trustko.com") window.location.href = "https:" + window.location.href.substring(window.location.protocol.length);

jQuery(document).ready(function() {jQuery('.btn-navbar').click(function() {jQuery('.menu-wrap').toggleClass('collapsed');});});
