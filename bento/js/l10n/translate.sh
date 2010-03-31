svn up $MY_LCN_CHECKOUT
xgettext -C -k_ ../global-navigation-data.js.in -o $MY_LCN_CHECKOUT/50-pot/opensuse-org-theme.pot
langs=`cd $MY_LCN_CHECKOUT && ls -1d */po | sed -e 's,/po,,'`
mkdir -p locale-dir/en_US/LC_MESSAGES/
for lang in $langs; do 
  rm -f locale-dir/en_US/LC_MESSAGES/opensuse-org-theme.mo
  msgfmt $MY_LCN_CHECKOUT/$lang/po/opensuse-org-theme.$lang.po -o locale-dir/en_US/LC_MESSAGES/opensuse-org-theme.mo
  perl translate.pl < ../global-navigation-data.js.in > global-navigation-data-$lang.js
done
rm -r locale-dir
