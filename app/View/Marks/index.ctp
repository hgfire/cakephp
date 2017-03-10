<h2 class="sub-header">Marks List</h2>
<div class="table-responsive">
    <table class="table table-striped">
        <thead>
        <tr class="thead">
            <th>Matricule</th>
            <th>Lesson</th>
            <th>Score</th>
        </tr>
        </thead>
        <tbody>
        <?php foreach ($Marks as $Mark): ?>
        <tr>
            <td><?php echo h($Mark['Mark']['matricule']); ?>&nbsp;</td>
            <td><?php echo h($Mark['Mark']['lesson']); ?>&nbsp;</td>
            <td><?php echo h($Mark['Mark']['mark']); ?>&nbsp;</td>

        </tr>
        <?php endforeach; ?>
        </tbody>
    </table>


</div>