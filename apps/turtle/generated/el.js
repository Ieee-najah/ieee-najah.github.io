// This file was automatically generated from common.soy.
// Please don't edit this file by hand.

if (typeof apps == 'undefined') { var apps = {}; }


apps.messages = function(opt_data, opt_ignored, opt_ijData) {
  return '<div style="display: none"><span id="subtitle">γραφικό περιβάλλον προγραμματισμού</span><span id="blocklyMessage">Blockly (Μπλόκλι)</span><span id="codeTooltip">Δες τον κώδικα JavaScript που δημιουργήθηκε.</span><span id="linkTooltip">Αποθηκεύει και συνδέει σε μπλοκ.</span><span id="runTooltip">Εκτελεί το πρόγραμμα που ορίζεται από τα μπλοκ στον χώρο εργασίας.</span><span id="runProgram">Εκτέλεση Προγράμματος</span><span id="resetProgram">Επανεκκίνηση</span><span id="dialogOk">Εντάξει</span><span id="dialogCancel">Ακύρωση</span><span id="catLogic">Λογική</span><span id="catLoops">Επαναλήψεις</span><span id="catMath">Μαθηματικά</span><span id="catText">Κείμενο</span><span id="catLists">Λίστες</span><span id="catColour">Χρώμα</span><span id="catVariables">Μεταβλητές</span><span id="catProcedures">Συναρτήσεις</span><span id="httpRequestError">Υπήρξε πρόβλημα με το αίτημα.</span><span id="linkAlert">Κοινοποίησε τα μπλοκ σου με αυτόν τον σύνδεσμο:\n\n%1</span><span id="hashError">Λυπάμαι, το «%1» δεν αντιστοιχεί σε κανένα αποθηκευμένο πρόγραμμα.</span><span id="xmlError">Δεν μπορώ να φορτώσω το αποθηκευμένο αρχείο σου.  Μήπως δημιουργήθηκε από μία παλιότερη έκδοση του Blockly;</span><span id="listVariable">λίστα</span><span id="textVariable">κείμενο</span></div>';
};


apps.dialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogShadow" class="dialogAnimate"></div><div id="dialogBorder"></div><div id="dialog"></div>';
};


apps.codeDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogCode" class="dialogHiddenContent"><pre id="containerCode"></pre>' + apps.ok(null, null, opt_ijData) + '</div>';
};


apps.storageDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogStorage" class="dialogHiddenContent"><div id="containerStorage"></div>' + apps.ok(null, null, opt_ijData) + '</div>';
};


apps.ok = function(opt_data, opt_ignored, opt_ijData) {
  return '<div class="farSide" style="padding: 1ex 3ex 0"><button class="secondary" onclick="BlocklyApps.hideDialog(true)">Εντάξει</button></div>';
};

;
// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

if (typeof turtlepage == 'undefined') { var turtlepage = {}; }


turtlepage.messages = function(opt_data, opt_ignored, opt_ijData) {
  return apps.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Turtle_moveTooltip">Μετακινεί τη χελώνα προς τα εμπρός ή προς τα πίσω κατά το ορισμένο ποσό.</span><span id="Turtle_moveForward">κινήσου μπροστά κατά</span><span id="Turtle_moveBackward">κινήσου προς τα πίσω κατά</span><span id="Turtle_turnTooltip">Γυρίζει τη χελώνα αριστερά ή δεξιά κατά τον καθορισμένο αριθμό των μοιρών.</span><span id="Turtle_turnRight">στρίψε δεξιά κατά</span><span id="Turtle_turnLeft">στρίψε αριστερά κατά</span><span id="Turtle_widthTooltip">Αλλάζει το φάρδος του στιλό.</span><span id="Turtle_setWidth">όρισε το πλάτος ίσο προς</span><span id="Turtle_colourTooltip">Αλλάζει το χρώμα του στιλό.</span><span id="Turtle_setColour">κάνε το χρώμα</span><span id="Turtle_penTooltip">Ανεβάζει ή πατάει το στιλό για να σταματήσει ή να ξεκινήσει να σχεδιάζει.</span><span id="Turtle_penUp">στιλό πάνω</span><span id="Turtle_penDown">στιλό κάτω</span><span id="Turtle_turtleVisibilityTooltip">Κάνει τη χελώνα (πράσινος κύκλος και βέλος) ορατή ή αόρατη.</span><span id="Turtle_hideTurtle">κρύψε τη χελώνα</span><span id="Turtle_showTurtle">εμφάνισε τη χελώνα</span><span id="Turtle_printHelpUrl">https://el.wikipedia.org/wiki/Τυπογραφία</span><span id="Turtle_printTooltip">Γράφει το κείμενο στην κατεύθυνση της χελώνας ξεκινώντας από την τωρινή θέση της.</span><span id="Turtle_print">εκτύπωση</span><span id="Turtle_fontHelpUrl">https://el.wikipedia.org/wiki/Γραμματοσειρά</span><span id="Turtle_fontTooltip">Καθορίζει τη γραμματοσειρά που χρησιμοποιείται από το μπλοκ της εκτύπωσης.</span><span id="Turtle_font">γραμματοσειρά</span><span id="Turtle_fontSize">μέγεθος γραμματοσειράς</span><span id="Turtle_fontNormal">κανονική</span><span id="Turtle_fontBold">έντονη</span><span id="Turtle_fontItalic">πλάγια</span><span id="Turtle_unloadWarning">Αν φύγεις από αυτήν τη σελίδα, όλη η δουλειά που έχεις κάνει θα χαθεί.</span></div>';
};


turtlepage.start = function(opt_data, opt_ignored, opt_ijData) {
  return turtlepage.messages(null, null, opt_ijData) + '<table width="100%"><tr><td><h1><span id="title"><a href="../index.html?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">Blockly (Μπλόκλι)</a> : Γραφικά Με Τη Χελώνα</span></h1></td><td class="farSide"><select id="languageMenu"></select></td></tr></table><div id="visualization"><canvas id="scratch" width="400" height="400" style="display: none"></canvas><canvas id="display" width="400" height="400"></canvas></div><table style="padding-top: 1em;"><tr><td style="width: 190px; text-align: center; vertical-align: top;"><script type="text/javascript" src="../slider.js"><\/script><svg id="slider" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="150" height="50"><!-- Slow icon. --><!-- Extra SVG is temporary hack to fix bug #349701 in Chrome 34. --><!-- Harmless for other browsers. --><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><clipPath id="slowClipPath"><rect width=26 height=12 x=5 y=14 /></clipPath><image xlink:href="icons.png" height=42 width=84 x=-21 y=-10 clip-path="url(#slowClipPath)" /></svg><!-- Fast icon. --><!-- Extra SVG is temporary hack to fix bug #349701 in Chrome 34. --><!-- Harmless for other browsers. --><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><clipPath id="fastClipPath"><rect width=26 height=16 x=120 y=10 /></clipPath><image xlink:href="icons.png" height=42 width=84 x=120 y=-11 clip-path="url(#fastClipPath)" /></svg></svg></td><td style="width: 15px;"><img id="spinner" style="visibility: hidden;" src="loading.gif" height=15 width=15></td><td style="width: 190px; text-align: center"><button id="runButton" class="primary" title="Κάνει τη χελώνα να κάνει αυτό που λένε τα μπλοκ."><img src="../../media/1x1.gif" class="run icon21">Εκτέλεση Προγράμματος</button><button id="resetButton" class="primary" style="display: none"><img src="../../media/1x1.gif" class="stop icon21"> Επανεκκίνηση</button></td></tr></table><div id="toolbarDiv"><button id="codeButton" class="notext" title="Δες τον κώδικα JavaScript που δημιουργήθηκε."><img src=\'../../media/1x1.gif\' class="code icon21"></button><button id="linkButton" class="notext" title="Αποθηκεύει και συνδέει σε μπλοκ."><img src=\'../../media/1x1.gif\' class="link icon21"></button><button class="notext" id="captureButton" title="Αποθήκευσε το σχέδιο."><img src=\'../../media/1x1.gif\' class="img icon21"></button><a id="downloadImageLink" download="σχέδιο.png"></a></div><script type="text/javascript" src="../../blockly_compressed.js"><\/script><script type="text/javascript" src="../../blocks_compressed.js"><\/script><script type="text/javascript" src="../../javascript_compressed.js"><\/script><script type="text/javascript" src="../../' + soy.$$escapeHtml(opt_ijData.langSrc) + '"><\/script><script type="text/javascript" src="blocks.js"><\/script>' + turtlepage.toolbox(null, null, opt_ijData) + '<div id="blockly"></div>' + apps.dialog(null, null, opt_ijData) + apps.codeDialog(null, null, opt_ijData) + apps.storageDialog(null, null, opt_ijData);
};


turtlepage.toolbox = function(opt_data, opt_ignored, opt_ijData) {
  return '<xml id="toolbox" style="display: none"><category name="Χελώνα"><block type="draw_move"><value name="VALUE"><block type="math_number"><field name="NUM">10</field></block></value></block><block type="draw_turn"><value name="VALUE"><block type="math_number"><field name="NUM">90</field></block></value></block><block type="draw_width"><value name="WIDTH"><block type="math_number"><field name="NUM">1</field></block></value></block><block type="draw_pen"></block><block type="turtle_visibility"></block><block type="draw_print"><value name="TEXT"><block type="text"></block></value></block><block type="draw_font"></block></category><category name="Χρώμα"><block type="draw_colour"><value name="COLOUR"><block type="colour_picker"></block></value></block><block type="colour_picker"></block><block type="colour_random"></block><block type="colour_rgb"><value name="RED"><block type="math_number"><field name="NUM">100</field></block></value><value name="GREEN"><block type="math_number"><field name="NUM">50</field></block></value><value name="BLUE"><block type="math_number"><field name="NUM">0</field></block></value></block><block type="colour_blend"><value name="COLOUR1"><block type="colour_picker"><field name="COLOUR">#ff0000</field></block></value><value name="COLOUR2"><block type="colour_picker"><field name="COLOUR">#3333ff</field></block></value><value name="RATIO"><block type="math_number"><field name="NUM">0.5</field></block></value></block></category><category name="Λογική"><block type="controls_if"></block><block type="logic_compare"></block><block type="logic_operation"></block><block type="logic_negate"></block><block type="logic_boolean"></block><block type="logic_ternary"></block></category><category name="Επαναλήψεις"><block type="controls_repeat_ext"><value name="TIMES"><block type="math_number"><field name="NUM">10</field></block></value></block><block type="controls_whileUntil"></block><block type="controls_for"><value name="FROM"><block type="math_number"><field name="NUM">1</field></block></value><value name="TO"><block type="math_number"><field name="NUM">10</field></block></value><value name="BY"><block type="math_number"><field name="NUM">1</field></block></value></block><block type="controls_forEach"></block><block type="controls_flow_statements"></block></category><category name="Μαθηματικά"><block type="math_number"></block><block type="math_arithmetic"></block><block type="math_single"></block><block type="math_trig"></block><block type="math_constant"></block><block type="math_number_property"></block><block type="math_change"><value name="DELTA"><block type="math_number"><field name="NUM">1</field></block></value></block><block type="math_round"></block><block type="math_on_list"></block><block type="math_modulo"></block><block type="math_constrain"><value name="LOW"><block type="math_number"><field name="NUM">1</field></block></value><value name="HIGH"><block type="math_number"><field name="NUM">100</field></block></value></block><block type="math_random_int"><value name="FROM"><block type="math_number"><field name="NUM">1</field></block></value><value name="TO"><block type="math_number"><field name="NUM">100</field></block></value></block><block type="math_random_float"></block></category><category name="Λίστες"><block type="lists_create_empty"></block><block type="lists_create_with"></block><block type="lists_repeat"><value name="NUM"><block type="math_number"><field name="NUM">5</field></block></value></block><block type="lists_length"></block><block type="lists_isEmpty"></block><block type="lists_indexOf"><value name="VALUE"><block type="variables_get"><field name="VAR">λίστα</field></block></value></block><block type="lists_getIndex"><value name="VALUE"><block type="variables_get"><field name="VAR">λίστα</field></block></value></block><block type="lists_setIndex"><value name="LIST"><block type="variables_get"><field name="VAR">λίστα</field></block></value></block><block type="lists_getSublist"><value name="LIST"><block type="variables_get"><field name="VAR">λίστα</field></block></value></block></category><category name="Μεταβλητές" custom="VARIABLE"></category><category name="Συναρτήσεις" custom="PROCEDURE"></category></xml>';
};
