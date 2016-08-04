#!/usr/bin/python
from sqlalchemy import create_engine, Table, Column, String
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from sqlalchemy.dialects.postgresql import ARRAY

#DB connection to postgresql
engine = create_engine("postgresql://postgres:scraper@localhost/scraper")
Session = sessionmaker(bind=engine)
session = Session()

Base = declarative_base()

#Base Story Class
class Story(Base):
    __tablename__  = "koan"
    title = Column(String(1000), nullable=False, primary_key=True)
    text = Column(String(10500), nullable=False)

Base.metadata.create_all(engine)

#Story get and set functions
def add_story(title, text):
    new_story = Story(title=title, text=text)
    session.add(new_story)
    session.commit()

def get_stories():
    return session.query(Base).all()
