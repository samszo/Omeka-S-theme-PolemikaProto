<?php
namespace OmekaTheme\Helper;

use Laminas\View\Helper\AbstractHelper;

/**
 * View helper for rendering uris for JavaScript.
 */
class JsUris extends AbstractHelper
{
    /**
     * Render uri for JavaScript.
     * @param array   $props    les propriétés utiles

     */
    public function __invoke($props)
    {
        $view = $this->getView();
        $user = $view->identity();
        $jsUser = $user ? json_encode(['name'=>$user->getName(),'email'=>$user->getEmail(),'id'=>$user->getId(),'role'=>$user->getRole()]) : 'false';
        $urlAjax = $props['site']->siteUrl()."/page/ajax?json=1";
        $urlRoot = $props['site']->siteUrl();
        $urlApi = $view->url('api', [], true);
        $view->headScript()->appendScript('const urlAjax = "'.$urlAjax.'";
            const urlRoot = "'.$urlRoot.'";
            const urlApi = "'.$urlApi.'";
            
            const user = '.$jsUser.';
        ');
    }
}
