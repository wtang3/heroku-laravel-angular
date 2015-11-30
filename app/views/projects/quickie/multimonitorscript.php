<!DOCTYPE HTML>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
    <meta http-equiv="MSThemeCompatible" Content="No"/>
    <meta name="MSSmartTagsPreventParsing" content="true"/>
    <meta http-equiv="imagetoolbar" content="no"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="X-UA-Compatible" content="IE=8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=9" />
    <link rel="stylesheet" href="../css/reveal/reveal.min.css">
    <link rel="stylesheet" href="../css/reveal/themes/simple.css" id="theme"/>
    <link rel="shortcut icon" href="favicon/multimonitor.ico" type="image/x-icon"/>
    <title>multimonitor</title>
  </head>
  <body>
    <div class="reveal">
        <a style="margin-left:2%;font-size:15pt;" href="/#/projects"> ← back</a>
      <div class="slides">
        <section>
          <h3>Multimonitor script tutorial</h3>
          <p style="font-size:12pt;">
            This is a tutorial to explain what are the requirements if 
            you want to automate the enabling of an additional monitor (TV) and its sound
            on a Windows computer. This will help speed up the "right clicking 
            desktop and enabling monitor", as well as activating the sound on the televion.
            Moreover this is something I threw together quickly to save myself some clicking 
            as I found my self quite annoyed setting up my television each time. 
            <a href="https://github.com/wtang3/MultiMonitorScript">https://github.com/wtang3/MultiMonitorScript</a>
          </p>
        </section>
        <section>
          <section>
            <h3>Stuff you need to download</h3>  
            <div style="font-size:14pt;">
              <ul>
                <li><a href="http://www.nirsoft.net/utils/multi_monitor_tool.html" target="_blank">
                http://www.nirsoft.net/utils/multi_monitor_tool.html</a></li>
                <li><a href="http://www.nirsoft.net/utils/nircmd.html" target="_blank">http://www.nirsoft.net/utils/nircmd.html</a></li>
                <li><a href="https://www.perl.org/get.html" target="_blank">https://www.perl.org/get.html</a> (optional)</li>
              </ul>
            </div>
          </section>
          <section>
            <h4>Multimonitor Tool</h4>
            <div style="font-size:14pt;">
              <p>
                This is definitely required as this tool will allow you run the commands
                required in the command prompt to enabling and disabling monitors.
              </p>
              <a class="image" href="http://www.nirsoft.net/utils/multimonitortool.png" target="_blank">
                <img src="http://www.nirsoft.net/utils/multimonitortool.png" alt="Multimonitor Tool">
              </a>
            </div>
          </section>
          <section>
            <h4>Nircmd Tool</h4>
            <div style="font-size:14pt;">
              <p>
                This is definitely required as this tool will allow you run the commands
                required in the command prompt to enable and disable sound.
              </p>
              <a class="image" href="../images/nircmdimage.png" target="_blank">
                <img  src="../images/nircmdimage.PNG" alt="Multimonitor Tool">
              </a>
            </div>
          </section>
          <section>
            <h4>Perl</h4>
            <div style="font-size:14pt;">
              <p>
                This is optional as you can choose your preferred scripting language to automate this.
              </p>
              <a class="image" href="https://st.pimg.net/perlweb/images/camel_head.v25e738a.png" target="_blank">
                <img  src="https://st.pimg.net/perlweb/images/camel_head.v25e738a.png" alt="Multimonitor Tool">
              </a>
              <pre style="font-size:12pt;width:60%;"><code>
                #!/usr/bin/perl -w 
                  ...
                my $search_key = $something_else;

                foreach (keys %some_hash) {
                  if ($_ eq $search_key) {
                    do_something($_);
                  }
                }
                  ...
              </code></pre>
            </div>
          </section>
        </section>
        <section>
          <section>
             <h4>So how did I get this to work?</h4>
             <div style="font-size:14pt;">
             <p>Using MultimonitorTool.exe I generate a comma delimeted report (you can choose the delimeted format you desire) 
              that shows you all monitors connected to your computer.</p>
              <img src="../images/comma.png">
            </div>
          </section>
          <section>
            <h4>Continued...</h4>
             <div style="font-size:14pt;">
             <p>The report is important as this file will allow you to see all monitors attached 
              to your computer as well as the status. As you can see from the example below, the file shows
              the monitors that are active. In my situation I needed the column for my TV, DISPLAY3.</p>
              <img src="../images/active.png">
            </div>
          </section>
          <section>
            <h4>Continued...</h4>
             <div style="font-size:13pt;">
             <p>At this point you can choose your favorite scripting or programming language for the logic. 
              I have chosen Perl for my scripting language. As you can tell from the comment, I open the file that
              the report is generated and push everything into an array. I then loop through the @array
              (I know I could of name this better, thats why this is a quickie :P ) to 
              query for my search string which would be "DISPLAY3" and store the result into @results. 
              I know that the status information is the 6th entry so I would grab the 5th element in @results and have
              a conditional statement to query whether it is active or not active. Trivial enough, if it is not active 
              we will enable the television and sound, else disable both. See full source
              <a href="https://github.com/wtang3/MultiMonitorScript/blob/master/src/monitorscript.pl" target="_blank">[here]</a></p>
              <pre style="font-size:12pt;width:60%;"><code>
      #!/usr/bin/perl -w 
        ...
      #open the file and push the contents into @array
      open my $searchfile, '<', $file or die "Cant open file $!"; 
      while (my $line = <$searchfile>){
        chomp $line;
        push(@array,$line);

      #loop through the array then search for the display name
      #then split by the delimeter and see if the monitor status.
      foreach(@array){
       if($_ =~ /$search/){
          my @results = split(/,/,$_);
          #if not active enable, else disable
          if($results[5] eq "No"){
            qx($enable);
            qx($dsound);
          }else{
            qx($disable);
            qx($esound);
          }
        }
      }
      ...
              </code></pre>
            </div>
          </section>
        </section>

        <section>
          <h3>Conclusion</h3>
          <div style="font-size:14pt;">
            <p>Overall everything went pretty smoothly, things I would recommend is when 
              running the commands to disable playback devices, make sure to have unique names
              for your sound devices. For example mine is pretty self explanatory as my main sound
              is called "Speakers" and the tv is "LG TV-4". Lastly I hoped you enjoy this tutorial,
              hopefully as I get more bored I will create more tutorials on future quickie scripts
              or programming projects.</p>
              <p>signed ~wtang : )</p>
          </div>
        </section>
      </div>
    </div>
    <script src="../js/reveal/lib/head.min.js"></script>
    <script src="../js/reveal/reveal.min.js"></script>
    <script>
      Reveal.initialize({
        history: true,
        transition: 'linear'
      });
    </script>
  </body>
</html>