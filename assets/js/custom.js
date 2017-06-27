$(document).ready(function() {
	/*
	 * Attribute
	 */
	$('[data-name="attribute_list_item"]').on( "click", function() {
		var $this = $(this);
		$this.prev('label').prev('[data-name="detail_list_item"]').attr('checked',true);
		var $elementCheckbox=$this
							.parents('ul[data-name="element_list"] > li[data-name="element_list_li"]')
							.children('input[data-name="element_list_item"]');
		$elementCheckbox.attr('checked',true);
	});
	$('[data-name="attribute_list_item"]').on( "blur", function() {
		var $this = $(this);
		console.log($this.data('detail_model_id'));
	});
	/*
	 * Element
	 */
	$('#element_list input.element[type=checkbox]').change(function() {
		var $this = $(this);
		var $elementDetailList=$('[data-element_id="'+$this.data('element_id')+'"]').next().next();
		if($this.is(':checked')){
			$elementDetailList.show('slow');
		}
		else{
			$elementDetailList
				.children().children('input')
				.each(function(){
					console.log(this.tagName)
					$(this).attr('checked',false)
				});
			$elementDetailList.hide('slow');		
		}		
	});
	/*
	 * Detail
	 */
	$('[data-name="detail_list"] input.detail[type=checkbox]').change(function() {
		var $this = $(this);
		var $detailCheckbox=$('[data-detail_id="'+$this.data('detail_id')+'"]');
		var $elementCheckbox=$detailCheckbox
							.parents('ul[data-name="element_list"] > li[data-name="element_list_li"]')
							.children('input[data-name="element_list_item"]');
		if($this.is(':checked')){
			$elementCheckbox.attr('checked', true);
			$this.next('label').next('[data-name="attribute_list_item"]').show('fast');
		}
		else{
			$this.next('label').next('[data-name="attribute_list_item"]').hide('slow');
		}
		console.log($detailCheckbox.parents('ul[data-name="element_list"]'));
		
		console.log($detailCheckbox.parents('ul[data-name="element_list"] > li[data-name="element_list_li"]').children('input[data-name="element_list_item"]').data('element_id'));
		console.log($detailCheckbox.parents('ul[data-name="element_list"] > li[data-name="element_list_li"]').children('input').data('element_id')
		);
						/*
						.map(function() {
							//return this.data('name');
							return this.tagName;
						})
						.get()
						.join( ", " ));
						*/
		
	});

});
