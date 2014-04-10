//L BLOK

function LPiece()
{
	this.state1 = [ [1, 0],
			[1, 0],
			[1, 1] ];
					
	this.state2 = [ [0, 0, 1],
			[1, 1, 1] ];
					
	this.state3 = [ [1, 1],
			[0, 1],
			[0, 1] ];
	
	this.state4 = [ [1, 1, 1],
			[1, 0, 0] ];
					
	this.states = [ this.state1, this.state2, this.state3, this.state4 ];
	this.curState = 0;
	
	this.color = 0;
	this.gridx = 4;
	this.gridy = -3;
}


//L BLOK OMGEDRAAID
function ReverseLPiece()
{
	this.state1 = [ [0, 1],
			[0, 1],
			[1, 1] ];
					
	this.state2 = [ [1, 1, 1],
			[0, 0, 1] ];
					
	this.state3 = [ [1, 1],
			[1, 0],
			[1, 0] ];
	
	this.state4 = [ [1, 0, 0],
			[1, 1, 1] ];
					
	this.states = [ this.state1, this.state2, this.state3, this.state4 ];
	this.curState = 0;
	
	this.color = 0;
	this.gridx = 4;
	this.gridy = -3;
}

//VIERKANT
function BlockPiece()
{
	this.state1 = [ [1, 1],
			[1, 1] ];
					
	this.states = [ this.state1 ];
	this.curState = 0;
	
	this.color = 0;
	this.gridx = 4;
	this.gridy = -2;
}

//LIJN
function LinePiece()
{
	this.state1 = [ [1],
			[1],
			[1],
			[1] ];
					
	this.state2 = [ [1,1,1,1] ];
					
	this.states = [ this.state1, this.state2 ];
	this.curState = 0;
	
	this.color = 0;
	this.gridx = 5;
	this.gridy = -4;
}

//T STUK
function TPiece()
{
	this.state1 = [ [1, 1, 1],
			[0, 1, 0] ];
					
	this.state2 = [ [1, 0],
			[1, 1],
			[1, 0] ];
	
	this.state3 = [ [0, 1, 0],
			[1, 1, 1] ];
					
	this.state4 = [ [0, 1],
			[1, 1],
			[0, 1] ];
					
	this.states = [ this.state1, this.state2, this.state3, this.state4 ];
	this.curState = 0;
	
	this.color = 0;
	this.gridx = 4;
	this.gridy = -2;
}

//Z STUK
function ZPiece()
{
	this.state1 = [ [1, 1, 0],
			[0, 1, 1] ];
					
	this.state2 = [ [0, 1],
			[1, 1],
			[1, 0] ];
					
	this.states = [ this.state1, this.state2 ];
	this.curState = 0;
	
	this.color = 0;
	this.gridx = 4;
	this.gridy = -2;
}

//Z STUK OMGEDRAAID
function ReverseZPiece()
{
	this.state1 = [ [0, 1, 1],
			[1, 1, 0] ];
					
	this.state2 = [ [1, 0],
			[1, 1],
			[0, 1] ];
					
	this.states = [ this.state1, this.state2 ];
	this.curState = 0;
	
	this.color = 0;
	this.gridx = 4;
	this.gridy = -2;
}

//het ophalen van een nieuw blok
function getRandomPiece()
{
	//declareer piece, en kies een random getal 
	var result = Math.floor( Math.random() * 7 );
	var piece;
	
	//switch op result
	switch(result)
	{
		case 0: piece = new LPiece();			break;
		case 1: piece = new BlockPiece();		break;
		case 2: piece = new ZPiece();			break;
		case 3: piece = new TPiece();			break;
		case 4: piece = new ReverseLPiece();		break;
		case 5: piece = new ReverseZPiece();		break;
		case 6: piece = new LinePiece();		break;
	}	
	
	//kies random kleur uit voor het blok, return blok
	piece.color = Math.floor(Math.random() * 8);
	return piece;
}