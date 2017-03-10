 <div class="panel-heading">
      <h3 class="panel-title text-center">Add new student</h3>
 </div>


    <?php
     echo $this->Form->create('Student', array(
        'inputDefaults' => array(
            'div' => 'row form-group',
            'label' => array(
                'class' => 'col-sm-3 control-label'
            ),
            'wrapInput' => 'col-sm-6',
            'class' => 'form-control'
        ),
        'labelDefaults' => array(
                    'div' => 'col-sm-2'
        ),
        'type'=>'file',
        'class' => 'well form-horizontal'
    )); ?>

    <?php echo $this->Form->input('code', array(
    	'placeholder' => 'Please enter matricule',
    	'label' => array(
    		'text' => 'Matricule :',
    	),
    	'beforeInput' => ''
    )); ?>
    <?php echo $this->Form->input('lastname', array(
    	'placeholder' => 'Please enter lastname',
    	'label' => array(
    		'text' => 'Lastname :',
    	),
    	'beforeInput' => ''
    )); ?>
    <?php echo $this->Form->input('firstname', array(
    	'placeholder' => 'Please enter firstnames',
    	'label' => array(
    		'text' => 'Firstnames :',
    	),
    	'beforeInput' => ''
    )); ?>
    <div class="row form-group">
        <label for="dtp_input1" class="col-sm-3 control-label">Birthdate :</label>
        <div class="input-group date form_datetime1 col-sm-6"  data-date-format="dd MM yyyy - HH:ii p" data-link-field="dtp_input1">
            <input class="form-control" size="16" id="birthdate" type="text" value="" readonly >
            <span class="input-group-addon"><span class="glyphicon glyphicon-remove"></span></span>
          	<span class="input-group-addon"><span class="glyphicon glyphicon-calendar"></span></span>
        </div>
        <input type="text" id="mirror_field2" value="" hidden name="data[Student][birthdate]"/>
      </div>
	<div class="form-group">
	        <div class="col-sm-4"></div>
    		<div class="col col-sm-1">
    			<?php echo $this->Form->submit('Submit', array(
    				'div' => false,
    				'class' => 'btn btn-success'
    			)); ?>
    		</div>
    		<div class="col-sm-2"></div>
    		<div class="col-sm-1">
    		 <?php echo $this->Html->Link(__('<span class="glyphicon glyphicon-erase"></span>&nbsp Cancel'),
                                                array('action'=>'logout','controller'=>'Students'),
                                                array('class'=>'btn btn-danger','escape'=>false)
                                                ,
                                                __('Do you want to cancel data? '));
              ?>
            </div>

    </div>

<?php echo $this->Form->end();?>



