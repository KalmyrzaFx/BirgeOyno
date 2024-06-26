import React, { Component } from 'react';
import { Grid, Card, CardContent, Chip } from '@material-ui/core';

import Moment from 'react-moment';
import isEmpty from '../../validation/is-empty';

class ProfileAbout extends Component{
    render(){
        const {profile} = this.props;
        
        const favoriteSport = profile.favoriteSport.map((sport, index) => (
          <Chip key={index} label={sport}/>
        ));
        
        return(
          <Grid className="marginB-2" container spacing={4}>
            <Grid item xs={12} sm={6}>
              <Card>
                <CardContent>
                  <p><strong>Имя:</strong> {profile.user.name}</p>
                  <p><strong>Откуда: </strong> {profile.location}</p>
                  <p><strong>Присоединился: </strong><Moment format="MM/DD/YYYY">{profile.date}</Moment></p>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Card>
                <CardContent>
                  <h3 >Любимые виды спорта</h3>
                  {favoriteSport}
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} xl={3}>
              <Card>
                <CardContent>
                  <h3>О себе</h3>
                  <p>{isEmpty(profile.bio) ? (<span>No bio</span>) : (<span>{profile.bio}</span>)}</p>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        );
    }
}

export default ProfileAbout;