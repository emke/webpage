<?php
/**
 * Class WPML_RegisterHook_Uninstall
 *
 * @package  WPML
 * @category WordPress Plugins
 * @version  2.1.7
 * @author   Ironikus
 * @link     https://ironikus.com/
 * @link     https://wordpress.org/plugins/wp-mailto-links/
 * @license  Dual licensed under the MIT and GPLv2+ licenses
 */
final class WPML_RegisterHook_Uninstall extends WPRun_BaseAbstract_0x5x0
{

    /**
     * Initialize
     * @param string $pluginFile
     */
    protected function init($pluginFile)
    {
        register_uninstall_hook($pluginFile, $this->getCallback('uninstall'));
    }

    /**
     * Plugin uninstall prodecure
     */
    protected function uninstall()
    {
        $option = $this->getArgument(1);

        // remove option values
        $option->delete();
    }

}

/*?>*/
