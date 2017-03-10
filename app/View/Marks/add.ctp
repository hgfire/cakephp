 <div class="panel-heading">
      <h3 class="panel-title text-center">Add marks</h3>
 </div></br>
 <div class="col-sm-3"></div>
    <?php
     echo $this->Form->create('Mark', array(
        'inputDefaults' => array(
            'div' => 'row form-group',
            'label' => array(
                'class' => 'col-sm-3 control-label'
            ),
            'wrapInput' => 'col-sm-6',
            'class' => 'form-control'
        ),
        'labelDefaults' => array(
                    'div' => 'col-sm-3'
        ),
        'type'=>'file',
        'class' => ' form-horizontal'
    )); ?>
    <?php echo $this->Form->input('Student',$students,array(
         'label' => 'Student :',
         'empty'=>'Select a student',
          'class'=>'chosen-select'
    ));
    ?>
     <?php echo $this->Form->input('mark', array(
        	'placeholder' => 'Please enter the score',
        	'label' => array(
        		'text' => 'Score :',
        	),
        	'beforeInput' => '',
        	'min' => '0',
        	'max' => '20'

        )); ?>
	<?php echo $this->Form->input('lesson', array(
		'label' => array(
			'text' => 'Lesson'
		),
		'empty' => '...Select the lesson...',
		'options' => array(
			'Français' => 'Français',
			'Anglais' => 'Anglais',
			'Maths' => 'Maths',
			'Histoire-Geo' => 'Histoire-Geo',
			'ISN' => 'ISN'
		),
	)); ?>
	<div class="form-group">
	        <div class="col-sm-3"></div>
    		<div class="col col-sm-1">
    			<?php echo $this->Form->submit('Submit', array(
    				'div' => false,
    				'class' => 'btn btn-success'
    			)); ?>
    		</div>
    		<div class="col-sm-3"></div>
            <div class="col-sm-1">
                 <?php echo $this->Form->postLink(__('<span class="glyphicon glyphicon-erase"></span>&nbsp Cancel'),
                                                                array('action'=>'index','controller'=>'Marks'),
                                                                array('class'=>'btn btn-danger','escape'=>false)
                                                                ,
                                                                __('Would you like cancel this mark? '));
                              ?>
            </div>
    </div>

<?php echo $this->Form->end(); ?>



