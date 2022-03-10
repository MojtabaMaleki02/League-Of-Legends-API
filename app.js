var name = 'pooriya007';
var API_key = 'RGAPI-a8b7916e-acf9-49ed-bf0b-295ecf4c4ba6';
fetch('https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/'+ name +'?api_key='+API_key)
    .then(result => result.json())
    .then((output) => {
        //console.log('Output: ', output);
        
        //SUMMONER-V4
        const id =output.id;
        const accountId =output.accountId;
        const puuid =output.puuid;
        const profileIconId =output.profileIconId;
        const summonerLevel =output.summonerLevel;
       

        
        //<--Mastery level information of champions-->
        fetch('https://euw1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/'+id+'?api_key='+API_key)

        .then(result => result.json())
        .then((output) => {
            
            //Mastery

            const res = output;
            for(var i=0;i<res.length;i++){
                const status = res[i]; 

                //Mastery champ info
                const championId =status.championId;
                const championLevel =status.championLevel;
                const championPoints =status.championPoints;
                const lastPlayTime =status.lastPlayTime;
                const championPointsSinceLastLevel =status.championPointsSinceLastLevel;
                const championPointsUntilNextLevel =status.championPointsUntilNextLevel;
                const chestGranted =status.chestGranted;
                const tokensEarned =status.tokensEarned;

                //SummonerId
                const summonerId =status.summonerId;

                //result
                /*
                console.log('Output: ', championId+'\n'+
                championLevel+'\n'+championPoints+'\n'+
                lastPlayTime+'\n'+championPointsSinceLastLevel
                +'\n'+championPointsUntilNextLevel+
                '\n'+chestGranted+'\n'+tokensEarned+'\n');
                */
                
            }
            
            
         }).catch(err => console.error(err));

        //<--end of the mastery level info-->

        //<--rank info-->
        fetch('https://euw1.api.riotgames.com/lol/league/v4/entries/by-summoner/'+id+'?api_key='+API_key)

        .then(result => result.json())
        .then((output) => {
            
            //Mastery

            const res = output;
            for(var i=0;i<res.length;i++){
                const status = res[i]; 

                //Mastery champ info
                const leagueId =status.leagueId;
                const queueType =status.queueType;
                const tier =status.tier;
                const rank =status.rank;
                const summonerId =status.summonerId;
                const summonerName =status.summonerName;
                const leaguePoints =status.leaguePoints;
                const wins =status.wins;
                const losses =status.losses;
                const veteran =status.veteran;
                const inactive =status.inactive;
                const freshBlood =status.freshBlood;
                const hotStreak =status.hotStreak;

                //result
                /*
                console.log('Output: ',leagueId+'\n'+queueType+'\n'+
                            tier+'\n'+rank+'\n'+summonerId+'\n'+
                            summonerName+'\n'+leaguePoints+'\n'+
                            wins+'\n'+losses+'\n'+veteran+'\n'+
                            inactive+'\n'+freshBlood+'\n'+hotStreak+'\n');
                */
                
            }
            
            
         }).catch(err => console.error(err));

        //<--end of the rank info-->

        //<--start of match history info-->

        fetch('https://europe.api.riotgames.com/lol/match/v5/matches/by-puuid/'+puuid+'/ids?start=0&count=10&api_key='+API_key)

        .then(result => result.json())
        .then((output) => {
            
            //Mastery

            const res = output;
            for(var i=0;i<res.length;i++){
                const status = res[i]; 

                //
                fetch('https://europe.api.riotgames.com/lol/match/v5/matches/'+status+'?api_key='+API_key)

                .then(result => result.json())
                .then((output) => {
        
                    const res = output;  
                    //participant
                    const ress=res.info;
                    const participants=ress.participants; 
                    const gameMode=ress.gameMode; 
                    const gameEndTimestamp=ress.gameEndTimestamp; 
                    const gameCreation=ress.gameCreation; 
                    const gameType=ress.gameType; 
                    const mapId=ress.mapId; 

                    for(var j=0;j<participants.length;j++){

                        const participantsInfo=participants[j].summonerName; 
                        const kills=participants[j].kills;
                        const deaths=participants[j].deaths;
                        const assists=participants[j].assists;
                        const item0=participants[j].item0;
                        const item1=participants[j].item1;
                        const item2=participants[j].item2;
                        const item3=participants[j].item3;
                        const item4=participants[j].item4;
                        const item5=participants[j].item5;
                        const item6=participants[j].item6;
                        const lane=participants[j].championName;
                        const killingSprees=participants[j].killingSprees;
                        const baronKills=participants[j].baronKills;
                        const bountyLevel=participants[j].bountyLevel;
                        const champExperience=participants[j].champExperience;
                        const champLevel=participants[j].champLevel;
                        const championId=participants[j].championId;
                        const championTransform=participants[j].championTransform;
                        const consumablesPurchased=participants[j].consumablesPurchased;
                        const damageDealtToBuildings=participants[j].damageDealtToBuildings;
                        const damageDealtToObjectives=participants[j].damageDealtToObjectives;
                        const damageDealtToTurrets=participants[j].damageDealtToTurrets;
                        const damageSelfMitigated=participants[j].damageSelfMitigated;
                        const detectorWardsPlaced=participants[j].detectorWardsPlaced;
                        const doubleKills=participants[j].doubleKills;
                        const dragonKills=participants[j].dragonKills;
                        const firstBloodAssist=participants[j].firstBloodAssist;
                        const firstBloodKill=participants[j].firstBloodKill;
                        const firstTowerAssist=participants[j].firstTowerAssist;
                        const firstTowerKill=participants[j].firstTowerKill;
                        const gameEndedInEarlySurrender=participants[j].gameEndedInEarlySurrender;
                        const gameEndedInSurrender=participants[j].gameEndedInSurrender;
                        const goldEarned=participants[j].goldEarned;
                        const goldSpent=participants[j].goldSpent;
                        const individualPosition=participants[j].individualPosition;
                        const inhibitorKills=participants[j].inhibitorKills;
                        const inhibitorTakedowns=participants[j].inhibitorTakedowns;
                        const inhibitorsLost=participants[j].inhibitorsLost;
                        const itemsPurchased=participants[j].itemsPurchased;
                        const largestCriticalStrike=participants[j].largestCriticalStrike;
                        const largestKillingSpree=participants[j].largestKillingSpree;
                        const largestMultiKill=participants[j].largestMultiKill;
                        const longestTimeSpentLiving=participants[j].longestTimeSpentLiving;
                        const magicDamageDealt=participants[j].magicDamageDealt;
                        const magicDamageDealtToChampions=participants[j].magicDamageDealtToChampions;
                        const magicDamageTaken=participants[j].magicDamageTaken;
                        const neutralMinionsKilled=participants[j].neutralMinionsKilled;
                        const nexusKills=participants[j].nexusKills;
                        const nexusLost=participants[j].nexusLost;
                        const nexusTakedowns=participants[j].nexusTakedowns;
                        const objectivesStolen=participants[j].objectivesStolen;
                        const champLeobjectivesStolenAssistsvel=participants[j].objectivesStolenAssists;
                        const participantId=participants[j].participantId;
                        const pentaKills=participants[j].pentaKills;
                        const physicalDamageDealt=participants[j].physicalDamageDealt;
                        const physicalDamageDealtToChampions=participants[j].physicalDamageDealtToChampions;
                        const physicalDamageTaken=participants[j].physicalDamageTaken;
                        const profileIcon=participants[j].profileIcon;
                        const puuid=participants[j].puuid;
                        const quadraKills=participants[j].quadraKills;
                        const riotIdName=participants[j].riotIdName;
                        const riotIdTagline=participants[j].riotIdTagline;
                        const role=participants[j].role;
                        const sightWardsBoughtInGame=participants[j].sightWardsBoughtInGame;
                        const spell1Casts=participants[j].spell1Casts;
                        const spell2Casts=participants[j].spell2Casts;
                        const spell3Casts=participants[j].spell3Casts;
                        const spell4Casts=participants[j].spell4Casts;
                        const summoner1Casts=participants[j].summoner1Casts;
                        const summoner1Id=participants[j].summoner1Id;
                        const summoner2Casts=participants[j].summoner2Casts;
                        const summoner2Id=participants[j].summoner2Id;
                        const summonerId=participants[j].summonerId;
                        const summonerLevel=participants[j].summonerLevel;
                        const summonerName=participants[j].summonerName;
                        const teamEarlySurrendered=participants[j].teamEarlySurrendered;
                        const teamId=participants[j].teamId;
                        const teamPosition=participants[j].teamPosition;
                        const timeCCingOthers=participants[j].timeCCingOthers;
                        const timePlayed=participants[j].timePlayed;
                        const totalDamageDealt=participants[j].totalDamageDealt;
                        const totalDamageDealtToChampions=participants[j].totalDamageDealtToChampions;
                        const totalDamageShieldedOnTeammates=participants[j].totalDamageShieldedOnTeammates;
                        const totalDamageTaken=participants[j].totalDamageTaken;
                        const totalHeal=participants[j].totalHeal;
                        const totalHealsOnTeammates=participants[j].totalHealsOnTeammates;
                        const totalMinionsKilled=participants[j].totalMinionsKilled;
                        const champLtotalTimeCCDealtevel=participants[j].totalTimeCCDealt;
                        const totalTimeSpentDead=participants[j].totalTimeSpentDead;
                        const totalUnitsHealed=participants[j].totalUnitsHealed;
                        const tripleKills=participants[j].tripleKills;
                        const trueDamageDealt=participants[j].trueDamageDealt;
                        const trueDamageDealtToChampions=participants[j].trueDamageDealtToChampions;
                        const trueDamageTaken=participants[j].trueDamageTaken;
                        const turretKills=participants[j].turretKills;
                        const turretTakedowns=participants[j].turretTakedowns;
                        const turretsLost=participants[j].turretsLost;
                        const unrealKills=participants[j].unrealKills;
                        const visionScore=participants[j].visionScore;
                        const visionWardsBoughtInGame=participants[j].visionWardsBoughtInGame;
                        const wardsKilled=participants[j].wardsKilled;
                        const wardsPlaced=participants[j].wardsPlaced;
                        const win=participants[j].win;



                        //console.log(participantsInfo,championName);
                    }
                    console.log(participants);
                    document.getElementById("demo").innerHTML = res; 
                    
                    }).catch(err => console.error(err));
                //
            }
            
            
         }).catch(err => console.error(err));

        //<--end of match history info-->
        


}).catch(err => console.error(err));



