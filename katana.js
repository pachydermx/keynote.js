// create meta and manager objects
var meta = new meta();
var manager = new manager();
manager.mods = ["Mobile", "Tablet", "MobileH", "TabletV"];

// options
var defaultEasing = "easeOutQuad";
var defaultExiting = "easeInQuad";

// create objects
// HOME STATE A
var homebg = new object("homebg", meta);
homebg.add_state(50, 0, 50, 0, 0);
homebg.add_state(50, 0, 50, 0, 1);
homebg.add_size_transform([0, 1], 100, 0, 100, 0);
homebg.set_z_index(1);

var homelogoa = new object("homelogoa", meta);
homelogoa.add_state(50, 0, 50, 0, 0);
homelogoa.add_state(50, 0, 50, 0, 1);
homelogoa.add_size_transform([0, 1], 0, 359, 0, 265);
homelogoa.set_z_index(1);
// mobile
homelogoa.add_size_transform([0, 1], 50, 0, 50, 0, 0);
// tablet
homelogoa.add_size_transform([0, 1], 0, 359, 0, 265, 1);
// mobileh
homelogoa.add_size_transform([0, 1], 50, 0, 50, 0, 2);

var homelogolighta = new object("homelogolighta", meta);
homelogolighta.add_state(50, 0, 50, -55, 0);
homelogolighta.add_state(50, 0, 50, -55, 1);
homelogolighta.set_z_index(2);

var homelogolightb = new object("homelogolightb", meta);
homelogolightb.add_state(50, 0, 50, -55, 0);
homelogolightb.add_state(50, 0, 50, -55, 1);
homelogolightb.add_easing(1, "easeOutCubic");
homelogolightb.add_rotate_transform(0, -210);
homelogolightb.set_z_index(2);

var homesakuraa = new object("homesakuraa", meta);
homesakuraa.add_state(50, 0, -150, 0, 1);
homesakuraa.add_state(50, 0, 250, 0, 1);
homesakuraa.add_size_transform([0, 1], 100, 0, 100, 0);
homesakuraa.set_z_index(2);

var homesakurab = new object("homesakurab", meta);
homesakurab.add_state(50, 0, -100, 0, 1);
homesakurab.add_state(50, 0, 200, 0, 1);
homesakurab.add_size_transform([0, 1], 100, 0, 100, 0);
homesakurab.set_z_index(2);

var homesakurac = new object("homesakurac", meta);
homesakurac.add_state(50, 0, -80, 0, 1);
homesakurac.add_state(50, 0, 180, 0, 1);
homesakurac.add_size_transform([0, 1], 100, 0, 100, 0);
homesakurac.set_z_index(2);
// mobile
homesakuraa.add_size_transform([0, 1], 300, 0, 100, 0, 0);
homesakurab.add_size_transform([0, 1], 300, 0, 100, 0, 0);
homesakurac.add_size_transform([0, 1], 300, 0, 100, 0, 0);

var homekatana = new object("homekatana", meta);
homekatana.add_state(61, 0, 20, 0, 0);
homekatana.add_state(61, 0, 20, 0, 1);
homekatana.add_size_transform([0, 1], 100, 0, 40, 0);
homekatana.set_z_index(1);
// mobileh
homekatana.change_position(1, 61, 0, 13, 0, 1, 2);


// HOME STATE B
var homebgb = new object("homebgb", meta);
homebgb.add_state(50, 0, 150, 0, 1);
homebgb.add_state(50, 0, 50, 0, 1);
homebgb.add_size_transform([0, 1], 100, 0, 100, 0);
homebgb.add_easing(1, defaultEasing);
homebgb.auto_reset = false;
homebgb.set_z_index(3);

var homelogob = new object("homelogob", meta);
homelogob.add_state(35, 0, 45, 0, 0);
homelogob.add_state(35, 0, 45, 0, 1);
homelogob.add_size_transform([0, 1], 33, 0, 60, 0);
homelogob.set_z_index(4);
// mobile
homelogob.change_position([0, 1], 50, 0, 26, 0, [0, 1], 0);
homelogob.add_size_transform([0, 1], 100, 0, 35, 0, 0);
// tablet
homelogob.change_position([0, 1], 30, 0, 45, 0, [0, 1], 1);
// mobileh
homelogob.change_position([0, 1], 30, 0, 45, 0, [0, 1], 2);

var hometext = new object("hometext", meta);
hometext.add_state(66, 0, 60, 0, 0);
hometext.add_state(66, 0, 54, 0, 1);
hometext.add_size_transform([0, 1], 25, 0, 31, 0);
hometext.set_z_index(4)
// mobile
hometext.change_position([0, 1], 50, 0, [75, 65], 0, [0, 1], 0);
hometext.add_size_transform([0, 1], 80, 0, 40, 0, 0);
// tablet
hometext.add_size_transform([0, 1], 32.5, 0, 40.3, 0, 1);
// mobileh
hometext.add_size_transform([0, 1], 32.5, 0, 55.3, 0, 2);
hometext.change_position(1, 66, 0, 60, 0, 1, 2);

var homesakurad = new object("homesakurad", meta);
homesakurad.add_state(18, 0, 150, 0, 1);
homesakurad.add_state(18, 0, 75, 0, 1);
homesakurad.add_size_transform([0, 1], 36, 0, 51, 0);
homesakurad.add_easing(1, defaultEasing);
homesakurad.auto_reset = false;
homesakurad.set_z_index(4);
// mobile
homesakurad.change_position([0, 1], 8, 0, [150, 90], 0, 1, 0);

var homesakurae = new object("homesakurae", meta);
homesakurae.add_state(80, 0, 150, 0, 1);
homesakurae.add_state(80, 0, 25, 0, 1);
homesakurae.add_size_transform([0, 1], 40, 0, 51, 0);
homesakurae.add_easing(1, defaultEasing);
homesakurae.auto_reset = false;
homesakurae.set_z_index(4);
// mobile
homesakurae.change_position(1, 80, 0, 15, 0, 1, 0);

var homesakuraf = new object("homesakuraf", meta);
homesakuraf.add_state(28, 0, 150, 0, 1);
homesakuraf.add_state(28, 0, -5, 0, 1);
homesakuraf.add_size_transform([0, 1], 56, 0, 86, 0);
homesakuraf.add_easing(1, defaultEasing);
homesakuraf.auto_reset = false;
homesakuraf.set_z_index(4);
// mobile
homesakuraf.change_position([0, 1], 14, 0, [150, 9], 0, 1, 0);
homesakuraf.add_size_transform([0, 1], 80, 0, 50, 0, 0);

homesakurad.add_easing(0, "easeInQuad");
homesakurae.add_easing(0, "easeInQuad");
homesakuraf.add_easing(0, "easeInQuad");


// WEBSITE 1
var websitebg = new object("websitebg", meta);
websitebg.add_state(50, 0, 50, 0, 0);
websitebg.add_state(50, 0, 50, 0, 1);
websitebg.add_state(50, 0, -50, 0, 1);
websitebg.add_size_transform([0, 1, 2], 100, 0, 100, 0);
websitebg.default_exit_location = 0;
websitebg.add_easing(1, defaultEasing);
websitebg.add_easing(2, defaultEasing);
websitebg.auto_reset = false;
websitebg.set_z_index(4);

var websitewbg = new object("websitewbg", meta);
websitewbg.add_state(50, 0, 150, 0, 1);
websitewbg.add_state(50, 0, 40, 0, 1);
websitewbg.add_state(50, 0, -50, 0, 1);
websitewbg.auto_reset = false;
websitewbg.add_size_transform([0, 1, 2], 100, 0, 80, 0);
websitewbg.add_easing(1, defaultEasing);
websitewbg.default_exit_location = 2;
websitewbg.set_z_index(5);

// WEBSITE SLIDER
var slider_height_mobileh = 55;
var slider_y_mobileh = 45;

websiteslider1 = new object("websiteslider1", meta);
websiteslider1.add_state(150, 0, 40, 0, 1);
websiteslider1.add_state(50, 0, 40, 0, 1);
websiteslider1.add_state(-50, 0, 40, 0, 1);
websiteslider1.add_size_transform([0, 1, 2], 20, 0, 48, 0);
websiteslider1.add_easing(1, defaultEasing);
websiteslider1.add_easing(2, defaultExiting);
websiteslider1.default_exit_location = 2;
websiteslider1.set_z_index(5);
// mobile
websiteslider1.add_size_transform([0, 1, 2], 75, 0, 50, 0, 0);
// tablet
websiteslider1.add_size_transform([0, 1, 2], 40, 0, 48, 0, 1);
// mobileh
websiteslider1.add_size_transform([0, 1, 2], 60, 0, slider_height_mobileh, 0, 2);
websiteslider1.change_position([0, 1, 2], [150, 50, -50], 0, slider_y_mobileh, 0, 1, 2);

websiteslider2 = new object("websiteslider2", meta);
websiteslider2.add_state(150, 0, 40, 0, 1);
websiteslider2.add_state(50, 0, 40, 0, 1);
websiteslider2.add_state(-50, 0, 40, 0, 1);
websiteslider2.add_size_transform([0, 1, 2], 20, 0, 48, 0);
websiteslider2.add_easing(1, defaultEasing);
websiteslider2.add_easing(2, defaultExiting);
websiteslider2.default_exit_location = 2;
websiteslider2.set_z_index(5);
// mobile
websiteslider2.add_size_transform([0, 1, 2], 75, 0, 50, 0, 0);
// tablet
websiteslider2.add_size_transform([0, 1, 2], 40, 0, 48, 0, 1);
// mobileh
websiteslider2.add_size_transform([0, 1, 2], 60, 0, slider_height_mobileh, 0, 2);
websiteslider2.change_position([0, 1, 2], [150, 50, -50], 0, slider_y_mobileh, 0, 1, 2);

websiteslider3 = new object("websiteslider3", meta);
websiteslider3.add_state(150, 0, 40, 0, 1);
websiteslider3.add_state(50, 0, 40, 0, 1);
websiteslider3.add_state(-50, 0, 40, 0, 1);
websiteslider3.add_size_transform([0, 1, 2], 20, 0, 48, 0);
websiteslider3.add_easing(1, defaultEasing);
websiteslider3.add_easing(2, defaultExiting);
websiteslider3.default_exit_location = 2;
websiteslider3.set_z_index(5);
// mobile
websiteslider3.add_size_transform([0, 1, 2], 75, 0, 50, 0, 0);
// tablet
websiteslider3.add_size_transform([0, 1, 2], 40, 0, 48, 0, 1);
// mobileh
websiteslider3.add_size_transform([0, 1, 2], 60, 0, slider_height_mobileh, 0, 2);
websiteslider3.change_position([0, 1, 2], [150, 50, -50], 0, slider_y_mobileh, 0, 1, 2);

websiteslider4 = new object("websiteslider4", meta);
websiteslider4.add_state(150, 0, 40, 0, 1);
websiteslider4.add_state(50, 0, 40, 0, 1);
websiteslider4.add_state(-50, 0, 40, 0, 1);
websiteslider4.add_size_transform([0, 1, 2], 20, 0, 48, 0);
websiteslider4.add_easing(1, defaultEasing);
websiteslider4.add_easing(2, defaultExiting);
websiteslider4.default_exit_location = 2;
websiteslider4.set_z_index(5);
// mobile
websiteslider4.add_size_transform([0, 1, 2], 75, 0, 50, 0, 0);
// tablet
websiteslider4.add_size_transform([0, 1, 2], 40, 0, 48, 0, 1);
// mobileh
websiteslider4.add_size_transform([0, 1, 2], 60, 0, slider_height_mobileh, 0, 2);
websiteslider4.change_position([0, 1, 2], [150, 50, -50], 0, slider_y_mobileh, 0, 1, 2);

var websitesliderindicator = new object("websitesliderindicator", meta);
websitesliderindicator.add_state(50, 0, 68, 0, 0);
websitesliderindicator.add_state(50, 0, 68, 0, 1);
websitesliderindicator.add_size_transform([0, 1], 0, 200, 0, 25);
websitesliderindicator.set_z_index(5);

// mobileh
websitesliderindicator.change_position(1, 50, 0, 68, 0, 0, 2);

// WEBSITE 2

var websitetext = new object("websitetext", meta);
websitetext.add_state(65, 0, 45, 0, 0);
websitetext.add_state(65, 0, 35, 0, 1);
websitetext.add_state(65, 0, -65, 0, 1);
websitetext.add_size_transform([0, 1, 2], 25, 0, 40, 0);
websitetext.default_exit_location = 2;
websitetext.add_easing(1, defaultEasing);
websitetext.add_easing(2, defaultEasing);
websitetext.set_z_index(5);
// mobile
websitetext.change_position([0, 1, 2], 50, 0, [82, 72, -50], 0, [0, 1, 1], 0);
websitetext.add_size_transform([0, 1, 2], 80, 0, 40, 0, 0);
// tablet
websitetext.add_size_transform([0, 1, 2], 32.5, 0, 52, 0, 1);
// mobileh
websitetext.add_size_transform([0, 1, 2], 40, 0, 58, 0, 2);
websitetext.change_position([0, 1, 2], 60, 0, [55, 45, -65], 0, [0, 1, 1], 2);

var websiteleafa = new object("websiteleafa", meta);
websiteleafa.add_state(16, 0, 34, 0, 0);
websiteleafa.add_state(16, 0, 24, 0, 1);
websiteleafa.add_state(16, 0, -76, 0, 1);
websiteleafa.add_size_transform([0, 1, 2], 31, 0, 53, 0);
websiteleafa.add_easing(1, defaultEasing);
websiteleafa.add_easing(2, defaultEasing);
websiteleafa.default_exit_location = 2;
websiteleafa.set_z_index(5);
// mobile
websiteleafa.add_size_transform([0, 1, 2], 45, 0, 40, 0, 0);
websiteleafa.change_position(0, 22.5, 0, 20, 0, 0, 0);
websiteleafa.change_position(1, 22.5, 0, 10, 0, 1, 0);
websiteleafa.change_position(2, 22.5, 0, -50, 0, 1, 0);

var websiteleafb = new object("websiteleafb", meta);
websiteleafb.add_state(30, 0, 34, 0, 0);
websiteleafb.add_state(30, 0, 24, 0, 1);
websiteleafb.add_state(30, 0, -76, 0, 1);
websiteleafb.add_size_transform([0, 1, 2], 33, 0, 49, 0);
websiteleafb.add_easing(1, defaultEasing);
websiteleafb.add_easing(2, defaultEasing);
websiteleafb.default_exit_location = 2;
websiteleafb.set_z_index(6);
// mobile
websiteleafb.add_size_transform([0, 1, 2], 42.8, 0, 25, 0, 0);
websiteleafb.change_position(1, 30, 0, 27, 0, 1, 0);

var websiteleafc = new object("websiteleafc", meta);
websiteleafc.add_state(75, 0, 90, 0, 0);
websiteleafc.add_state(75, 0, 15, 0, 1);
websiteleafc.add_state(75, 0, -85, 0, 1);
websiteleafc.add_size_transform([0, 1, 2], 18, 0, 31, 0);
websiteleafc.add_easing(1, defaultEasing);
websiteleafc.add_easing(2, defaultEasing);
websiteleafc.default_exit_location = 2;
websiteleafc.set_z_index(5);
// mobile
websiteleafc.add_size_transform([0, 1, 2], 27, 0, 31, 0, 0);

var websiteleafd = new object("websiteleafd", meta);
websiteleafd.add_state(85, 0, 90, 0, 0);
websiteleafd.add_state(85, 0, 75, 0, 1);
websiteleafd.add_state(85, 0, -25, 0, 1);
websiteleafd.add_size_transform([0, 1, 2], 25, 0, 44, 0);
websiteleafd.add_easing(1, defaultEasing);
websiteleafd.add_easing(2, defaultEasing);
websiteleafd.default_exit_location = 2;
websiteleafd.set_z_index(5);
// mobile
websiteleafd.add_size_transform([0, 1, 2], 37.5, 0, 40, 0, 0);
websiteleafd.change_position(0, 95, 0, 90, 0, 0, 0);
websiteleafd.change_position(1, 95, 0, 75, 0, 1, 0);
websiteleafd.change_position(2, 95, 0, -25, 0, 1, 0);

var websitedevices = new object("websitedevices", meta);
websitedevices.add_state(40, 0, 75, 0, 0);
websitedevices.add_state(50, 0, 75, 0, 1);
websitedevices.add_state(50, 0, -25, 0, 1);
websitedevices.add_size_transform([0, 1, 2], 61, 0, 45, 0);
websitedevices.default_exit_location = 2;
websitedevices.add_easing(1, defaultEasing);
websitedevices.add_easing(2, defaultEasing);
websitedevices.set_z_index(5);
// mobile
websitedevices.change_position(0, 40, 0, 40, 0, 0, 0);
websitedevices.change_position(1, 50, 0, 40, 0, 1, 0);
websitedevices.change_position(2, 50, 0, -50, 0, 1, 0);
websitedevices.add_size_transform([0, 1, 2], 90, 0, 33, 0, 0);

// INTERECTIVE
var interbg = new object("interbg", meta);
interbg.add_state(50, 0, 150, 0, 1);
interbg.add_state(50, 0, 50, 0, 1);
interbg.add_state(50, 0, -50, 0, 1);
interbg.add_size_transform([0, 1, 2], 100, 0, 100, 0);
interbg.add_easing(1, defaultEasing);
interbg.default_exit_location = 2;
interbg.set_z_index(4);
// mobile
interbg.add_size_transform([0, 1, 2], 150, 0, 100, 0, 0);
interbg.change_position(1, 60, 0, 50, 0, 1, 0);

var interinfoa = new object("interinfoa", meta);
interinfoa.add_state(20, 0, 80, 0, 0);
interinfoa.add_state(20, 0, 70, 0, 1);
interinfoa.add_state(20, 0, -30, 0, 1);
interinfoa.add_size_transform([0, 1, 2], 10, 0, 20, 0);
interinfoa.default_exit_location = 2;
interinfoa.set_z_index(5);

var interinfob = new object("interinfob", meta);
interinfob.add_state(35, 0, 80, 0, 0);
interinfob.add_state(35, 0, 70, 0, 1);
interinfob.add_state(35, 0, -30, 0, 1);
interinfob.add_size_transform([0, 1, 2], 10, 0, 20, 0);
interinfob.default_exit_location = 2;
interinfob.set_z_index(5);

var interinfoc = new object("interinfoc", meta);
interinfoc.add_state(50, 0, 80, 0, 0);
interinfoc.add_state(50, 0, 70, 0, 1);
interinfoc.add_state(50, 0, -30, 0, 1);
interinfoc.add_size_transform([0, 1, 2], 10, 0, 20, 0);
interinfoc.default_exit_location = 2;
interinfoc.set_z_index(5);

// mobile
interinfoa.change_position([0, 1, 2], 22, 0, [-50, 37, 150], 0, [0, 1, 1], 0);
interinfob.change_position([0, 1, 2], 50, 0, [-50, 37, 150], 0, [0, 1, 1], 0);
interinfoc.change_position([0, 1, 2], 78, 0, [-50, 37, 150], 0, [0, 1, 1], 0);
interinfoa.add_size_transform([0, 1, 2], 40, 0, 15, 0, 0);
interinfob.add_size_transform([0, 1, 2], 40, 0, 15, 0, 0);
interinfoc.add_size_transform([0, 1, 2], 40, 0, 15, 0, 0);
// tablet
interinfoa.change_position([0, 1], 20, 0, [90, 80], 0, [0, 1], 1);
interinfob.change_position([0, 1], 35, 0, [90, 80], 0, [0, 1], 1);
interinfoc.change_position([0, 1], 50, 0, [90, 80], 0, [0, 1], 1);
// mobileh
interinfoa.change_position([0, 1, 2], 15, 0, [90, 80, -50], 0, [0, 1, 1], 2);
interinfob.change_position([0, 1, 2], 30, 0, [90, 80, -50], 0, [0, 1, 1], 2);
interinfoc.change_position([0, 1, 2], 45, 0, [90, 80, -50], 0, [0, 1, 1], 2);

interinfoa.add_easing(1, defaultEasing);
interinfob.add_easing(1, defaultEasing);
interinfoc.add_easing(1, defaultEasing);

var intertext = new object("intertext", meta);
intertext.add_state(70, 0, 55, 0, 0);
intertext.add_state(70, 0, 45, 0, 1);
intertext.add_state(70, 0, -55, 0, 1);
intertext.add_size_transform([0, 1, 2], 30, 0, 52, 0);
intertext.default_exit_location = 2;
intertext.add_easing(1, defaultEasing);
intertext.set_z_index(5);
// mobile
intertext.change_position([0, 1, 2], 50, 0, [82, 70, -50], 0, [0, 1, 1], 0);
intertext.add_size_transform([0, 1, 2], 80, 0, 50, 0, 0);
// tablet
intertext.add_size_transform([0, 1, 2], 40, 0, 65, 0, 1);
// mobileh
intertext.add_size_transform([0, 1, 2], 40, 0, 65, 0, 2);
//intertext.change_position([0, 1, 2], 70, 0, [55, 45, -55], 0, [0, 1, 1], 2);



// BRAND
var brandcarda = new object("brandcarda", meta);
brandcarda.add_state(20, 0, -50, 0, 1);
brandcarda.add_state(20, 0, 27, 0, 1);
brandcarda.add_size_transform([0, 1], 27, 0, 41, 0);
brandcarda.set_z_index(2);
// mobile
brandcarda.change_position(0, 0, 0, -50, 0, 1, 0);
brandcarda.change_position(1, 0, 0, 15, 0, 1, 0);
brandcarda.add_size_transform([0, 1], 40, 0, 40, 0, 0);

var brandcardb = new object("brandcardb", meta);
brandcardb.add_state(50, 0, 150, 0, 1);
brandcardb.add_state(50, 0, 27, 0, 1);
brandcardb.add_size_transform([0, 1], 27, 0, 41, 0);
brandcardb.set_z_index(3);
// mobile
brandcardb.change_position(0, 50, 0, -50, 0, 1, 0);
brandcardb.change_position(1, 50, 0, 15, 0, 1, 0);
brandcardb.add_size_transform([0, 1], 40, 0, 40, 0, 0);

var brandcardc = new object("brandcardc", meta);
brandcardc.add_state(80, 0, -50, 0, 1);
brandcardc.add_state(80, 0, 27, 0, 1);
brandcardc.add_size_transform([0, 1], 27, 0, 41, 0);
brandcardc.set_z_index(2);
// mobile
brandcardc.change_position(0, 100, 0, -50, 0, 1, 0);
brandcardc.change_position(1, 100, 0, 15, 0, 1, 0);
brandcardc.add_size_transform([0, 1], 40, 0, 40, 0, 0);

var brandcardd = new object("brandcardd", meta);
brandcardd.add_state(31, 0, 150, 0, 1);
brandcardd.add_state(31, 0, 76, 0, 1);
brandcardd.add_size_transform([0, 1], 51, 0, 49, 0);
brandcardd.set_z_index(2);
// mobile
brandcardd.change_position(0, 0, 0, 150, 0, 1, 0);
brandcardd.change_position(1, 0, 0, 82, 0, 1, 0);
brandcardd.add_size_transform([0, 1], 200, 0, 46, 0, 0);
// tablet
brandcardd.add_size_transform([0, 1], 40, 0, 49, 0, 1);
brandcardd.change_position([0, 1], 26, 0, [150, 76], 0, 1, 1);
// mobileh
brandcardd.add_size_transform([0, 1], 40, 0, 49, 0, 2);
brandcardd.change_position([0, 1], 26, 0, [150, 76], 0, 1, 2);

var brandpen = new object("brandpen", meta);
brandpen.add_state(89, 0, 150, 0, 1);
brandpen.add_state(89, 0, 85, 0, 1);
brandpen.add_size_transform([0, 1], 12, 0, 30, 0);
brandpen.set_z_index(2);
// mobile
brandpen.change_position(0, 84, 0, 150, 0, 1, 0);
brandpen.change_position(1, 84, 0, 90, 0, 1, 0);
brandpen.add_size_transform([0, 1], 25, 0, 30, 0, 0);

var brandclip = new object("brandclip", meta);
brandclip.add_state(89, 0, 150, 0, 1);
brandclip.add_state(89, 0, 56, 0, 1);
brandclip.add_size_transform([0, 1], 10, 0, 28, 0);
brandclip.set_z_index(2);
// mobile
brandclip.change_position(0, 84, 0, 150, 0, 1, 0);
brandclip.change_position(1, 84, 0, 72, 0, 1, 0);
brandclip.add_size_transform([0, 1], 17, 0, 30, 0, 0);

var brandtext = new object("brandtext", meta);
brandtext.add_state(70, 0, 150, 0, 1);
brandtext.add_state(70, 0, 70, 0, 1);
brandtext.add_size_transform([0, 1], 25, 0, 45, 0);
brandtext.set_z_index(2);
// mobile
brandtext.change_position(0, 50, 0, 150, 0, 1, 0);
brandtext.change_position(1, 50, 0, 42, 0, 1, 0);
brandtext.add_size_transform([0, 1], 80, 0, 40, 0, 0);
// tablet
brandtext.add_size_transform([0, 1], 35, 0, 55, 0, 1);
brandtext.change_position([0, 1], 65, 0, [150, 65], 0, 1, 1);
// mobileh
brandtext.add_size_transform([0, 1], 35, 0, 55, 0, 2);
brandtext.change_position([0, 1], 65, 0, [150, 65], 0, 1, 2);

brandcarda.add_easing(1, defaultEasing);
brandcardb.add_easing(1, defaultEasing);
brandcardc.add_easing(1, defaultEasing);
brandcardd.add_easing(1, defaultEasing);
brandclip.add_easing(1, defaultEasing);
brandpen.add_easing(1, defaultEasing);
brandtext.add_easing(1, defaultEasing);

// VIDEO
var videobg = new object("objectbg", meta);
videobg.add_state(50, 0, 180, 0, 1);
videobg.add_state(50, 0, 50, 0, 1);
videobg.add_size_transform([0, 1], 100, 0, 100, 0);
videobg.auto_reset = false;
videobg.add_easing(1, defaultEasing);
videobg.set_z_index(3);

var videoclipa = new object("videoclipa", meta);
videoclipa.add_state(-50, 0, 55, 165, 1);
videoclipa.add_state(30, 0, 55, 165, 1);
videoclipa.add_size_transform([0, 1], 32.5, 0, 31.1, 0);
videoclipa.set_z_index(4);
// mobile
videoclipa.add_size_transform([0, 1], 49.7, 0, 20, 0, 0);
videoclipa.change_position(0, -50, 0, 32, 0, 1, 0);
videoclipa.change_position(1, 42, 0, 32, 0, 1, 0);

var videoclipb = new object("videoclipb", meta);
videoclipb.add_state(-50, 0, 55, 55, 1);
videoclipb.add_state(30, 0, 55, 55, 1);
videoclipb.add_size_transform([0, 1], 32.5, 0, 31.1, 0);
videoclipb.set_z_index(4);
// mobile
videoclipb.add_size_transform([0, 1], 49.7, 0, 20, 0, 0);
videoclipb.change_position(0, -50, 0, 25.6, 0, 1, 0);
videoclipb.change_position(1, 48.3, 0, 25.6, 0, 1, 0);

var videoclipc = new object("videoclipc", meta);
videoclipc.add_state(-50, 0, 55, -55, 1);
videoclipc.add_state(30, 0, 55, -55, 1);
videoclipc.add_size_transform([0, 1], 32.5, 0, 31.1, 0);
videoclipc.set_z_index(4);
// mobile
videoclipc.add_size_transform([0, 1], 49.7, 0, 20, 0, 0);
videoclipc.change_position(0, -50, 0, 19.3, 0, 1, 0);
videoclipc.change_position(1, 54.6, 0, 19.3, 0, 1, 0);

var videoclipd = new object("videoclipd", meta);
videoclipd.add_state(-50, 0, 55, -165, 1);
videoclipd.add_state(30, 0, 55, -165, 1);
videoclipd.add_size_transform([0, 1], 32.5, 0, 31.1, 0);
videoclipd.set_z_index(4);
// mobile
videoclipd.add_size_transform([0, 1], 49.7, 0, 20, 0, 0);
videoclipd.change_position(0, -50, 0, 13, 0, 1, 0);
videoclipd.change_position(1, 61, 0, 13, 0, 1, 0);

var videotext = new object("videotext", meta);
videotext.add_state(70, 0, 65, 0, 0);
videotext.add_state(70, 0, 55, 0, 1);
videotext.add_size_transform([0, 1], 25, 0, 54, 0);
videotext.set_z_index(4);
// mobile
videotext.change_position([0, 1], 50, 0, [82, 70], 0, [0, 1], 0);
videotext.add_size_transform([0, 1], 80, 0, 50, 0, 0);
// tablet
videotext.add_size_transform([0, 1], 32.5, 0, 60, 0, 1);
// mobileh
videotext.add_size_transform([0, 1], 32.5, 0, 68, 0, 2);

videoclipa.add_easing(1, defaultEasing);
videoclipb.add_easing(1, defaultEasing);
videoclipc.add_easing(1, defaultEasing);
videoclipd.add_easing(1, defaultEasing);
videotext.add_easing(1, defaultEasing);

// SUPPORT
var supportbg = new object("supportbg", meta);
supportbg.add_state(50, 0, 50, 0, 0);
supportbg.add_state(50, 0, 50, 0, 1);
supportbg.add_size_transform([0, 1], 100, 0, 100, 0);
supportbg.auto_reset = false;
supportbg.set_z_index(5);

var supportwbg = new object("supportwbg", meta);
supportwbg.add_state(50, 0, 150, 0, 1);
supportwbg.add_state(50, 0, 39, 0, 1);
supportwbg.add_state(50, 0, -50, 0, 1);
supportwbg.add_size_transform([0, 1, 2], 100, 0, 78, 0);
supportwbg.default_exit_location = 2;
supportwbg.set_z_index(6);
// mobile
supportwbg.add_size_transform([0, 1, 2], 100, 0, 100, 0, 0);
supportwbg.change_position(1, 50, 0, 50, 0, 1, 0);
// tablet
supportwbg.add_size_transform([0, 1, 2], 100, 0, 85, 0, 1);
supportwbg.change_position(1, 50, 0, 42.5, 0, 1, 1);
// mobileh
supportwbg.add_size_transform([0, 1, 2], 100, 0, 85, 0, 2);
supportwbg.change_position(1, 50, 0, 42.5, 0, 1, 2);

var supporttitle = new object("supporttitle", meta);
supporttitle.add_state(50, 0, -50, 0, 0);
supporttitle.add_state(50, 0, 15, 0, 1);
supporttitle.add_size_transform([0, 1], 50, 0, 8, 0);
supporttitle.set_z_index(6);
// mobile
supporttitle.add_size_transform([0, 1], 100, 0, 17, 0, 0);

var supporttext_width = 45;
var supporttext_line_1_top = 33;
var supporttext_line_2_top = 75;
var supporttext_row_1_left = 25;
var supporttext_row_2_left = 75;

var supporttexta = new object("supporttexta", meta);
supporttexta.add_state(23, 0, 150, 0, 0);
supporttexta.add_state(23, 0, 50, 0, 1);
supporttexta.add_state(23, 0, -50, 0, 1);
supporttexta.add_size_transform([0, 1, 2], 20, 0, 55, 0);
supporttexta.default_exit_location = 2;
supporttexta.set_z_index(6);
// mobile
supporttexta.add_size_transform([0, 1, 2], supporttext_width, 0, 33, 0, 0);
supporttexta.change_position(0, supporttext_row_1_left, 0, 150, 0, 0, 0);
supporttexta.change_position(1, supporttext_row_1_left, 0, supporttext_line_1_top, 0, 1, 0);
supporttexta.change_position(2, supporttext_row_1_left, 0, -50, 0, 1, 0);


var supporttextb = new object("supporttextb", meta);
supporttextb.add_state(41, 0, 150, 0, 0);
supporttextb.add_state(41, 0, 50, 0, 1);
supporttextb.add_state(41, 0, -50, 0, 1);
supporttextb.add_size_transform([0, 1, 2], 20, 0, 55, 0);
supporttextb.default_exit_location = 2;
supporttextb.set_z_index(6);
// mobile
supporttextb.add_size_transform([0, 1, 2], supporttext_width, 0, 33, 0, 0);
supporttextb.change_position(0, supporttext_row_2_left, 0, 150, 0, 0, 0);
supporttextb.change_position(1, supporttext_row_2_left, 0, supporttext_line_1_top, 0, 1, 0);
supporttextb.change_position(2, supporttext_row_2_left, 0, -50, 0, 1, 0);

var supporttextc = new object("supporttextc", meta);
supporttextc.add_state(59, 0, 150, 0, 0);
supporttextc.add_state(59, 0, 50, 0, 1);
supporttextc.add_state(59, 0, -50, 0, 1);
supporttextc.add_size_transform([0, 1, 2], 20, 0, 55, 0);
supporttextc.default_exit_location = 2;
supporttextc.set_z_index(6);
// mobile
supporttextc.add_size_transform([0, 1, 2], supporttext_width, 0, 40, 0, 0);
supporttextc.change_position(0, supporttext_row_1_left, 0, 150, 0, 0, 0);
supporttextc.change_position(1, supporttext_row_1_left, 0, supporttext_line_2_top, 0, 1, 0);
supporttextc.change_position(2, supporttext_row_1_left, 0, -50, 0, 1, 0);

var supporttextd = new object("supporttextd", meta);
supporttextd.add_state(77, 0, 150, 0, 0);
supporttextd.add_state(77, 0, 50, 0, 1);
supporttextd.add_state(77, 0, -50, 0, 1);
supporttextd.add_size_transform([0, 1, 2], 20, 0, 55, 0);
supporttextd.default_exit_location = 2;
supporttextd.set_z_index(6);
// mobile
supporttextd.add_size_transform([0, 1, 2], supporttext_width, 0, 40, 0, 0);
supporttextd.change_position(0, supporttext_row_2_left, 0, 150, 0, 0, 0);
supporttextd.change_position(1, supporttext_row_2_left, 0, supporttext_line_2_top, 0, 1, 0);
supporttextd.change_position(2, supporttext_row_2_left, 0, -50, 0, 1, 0);

supportbg.add_easing(1, defaultEasing);
supportwbg.add_easing(1, defaultEasing);
supporttexta.add_easing(1, defaultEasing);
supporttextb.add_easing(1, defaultEasing);
supporttextc.add_easing(1, defaultEasing);
supporttextd.add_easing(1, defaultEasing);

// CONTACT
var contactlogo = new object("contactlogo", meta);
contactlogo.add_state(50, 0, 150, 0, 1);
contactlogo.add_state(50, 0, 25, 0, 1);
contactlogo.add_size_transform([0, 1], 100, 0, 23, 0);
contactlogo.set_z_index(7);
// mobile
contactlogo.change_position(1, 50, 0, 20, 0, 1, 0);
// tablet
contactlogo.change_position(1, 50, 0, 20, 0, 1, 0);
// mobileh
contactlogo.change_position(1, 50, 0, 26, 0, 1, 2);

var contactform = new object("contactform", meta);
contactform.add_state(50, 0, 150, 0, 1);
contactform.add_state(50, 0, 50, 90, 1);
contactform.add_size_transform([0, 1], 0, 380, 0, 366);
contactform.set_z_index(7);

// mobileh
contactform.add_size_transform([0, 1], 100, 0, 55, 0, 2);

contactlogo.add_easing(1, defaultEasing);
contactform.add_easing(1, defaultEasing);


// create pages
var home = new page('Home', manager);
manager.add(home, true);
home.add(websitewbg, 0, 0, 1000);
home.add(homebgb, 0, 0, 0);
home.add(homebg, 1, 0, 0);
home.add(homelogoa, 1, 0, 0);
home.add(homelogolighta, 1, 1000, 1000);
home.add(homelogolightb, 1, 1000, 1500);
home.add(homesakuraa, 1, 2100, 5000);
home.add(homesakurab, 1, 1800, 5600);
home.add(homesakurac, 1, 1500, 6200);
home.add(homekatana, 1, 0, 0);

home.add(homebgb, 1, 4100, 2000);
home.add(homelogob, 1, 5500, 1000);
home.add(hometext, 1, 5500, 2000);
home.add(homesakurad, 1, 5500, 2000);
home.add(homesakurae, 1, 5500, 2000);
home.add(homesakuraf, 1, 5500, 2000);
home.default_duration = 2000;

var websitea = new page("Website 1", manager);
manager.add(websitea, true);
websitea.add(homesakurad, 0, 3000, 500);
websitea.add(homesakurae, 0, 3000, 500);
websitea.add(homesakuraf, 0, 3000, 500);
websitea.add(hometext, 0, 3000, 500);
websitea.add(homebgb, 1, 0, 1500);
websitea.add(homebgb, 0, 3000, 0);
websitea.add(websitebg, 1, 2000, 1000);
websitea.add(websitewbg, 1, 0, 3000);

var websiteslider_interval = 1000;
var websiteslider_intro = 1000;
var websiteslider_duration = 3000;

var websitesliderpage1 = new page("Slider #1", manager);
manager.add(websitesliderpage1, false);
websitesliderpage1.add(websitebg, 1, 0, 0);
websitesliderpage1.add(websitewbg, 1, 0, 0);
websitesliderpage1.add(websiteslider1, 1, websiteslider_interval, websiteslider_intro);
websitesliderpage1.add(websiteslider1, 1, websiteslider_intro + websiteslider_interval + websiteslider_duration, 0);
websitesliderpage1.add(websitesliderindicator, 1, 0, 0);

var websitesliderpage2 = new page("Slider #2", manager);
manager.add(websitesliderpage2, false);
websitesliderpage2.add(websitebg, 1, 0, 0);
websitesliderpage2.add(websitewbg, 1, 0, 0);
websitesliderpage2.add(websiteslider2, 1, websiteslider_interval, websiteslider_intro);
websitesliderpage2.add(websiteslider2, 1, websiteslider_intro + websiteslider_interval + websiteslider_duration, 0);
websitesliderpage2.add(websitesliderindicator, 1, 0, 0);

var websitesliderpage3 = new page("Slider #3", manager);
manager.add(websitesliderpage3, false);
websitesliderpage3.add(websitebg, 1, 0, 0);
websitesliderpage3.add(websitewbg, 1, 0, 0);
websitesliderpage3.add(websiteslider3, 1, websiteslider_interval, websiteslider_intro);
websitesliderpage3.add(websiteslider3, 1, websiteslider_intro + websiteslider_interval + websiteslider_duration, 0);
websitesliderpage3.add(websitesliderindicator, 1, 0, 0);

var websitesliderpage4 = new page("Slider #4", manager);
manager.add(websitesliderpage4, false);
websitesliderpage4.add(websitebg, 1, 0, 0);
websitesliderpage4.add(websitewbg, 1, 0, 0);
websitesliderpage4.add(websiteslider4, 1, websiteslider_interval, websiteslider_intro);
websitesliderpage4.add(websiteslider4, 1, websiteslider_intro + websiteslider_interval + websiteslider_duration, 0);
websitesliderpage4.add(websitesliderindicator, 1, 0, 0);

// create slider
var websiteslider = new slider(manager);
websiteslider.add(websitesliderpage1);
websiteslider.add(websitesliderpage2);
websiteslider.add(websitesliderpage3);
websiteslider.add(websitesliderpage4);
websiteslider.callback = function (id) {
	$(".indicator").css("background-color", "#cccccc");
	$("#slider_" + id).css("background-color", "#666666");
};
websiteslider.set_intro(websitea);


var websiteb = new page("Website 2", manager);
websiteb.default_duration = 2000;
manager.add(websiteb, true);
websiteb.add(websitewbg, 2, 0, 1000);
websiteb.add(websitebg, 1, 1000, 2000);
websiteb.add(websitetext, 1, 1500, 2000);
websiteb.add(websiteleafa, 1, 1000, 2000);
websiteb.add(websiteleafb, 1, 1500, 2000);
websiteb.add(websiteleafc, 1, 1500, 2000);
websiteb.add(websiteleafd, 1, 1000, 2000);
websiteb.add(websitedevices, 1, 1500, 2000);

var interactive = new page("Interactive", manager);
manager.add(interactive, true);
interactive.add(websitebg, 2, 0, 2000);
interactive.add(websitebg, 0, 2000, 500);
interactive.add(interbg, 1, 0, 2000);
interactive.add(interinfoa, 1, 2000, 1000);
interactive.add(interinfob, 1, 2500, 1000);
interactive.add(interinfoc, 1, 3000, 1000);
interactive.add(intertext, 1, 3500, 1000);

var brand = new page("Brand", manager);
manager.add(brand, true);
brand.add(brandcarda, 1, 2500, 1000);
brand.add(brandcardb, 1, 2500, 1000);
brand.add(brandcardc, 1, 2500, 1000);
brand.add(brandcardd, 1, 1000, 2500);
brand.add(brandclip, 1, 2500, 1000);
brand.add(brandpen, 1, 1000, 2500);
brand.add(brandclip, 1, 2500, 1000);
brand.add(brandtext, 1, 2500, 1000);

var video = new page("Video", manager);
manager.add(video, true);
video.add(videobg, 1, 0, 2000);
video.add(videoclipa, 1, 2000, 1000);
video.add(videoclipb, 1, 2500, 1000);
video.add(videoclipc, 1, 3000, 1000);
video.add(videoclipd, 1, 3500, 1000);
video.add(videotext, 1, 5000, 500);

var support = new page("Support", manager);
manager.add(support, true);
support.add(videobg, 1, 0, 1000);
support.add(supportbg, 1, 2000, 2000);
support.add(supportwbg, 1, 0, 2000);
support.add(supporttitle, 1, 2000, 1000);
support.add(supporttexta, 1, 3000, 1000);
support.add(supporttextb, 1, 4000, 1000);
support.add(supporttextc, 1, 5000, 1000);
support.add(supporttextd, 1, 6000, 1000);

var contact = new page("Contact", manager);
manager.add(contact, true);
contact.add(supportbg, 1, 1000, 1000);
contact.add(contactlogo, 1, 2000, 1000);
contact.add(contactform, 1, 3000, 1000);

// create inspector
var inspector = new inspector(manager);

// mod list
/*
Ratio < 1 -> Horizontal
Ratio > 1 -> Vertical
PC	Normal
0	Mobile (minLength <= 640, Ratio <= 1)
1	Tablet (minLength <= 1024, Ratio <= 1)
2	Mobile Horizontal (Normal Copy)
3	Tablet Vertical (Mobile Copy)
*/
var mod_select = function () {
	var to_mod = undefined;
	var min_length = Math.min(meta.width, meta.height);
	var ratio = meta.width / meta.height;
	// mobile
	if (min_length <= 640){
		if (ratio <= 1){
			to_mod = 0;
		} else {
			to_mod = 2;
		}
	// tablet
	} else if (min_length <= 768) {
		if (ratio >= 1) {
			to_mod = 1;
		} else {
			to_mod = 3;
		}
	}
	console.log (min_length, ratio, to_mod);
	if (manager.mod != to_mod) {
		manager.mod(to_mod);
	}
}

// create listener
$(window).resize(function(){
	window.scrollTo(0, 0);
	meta.update();
	mod_select();
	manager.refresh();
});

// set mouse wheel
$(window).mousewheel(function(event){
	if (event.deltaY > 0){
		manager.prev();
	} else if (event.deltaY < 0){
		manager.next();
	}
});

// set swipe
$(window).swipe({
	swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
		if(direction == "up"){
			manager.next();
		} else if (direction == "down") {
			manager.prev();
		}
	}, 
	threshold: 0
});


$(window).load(function(){
	//inspector.enable("body");
	// home
	homebg.init_with_selector("#homebg");
	homelogoa.init_with_selector("#homelogoa");
	homelogolighta.init_with_selector("#homelogolighta");
	homelogolightb.init_with_selector("#homelogolightb");
	homesakuraa.init_with_selector("#homesakuraa");
	homesakurab.init_with_selector("#homesakurab");
	homesakurac.init_with_selector("#homesakurac");
	homekatana.init_with_selector("#homekatana");
	homebgb.init_with_selector("#homebgb");
	homelogob.init_with_selector("#homelogob");
	hometext.init_with_selector("#hometext");
	homesakurad.init_with_selector("#homesakurad");
	homesakurae.init_with_selector("#homesakurae");
	homesakuraf.init_with_selector("#homesakuraf");

	// website
	websitebg.init_with_selector("#websitebg");
	websitewbg.init_with_selector("#websitewbg");
	websiteslider1.init_with_selector("#websiteslider1");
	websiteslider2.init_with_selector("#websiteslider2");
	websiteslider3.init_with_selector("#websiteslider3");
	websiteslider4.init_with_selector("#websiteslider4");
	websitesliderindicator.init_with_selector("#websitesliderindicator");

	websitetext.init_with_selector("#websitetext");
	websiteleafa.init_with_selector("#websiteleafa");
	websiteleafb.init_with_selector("#websiteleafb");
	websiteleafc.init_with_selector("#websiteleafc");
	websiteleafd.init_with_selector("#websiteleafd");
	websitedevices.init_with_selector("#websitedevices");

	// interective
	interbg.init_with_selector("#interbg");
	interinfoa.init_with_selector("#interinfoa");
	interinfob.init_with_selector("#interinfob");
	interinfoc.init_with_selector("#interinfoc");
	intertext.init_with_selector("#intertext");

	//brand
	brandcarda.init_with_selector("#brandcarda");
	brandcardb.init_with_selector("#brandcardb");
	brandcardc.init_with_selector("#brandcardc");
	brandcardd.init_with_selector("#brandcardd");
	brandclip.init_with_selector("#brandclip");
	brandpen.init_with_selector("#brandpen");
	brandtext.init_with_selector("#brandtext");

	//video
	videobg.init_with_selector("#videobg");
	videoclipa.init_with_selector("#videoclipa");
	videoclipb.init_with_selector("#videoclipb");
	videoclipc.init_with_selector("#videoclipc");
	videoclipd.init_with_selector("#videoclipd");
	videotext.init_with_selector("#videotext");

	// support
	supportbg.init_with_selector("#supportbg");
	supportwbg.init_with_selector("#supportwbg");
	supporttitle.init_with_selector("#supporttitle");
	supporttexta.init_with_selector("#supporttexta");
	supporttextb.init_with_selector("#supporttextb");
	supporttextc.init_with_selector("#supporttextc");
	supporttextd.init_with_selector("#supporttextd");

	//contact
	contactlogo.init_with_selector("#contactlogo");
	contactform.init_with_selector("#contactform");
	
	websiteslider.init();

	manager.goto_page(0);
	
	mod_select();
	
});

// debug
var buf_num = 0;
$(window).keydown(function(event){
	if (event.keyCode >= 48 && event.keyCode <= 57){
		buf_num = buf_num * 10 + (event.keyCode - 48);
	}
	if (event.keyCode == 13){
		if (buf_num <= manager.pages.length){
			console.log("go to ", buf_num)
			manager.goto_page(buf_num - 1);
		}
		buf_num = 0;
	}
});