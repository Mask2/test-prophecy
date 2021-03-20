/** @jsx jsx */
import React from 'react';
import { jsx, Input, Select, Textarea, Label, Radio, Grid, Checkbox } from 'theme-ui';
import { Link } from 'gatsby';
import ContactData from '/src/data/contactInfo.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

const FindourservicesPage = () => {
  return (
    <div sx={{ bg: 'blue.secondary' }}>
      <section
        sx={{ variant: 'texts.body2', mx: 'auto', maxWidth: 'maxWidth', py: 4, textAlign: 'center', color: 'white' }}
      >
        <p>
          我們十分樂意提供協助。
          <br />
          如有任何意見或查詢，歡迎透過以下方式與我們聯絡，我們會儘快回覆。
        </p>
        <div
          sx={{ display: 'flex', justifyContent: 'space-between', variant: 'texts.body2', fontWeight: 'bold', py: 10 }}
        >
          {ContactData.map((item, index) => (
            <div key={`${item.type}_${index}`} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <img src={item.icon} alt='' sx={{ height: 'icons.larger', width: 'icons.larger', display: 'block' }} />
              <div sx={{ variant: 'hovers.orange4' }}>
                <FontAwesomeIcon icon={faPhoneAlt} sx={{ mr: 2 }} />
                {item.phone}
              </div>
              <div sx={{ variant: 'hovers.orange3' }}>
                <FontAwesomeIcon icon={faEnvelope} sx={{ mr: 2 }} />
                {item.email}
              </div>
            </div>
          ))}
        </div>
      </section>
      <section sx={{ bg: 'blue.muted1', color: 'white' }}>
        <div sx={{ mx: 'auto', maxWidth: 'maxWidth', pb: 10 }}>
          <div sx={{ textAlign: 'center', variant: 'texts.h3', fontWeight: 'light', py: 6 }}>
            歡迎填寫以下資料，我們會安排專人盡快解答您的問題
          </div>
          <div sx={{ mt: 2 }}>
            <form action=''>
              <div sx={{ mb: 2 }}>
                <Input
                  name='name'
                  placeholder='姓名'
                  sx={{
                    variant: 'form.input',
                  }}
                />
              </div>
              <Grid sx={{ mb: 2 }} columns={[2, null, 1]}>
                <Select name='age' defaultValue='年龄' sx={{ variant: 'form.input' }}>
                  <option>年龄</option>
                  <option>20或以下</option>
                  <option>21-30</option>
                  <option>31-40</option>
                  <option>41-50</option>
                  <option>51-60</option>
                  <option>60+</option>
                </Select>
                <Grid columns={[3, null, 1]} sx={{ variant: 'texts.body2' }}>
                  <Label sx={{ alignItems: 'center' }}>性别</Label>
                  <Label sx={{ alignItems: 'center' }}>
                    <Radio name='sex' value='true' defaultChecked={true} />男
                  </Label>
                  <Label sx={{ alignItems: 'center' }}>
                    <Radio name='sex' value='false' defaultChecked={false} />女
                  </Label>
                </Grid>
              </Grid>
              <div sx={{ mb: 2 }}>
                <Input
                  name='phone'
                  placeholder='联络电话'
                  sx={{
                    variant: 'form.input',
                  }}
                />
              </div>
              <div sx={{ mb: 2 }}>
                <Input
                  name='email'
                  placeholder='电邮'
                  sx={{
                    variant: 'form.input',
                  }}
                />
              </div>
              <div sx={{ mb: 2 }}>
                <Input
                  name='query'
                  placeholder='查询事项'
                  sx={{
                    variant: 'form.input',
                  }}
                />
              </div>
              <div sx={{ mb: 2 }}>
                <Textarea name='query' placeholder='请输入您的查询' sx={{ variant: 'form.input' }} rows={4} />
              </div>
              <div sx={{ variant: 'texts.caption', display: 'flex', alignItems: 'center', mt: 2 }}>
                <Checkbox name='agree' defaultChecked={false} sx={{ mr: 1 }} />
                本人已明白及同意Take2 Health Limited 的網站於www.prophecy.health之
                <Link to='/docs/post1/' sx={{ color: 'white', variant: 'text.link2' }}>
                  網站私隱政策
                </Link>
                及
                <Link to='/docs/post2' sx={{ color: 'white', variant: 'text.link2' }}>
                  個人資料收集聲明
                </Link>
                。
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FindourservicesPage;
