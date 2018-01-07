<?php
include('db.php');

if (isset($_GET["page"])) { $page  = $_GET["page"]; } else { $page=1; };
$start_from = ($page-1) * $limit;

$sql = "SELECT * FROM customers ORDER BY VehicleID ASC LIMIT $start_from, $limit";
$rs_result = mysqli_query($conn, $sql);
?>

<?php
while ($row = mysqli_fetch_assoc($rs_result)) {
?>
            <tr>
            <td><?php echo $row["VehicleID"]; ?></td>
            <td><?php echo $row["InhouseSellerID"]; ?></td>
            <td><?php echo $row["BuyerID"]; ?></td>
            <td><?php echo $row["ModelID"]; ?></td>
            <td><?php echo $row["SaleDate"]; ?></td>
			    <td><?php echo $row["BuyDate"]; ?></td>
            </tr>
<?php
};
?>
