<?php
$tx = $_POST['event'];
echo "transaction hash: {$tx['transactionHash']}";
echo "amount: {$tx['value']}";
echo "from: {$tx['from']}";
echo "to: {$tx['to']}";
