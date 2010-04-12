#! /usr/bin/perl

use Locale::gettext;
use POSIX;     # Needed for setlocale()

setlocale(LC_MESSAGES, "en_US");

bindtextdomain("opensuse-org-theme", $ENV{'PWD'} . "/locale-dir");
textdomain("opensuse-org-theme");

while ( <STDIN> ) {
  chop $_;

  if ( /^([^_]*)_\("(.*)"\)(.*)/ ) {
     print "$1\"" . gettext($2) . "\"$3\n";
  } else {
     print $_ . "\n";
  }
}

