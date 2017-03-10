<h2 class="sub-header">Students List</h2>
<div class="table-responsive">
    <table class="table table-striped">
        <thead>
        <tr class="thead">
            <th>Matricule</th>
            <th>Name</th>
            <th>Firstnames</th>
            <th>BirthDate</th>
            <th>Actions</th>
        </tr>
        </thead>
        <tbody>
        <?php foreach ($Students as $Student): ?>
        <tr>
            <td><?php echo h($Student['Student']['matricule']); ?>&nbsp;</td>
            <td><?php echo h($Student['Student']['lastname']); ?>&nbsp;</td>
            <td><?php echo h($Student['Student']['firstname']); ?>&nbsp;</td>
            <td><?php echo h($Student['Student']['birthdate']); ?>&nbsp;</td>
            <td class="actions">

                <?php echo $this->Html->link(__('<span class="glyphicon glyphicon-edit"></span>'),
                           array('action' => 'edit',  $Student['Student']['matricule']),
                           array('class'=>'btn small primary-bg tooltip-button','title'=>'Edit','escape'=>false,'data-placement'=>'top'));
                ?>
                <?php echo $this->Form->postLink(__('<span class="glyphicon glyphicon-trash"></span>'),
                           array('action' => 'delete', $Student['Student']['matricule']),
                           array('class'=>'btn small bg-red tooltip-button','title'=>'Delete','escape'=>false),
                                         __('Do you want to delete this student? '));
                ?>
            </td>
        </tr>
        <?php endforeach; ?>
        </tbody>
    </table>


</div>