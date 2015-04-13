/**
 * Implements hook_field_formatter_view().
 * @param {String} entity_type
 * @param {Object} entity
 * @param {Object} field
 * @param {Object} instance
 * @param {String} langcode
 * @param {Object} items
 * @param {*} display
 *
 *
 */
function file_field_formatter_view(entity_type, entity, field, instance,
                                   langcode, items, display) {
    console.log('*** field formatter view called');

    try {
        console.log('formatter view items', items);
        console.log(display);
        var element = {};
        if (!empty(items)) {
            $.each(items, function (delta, item) {
                // @TODO - add support other styling

                element[delta] = {
                    theme: 'button_link',
                    text: item.filename,
                    path: drupalgap_image_path(item.uri),
                    options: {InAppBrowser: true}
                    /*image_style:display.settings.image_style*/
                };
            });
        }
        return element;
    }
        catch (error) { console.log('file_field_formatter_view - ' + error);
    }
}

/**
 * Implements hook_field_widget_form().
 * @param {Object} form
 * @param {Object} form_state
 * @param {Object} field
 * @param {Object} instance
 * @param {String} langcode
 * @param {Object} items
 * @param {Number} delta
 * @param {Object} element
 */
function file_field_widget_form(form, form_state, field, instance, langcode,
                                items, delta, element) {

    try {

                items[delta].children.push(
                    {markup: 'File uploads not supported on mobile devices'});
            }
    catch (error) {
        console.log('file_field_widget_form - ' + error);
    }
}
