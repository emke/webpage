<?php
/**
 * Class WPML_TemplateTag_Filter
 *
 * @package  WPML
 * @category WordPress Plugins
 * @version  2.1.7
 * @author   Ironikus
 * @link     https://ironikus.com/
 * @link     https://wordpress.org/plugins/wp-mailto-links/
 * @license  Dual licensed under the MIT and GPLv2+ licenses
 */
final class WPML_TemplateTag_Filter extends WPRun_BaseAbstract_0x5x0
{

    /**
     * Create template tag "wpml_filter()"
     */
    protected function init()
    {
        $this->createTemplateTag('wpml_filter', $this->getCallback('filter'));
    }

    /**
     * @param string $content
     * @return string
     */
    protected function filter($content)
    {
        $option = $this->getArgument(0);
        $emailEncoder = $this->getArgument(1);
        return $emailEncoder->contentFilter($content, $option->getValue('convert_emails'));
    }

}

/*?>*/
